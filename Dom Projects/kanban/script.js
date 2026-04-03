const columns = document.querySelectorAll(".column");
let draggedTask = null;

// Add task functionality
document.addEventListener("click", (e) => {
    if(e.target.classList.contains("add-btn")){
        const text = prompt("Enter Task");
        
        if(!text || text.trim() === "") return;

        const task = document.createElement("div");
        task.className = "task";
        task.textContent = text;
        task.setAttribute("draggable", true);

        // Add delete functionality
        task.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            task.remove();
        });

        e.target.previousElementSibling.appendChild(task);
    }
})

// Drag start handler
document.addEventListener("dragstart", (e) => {
    if(e.target.classList.contains("task")){
        draggedTask = e.target;
        e.target.classList.add("dragging");
    }
})

// Drag end handler
document.addEventListener("dragend", (e) => {
    if(e.target.classList.contains("task")){
        e.target.classList.remove("dragging");
        draggedTask = null;
    }
})

// Column drag handlers
columns.forEach((col) => {
    col.addEventListener("dragover", (e) => {
        e.preventDefault();
        col.classList.add("drag-over")
    })

    col.addEventListener("dragleave", (e) => {
        // Remove drag-over only if leaving the column entirely
        if(e.target === col) {
            col.classList.remove("drag-over")
        }
    })

    col.addEventListener("drop", (e) => {
        e.preventDefault();
        col.classList.remove("drag-over");
        
        if(draggedTask){
            const tasksContainer = col.querySelector(".tasks");
            tasksContainer.appendChild(draggedTask);
        }
    })
})

// Also remove drag-over class when drag ends
document.addEventListener("dragend", (e) => {
    columns.forEach(col => {
        col.classList.remove("drag-over");
    });
})