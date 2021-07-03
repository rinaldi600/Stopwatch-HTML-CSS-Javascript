console.log("Hello World");
const image = document.querySelector("img");
const hours = document.querySelector(".H");
const minutes = document.querySelector(".M");
const seconds = document.querySelector(".S");
const popUp = document.querySelector(".pop-up");
const popUpPause = document.querySelector(".paused");

popUpPause.style.display = "none";

let numberClick = 1;

image.addEventListener("click",function () {

    let detik = parseInt(seconds.value);
    let menit = parseInt(minutes.value);
    let jam = parseInt(hours.value);

    const timeStopwatch = setInterval(function() {
        if (detik > -2) {
            detik--;
            if (detik === -1) {
                detik = 59;
                menit--;
                if (menit === -1) {
                    menit = 59;
                    jam--;
                    if (jam === -1) {
                        jam = 24;
                    }
                }
            }

            hours.value = jam;
            minutes.value = menit;
            seconds.value = detik;


            if (jam === 0 && menit === 0 && detik === 0) {
                clearInterval(timeStopwatch);
                popUp.classList.toggle("tampilan");
                seconds.style.color = "black";
            } else if (jam === 0 && menit === 0 && detik < 11) {
                seconds.style.color = "red";
            }

            if (numberClick % 2 === 1) {
                const getLastHours = parseInt(hours.value);
                const getLastMinutes = parseInt(minutes.value);
                let getLastSeconds = parseInt(seconds.value) + 1;

                if (getLastSeconds === 60) {
                    getLastSeconds = 59;
                }

                hours.value = getLastHours;
                minutes.value = getLastMinutes;
                seconds.value = getLastSeconds;
                popUpPause.style.display = "grid";

                clearInterval(timeStopwatch);

            } else {
                popUpPause.style.display = "none";
            }

        }
    },1000);

    console.log(numberClick++);

    if (image.classList.contains("play")) {

        image.classList.toggle("play");
        image.classList.toggle("pause");
        image.src = "pause.png";

    } else {
        image.classList.toggle("play");
        image.classList.toggle("pause");
        image.src = "play-button.png"
    }


});

popUp.addEventListener("click",function () {
    popUp.classList.toggle("tampilan")
});
popUpPause.addEventListener("click",function () {
    popUpPause.classList.toggle("display")
});