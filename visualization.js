var speed=1000;

inp_aspeed.addEventListener("input",vis_speed);

function vis_speed()
{
    var array_speed=inp_aspeed.value;
    switch(parseInt(array_speed))
    {
        case 1: speed=1;
                break;
        case 2: speed=10;
                break;
        case 3: speed=100;
                break;
        case 4: speed=1000;
                break;
        case 5: speed=10000;
                break;
    }
    
    delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
}

var delay_time=10000/(Math.floor(array_size/10)*speed);        //Decrease numerator to increase speed.
var c_delay=0;//This is updated ov every div change so that visualization is visible.

function div_update(cont,height,color)
{
    window.setTimeout(function(){
        cont.style=" margin:0% " + margin_size + "%; width:" + (100/array_size-(2*margin_size)) + "%; height:" + height + "%; background-color:" + color + ";";
    },c_delay+=delay_time);
}

function enable_buttons()
{
    window.setTimeout(function(){
        for(var i=0;i<butts_algos.length;i++)
        {
            butts_algos[i].classList=[];
            butts_algos[i].classList.add("butt_unselected");

            butts_algos[i].disabled=false;
            inp_as.disabled=false;
            inp_gen.disabled=false;
            inp_aspeed.disabled=false;
        }
    },c_delay+=delay_time);
}

function showMessage(message) {
    // Create a message container if it doesn't exist
    let messageContainer = document.getElementById("sorting-messages");
    if (!messageContainer) {
        messageContainer = document.createElement("div");
        messageContainer.id = "sorting-messages";
        messageContainer.style.position = "fixed";
        messageContainer.style.bottom = "90px";
        messageContainer.style.left = "50%";
        messageContainer.style.transform = "translateX(-50%)";
        messageContainer.style.backgroundColor = "#333";
        messageContainer.style.color = "#fff";
        messageContainer.style.padding = "10px 20px";
        messageContainer.style.borderRadius = "5px";
        messageContainer.style.boxShadow = "0px 4px 6px rgba(0,0,0,0.1)";
        document.body.appendChild(messageContainer);
    }

    // Show the message
    messageContainer.innerText = message;
    messageContainer.style.display = "block";

    // Hide the message after 3 seconds
    setTimeout(() => {
        messageContainer.style.display = "none";
    }, 3000);
}
