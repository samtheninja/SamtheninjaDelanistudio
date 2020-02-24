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

$().ready(function()  {
  $("#m").mouseenter(function(){
   $(".overlay").show();
   }).mouseleave(function(){
     $(".overlay").hide();
   });
});
