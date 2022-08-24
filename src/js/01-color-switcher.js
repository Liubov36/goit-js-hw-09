function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  
  const body = document.body;
  const buttonStart = document.querySelector('[data-start]');
  const buttonStop = document.querySelector('[data-stop]');
  let intervalID = 0;
  
  // buttonStartEl.addEventListener('click', onButtonClickStart);
  
  // buttonStopEl.addEventListener('click', onButtonClickStop);
  
  
  buttonStart.addEventListener("click", () => {
    intervalID = setInterval(() => {
     body.style.backgroundColor = getRandomHexColor(); 
    }, 1000);
      buttonStart.disabled = true;
  
  });
  
  
  buttonStop.addEventListener("click", () => {
      clearInterval(intervalID);
      buttonStart.disabled = false;
     
    console.log(`Interval  has stopped!`);
  });
  
  
  //buttonStart.classList(is-active);
