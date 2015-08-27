
function limitCountryCode(element)
{
    var max_chars = 2;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function limitPhoneNumber(element)
{
    var max_chars = 15;

    if(element.value.length > max_chars) {
        element.value = element.value.substr(0, max_chars);
    }
}
function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}

function GuideSignUpAction(paramFirst,paramLast,ParamCountry,paramPhone,paramEmail,paramPassword,paramRef) {

// alert(paramFirst);
// alert(paramLast);
// alert(ParamCountry);
// alert(paramPhone);
// alert(parmEmail);
// alert(paramPassword);
// alert(paramRef);
    var userFN = paramFirst;
     var userLN = paramLast;
     var userCoun = ParamCountry;
     var userPhn = paramPhone;
     var userEmail = paramEmail;
     var userPass = paramPassword;
     var userRef = paramRef;
    if(userFN=="")
    {
      $('#dis').slideDown().html("<span>Please type First Name</span>");
      $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userLN=="")
    {
    $('#dis').slideDown().html('<span>Please type Last name</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userCoun=="")
    {
    $('#dis').slideDown().html('<span>Please type Country code</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userPhn=="")
    {
    $('#dis').slideDown().html('<span>Please type PHONE</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userEmail=="")
    {
    $('#dis').slideDown().html('<span>Please type Email</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userEmail)
    {
      var flag=validateEmail(userEmail);
      if(!flag)
      {
        if (navigator.notification) {
          navigator.notification.alert("Invalid Email", null, "Alert", 'OK');
      } else {
          alert("Alert" ? ("Alert" + ": " + "Invalid Email") : "Invalid Email");
      }
        $('#Email').focus();
        return false;
      }
    }
    if(userPass=="")
    {
    $('#dis').slideDown().html('<span>Please type Password</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
else{

  $('#dis').hide();
  $('#lod').slideDown().html("<h3>Loading Please Wait .....</h3>");
  //alert(1);
    $.ajax({
            url: 'http://www.muru.net/test/api/Guide_Register',
            type:"POST",
            data : {data:JSON.stringify({"first_name":userFN,"last_name":userLN,"email":userEmail,"mobile_phone_country":userCoun,"mobile_phone_number":userPhn,"referral_code":userRef,"password":userPass})},
            beforeSend: function ( xhr ) {
   // xhr.overrideMimeType("text/plain; charset=x-user-defined");
                 }
                }).done(function ( data ) {
                 if( console && console.log ) {
                      $('#lod').hide();
                  rana = data;
                  if(rana.status==1)
                  {
                     window.location.href="tourists.html";
                  }
                  else if (rana.status==0) {
                     alert(rana.error_msg);

                  }
                 }
});
}
}

function GuideLoginAction(paramEmail, paramPwd)
{
  var userEmail=paramEmail;
  var userPassword = paramPwd;
if(userEmail=="")
{
  $('#dis').slideDown().html("<span>Please type Email</span>");
  $('#dis').delay(2000).fadeOut();
  return false;
}
if(userEmail)
{
  var flag=validateEmail(userEmail);
  if(!flag)
  {
    alert('Please Enter a valid Email Id');
    $('#UserEmail').focus();
    return false;
  }
}
if(userPassword=="")
{
  $('#dis').slideDown().html("<span>Please type Password</span>");
  $('#dis').delay(2000).fadeOut();
  return false;
}
else if(userEmail!="" && userPassword!=="")
{
  $('#dis').hide();
  $('#lod').slideDown().html("<h3>Loading Please Wait .....</h3>");
  //alert(1);
    $.ajax({
            url: 'http://www.muru.net/test/api/Guide_Login',
            type:"POST",
            data : {data:JSON.stringify({"email":paramEmail,"password":paramPwd})},
            beforeSend: function ( xhr ) {
   // xhr.overrideMimeType("text/plain; charset=x-user-defined");
                 }
                }).done(function ( data ) {
                 if( console && console.log ) {

                  rana = data;

                  //alert(rana.response.api_key);
                  if(rana.status==1)
                  {
                    localStorage.setItem('api_key', JSON.stringify(rana.response.api_key,rana.status));
                     window.location.href="tour-guides.html";
                     $('#lod').hide();
                  }
                  else if (rana.status==0) {
                     alert("Invalid email and password");
                     $('#lod').hide();
                  }
                 }
});
}
}

function TouristLoginAction(paramEmail, paramPwd)
{
  var userEmail=paramEmail;
  var userPassword = paramPwd;

if(userEmail=="")
{
  $('#dis').slideDown().html("<span>Please type Email</span>");
  $('#dis').delay(2000).fadeOut();
  return false
}
if(userEmail)
{
  var flag=validateEmail(userEmail);
  if(!flag)
  {
    alert('Please Enter a valid Email Id');
    $('#UserEmail').focus();
    return false;
  }
}
if(userPassword=="")
{
  $('#dis').slideDown().html("<span>Please type Password</span>");
  $('#dis').delay(2000).fadeOut();
  return false;
}
else if(userEmail!="" && userPassword!="")
{
  $('#dis').hide();
  $('#lod').slideDown().html("<h3>Loading Please Wait .....</h3>");
  //alert(1);
    $.ajax({
            url: 'http://www.muru.net/test/api/Tourist_Login',
            type:"POST",
            data : {data:JSON.stringify({"email":paramEmail,"password":paramPwd})},
            beforeSend: function ( xhr ) {
   // xhr.overrideMimeType("text/plain; charset=x-user-defined");
                 }
                }).done(function ( data ) {
                 if( console && console.log ) {

                  rana = data;
                  if(rana.status==1)
                  {
                     window.location.href="tourists.html";
                     $('#lod').hide();
                  }
                  else if (rana.status==0) {
                     alert("Invalid email and password");
                     $('#lod').hide();
                  }
                 }
});
return false;
}
}


function TouristSignUpAction(paramFirst,paramLast,ParamCountry,paramPhone,paramEmail,paramPassword,paramRef) {

//validateEmail(paramEmail);
// alert(paramFirst);
// alert(paramLast);
// alert(ParamCountry);
// alert(paramPhone);
// alert(parmEmail);
// alert(paramPassword);
// alert(paramRef);

    var userFN = paramFirst;
     var userLN = paramLast;
     var userCoun = ParamCountry;
     var userPhn = paramPhone;
     var userEmail = paramEmail;
     var userPass = paramPassword;
     var userRef = paramRef;
    if(userFN=="")
    {
      $('#dis').slideDown().html("<span>Please type First Name</span>");
      $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userLN=="")
    {
    $('#dis').slideDown().html('<span>Please type Last name</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userCoun=="")
    {
    $('#dis').slideDown().html('<span>Please type Country code</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userPhn=="")
    {
    $('#dis').slideDown().html('<span>Please type PHONE</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userEmail=="")
    {
    $('#dis').slideDown().html('<span>Please type Email</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
    if(userEmail)
    {
      var flag=validateEmail(userEmail);
      if(!flag)
      {
        $('#EMAIL').focus();
        if (navigator.notification) {
          navigator.notification.alert("Invalid Email", null, "Alert", 'OK');
      } else {
          alert("Alert" ? ("Alert" + ": " + "Invalid Email") : "Invalid Email");
      }
        return false;
      }
    }
    if(userPass=="")
    {
    $('#dis').slideDown().html('<span>Please type Password</span>');
    $('#dis').delay(2000).fadeOut();
    return false;
    }
else{


  $('#dis').hide();
  $('#lod').slideDown().html("<h3>Loading Please Wait .....</h3>");
  //alert(1);
    $.ajax({
            url: 'http://www.muru.net/test/api/Tourist_Register',
            type:"POST",
            data : {data:JSON.stringify({"first_name":userFN,"last_name":userLN,"email":userEmail,"mobile_phone_country":userCoun,"mobile_phone_number":userPhn,"referral_code":userRef,"password":userPass})},
            beforeSend: function ( xhr ) {
   // xhr.overrideMimeType("text/plain; charset=x-user-defined");
                 }
                }).done(function ( data ) {
                 if( console && console.log ) {
                      $('#lod').hide();
                  rana = data;
                  if(rana.status==1)
                  {

                     window.location.href="tourists.html";

                  }
                  else if (rana.status==0) {
                     alert(rana.error_msg);

                  }
                 }
});
}
}
