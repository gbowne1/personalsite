document.addEventListener('DOMContentLoaded', function () {
    $('nav i').on('click', function () {  // the i element will not exist once the icon is rendered
        alert('You will never see this');
    });
});