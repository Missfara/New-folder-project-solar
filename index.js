let entry = document.getElementById("mass");
let button = document.getElementById("btn");
let planet = document.getElementById("planet");
let picture = document.getElementById("pic1");
let second = document.querySelector("#secd");
let result = document.querySelector("#result");
let calc;

let galaxy = {
  earth: ["earth", 9.807],
  mars: ["mars", 3.721],
  mercury: ["mercury", 3.7],
  moon: ["moon", 1.62],
  venus: ["venus", 8.87],
  saturn: ["saturn", 10.44],
  uranus: ["uranus", 8.87],
  neptune: ["neptune", 11.15],
  pluto: ["pluto", 0.62],
  jupiter: ["jupiter", 24.79],
};

let plane = (gravity, planet) => {
  calc = entry.value * gravity;
  result.textContent = `${calc} N`;
  result.style.display = "block";
  second.textContent = `The weight of an object on ${planet} is`;
};

button.addEventListener("click", () => {
  if (entry.value == "") {
    second.textContent = "there is no mass, kindly type a number";
    result.style.display = "none";
  } else if (planet.value == "none") {
    second.textContent = "Choose a planet";
    result.style.display = "none";
  } else {
    plane(galaxy[planet.value][1], planet.value);
  }

  //OLD METHOD I USED
  //   if (planet.value == "earth") {
  //     plane(9.807);
  //     second.textContent = "The weight of an object on Earth is";
  //   } else if (planet.value == "jupiter") {
  //     plane(24.79);
  //     second.textContent = "The weight of an object in Jupiter is";
  //   } else if (planet.value == "mars") {
  //     plane(3.721, (second.textContent = "The weight of an object in Mars is"));
  //   } else if (planet.value == "mercury") {
  //     plane(3.7, (second.textContent = "The weight of an object in Mercury is"));
  //   } else if (planet.value == "moon") {
  //     plane(1.62, (second.textContent = "The weight of an object in Moon is"));
  //   } else if (planet.value == "venus") {
  //     plane(8.87, (second.textContent = "The weight of an object in Venus is"));
  //   } else if (planet.value == "pluto") {
  //     plane(0.62, (second.textContent = "The weight of an object in Pluto is"));
  //   } else if (planet.value == "saturn") {
  //     plane(10.44, (second.textContent = "The weight of an object in Saturn is"));
  //   } else if (planet.value == "uranus") {
  //     plane(8.87, (second.textContent = "The weight of an object in Uranus is"));
  //   } else if (planet.value == "neptune") {
  //     plane(
  //       11.15,
  //       (second.textContent = "The weight of an object in Neptune is")
  //     );
  //   } else if (planet.value == "none") {
  //     second.textContent = "Choose a planet";
  //     result.style.display = "none";
  //   }
});

planet.addEventListener("change", () => {
  if (planet.value == "jupiter") {
    picture.src = "./images/images/jupiter.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "mars") {
    picture.src = "./images/images/mars.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "mercury") {
    picture.src = "./images/images/mercury.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "moon") {
    picture.src = "./images/images/moon.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "neptune") {
    picture.src = "./images/images/neptune.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "pluto") {
    picture.src = "./images/images/pluto.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "uranus") {
    picture.src = "./images/images/uranus.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "saturn") {
    picture.src = "./images/images/saturn.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "earth") {
    picture.src = "./images/images/earth.png";
    picture.classList.remove('hidden')
  } else if (planet.value == "venus") {
    picture.src = "./images/images/venus.png";
    picture.classList.remove('hidden')
  } else if (planet.value=="none") {
    picture.classList.add('hidden')
  }
});
