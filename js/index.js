var element = document.getElementById("navBarFixed");

window.addEventListener("scroll", function () {
    var height = window.scrollY;
    if (height >= 111) {
      element.style.position = "sticky";
      element.style.top = 0;
      element.style.left =0;
      element.style.width = "100%";
    }
    // else {
    //     //  element.style.marginTop = 150 + "px";

    // }
});


//single product element with
var element = document.getElementById("left");

window.addEventListener("scroll", function () {
  var height = window.scrollY;
  if (height >= 0) {
    element.style.position = "sticky";
    element.style.top = 0;
    element.style.left = 0;
    // element.style.width = "100%";
  }
  // else {
  //     //  element.style.marginTop = 150 + "px";

  // }
});


