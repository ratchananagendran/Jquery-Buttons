$(document).ready(function(){
    $("#button").click(function(){
        $("#bt-1").fadeIn(500);
        $("#bt-2").fadeIn(1000);
        $("#bt-3").fadeIn(2000);
        $("#bt-4").fadeIn(3000);
    });
});
$(document).ready(function(){
    $("#button-1").click(function(){
      $("#bt-1").show(2000);
      $("#bt-2").hide(1000);
      $("#bt-3").hide(2000);
      $("#bt-4").hide(3000);
    });
});
$(document).ready(function(){
    $("#button-2").click(function(){
      $("#bt-2").show(2000);
      $("#bt-1").hide(1000);
      $("#bt-3").hide(2000);
      $("#bt-4").hide(3000);
    });
});
$(document).ready(function(){
    $("#button-3").click(function(){
      $("#bt-3").show(2000);
      $("#bt-1").hide(1000);
      $("#bt-2").hide(2000);
      $("#bt-4").hide(3000);
    });
});
$(document).ready(function(){
    $("#button-4").click(function(){
      $("#bt-4").show(2000);
      $("#bt-1").hide(3000);
      $("#bt-2").hide(1000);
      $("#bt-3").hide(2000);
        
    });
});

$(document).ready(function(){
  $('.btn').click(function(){
    $('.btn').removeClass('active').addClass('inactive');
     $(this).removeClass('inactive').addClass('active');
    });
})