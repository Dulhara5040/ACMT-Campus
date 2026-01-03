document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            
            // Toggle icon if we used font awesome (optional)
            // const icon = mobileMenuBtn.querySelector('i');
            // if(icon) icon.classList.toggle('fa-bars');
            // if(icon) icon.classList.toggle('fa-times');
        });
    }
    
    // Sticky navigation background on scroll (optional specific styling)
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 2px 15px rgba(0,0,0,0.2)";
        } else {
            header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
        }
    });
});
