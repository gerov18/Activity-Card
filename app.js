
let button = document.querySelectorAll(".act-btn");
let arrow = document.querySelectorAll(".arrow");
for(let i = 0; i <= button.length;i++){
    button[i].addEventListener('mouseover', () => {  
        button[i].style.color = "white";
        arrow[i].style.color = "white";
        arrow[i].style.background="#28888A";
        arrow[i].style.borderColor="#5EA6A8";

    });
    button[i].addEventListener('mouseout', () =>{
        button[i].style.color="";
        arrow[i].style.color="";
        arrow[i].style.background="";
        arrow[i].style.background="";
        arrow[i].style.border="";
    })
}


// const hover = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`
// }
