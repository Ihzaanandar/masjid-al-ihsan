// js/script.js

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initTabs();
    initNavbarEffect();
});

// ============================================
// MOBILE MENU - Hamburger & Slide
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }
}

// ============================================
// TABS - Generic Tab System
// ============================================
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn, .program-tab-btn');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Find the container for these tabs (e.g. parent or a wrapper)
            const parent = tab.closest('.tabs-container') || document;
            const siblingTabs = parent.querySelectorAll(`.${tab.className.split(' ')[0]}`); // hacky way to get siblings by first class
            const targetId = tab.getAttribute('data-target');
            
            // Reset all sibling tabs
            siblingTabs.forEach(t => {
                t.classList.remove('bg-primary-50', 'text-primary-800', 'border-primary-200');
                t.classList.add('bg-transparent', 'text-slate-500', 'border-transparent', 'hover:text-slate-700', 'hover:bg-slate-50');
            });

            // Activate clicked tab
            tab.classList.remove('bg-transparent', 'text-slate-500', 'border-transparent', 'hover:text-slate-700', 'hover:bg-slate-50');
            tab.classList.add('bg-primary-50', 'text-primary-800', 'border-primary-200');

            // Hide all tab contents in this context
            const contents = parent.querySelectorAll('.tab-content, .program-content');
            contents.forEach(c => {
                c.classList.add('hidden');
                c.classList.remove('animate-fade-in-up');
            });

            // Show target content
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.remove('hidden');
                // Trigger reflow for animation
                void targetContent.offsetWidth;
                targetContent.classList.add('fade-in-up');
            }
        });
    });
}

// ============================================
// NAVBAR EFFECT - Shrink on scroll
// ============================================
function initNavbarEffect() {
    const navbar = document.getElementById('navbar');
    
    if (navbar) {
        // Run once on load to set initial state
        handleScroll();
        
        window.addEventListener('scroll', handleScroll);
        
        function handleScroll() {
            if (window.scrollY > 20) {
                navbar.classList.add('py-3', 'shadow-md');
                navbar.classList.remove('py-5');
            } else {
                navbar.classList.remove('py-3', 'shadow-md');
                navbar.classList.add('py-5');
            }
        }
    }
}