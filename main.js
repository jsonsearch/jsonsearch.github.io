var temp = "";
if (getCookie("proxy") != null && getCookie("proxy") != "") {
    temp = getCookie("proxy");
    document.querySelector("input[type=button]").style.display = "block";
}
document.querySelector('select[name=proxied]').onchange = function() {
  var optionval = document.querySelector('select[name=proxied]').value;
  if (optionval == "true") {
      document.getElementById("settings").style.display = "block";
  } else {
      document.getElementById("settings").style.display = "none";
      document.getElementById("custom").style.display = "none";
      document.querySelector("select[name=settings]").selectedIndex = 0;
      temp = document.querySelector("input[name=custom]").value;
      document.querySelector("input[name=custom]").value = "";
  }
}
document.querySelector('select[name=settings]').onchange = function() {
  var optionval = document.querySelector('select[name=settings]').value;
  if (optionval == "custom") {
      document.querySelector("input[name=custom]").value = temp;
      document.getElementById("custom").style.display = "block";
  } else {
      document.getElementById("custom").style.display = "none";
      temp = document.querySelector("input[name=custom]").value;
      document.querySelector("input[name=custom]").value = "";
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
document.querySelector("input[type=button]").onclick = function() {
    document.querySelector("input[name=custom]").value = "";
    document.cookie="proxy=;expires=Thu, 01 Jan 1970 12:00:00 UTC";
    document.querySelector("input[type=button]").style.display = "none";
}
function fadeOutEffect() {
    var fadeTarget = document.querySelector(".error-banner");
    var fadeEffect = setInterval(function () {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 200);
}
document.querySelector(".close-banner").addEventListener('click', fadeOutEffect);
document.querySelector("form").onsubmit = function() {
    var x = document.querySelector("[name=custom]").value;
    var y = document.querySelector("select[name=settings]").selectedIndex;
    if (y == 1 && (x.search("%e") == -1 || x.search("%e") == -1)) {
        document.querySelector("#error-text").innerHTML = "Custom proxy URL doesn't contain %e or %r";
        document.querySelector(".error-banner").style.display = "flex";
        document.querySelector(".error-banner").style.opacity = 1;
        return false;
    }
}
