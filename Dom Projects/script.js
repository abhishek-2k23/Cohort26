const btn = document.querySelector("#toggle-button");
btn.addEventListener("click", () => {
    console.log("btn")
    let flag = document.body.classList.toggle("dark")
    if(flag){
        btn.innerHTML = "switch to light Mode"
    }else{
        btn.innerHTML = "switch to dark Mode"
    }
})