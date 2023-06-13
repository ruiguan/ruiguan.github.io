const move1Radio = document.getElementById("architecture");
const move2Radio = document.getElementById("urbandesign");
const move3Radio = document.getElementById("exhibition");
const move4Radio = document.getElementById("interior");

const movingElement = document.getElementById("carousel");
const slider = document.getElementById("slider")

const radioButtons = document.querySelectorAll("input[name='move']");
const textElements = document.querySelectorAll(".text-right")

console.log(radioButtons)
console.log(textElements)

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
