  //*****1******//
  $(document).ready(function(){
    $("#t1").hover(function(){
      $(this).css("color","blue");
    });
 
  });
  //*****2******//
  $(document).ready(function(){
    $("#img1").hover(function(){
      $(this).attr("src","path 51.png")
    })
  })
  //*****3******//
  $(document).ready(function(){
    $("#btn1").click(function(){
      $("h3").hide();
    })
  })
  //*****4******//
  $(document).ready(function(){
    $("#btn").click(function(){
      $("#p1").append(" texte ajouté après");
    });
  });