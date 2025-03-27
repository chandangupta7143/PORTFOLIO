document.getElementById('contactBtn').addEventListener('click', function() {
    const contactInfo = document.getElementById('contactInfo');
    if (contactInfo.classList.contains('hidden')) {
        contactInfo.classList.remove('hidden');
        this.textContent = 'Hide Contact Info';
    } else {
        contactInfo.classList.add('hidden');
        this.textContent = 'Contact Me';
    }
});