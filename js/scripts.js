$().ready(function () {
  $(".clickme1").click(function () {
    $(".doa").toggle();
    $(".do1").toggle();
  });
  $(".clickme2").click(function () {
    $(".dob").toggle();
    $(".do2").toggle();
  });
  $(".clickme3").click(function () {
    $(".doc").toggle();
    $(".do3").toggle();
  });
});

$().ready(function () {
  $(".i1").mouseenter(function () {
    $(".i1").toggle();
    $(".a").toggle();
  });
  $(".i1").mouseleave(function () {
    $(".i1").toggle();
    $(".a").toggle();
  });
  $(".i2").mouseenter(function () {
    $(".i2").toggle();
    $(".b").toggle();
  });
  $(".i2").mouseleave(function () {
    $(".i2").toggle();
    $(".b").toggle();
  });
  $(".i3").mouseenter(function () {
    $(".i3").toggle();
    $(".c").toggle();
  });
  $(".i3").mouseleave(function () {
    $(".i3").toggle();
    $(".c").toggle();
  });
  $(".i4").mouseenter(function () {
    $(".i4").toggle();
    $(".d").toggle();
  });
  $(".i4").mouseleave(function () {
    $(".i4").toggle();
    $(".d").toggle();
  });
  $(".i5").mouseenter(function () {
    $(".i5").toggle();
    $(".e").toggle();
  });
  $(".i5").mouseleave(function () {
    $(".i5").toggle();
    $(".e").toggle();
  });
  $(".i6").mouseenter(function () {
    $(".i6").toggle();
    $(".f").toggle();
  });
  $(".i6").mouseleave(function () {
    $(".i6").toggle();
    $(".f").toggle();
  });
  $(".i7").mouseenter(function () {
    $(".i7").toggle();
    $(".g").toggle();
  });
  $(".i7").mouseleave(function () {
    $(".i7").toggle();
    $(".g").toggle();
  });
  $(".i8").mouseenter(function () {
    $(".i8").toggle();
    $(".h").toggle();
  });
  $(".i8").mouseleave(function () {
    $(".i8").toggle();
    $(".h").toggle();
  });

});
function mySubmit() {
  var name = document.getElementById("name").value
  var nnn = document.getElementById("name").value
  var em = document.getElementById("email").value
  var feed = document.getElementById("feedback").value

  alert("feedback recieved");


}
