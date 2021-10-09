const buttons = document.querySelectorAll(".btn");
const header = document.querySelector(".header");
const screen = document.querySelector(".screen");

buttons.forEach(btn => {
    btn.addEventListener("click", (event) => {
        const style = event.currentTarget.classList;

        if (style.contains("number")) {
        // if (screen.value <= 0) {
            // screen.value = "";
        // }
        
        let number = btn.textContent;
        screen.value += number;
    }else if (style.contains("equal-to")){

     let value = eval(screen.value);
     screen.value = value;

     } else if (style.contains("clear")) {
         screen.value = "";
     
     } else if (style.contains("backspace")) {
    screen.value = screen.value.substring(0, screen.value.length - 1);
     }

    });
});