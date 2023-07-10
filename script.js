const move1Radio = document.getElementById("architecture");
const move2Radio = document.getElementById("urbandesign");
const move3Radio = document.getElementById("exhibition");
const move4Radio = document.getElementById("interior");

const movingElement = document.getElementById("carousel");
const slider = document.getElementById("slider")

move1Radio.addEventListener("change", function() {
  if (move1Radio.checked) {
    movingElement.style.transform = "translateX(0px)";
    slider.style.left= "12.5%";
    slider.style.animationName = "input1";
  }
});

move2Radio.addEventListener("change", function() {
  if (move2Radio.checked) {
    movingElement.style.transform = "translateX(-105%)";
    slider.style.left= "37.5%";
    slider.style.animationName = "input2";
  }
});

move3Radio.addEventListener("change", function() {
  if (move3Radio.checked) {
    movingElement.style.transform = "translateX(-210%)";
    slider.style.left= "62.5%";
    slider.style.animationName = "input3";
  }
});

move4Radio.addEventListener("change", function() {
    if (move4Radio.checked) {
      movingElement.style.transform = "translateX(-315%)";
      slider.style.left= "87.5%";
      slider.style.animationName = "input4";
    }
});

const move5Radio = document.getElementById("webdeisgn");
const move6Radio = document.getElementById("dataviz");
const move7Radio = document.getElementById("frontend");
const move8Radio = document.getElementById("backend");

const movingElement1 = document.getElementById("carousel1");
const slider1 = document.getElementById("slider1")
  
move5Radio.addEventListener("change", function() {
  if (move5Radio.checked) {
    movingElement1.style.transform = "translateX(0px)";
    slider1.style.left= "12.5%";
    slider1.style.animationName = "input1";
  }
});

move6Radio.addEventListener("change", function() {
  if (move6Radio.checked) {
    movingElement1.style.transform = "translateX(-105%)";
    slider1.style.left= "37.5%";
    slider1.style.animationName = "input2";
  }
});

move7Radio.addEventListener("change", function() {
  if (move7Radio.checked) {
    movingElement1.style.transform = "translateX(-210%)";
    slider1.style.left= "62.5%";
    slider1.style.animationName = "input3";
  }
});

move8Radio.addEventListener("change", function() {
    if (move8Radio.checked) {
      movingElement1.style.transform = "translateX(-315%)";
      slider1.style.left= "87.5%";
      slider1.style.animationName = "input4";
    }
});


const radioButtons = document.querySelectorAll("input[name='move']");
const textElements = document.querySelectorAll(".text-right")

radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener("change",function() {
        textElements.forEach(function(textElement) {
            textElement.style.display = "none";
        });
        const selectedValue = this.value;
        console.log(selectedValue);
        const selectedTextElements = document.querySelectorAll("."+selectedValue);
        console.log(selectedTextElements);
            selectedTextElements.forEach(function(selectedTextElement) {
                selectedTextElement.style.display = "Block";
            });
    });
});

const radioButtons1 = document.querySelectorAll("input[name='move1']");
const textElements1 = document.querySelectorAll(".text-left")

radioButtons1.forEach(function(radioButton) {
    radioButton.addEventListener("change",function() {
        textElements1.forEach(function(textElement) {
            textElement.style.display = "none";
        });
        const selectedValue = this.value;
        console.log(selectedValue);
        const selectedTextElements = document.querySelectorAll("."+selectedValue);
        console.log(selectedTextElements);
            selectedTextElements.forEach(function(selectedTextElement) {
                selectedTextElement.style.display = "Block";
            });
    });
});