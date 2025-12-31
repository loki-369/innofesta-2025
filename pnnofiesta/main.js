import './style.css'
import { initSnitch } from './snitch3d.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

// Register plugins
gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {

    // 1. Initialize Smooth Scroll (Lenis)
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
    });

    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf);

    // 2. Initialize 3D Snitch
    initSnitch();

    // 3. GSAP Animations

    // Hero Title Parallax
    gsap.to(".hero-title", {
        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom top",
            scrub: true
        },
        y: 200, // Move title down slower than scroll
        opacity: 0.5
    });

    // Marquee rotation on scroll
    gsap.to(".marquee-section", {
        scrollTrigger: {
            trigger: ".marquee-section",
            start: "top center",
            end: "bottom top",
            scrub: 1
        },
        rotate: 2,
        scale: 1.1
    });

    // Bento Grid Reveal
    const boxes = document.querySelectorAll('.bento-box');
    boxes.forEach((box, i) => {
        gsap.from(box, {
            scrollTrigger: {
                trigger: box,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 100,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power3.out"
        });
    });

    // Custom Cursor Logic (Wand)
    const wand = document.getElementById('magic-wand');
    const light = document.querySelector('.cursor-light');

    // Move wand and light
    document.addEventListener('mousemove', (e) => {
        // Instant movement for wand (no lag for cursor)
        gsap.set(wand, { x: e.clientX, y: e.clientY });

        // Slight lag for the lumos light
        gsap.to(light, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.15
        });
    });

    // Hover Effects (Swap to glowing wand)
    const interactiveElements = document.querySelectorAll('a, button, .bento-box');

    interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            wand.src = '/wand-final-glow.png';
            wand.classList.add('active');
            gsap.to(wand, { rotation: 15, duration: 0.2 });
        });
        el.addEventListener('mouseleave', () => {
            wand.src = '/wand-final.png';
            wand.classList.remove('active');
            gsap.to(wand, { rotation: 0, duration: 0.2 });
        });
    });

    console.log("Heavy Build Loaded ⚡");
});
