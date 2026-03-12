let input = document.getElementById("input-box");
let addListButton = document.getElementById("addListButton")
let list = document.getElementById("list")
addListButton.addEventListener("click", () => {
    let val = input.value;
    console.log(val);
    if(val.trim() === ""){
        alert("add an item");
        return;
    }
    const li = document.createElement("li");
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "delete"
    deleteButton.classList.add("delete");

    li.textContent = val;
    list.appendChild(li);

    li.appendChild(deleteButton)

    deleteButton.addEventListener("click", () => {
        li.remove();
    })
})

