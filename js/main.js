(function () {
  let button = document.querySelector("#button");
  let burgerCon = document.querySelector("#burger-con");

  function hamburgerMenu() {
    burgerCon.classList.toggle("slide-toggle");
    button.classList.toggle("expanded");
  }

  button.addEventListener("click", hamburgerMenu, false);
})();
(() => {
  //variables
  const model = document.querySelector("#model");
  const hotspots = document.querySelectorAll(".Hotspot");
  const infoBoxes = [
    {
      title: "Air Vent",
      text: "The air vent is a small opening or perforation in the earbud's casing designed to provide ventilation. It helps prevent a vacuum seal in your ear, enhancing comfort during extended use and allowing for better sound quality by equalizing air pressure inside and outside the earbud.",
      image: "images/airvent.png",
    },

    {
      title: "L for Left Label",
      text: "The L label on the earbud serves as a clear indication of which ear the earbud should be placed in. This is essential for users to ensure they're wearing the earbuds correctly for optimal audio quality and comfort.",
      image: "images/label.png",
    },

    {
      title: "Soft Earbud:",
      text: "Soft earbuds are the part of the earbud that comes into direct contact with the user's ear canal. They are typically made from soft, comfortable materials to ensure a secure and comfortable fit. The choice of soft materials helps reduce discomfort during extended use and enhances noise isolation.",
      image: "images/earbuds.png",
    },

    {
      title: "Sound Output Hole:",
      text: "The sound output hole is where audio is emitted from the earbud. It's the point where the music or other audio signals generated within the earbud's driver or speaker are released into the ear canal to be heard by the user.",
      image: "images/sound.png",
    },

    {
      title: "Magnetic Charging Pin 1:",
      text: "Magnetic charging pins are connectors used for recharging the earbuds. They are often magnetized to help the earbuds snap into place on a charging dock or case, ensuring a secure and reliable connection for charging. Magnetic Charging Pin 1 implies it's one of the two connectors on the earbud.",
      image: "images/charge.png",
    },

    {
      title: "Magnetic Charging Pin 2:",
      text: "Similar to Magnetic Charging Pin 1, this is the second connector used for charging the earbud. Having two pins often allows for faster charging and more secure connection between the earbud and the charging dock or case.",
      image: "images/charge.png",
    },

    {
      title: "Microphone Hole:",
      text: "The microphone hole is where the built-in microphone is located on the earbud. This is essential for voice calls, voice commands, or any other feature that requires audio input from the user. The hole allows sound to reach the microphone for clear communication.",
      image: "images/microphone.png",
    },
  ];

  //functions
  function modelLoaded() {
    hotspots.forEach((hotspot) => {
      hotspot.style.display = "block";
    });
  }

  function loadInfo() {
    //Roughed in code not functional

    infoBoxes.forEach((infoBox, index) => {
      let selected = document.querySelector(`#hotspot-${index + 1}`);

      const titleElement = document.createElement("h2");
      titleElement.textContent = infoBox.title;

      const textElement = document.createElement("p");
      textElement.textContent = infoBox.text;

      const imgElement = document.createElement("img");
      imgElement.src = infoBox.image;

      selected.appendChild(imgElement);
      selected.appendChild(titleElement);
      selected.appendChild(textElement);
    });
  }
  loadInfo();

  function showInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 1 });
  }

  function hideInfo() {
    let selected = document.querySelector(`#${this.slot}`);
    gsap.to(selected, 1, { autoAlpha: 0 });
  }

  //Event listeners
  model.addEventListener("load", modelLoaded);

  hotspots.forEach(function (hotspot) {
    hotspot.addEventListener("mouseenter", showInfo);
    hotspot.addEventListener("mouseleave", hideInfo);
  });
})();

let buttonColours = document.querySelectorAll(".colour-circle ul li"),
  frontBackImage = document.querySelector(".front-view"),
  sideViewImage = document.querySelector(".side-view");

function changeBGImage(event) {
  event.preventDefault();

  const colorClass = event.target.querySelector("a").classList[0];

  const imagePath2 = `/images/front-and-back-${colorClass}.png`;
  frontBackImage.style.backgroundImage = `url(${imagePath2})`;

  const imagePath = `/images/sideview-${colorClass}.png`;
  sideViewImage.style.backgroundImage = `url(${imagePath})`;
}

buttonColours.forEach((button) => {
  button.addEventListener("click", changeBGImage);
});

// xray slider
(() => {
  let imageCon = document.querySelector("#imageCon"),
    drag = document.querySelector(".image-drag"),
    left = document.querySelector(".image-left"),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  function onDown() {
    dragging = true;
    console.log("Set to true");
  }

  function onUp() {
    dragging = false;
    console.log("Set to false");
  }

  function onMove(event) {
    // console.log("on move called");
    if (dragging === true) {
      //   console.log("dragging");
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      console.log(x);

      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 2;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  drag.addEventListener("mousedown", onDown);
  document.body.addEventListener("mouseup", onUp);
  document.body.addEventListener("mousemove", onMove);
})();
