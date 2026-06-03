// nav.js
const headerTemplate = `
  <header class="site-header">
    <div class="header-logo">
      <a href="/">
        <img src="images/logo.png" alt="NH Logo" id="main-logo">
      </a>
    </div>
    <nav class="header-nav">
      <a href="/">Home</a> | 
      <a href="/cv">CV</a> | 
      <a href="/projects">Projects</a> | 
      <a href="/contact">Contact</a>
    </nav>
  </header>
`;

// Injects the layout precisely where the script tag is called in your HTML files
document.currentScript.insertAdjacentHTML('afterend', headerTemplate);
