//wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function(){
    //Mobile menu toggle
    const hamburger = this.documentElement.querySelector('.hamburger');
    const navMenu = this.documentElement.querySelector('.nav-menu');

    if(hamburger){
        hamburger.addEventListener('click' , function(){
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    //Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function(){
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));

    //smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
         anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;
    
    // Available themes
    const themes = ['default', 'dark-blue', 'dark-purple', 'dark-green'];
    let currentThemeIndex = 0;
    
    themeToggle.addEventListener('click', function() {
        // Cycle through themes
        currentThemeIndex = (currentThemeIndex + 1) % themes.length;
        const nextTheme = themes[currentThemeIndex];
        
        // Remove all theme classes
        body.classList.remove('default-theme', 'dark-blue-theme', 'dark-purple-theme', 'dark')
    });
})