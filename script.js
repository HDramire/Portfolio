document.addEventListener("DOMContentLoaded", () => {
    const profiles = document.querySelectorAll(".profile");
    const header = document.getElementById("header");
    const profileMenuBtn = document.getElementById("profileMenuBtn");
    const profileMenu = document.getElementById("profileMenu");
    const switchProfileBtn = document.getElementById("switchProfileBtn");
    const clientRequestForm = document.getElementById("clientRequestForm");

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", (event) => {
            const target = document.querySelector(anchor.getAttribute("href"));

            if (!target) {
                return;
            }

            event.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
            closeProfileMenu();
        });
    });

    function closeProfileMenu() {
        if (profileMenu) {
            profileMenu.classList.remove("show");
        }
    }

    profiles.forEach((profile) => {
        profile.addEventListener("click", (event) => {
            const profileType = profile.getAttribute("data-profile") || "";
            const nextPage = profile.getAttribute("data-href");

            if (profileType) {
                localStorage.setItem("selectedProfile", profileType);
            }

            if (nextPage) {
                event.preventDefault();
                window.location.href = nextPage;
            }
        });
    });

    if (profileMenuBtn && profileMenu) {
        profileMenuBtn.addEventListener("click", (event) => {
            event.stopPropagation();
            profileMenu.classList.toggle("show");
        });

        document.addEventListener("click", () => closeProfileMenu());
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                closeProfileMenu();
            }
        });
    }

    if (switchProfileBtn) {
        switchProfileBtn.addEventListener("click", () => {
            localStorage.removeItem("selectedProfile");
            closeProfileMenu();
            window.location.href = "../index.html";
        });
    }

    if (clientRequestForm) {
        clientRequestForm.addEventListener("submit", (event) => {
            event.preventDefault();

            const formData = new FormData(clientRequestForm);
            const projectType = formData.get("projectType") || "Website";
            const clientName = formData.get("clientName") || "";
            const clientBusiness = formData.get("clientBusiness") || "";
            const clientEmail = formData.get("clientEmail") || "";
            const clientDetails = formData.get("clientDetails") || "";
            const clientTimeline = formData.get("clientTimeline") || "Not specified";
            const subject = encodeURIComponent(`${projectType} request from ${clientBusiness}`);
            const body = encodeURIComponent(
                `Name: ${clientName}\n` +
                `Business or Team: ${clientBusiness}\n` +
                `Email: ${clientEmail}\n` +
                `Project Type: ${projectType}\n` +
                `Timeline: ${clientTimeline}\n\n` +
                `Project Details:\n${clientDetails}`
            );

            window.location.href = `mailto:hrehenry29@gmail.com?subject=${subject}&body=${body}`;
        });
    }

    window.addEventListener("scroll", () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 50);
    });
});
