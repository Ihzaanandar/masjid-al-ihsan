tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                serif: ['Playfair Display', 'serif'],
            },
            colors: {
                primary: {
                    50: '#f0fdf4',
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#10b981', // emerald-500
                    600: '#059669', // emerald-600
                    700: '#047857', // emerald-700
                    800: '#065f46', // emerald-800
                    900: '#064e3b', // emerald-900
                    950: '#022c22',
                },
                accent: {
                    50: '#fefce8',
                    100: '#fef9c3',
                    200: '#fef08a',
                    300: '#fde047',
                    400: '#facc15',
                    500: '#eab308',
                    600: '#ca8a04',
                    700: '#a16207',
                    800: '#854d0e',
                    900: '#713f12',
                    950: '#422006',
                },
                pearl: {
                    50: '#fcfcfb',
                    100: '#faf9f6',
                    200: '#f5f5f0',
                }
            },
            boxShadow: {
                'subtle': '0 4px 20px -4px rgba(0, 0, 0, 0.05)',
                'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
            }
        }
    }
}
