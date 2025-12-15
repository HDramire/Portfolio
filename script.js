
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
        document.addEventListener('DOMContentLoaded', function() {
            // Set up profile selection
            const profiles = document.querySelectorAll('.profile');
            const profileSelectionPage = document.getElementById('profile-selection-page');
            const mainContentPage = document.getElementById('main-content-page');
            const header = document.getElementById('header');
            
            profiles.forEach(profile => {
                profile.addEventListener('click', function() {
                    // Get the selected profile type
                    const profileType = this.getAttribute('data-profile');
                    
                    // Fade out profile selection
                    profileSelectionPage.classList.remove('active');
                    
                    // After fade out completes, fade in main content
                    setTimeout(() => {
                        mainContentPage.classList.add('active');
                        
                        // Show header after a slight delay
                        setTimeout(() => {
                            header.classList.add('visible');
                        }, 300);
                        
                        // Store the selected profile in localStorage
                        localStorage.setItem('selectedProfile', profileType);
                    }, 800);
                });
            });
            
            // Check if a profile was already selected (for page refresh)
      
            
            // Simple scroll effect for header
            window.addEventListener('scroll', function() {
                if (header) {
                    if (window.scrollY > 50) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                }
            });
        });