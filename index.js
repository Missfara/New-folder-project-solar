let entry = document.getElementById("mass");
let button = document.getElementById("btn");
let planet = document.getElementById("planet");
let picture = document.getElementById("pic1");
let second = document.querySelector("#secd");
let result = document.querySelector("#result");
let calc;

button.addEventListener("click", () => {
  if (planet.value == "earth") {
    let gravity = 9.807;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object on Earth is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "jupiter") {
    let gravity = 24.79;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Jupiter is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "mars") {
    let gravity = 3.721;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Mars is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "mercury") {
    let gravity = 3.7;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Mercury is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "moon") {
    let gravity = 1.62;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Moon is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "venus") {
    let gravity = 8.87;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Venus is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "pluto") {
    let gravity = 0.62;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Pluto is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "saturn") {
    let gravity = 10.44;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Saturn is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "uranus") {
    let gravity = 8.87;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Uranus is";
    result.textContent = `${calc}N`;
  } else if (planet.value == "neptune") {
    let gravity = 11.15;
    calc = entry.value * gravity;
    second.textContent = "The weight of an object in Neptune is";
    result.textContent = `${calc}N`;
  }
});

planet.addEventListener("change", () => {
  if (planet.value == "jupiter") {
    picture.src = "./images/images/jupiter.png";
  } else if (planet.value == "mars") {
    picture.src = "./images/images/mars.png";
  } else if (planet.value == "mercury") {
    picture.src = "./images/images/mercury.png";
  } else if (planet.value == "moon") {
    picture.src = "./images/images/moon.png";
  } else if (planet.value == "neptune") {
    picture.src = "./images/images/neptune.png";
  } else if (planet.value == "pluto") {
    picture.src = "./images/images/pluto.png";
  } else if (planet.value == "uranus") {
    picture.src = "./images/images/uranus.png";
  } else if (planet.value == "saturn") {
    picture.src = "./images/images/saturn.png";
  } else if (planet.value == "earth") {
    picture.src = "./images/images/earth.png";
  } else {
    picture.src = "./images/images/venus.png";
  }
});
