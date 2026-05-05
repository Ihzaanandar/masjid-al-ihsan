// // js/script.js

// // --- KONFIGURASI TAILWIND (Agar warna custom terbaca) ---
// tailwind.config = {
//     theme: {
//         extend: {
//             colors: {
//                 emerald: {
//                     50: '#ecfdf5',
//                     600: '#059669',
//                     800: '#065f46',
//                     900: '#064e3b',
//                 }
//             }
//         }
//     }
// }

// // --- FUNGSI MENU MOBILE ---
// // Menunggu dokumen selesai dimuat
// document.addEventListener('DOMContentLoaded', () => {
    
//     const menuBtn = document.getElementById('menu-btn');
//     const mobileMenu = document.getElementById('mobile-menu');

//     // Jika tombol menu diklik, tampilkan/sembunyikan menu
//     if(menuBtn){
//         menuBtn.addEventListener('click', () => {
//             mobileMenu.classList.toggle('hidden');
//         });
//     }

//     // --- FUNGSI TAB HALAMAN PROFIL ---
//     // Logika untuk ganti tab Sejarah / Visi / Struktur
//     const tabs = document.querySelectorAll('.tab-btn');
//     const contents = document.querySelectorAll('.tab-content');

//     tabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // 1. Hapus warna aktif dari semua tombol
//             tabs.forEach(t => t.classList.remove('bg-emerald-600', 'text-white'));
//             tabs.forEach(t => t.classList.add('bg-white', 'text-emerald-600'));

//             // 2. Beri warna aktif pada tombol yang diklik
//             tab.classList.remove('bg-white', 'text-emerald-600');
//             tab.classList.add('bg-emerald-600', 'text-white');

//             // 3. Sembunyikan semua konten
//             contents.forEach(c => c.classList.add('hidden'));

//             // 4. Tampilkan konten yang sesuai dengan ID tombol
//             const targetId = tab.getAttribute('data-target');
//             document.getElementById(targetId).classList.remove('hidden');
//         });
//     });
// });

// // Tambahkan ini di dalam script.js yang sudah ada
// document.addEventListener('DOMContentLoaded', () => {
//     // Fungsi Tab untuk Program (Kegiatan & Pembangunan)
//     const programTabs = document.querySelectorAll('.program-tab-btn');
//     const programContents = document.querySelectorAll('.program-content');

//     programTabs.forEach(tab => {
//         tab.addEventListener('click', () => {
//             // Reset semua tombol
//             programTabs.forEach(t => t.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg'));
//             programTabs.forEach(t => t.classList.add('bg-white', 'text-emerald-600'));

//             // Aktifkan tombol yang diklik
//             tab.classList.remove('bg-white', 'text-emerald-600');
//             tab.classList.add('bg-emerald-600', 'text-white', 'shadow-lg');

//             // Sembunyikan semua konten
//             programContents.forEach(c => c.classList.add('hidden'));

//             // Tampilkan konten target
//             const target = tab.getAttribute('data-target');
//             document.getElementById(target).classList.remove('hidden');
//         });
//     });
// });

// js/script.js

// ============================================
// KONFIGURASI TAILWIND
// ============================================
tailwind.config = {
    theme: {
        extend: {
            colors: {
                emerald: {
                    50: '#ecfdf5',
                    100: '#d1fae5',
                    200: '#a7f3d0',
                    300: '#6ee7b7',
                    400: '#34d399',
                    500: '#10b981',
                    600: '#059669',
                    700: '#047857',
                    800: '#065f46',
                    900: '#064e3b',
                }
            },
            animation: {
                'fade-in': 'fadeIn 0.6s ease-out',
                'slide-up': 'slideUp 0.6s ease-out',
                'slide-down': 'slideDown 0.4s ease-out',
                'bounce-soft': 'bounceSoft 2s infinite',
                'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(20px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                slideDown: {
                    '0%': { transform: 'translateY(-10px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                bounceSoft: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' }
                }
            }
        }
    }
}

// ============================================
// FUNGSI UTAMA - DIJALANKAN SAAT HALAMAN SIAP
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    
    // Inisialisasi semua fungsi
    initMobileMenu();
    initProfileTabs();
    initProgramTabs();
    initScrollAnimations();
    initParallaxEffect();
    initCounterAnimation();
    initLazyLoading();
    initSmoothScroll();
    initNavbarEffect();
    initCardInteractions();
    
});

// ============================================
// MOBILE MENU - Hamburger & Animasi Slide
// ============================================
function initMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            const isHidden = mobileMenu.classList.contains('hidden');
            
            if (isHidden) {
                // Tampilkan menu dengan animasi
                mobileMenu.classList.remove('hidden');
                mobileMenu.classList.add('animate-slide-down');
                menuBtn.innerHTML = '<i class="fas fa-times text-2xl"></i>';
            } else {
                // Sembunyikan menu dengan animasi
                mobileMenu.classList.add('opacity-0');
                setTimeout(() => {
                    mobileMenu.classList.add('hidden');
                    mobileMenu.classList.remove('opacity-0', 'animate-slide-down');
                }, 300);
                menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            }
        });

        // Tutup menu saat link diklik
        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                menuBtn.innerHTML = '<i class="fas fa-bars text-2xl"></i>';
            });
        });
    }
}

// ============================================
// PROFILE TABS - Tab Sejarah/Visi/Struktur
// ============================================
function initProfileTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Reset semua tab
            tabs.forEach(t => {
                t.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-105');
                t.classList.add('bg-white', 'text-emerald-600');
            });

            // Aktifkan tab yang diklik dengan efek
            tab.classList.remove('bg-white', 'text-emerald-600');
            tab.classList.add('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-105');

            // Sembunyikan semua konten dengan fade out
            contents.forEach(c => {
                c.classList.add('opacity-0');
                setTimeout(() => c.classList.add('hidden'), 200);
            });

            // Tampilkan konten target dengan fade in
            const targetId = tab.getAttribute('data-target');
            const targetContent = document.getElementById(targetId);
            setTimeout(() => {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('animate-up');
                setTimeout(() => targetContent.classList.remove('opacity-0'), 50);
            }, 250);
        });
    });
}

// ============================================
// PROGRAM TABS - Tab Kegiatan & Pembangunan
// ============================================
function initProgramTabs() {
    const programTabs = document.querySelectorAll('.program-tab-btn');
    const programContents = document.querySelectorAll('.program-content');

    programTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Reset semua tombol
            programTabs.forEach(t => {
                t.classList.remove('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-105', 'border-emerald-600');
                t.classList.add('bg-white', 'text-emerald-600', 'border-gray-200');
            });

            // Aktifkan tombol dengan efek mewah
            tab.classList.remove('bg-white', 'text-emerald-600', 'border-gray-200');
            tab.classList.add('bg-emerald-600', 'text-white', 'shadow-lg', 'scale-105', 'border-emerald-600');

            // Transisi konten
            programContents.forEach(c => {
                c.classList.add('opacity-0', 'scale-95');
                setTimeout(() => c.classList.add('hidden'), 200);
            });

            // Tampilkan konten dengan animasi
            const target = tab.getAttribute('data-target');
            const targetContent = document.getElementById(target);
            setTimeout(() => {
                targetContent.classList.remove('hidden');
                targetContent.classList.add('animate-scale');
                setTimeout(() => {
                    targetContent.classList.remove('opacity-0', 'scale-95');
                }, 50);
            }, 250);
        });
    });
}

// ============================================
// SCROLL ANIMATIONS - Fade In saat Scroll
// ============================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-up');
                    entry.target.style.opacity = '1';
                }, index * 100);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observasi elemen yang perlu animasi
    const animatedElements = document.querySelectorAll('.card-hover, .card-premium, section > div, article, .program-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        observer.observe(el);
    });
}

// ============================================
// PARALLAX EFFECT - Efek Kedalaman pada Hero
// ============================================
function initParallaxEffect() {
    const heroSection = document.querySelector('.hero-section, .bg-islamic-pattern');
    
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            heroSection.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    }
}

// ============================================
// COUNTER ANIMATION - Animasi Angka Statistik
// ============================================
function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target') || counter.innerText);
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const updateCounter = () => {
                        current += increment;
                        if (current < target) {
                            counter.innerText = Math.ceil(current);
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.innerText = target;
                        }
                    };
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });

        observer.observe(counter);
    });
}

// ============================================
// LAZY LOADING - Load Gambar saat Terlihat
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.classList.add('animate-fade-in');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// SMOOTH SCROLL - Scroll Halus ke Anchor
// ============================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// NAVBAR EFFECT - Navbar Transparan jadi Solid
// ============================================
function initNavbarEffect() {
    const navbar = document.querySelector('nav, header');
    
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                navbar.classList.add('shadow-lg', 'bg-white');
                navbar.classList.remove('bg-transparent');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-white');
                navbar.classList.add('bg-transparent');
            }
        });
    }
}

// ============================================
// CARD INTERACTIONS - Efek 3D pada Card
// ============================================
function initCardInteractions() {
    const cards = document.querySelectorAll('.card-hover, .card-premium');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Fungsi untuk menambah ripple effect pada button
function addRippleEffect(button) {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Terapkan ripple effect ke semua tombol
document.querySelectorAll('.btn-primary, button').forEach(btn => {
    addRippleEffect(btn);
});