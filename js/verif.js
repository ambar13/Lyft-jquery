$(document).ready(function() {
  var $phone = $('#inputPhone');


  // validando el numero ingresado 
  $phone.on('input', function(event) {
    var $numPhone = $(this).val();
    if ($numPhone.length === 11) {
      $('#next').removeAttr('disabled');
    } else {
      $('#next').attr('disabled', true);
    }
  });

  // generar numero aleatorio
  function randomNum() {
    var resAlea = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    return resAlea;
  }
  $('#next').on('click', function() {
    alert('Tu código: ' + 'LAB-' + randomNum());
    window.location.href = 'views/sing2.html';
  });
});
  