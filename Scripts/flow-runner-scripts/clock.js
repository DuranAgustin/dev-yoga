import { getById } from "../../CRUD/get-flows.js";
import { getArray } from "./flow-runner-init.js";

const sideOrRepeat = document.getElementById("side-repeat");

const upcomingText = document.getElementById("upcoming-text");
const upcomingImg = document.getElementById("upcoming-img");

const currentText = document.getElementById("current-text");
const currentImg = document.getElementById("current-img");

const previousText = document.getElementById("previous-text");
const previousImg = document.getElementById("previous-img");

const main = document.querySelector("main");

//circle start
<<<<<<< HEAD
try {
  var flowArray = await getArray(sessionStorage.getItem('id'));
  console.log(flowArray);
} catch (error) {
  console.log(error);
}

sessionStorage.setItem('id', null);
=======
let flowArray = await getArray("62e14560b7efb22ded5a14b3");
>>>>>>> master
if (flowArray) {
  let flowIndex = 0;
  cardSet(flowArray, flowIndex);

  function cardSet(flowArray, index) {
    //Checking for right or left side
    if (flowArray[index].poseName === "Right Side") {
      sideOrRepeat.innerText = "Right Side";
      flowIndex++;
      index++;
    }

    if (flowArray[index].poseName === "Left Side") {
      sideOrRepeat.innerText = "Left Side";
      flowIndex++;
      index++;
    }
    //previous
    if (index === 0) {
      previousText.innerText = "";
      previousImg.style.display = "none";
    } else {
      previousText.innerText = flowArray[index - 1].poseName;
      previousImg.style.display = "block";
      previousImg.src = flowArray[index - 1].poseImage;
    }
    //current
    currentImg.src = flowArray[index].poseImage;
    currentText.innerText = flowArray[index].poseName;
    //upcoming
    if (flowArray[index + 1]) {
      upcomingImg.src = flowArray[index + 1].poseImage;
      upcomingText.innerText = flowArray[index + 1].poseName;
    } else {
      upcomingText.innerHTML = "<h1><em>FINAL MOVE</em></h1>";
      upcomingImg.style.display = "none";
    }
  }

  let beep = new Audio("../sounds/ding-ding-sound-effect.mp3");
  let progressBar = document.querySelector(".e-c-progress");
  let indicator = document.getElementById("e-indicator");
  let pointer = document.getElementById("e-pointer");
  let length = Math.PI * 2 * 100;

  progressBar.style.strokeDasharray = length;

  function update(value, timePercent) {
    var offset = -length - (length * value) / timePercent;
    progressBar.style.strokeDashoffset = offset;
    pointer.style.transform = `rotate(${(360 * value) / timePercent}deg)`;
  }

  //circle ends
  const displayOutput = document.querySelector(".display-remain-time");
  const pauseBtn = document.getElementById("pause");
  const setterBtns = document.querySelectorAll("button[data-setter]");

  let intervalTimer;
  let timeLeft;
  let wholeTime = 2 * 2; // manage this to set the whole time
  let isPaused = false;
  let isStarted = false;

  //setting number of times clock will run
  let timerRun = flowArray.length - 1;
  let timerCount = 0;

  update(wholeTime, wholeTime); //refreshes progress bar
  displayTimeLeft(wholeTime);

  function changeWholeTime(seconds) {
    if (wholeTime + seconds > 0) {
      wholeTime += seconds;
      update(wholeTime, wholeTime);
    }
  }

  for (var i = 0; i < setterBtns.length; i++) {
    setterBtns[i].addEventListener("click", function (event) {
      var param = this.dataset.setter;
      switch (param) {
        case "minutes-plus":
          changeWholeTime(1 * 60);
          break;
        case "minutes-minus":
          changeWholeTime(-1 * 60);
          break;
        case "seconds-plus":
          changeWholeTime(1);
          break;
        case "seconds-minus":
          changeWholeTime(-1);
          break;
      }
      displayTimeLeft(wholeTime);
    });
  }

  function timer(seconds) {
    //counts time, takes seconds
    let remainTime = Date.now() + seconds * 1000;
    displayTimeLeft(seconds);

    intervalTimer = setInterval(function () {
      timeLeft = Math.round((remainTime - Date.now()) / 1000);
      if (timeLeft < 0 && timerCount < timerRun) {
        beep.play();
        clearInterval(intervalTimer);
        displayTimeLeft(wholeTime);
        isStarted = false;
        flowIndex++;
        cardSet(flowArray, flowIndex);
        pauseTimer();
      } else if (timeLeft < 0) {
        // swapping
        clearInterval(intervalTimer);
        isStarted = false;
        setterBtns.forEach(function (btn) {
          btn.disabled = false;
          btn.style.opacity = 1;
        });
        displayTimeLeft(wholeTime);
        pauseBtn.classList.remove("pause");
        pauseBtn.classList.add("play");
        return;
      }
      displayTimeLeft(timeLeft);
    }, 1000);
  }

  function pauseTimer() {
    if (isStarted === false) {
      document.getElementById('flow-title').style.display = 'none';
      timer(wholeTime);
      isStarted = true;
      this.classList.remove("play");
      this.classList.add("pause");

      setterBtns.forEach(function (btn) {
        btn.disabled = true;
        btn.style.opacity = 0.5;
      });
    } else if (isPaused) {
      this.classList.remove("play");
      this.classList.add("pause");
      timer(timeLeft);
      isPaused = isPaused ? false : true;
    } else {
      this.classList.remove("pause");
      this.classList.add("play");
      clearInterval(intervalTimer);
      isPaused = isPaused ? false : true;
    }
  }

  function displayTimeLeft(timeLeft) {
    //displays time on the input
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let displayString = `${minutes < 10 ? "0" : ""}${minutes}:${
      seconds < 10 ? "0" : ""
    }${seconds}`;
    displayOutput.textContent = displayString;
    update(timeLeft, wholeTime);
  }

  pauseBtn.addEventListener("click", pauseTimer);
} else if (!flowArray) {
  //TODO create an error div, append the child and request that the user select a file from the dashboard
  //provide a link to the dashboard for them to select an item
<<<<<<< HEAD
  main.innerHTML = `<h1 id="error">No Flow Selected:
  <br><br>Please select a saved flow from the 
  <a href='./dashboard.html'>dashboard</a>
  <br><br>
  OR create a new flow with the <a href='./flow-builder.html'> Flow Builder</a></h1>
  
  `;
=======
  main.innerHTML = "Please select a flow from the dashboard";
>>>>>>> master
}
