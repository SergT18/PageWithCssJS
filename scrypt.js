var errorNull = true, errorMail = true, errorPass = true;
var checkNull = function(){
  $(this).val($(this).val().trim());
  if ($(this).val() =="") {
    $(this).notify("Поле нужно заполнить", "error");
    $(this).addClass("errtextbox");
    errorNull = true;
  } else {
    errorNull = false;
    $(this).removeClass("errtextbox");
  }
};

$("#name").focusout(checkNull);
$("#info").focusout(checkNull);

$("#name").keyup(function(){
  var value = $(this).val();
  if (value.length > 24){ 
    $(this).notify("Максимум 25 символов", "info");
    $(this).val(value.slice(0,24));
  }
});

$("#mail").focusout(function(){
  var value = $(this).val().trim();
  if (value.search(/^[a-z0-9]{3,}@test\.ru$/i) != 0) {
    $(this).notify("E-mail введён некорректно", "error");
    $(this).addClass("errtextbox");
    errorMail = true;
  } else { 
    $(this).removeClass("errtextbox");
    errorMail = false;
  }
});

$("#password1").focusout(function(){
  var value = $(this).val();
  if (value.length <= 4) { 
    $(this).notify("Минимум 5 символов", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    if (value.length > 9) {
      $(this).notify("Миксимум 10 символов", "error");
      $(this).addClass("errtextbox");
      errorPass = true;
    } else {
      errorPass = false;
      $(this).removeClass("errtextbox");
    }
  }
});

$("#password2").focusout(function(){
  var value = $(this).val();
  if (value != $("#password1").val()) {
    $(this).notify("Пароль не совпадает", "error");
    $(this).addClass("errtextbox");
    errorPass = true;
  } else {
    errorPass = false;
    $(this).removeClass("errtextbox");     
  }
});

$("#send").click(function(){
  if (!(errorNull || errorMail || errorPass)) {
	$(this).notify("Форма заполнена корректно", "success");
  } else {
    $(this).notify("Форма пустая или заполнена некорректно", "error");
  }
});