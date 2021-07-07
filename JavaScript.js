let x = 0;
const progress = document.querySelector('#progress-done');



document.getElementById("name").addEventListener("input", updateProgress);
document.getElementById("email").addEventListener("input", updateProgress);
document.getElementById("tel").addEventListener("input", updateProgress);
document.getElementById("notes").addEventListener("input", updateProgress);

function updateProgress(){
    
    x += 25;
        progress.setAttribute("data-done", x);
        progress.style.opacity = 1;
        progress.style.width = progress.getAttribute("data-done") + '%';
    if(x >= 100){
        x = 100;
    }
}