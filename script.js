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
            const projectType = getTrimmedValue(formData.get("projectType")) || "Website";
            const clientName = getTrimmedValue(formData.get("clientName"));
            const clientBusiness = getTrimmedValue(formData.get("clientBusiness"));
            const clientEmail = getTrimmedValue(formData.get("clientEmail"));
            const clientDetails = getTrimmedValue(formData.get("clientDetails"));
            const clientTimeline = getTrimmedValue(formData.get("clientTimeline")) || "Not specified";

            if (!clientName || !clientBusiness || !clientEmail || !clientDetails) {
                window.alert("Please complete all required fields before sending your request.");
                return;
            }

            if (!isValidEmail(clientEmail)) {
                window.alert("Please enter a valid email address.");
                return;
            }

            if (clientDetails.length > 1500) {
                window.alert("Project details are too long. Please keep them under 1500 characters.");
                return;
            }

            const subject = encodeURIComponent(`${projectType} request from ${clientBusiness}`);
            const body = encodeURIComponent(
                `Name: ${clientName}\n` +
                `Business or Team: ${clientBusiness}\n` +
                `Email: ${clientEmail}\n` +
                `Project Type: ${projectType}\n` +
                `Timeline: ${clientTimeline}\n\n` +
                `Project Details:\n${clientDetails}`
            );

            window.location.assign(`mailto:hrehenry29@gmail.com?subject=${subject}&body=${body}`);
        });
    }

    window.addEventListener("scroll", () => {
        if (!header) {
            return;
        }

        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    function getTrimmedValue(value) {
        return typeof value === "string" ? value.trim() : "";
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
});
