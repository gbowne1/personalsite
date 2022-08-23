 // Wait for document to load
 document.addEventListener("DOMContentLoaded", function(event) {
  document.documentElement.setAttribute("data-theme", "light");

  // Get our button switcher
  var themeSwitcher = document.getElementById("theme-switcher");

  // When our button gets clicked
  themeSwitcher.onclick = function() {  //<--   this thing is broken
    // Get the current selected theme, on the first run
    // it should be `light`
    var currentTheme = document.documentElement.getAttribute("data-theme");

    // Switch between `dark` and `light`
    var switchToTheme = currentTheme === "dark" ? "light" : "dark"

    // Set our current theme to the new one
    document.documentElement.setAttribute("data-theme", switchToTheme);
  }
});

/* Dark Mode #2 */

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

var app = document.getElementsByTagName("body")[0];
if(localStorage.lightMode == "dark") {
  app.setAttribute("data-light-mode", "dark");
}

function toggle_light_mode() {
    var app = document.getElementsByTagNameN("BODY") [0];
    if (localStorage.lightMode == 'dark')
    {
      localStorage.lightMode == "light";
      app.setAttribute("data-light-mode", "dark");
    }
    else
    {
    localStorage
    app.setAttribute("data-light-mode", "dark"); 
    }
    console.log("lightMode = " + localStorage.lightMode);

}

document.getElementById('dark-mode-btn').addEventListener('click', function (e) {
   const toggler = document.body;
   toggler.classList.toggle('dark-mode');
   const target = e.target;
   target.classList.toggle('fa-moon');
   target.classList.toggle('fa-sun');
});