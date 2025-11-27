// ===========================
// Simple Resume Website JavaScript
// Minimal interactions for a clean experience
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    
    console.log('Resume website loaded successfully!');
    
    // ===========================
    // Download Resume as PDF
    // ===========================
    
    const downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            // Set document title for PDF filename
            const originalTitle = document.title;
            document.title = 'Ashfaque_Android_Flutter_4yrs_30_np';
            
            // Trigger print dialog (user can save as PDF)
            window.print();
            
            // Restore original title after a short delay
            setTimeout(function() {
                document.title = originalTitle;
            }, 1000);
            
            console.log('Download PDF triggered');
        });
        
        // Keyboard accessibility
        downloadBtn.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }
    
    // ===========================
    // Dark Mode / Light Mode Toggle
    // ===========================
    
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    htmlElement.setAttribute('data-theme', currentTheme);
    
    // Toggle theme function
    function toggleTheme() {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a subtle animation class
        document.body.style.transition = 'all 0.3s ease';
        
        console.log(`Theme switched to: ${newTheme}`);
    }
    
    // Add click event listener to theme toggle button
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
        
        // Keyboard accessibility for theme toggle
        themeToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleTheme();
            }
        });
    }
    
    // Detect system theme preference changes
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        
        darkModeQuery.addEventListener('change', function(e) {
            // Only auto-switch if user hasn't manually set a preference
            if (!localStorage.getItem('theme')) {
                const newTheme = e.matches ? 'dark' : 'light';
                htmlElement.setAttribute('data-theme', newTheme);
            }
        });
    }
    
    // ===========================
    // Smooth Scrolling for Anchor Links
    // ===========================
    
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle anchor links (not just #)
            if (href && href.length > 1) {
                const targetElement = document.querySelector(href);
                
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // ===========================
    // External Links - Open in New Tab
    // ===========================
    
    const externalLinks = document.querySelectorAll('a[target="_blank"]');
    
    externalLinks.forEach(link => {
        // Add security attributes for external links
        if (!link.hasAttribute('rel')) {
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // ===========================
    // Print Optimization
    // ===========================
    
    // Detect when user is printing
    window.addEventListener('beforeprint', function() {
        document.body.classList.add('printing');
    });
    
    window.addEventListener('afterprint', function() {
        document.body.classList.remove('printing');
    });
    
    // ===========================
    // Keyboard Accessibility
    // ===========================
    
    // Handle keyboard navigation for links
    const allLinks = document.querySelectorAll('a');
    
    allLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            // Enter key activates the link
            if (e.key === 'Enter') {
                this.click();
            }
        });
    });
    
    // ===========================
    // Skill Tags Interaction
    // ===========================
    
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        // Optional: Add click handler if you want to make skills clickable
        tag.addEventListener('click', function() {
            // You could add functionality here, like filtering or highlighting
            // For now, just a subtle interaction
            this.style.transform = 'scale(1.05)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        });
    });
    
    // ===========================
    // Contact Links - Track Clicks (Optional)
    // ===========================
    
    const contactLinks = document.querySelectorAll('.contact-item a');
    
    contactLinks.forEach(link => {
        link.addEventListener('click', function() {
            const linkType = this.getAttribute('href').split(':')[0];
            console.log(`Contact link clicked: ${linkType}`);
            // You could add analytics tracking here if needed
        });
    });
    
    // ===========================
    // Responsive Behavior
    // ===========================
    
    let resizeTimer;
    
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            // Handle any responsive adjustments if needed
            const width = window.innerWidth;
            
            if (width <= 768) {
                document.body.classList.add('mobile-view');
            } else {
                document.body.classList.remove('mobile-view');
            }
        }, 250);
    });
    
    // Set initial view class
    if (window.innerWidth <= 768) {
        document.body.classList.add('mobile-view');
    }
    
    // ===========================
    // Copy Email to Clipboard (Optional Enhancement)
    // ===========================
    
    const emailLink = document.querySelector('a[href^="mailto:"]');
    
    if (emailLink) {
        emailLink.addEventListener('contextmenu', function(e) {
            // Right-click handler - could add "Copy email" functionality
            // This is optional and doesn't interfere with normal behavior
        });
    }
    
    // ===========================
    // Lazy Loading for Performance (if images are added)
    // ===========================
    
    if ('IntersectionObserver' in window) {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }
    
    // ===========================
    // Performance Monitoring (Optional)
    // ===========================
    
    if (window.performance && window.performance.timing) {
        window.addEventListener('load', function() {
            const loadTime = window.performance.timing.domContentLoadedEventEnd - 
                           window.performance.timing.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        });
    }
    
    // ===========================
    // Focus Management for Accessibility
    // ===========================
    
    // Add visible focus indicators for keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-nav');
    });
    
});

// ===========================
// Service Worker Registration (for PWA - Optional)
// ===========================

// Uncomment if you want to add PWA capabilities
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(function(error) {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/
