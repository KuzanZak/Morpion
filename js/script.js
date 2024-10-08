const button1 = document.getElementById("button-1");
const crosses = document.querySelectorAll(".cross")
const buttons = document.querySelectorAll(".button");

let count = 0;
const impair = [1, 3, 5 ,7, 9];
const pair = [2, 4, 6 ,8];

buttons.forEach(button=> {
    button.addEventListener("click", function(event){
        count++;
        console.log(count);
        if (impair.includes(count)){
            button.firstElementChild.src = "img/cross.png";
            button.setAttribute("disabled", "");
        } else if (pair.includes(count)) {
            button.firstElementChild.src = "img/circle.png";
            button.setAttribute("disabled", "");
        };
        button.firstElementChild.classList.add("image");
    })
})


