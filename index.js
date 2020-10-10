/* if($(window).width()<600){

    $("#spann").show();
} 
else{
    $("#spann").hide();
    $("#nav-ul").show();
}

 */

$("#spann").click(function(){
             $("#nav-ul").toggle("slide" , {direction:"right"} , 500);
             /* $("#nav-ul").refresh(); */
            /*   $("#nav-ul  li ").click(function(){
                  $("#nav-ul ").hide(500); 
             }) ; */
         });
  

   /*  var toggl=$("<span>|||</span>;");
    $("#nav-ul").replaceWith(toggl);
    $(toggl).click(function(){
        $("#para").toggle();
    }); */

   

$(document).ready(function(){
    $("#home").click(function(){
        $("#home-drop").slideToggle();
            
  
    });




    
    
});