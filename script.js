window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  var topButton = document.getElementById("topButton");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}