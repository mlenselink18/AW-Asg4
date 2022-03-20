"use strict";


$(document).ready( () => {

    $("main a").click( evt => {
        const target = evt.currentTarget;

        let buttonText = target.innerText;

        var id = target.id;

        if(id != "expandList")
        {
            if(buttonText == "Show More")
            {
                target.innerText = "Show Less";
                $(target).prev(".hide").show();
            }
            else
            {
                target.innerText = "Show More";
                $(target).prev(".hide").hide();
            }
        }
        else
        {
            var previous = $(target).prev("ul").children('li:last-child');
            if(buttonText == "Show More")
            {
                target.innerText = "Show Less";
                previous.show();
            }
            else
            {
                target.innerText = "Show More";
                previous.hide();
            }
        }
        
        //$(target).prev(".hide").toggleClass("hide");
    });
});

