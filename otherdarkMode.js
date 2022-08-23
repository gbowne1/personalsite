$( ".change" ).on( "click", function () {
    if ($("body").hasClass("dark ")) {
        $("body ").removeClass("dark");
        $(".change").text("OFF");
    } else {
        $("body").addClass("dark")
        $(".change").text("ON")
    }
});

/* Snippit */

const btn = document.querySelector(".btn-toggle");

// listen for a button click event

btn.addEventListener("click", function() {
    //then toggle add/remove the 'dark-theme' to the body
    document.body.classList.toggle("dark-theme");
});

/* or */

const themeSwitch = document.querySelector('input');
themeSwitch.addEventListener('change', () => {
  document.classList.toggle('dark-theme');
});