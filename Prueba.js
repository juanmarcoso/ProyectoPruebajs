var theCount;
var alarm = document.getElementById("alarm");
var alarm2 = document.getElementById("alarm2");
var panel = document.getElementById("panel");
var turnOff = document.getElementById("turn-off");
var turnOffHor = document.getElementById("closing");
var detonate = document.getElementById("detonate");
var time = document.getElementById("time");
var abort = document.getElementById("abort");
var reloadBtn = document.getElementById("restart");
var reload = document.getElementById("reload");
var cover = document.getElementById("cover");
var btn = document.getElementById("activate");
var mute = document.getElementById("mute");

alarm.volume = 0.50;

function showCountDown() {
    time.innerText = time.innerText - 1;
    if (time.innerText == 0) {
        clearInterval(theCount);
        time.classList.add("crono");
        abort.classList.add("hide");
        detonate.classList.add("show");
        setTimeout(function () {
            turnOff.classList.add("close");
            turnOffHor.classList.add("close");
            reloadBtn.classList.add("show");
            alarm.pause();
            alarm2.play();
        }, 1500);
    }
}

cover.addEventListener("click", function () {
    cover.classList.toggle("opened");
});

btn.addEventListener("click", function () {
    btn.classList.add("pushed");
    alarm.currentTime = 10.1;
    alarm.play();
    setTimeout(function () {
        panel.classList.add("show");
        theCount = setInterval(showCountDown, 1000);
    }, 500);
});

abort.addEventListener("click", function () {
    btn.classList.remove("pushed");
    panel.classList.remove("show");
    clearInterval(theCount);
    time.innerText = 9;
    time.classList.remove("crono");
    abort.classList.remove("hide");
    detonate.classList.remove("show");
    alarm.pause();
    alarm.currentTime = 10;
});

reload.addEventListener("click", function () {
    panel.classList.remove("show");
    turnOff.classList.remove("close");
    turnOffHor.classList.remove("close");
    abort.classList.remove("hide");
    detonate.classList.remove("show");
    cover.classList.remove("opened");
    btn.classList.remove("pushed");
    reloadBtn.classList.remove("show");
    time.classList.remove("crono");
    time.innerText = 9;
    alarm.pause();
    alarm.currentTime = 10;
});

mute.addEventListener("click", function () {
    if (mute.classList.contains("muted")) {
        alarm.muted = false;
        mute.classList.remove("muted");
    } else {
        alarm.muted = true;
        mute.classList.add("muted");
    }
});

// Abrir tapa automáticamente al iniciar (y luego cerrarla)
setTimeout(function () {
    cover.classList.remove("opened");
}, 100);