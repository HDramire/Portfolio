
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

            // If a profile was already selected (refresh), skip selection screen
            
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
            const profileMenuBtn = document.getElementById('profileMenuBtn');
            const profileMenu = document.getElementById('profileMenu');
            const switchProfileBtn = document.getElementById('switchProfileBtn');

            function closeProfileMenu() {
                if(profileMenu) profileMenu.classList.remove('show');
            }

            if(profileMenuBtn && profileMenu) {
                //Toogle Menu
                profileMenuBtn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    profileMenu.classList.toggle('show');
                });

                // close menu when clicking outside
                document.addEventListener('click', () => closeProfileMenu());

                // close menu with ESC key
                document.addEventListener('keydown', (e)=> {
                    if (e.key === 'Escape') closeProfileMenu();
                });
            }

            if(switchProfileBtn) {
                switchProfileBtn.addEventListener('click', () => {
                    closeProfileMenu();

                    // clear profile
                    localStorage.removeItem('selectedProfile');

                    // hide main content + header
                    mainContentPage.classList.remove('active');
                    header.classList.remove('visible');

                    // show "who is watching?" again
                    setTimeout(() => {
                        profileSelectionPage.classList.add('active');
                        window.scrollTo(0,0);
                    }, 200);
                });
            }
      
            
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