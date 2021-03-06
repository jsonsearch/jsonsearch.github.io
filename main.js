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
