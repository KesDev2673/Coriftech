document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.menu');
    const body = document.body;

    // Toggle menu visibility
    const toggleMenu = () => {
        const isOpen = menu.classList.contains('open');

        if (isOpen) {
            // Start the closing animation
            menu.style.opacity = '0'; // Fade out first
            setTimeout(() => {
                menu.style.left = '-100%'; // Slide out after fading
            }, 150); // Start sliding out after fading begins, adjust for smoother effect

            setTimeout(() => {
                menu.classList.remove('open'); // Final step: remove class after sliding out
            }, 300); // Match the duration of the transition
        } else {
            menu.classList.add('open'); // Add the open class
            menu.style.left = '0'; // Make sure to trigger the slide-in immediately
            menu.style.opacity = '1'; // Fade in as it slides in
        }

        body.classList.toggle('menu-active', !isOpen); // Toggle scrolling
        hamburger.setAttribute('aria-expanded', !isOpen); // Update ARIA attribute
        menu.setAttribute('aria-hidden', isOpen); // Update ARIA attribute
    };

    // Open/close menu on hamburger click
    hamburger.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent event from bubbling to `document`
        toggleMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (menu.classList.contains('open') && !menu.contains(event.target)) {
            toggleMenu();
        }
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && menu.classList.contains('open')) {
            toggleMenu();
        }
    });
});
