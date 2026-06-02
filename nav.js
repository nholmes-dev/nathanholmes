// Centralized Navigation Component
document.addEventListener("DOMContentLoaded", function() {
    const navHTML = `
        <nav>
            <a href="index.html">Home</a> | 
            <a href="cv.html">CV</a> | 
            <a href="projects.html">Projects</a> |
            <a href="contact.html">Contact</a>
        </nav>
    `;
    
    // Inject the navigation into the <header> element of the page
    const headerElement = document.querySelector('header');
    if (headerElement) {
        headerElement.innerHTML = navHTML;
    }
});
