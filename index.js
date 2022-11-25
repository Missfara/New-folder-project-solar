let entry = document.getElementById("mass");
let button = document.getElementById("btn");
let planet = document.getElementById("planet");
let picture = document.getElementById("pic1");
let second = document.querySelector("#secd");
let result = document.querySelector("#result");
let calc;
let plane = (gravity, second) => {
  calc = entry.value * gravity;
  result.textContent = `${calc}N`;
  result.style.display = "block";
};

button.addEventListener("click", () => {
  if (planet.value == "earth") {
    plane(9.807, (second.textContent = "The weight of an object on Earth is"));
  } else if (planet.value == "jupiter") {
    plane(
      24.79,
      (second.textContent = "The weight of an object in Jupiter is")
    );
  } else if (planet.value == "mars") {
    plane(3.721, (second.textContent = "The weight of an object in Mars is"));
  } else if (planet.value == "mercury") {
    plane(3.7, (second.textContent = "The weight of an object in Mercury is"));
  } else if (planet.value == "moon") {
    plane(1.62, (second.textContent = "The weight of an object in Moon is"));
  } else if (planet.value == "venus") {
    plane(8.87, (second.textContent = "The weight of an object in Venus is"));
  } else if (planet.value == "pluto") {
    plane(0.62, (second.textContent = "The weight of an object in Pluto is"));
  } else if (planet.value == "saturn") {
    plane(10.44, (second.textContent = "The weight of an object in Saturn is"));
  } else if (planet.value == "uranus") {
    plane(8.87, (second.textContent = "The weight of an object in Uranus is"));
  } else if (planet.value == "neptune") {
    plane(
      11.15,
      (second.textContent = "The weight of an object in Neptune is")
    );
  } else if (planet.value == "none") {
    second.textContent = "Choose a planet";
    result.style.display = "none";
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
  } else if (planet.value == "venus") {
    picture.src = "./images/images/venus.png";
  } else {
    picture.src = "./images/images/earth.png";
  }
});
