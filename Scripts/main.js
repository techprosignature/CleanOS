/* Clock Function */
function padDigits(number, digits) {
	return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}

function refreshTime(){
    var time = document.getElementById("time");
    var tm = new Date();
    time.innerHTML = (tm.getHours() % 12 || 12) + ":" + padDigits(tm.getMinutes(), 2);
    time.title = tm.toDateString();
}
refreshTime();
var CONTROL = setInterval(refreshTime, 1000);
/* Window Control */
var ACTIVE = false;
function NWindow(URL){
    if(!ACTIVE){
    var Window = document.createElement("div");
    Window.setAttribute("class", "window");
    Window.innerHTML = '<embed src="' + URL + '" height="100%" width="100%"></embed>';
    document.body.appendChild(Window);
    document.getElementById("shelf").classList.add("full");
    ACTIVE = true;
    }
    else{
    document.getElementsByClassName("window")[0].remove();
    document.getElementById("shelf").classList.remove("full");
    ACTIVE = false;
    }
}
function WindowHandler(event){
    const message = event.data.value;
    switch (message) {
        case 'Close':
            console.log("Close");
            NWindow("");
            break;
        case 'Resize':
            console.log("Resize");
            break;
        case 'Minimize':
            console.log("Minimize");
            break;
    }
}
window.addEventListener("message", WindowHandler, false);
