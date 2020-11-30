$(document).ready(function(){

    //STICKY MENU
    $(".js--work-section").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //MIXITUP
    var mixer = mixitup(".con");
});