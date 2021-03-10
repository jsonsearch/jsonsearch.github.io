document.querySelector('select[name=proxied]').onchange = function() {
  var optionval = document.querySelector('select[name=proxied]').value;
  if (optionval == "true") {
  document.getElementById("settings").style.display = "block";
  }
}
document.querySelector('select[name=settings]').onchange = function() {
  var optionval = document.querySelector('select[name=settings]').value;
  if (optionval == "custom") {
  document.getElementById("custom").style.display = "block";
  }
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}
if (getCookie("proxy") != null && getCookie("proxy") != "") {
    document.querySelector("input[type=button]").style.display = "block";
    document.querySelector("input[name=custom]").value = getCookie("proxy");
}
document.querySelector("input[type=button]").onclick = function() {
    document.querySelector("input[name=custom]").value = "";
    document.cookie="proxy=;expires=Thu, 01 Jan 1970 12:00:00 UTC";
    document.querySelector("input[type=button]").style.display = "none";
}
