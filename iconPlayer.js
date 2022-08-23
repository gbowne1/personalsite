document.addEventListener('DOMContentLoaded', function () {
    $('nav i').on('click', function () {  // the i element will not exist once the icon is rendered
      alert('You will never see this');
    });
  });

/* document.addEventListener('DOMContentLoaded', function () {
    $('nav').on('click', '[data-fa-i2svg]', function () {
      alert('You clicked the icon itself');
    });
}); */