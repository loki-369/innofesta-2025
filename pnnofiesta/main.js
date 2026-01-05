
// Import Styles
import './style.css';
import { initSnitch } from './snitch3d.js';

// Init Snitch
initSnitch();

// Custom Cursor
const cursor = document.getElementById('cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Loader
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader-container');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 1000);
    }, 1500);
});

// Mobile Menu Logic
const mvBtn = document.getElementById('mobile-menu-toggle');
const mvMenu = document.getElementById('mobile-menu-dropdown');
if (mvBtn) {
    mvBtn.addEventListener('click', () => {
        mvBtn.classList.toggle('active');
        mvMenu.classList.toggle('active');
    });
    document.querySelectorAll('.mobile-menu-dropdown a').forEach(l => {
        l.addEventListener('click', () => {
            mvBtn.classList.remove('active');
            mvMenu.classList.remove('active');
        });
    });
}
