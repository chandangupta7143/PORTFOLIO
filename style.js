document.addEventListener("DOMContentLoaded", function () {
    const contactBtn = document.getElementById("contactBtn");
    const contactInfo = document.getElementById("contactInfo");

    if (contactBtn) {
        contactBtn.addEventListener("click", function () {
            if (contactInfo.classList.contains("hidden")) {
                contactInfo.classList.remove("hidden");
                this.textContent = "Hide Contact Info";
            } else {
                contactInfo.classList.add("hidden");
                this.textContent = "Contact Me";
            }
        });
    }
});
