import * as THREE from 'three';

export function initSnitch() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // SCENE
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 10;

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // LIGHTING
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x000000, 1.5);
    scene.add(hemiLight);

    const dirLight = new THREE.DirectionalLight(0xffd700, 2.5); // Strong key light for reflections
    dirLight.position.set(5, 5, 10);
    scene.add(dirLight);

    const backLight = new THREE.DirectionalLight(0xffffff, 1.0); // Rim light for detail
    backLight.position.set(-5, 5, -10);
    scene.add(backLight);

    // SNITCH GROUP
    const snitchGroup = new THREE.Group();
    scene.add(snitchGroup);

    // --- GLOW HALO (BACKGROUND) ---
    const spriteMaterial = new THREE.SpriteMaterial({
        map: new THREE.TextureLoader().load('https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/glow.png'),
        color: 0xffaa00,
        transparent: true,
        blending: THREE.AdditiveBlending,
        opacity: 0.5
    });
    const glowSprite = new THREE.Sprite(spriteMaterial);
    glowSprite.scale.set(1.5, 1.5, 1.0); // Large outer ring
    glowSprite.renderOrder = 0; // Render FIRST (Behind)
    snitchGroup.add(glowSprite);

    // BODY (DETAIL RESTORED)
    const geometry = new THREE.SphereGeometry(0.12, 64, 64);
    const textureLoader = new THREE.TextureLoader();
    const bodyTexture = textureLoader.load('/snitch-real.png');

    const material = new THREE.MeshStandardMaterial({
        color: 0xc5a059,
        map: bodyTexture,
        metalness: 1.0,  // Full Metal
        roughness: 0.25, // Sharp reflections
        emissive: 0x221100, // Very subtle inner heat, DOES NOT wash out texture
        emissiveIntensity: 0.2,
        envMapIntensity: 1.0
    });
    const sphere = new THREE.Mesh(geometry, material);
    sphere.renderOrder = 1; // Render AFTER glow (On Top)
    snitchGroup.add(sphere);

    // WINGS
    const wingShape = new THREE.Shape();
    wingShape.moveTo(0, 0);
    wingShape.bezierCurveTo(0.2, 0.2, 0.5, 0.8, 1.5, 0.2);
    wingShape.bezierCurveTo(0.8, 0.1, 0.2, 0.05, 0, 0);

    const wingGeom = new THREE.ShapeGeometry(wingShape);
    const wingMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.4,
        metalness: 0.8,
        roughness: 0.2
    });

    const leftWing = new THREE.Mesh(wingGeom, wingMat);
    leftWing.position.set(-0.1, 0.05, 0);
    leftWing.rotation.z = Math.PI - 0.2;
    leftWing.scale.set(0.8, 0.8, 0.8);
    leftWing.renderOrder = 1; // Wings also on top

    const leftWingPivot = new THREE.Group();
    leftWingPivot.add(leftWing);
    snitchGroup.add(leftWingPivot);

    const rightWing = new THREE.Mesh(wingGeom, wingMat);
    rightWing.position.set(0.1, 0.05, 0);
    rightWing.rotation.z = -(Math.PI - 0.2);
    rightWing.rotation.y = Math.PI;
    rightWing.scale.set(0.8, 0.8, 0.8);
    rightWing.renderOrder = 1;

    const rightWingPivot = new THREE.Group();
    rightWingPivot.add(rightWing);
    snitchGroup.add(rightWingPivot);

    // --- DARK SMOKE TRAIL ---
    const particleCount = 400;
    const particles = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);
    const angles = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = 9999;
        sizes[i] = 0;
        opacities[i] = 0;
        angles[i] = Math.random() * Math.PI;
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particles.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    particles.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));
    particles.setAttribute('angle', new THREE.BufferAttribute(angles, 1));

    const smokeTexture = textureLoader.load('/smoke.png');

    const particleMaterial = new THREE.ShaderMaterial({
        uniforms: {
            color: { value: new THREE.Color(0x050505) },
            pointTexture: { value: smokeTexture }
        },
        vertexShader: `
            attribute float size;
            attribute float opacity;
            attribute float angle;
            varying float vOpacity;
            varying float vAngle;
            void main() {
                vOpacity = opacity;
                vAngle = angle;
                vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `,
        fragmentShader: `
            uniform vec3 color;
            uniform sampler2D pointTexture;
            varying float vOpacity;
            varying float vAngle;
            
            void main() {
                float c = cos(vAngle);
                float s = sin(vAngle);
                vec2 centered = gl_PointCoord - 0.5;
                vec2 rotated = vec2(
                    centered.x * c - centered.y * s,
                    centered.x * s + centered.y * c
                ) + 0.5;

                vec4 texColor = texture2D(pointTexture, rotated);
                gl_FragColor = vec4(color, vOpacity * texColor.r); 
            }
        `,
        blending: THREE.NormalBlending,
        depthWrite: false,
        transparent: true
    });

    const particleSystem = new THREE.Points(particles, particleMaterial);
    scene.add(particleSystem);
    particleSystem.renderOrder = -1; // TRAIL BEHIND EVERYTHING

    const trailData = [];
    for (let i = 0; i < particleCount; i++) {
        trailData.push({
            age: 0,
            life: 0,
            vx: 0, vy: 0, vz: 0,
            growth: 0
        });
    }

    let currentParticleIndex = 0;

    // ANIMATION
    let time = 0;
    const targetPos = new THREE.Vector3(0, 0, 0);
    const velocity = new THREE.Vector3();

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    function animate() {
        requestAnimationFrame(animate);
        time += 0.05;

        // Pulse the glow
        glowSprite.material.opacity = 0.4 + Math.sin(time * 3) * 0.1;

        leftWingPivot.rotation.x = Math.sin(time * 20);
        rightWingPivot.rotation.x = Math.sin(time * 20 + Math.PI);

        if (Math.random() > 0.99) {
            targetPos.set(
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 4,
                (Math.random() - 0.5) * 3
            );
        }

        const bobX = Math.sin(time) * 0.5;
        const bobY = Math.cos(time * 1.5) * 0.5;
        velocity.x += ((targetPos.x + bobX) - snitchGroup.position.x) * 0.005;
        velocity.y += ((targetPos.y + bobY) - snitchGroup.position.y) * 0.005;
        velocity.z += (targetPos.z - snitchGroup.position.z) * 0.005;
        velocity.multiplyScalar(0.96);

        snitchGroup.position.add(velocity);

        const lookTarget = snitchGroup.position.clone().add(velocity.clone().multiplyScalar(10));
        snitchGroup.lookAt(lookTarget);
        sphere.rotation.x += 0.1;

        // SPAWN
        for (let k = 0; k < 2; k++) {
            const idx = currentParticleIndex;
            const p = particleSystem.geometry.attributes.position.array;
            const s = particleSystem.geometry.attributes.size.array;
            const o = particleSystem.geometry.attributes.opacity.array;
            const a = particleSystem.geometry.attributes.angle.array;

            p[idx * 3] = snitchGroup.position.x;
            p[idx * 3 + 1] = snitchGroup.position.y;
            p[idx * 3 + 2] = snitchGroup.position.z;

            a[idx] = Math.random() * Math.PI * 2;

            trailData[idx].vx = (Math.random() - 0.5) * 0.01;
            trailData[idx].vy = (Math.random() - 0.5) * 0.01;
            trailData[idx].vz = (Math.random() - 0.5) * 0.01;

            trailData[idx].age = 0;
            trailData[idx].life = 2.0 + Math.random();
            trailData[idx].growth = 0.02 + Math.random() * 0.02;

            s[idx] = 1.0 + Math.random();
            o[idx] = 0.6;

            currentParticleIndex = (currentParticleIndex + 1) % particleCount;
        }

        // UPDATE
        const p = particleSystem.geometry.attributes.position.array;
        const s = particleSystem.geometry.attributes.size.array;
        const o = particleSystem.geometry.attributes.opacity.array;

        for (let i = 0; i < particleCount; i++) {
            if (o[i] > 0) {
                p[i * 3] += trailData[i].vx;
                p[i * 3 + 1] += trailData[i].vy;
                p[i * 3 + 2] += trailData[i].vz;

                trailData[i].age += 0.02;
                const lifeRatio = trailData[i].age / trailData[i].life;

                s[i] += trailData[i].growth;
                o[i] = 0.6 * (1.0 - lifeRatio);

                if (lifeRatio >= 1) {
                    o[i] = 0;
                    p[i * 3] = 9999;
                }
            }
        }

        particleSystem.geometry.attributes.position.needsUpdate = true;
        particleSystem.geometry.attributes.size.needsUpdate = true;
        particleSystem.geometry.attributes.opacity.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}
