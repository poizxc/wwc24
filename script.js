$(".hamburger").click(function(){
$('.site-nav ul li').toggle()
})
$( window ).resize(function(){
   
    if($(document).width()>768) 
   $('.site-nav ul li').css("display","inline-block");    
    else
        {$('.site-nav ul li').css("display","none");  }
})


$(document).scroll(function() {
    if($(document).scrollTop() >= 90 )
        {if($(document).width()>768) {
  $(".site-header").css('background','rgba(255,255,255,0.7)')
  $(".site-header ul li a").css('color','black')
        }
 
        }
  else{
         if($(document).width()>768) {
        $('.site-header').css("background",'none',"color","white")
        $(".site-header ul li a").css('color','white')
         }
  }
});