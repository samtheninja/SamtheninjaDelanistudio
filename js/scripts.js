$().ready(function(){
  $(".clickme1").click(function(){
    $(".doa").toggle();
    $(".do1").toggle();
  });
  $(".clickme2").click(function(){
    $(".dob").toggle();
    $(".do2").toggle();
  });
  $(".clickme3").click(function(){
    $(".doc").toggle();
    $(".do3").toggle();
  });
});

$(document).ready(function()  {
  $(".i1").mouseenter(function(){
   $(".i1").toggle();
   $(".a").toggle();
  });
  $(".i1").mouseleave(function(){
    $(".i1").toggle();
    $(".a").toggle();
   });
});
