export class LS {
    // task;

    // constructor(task) {
    //     this.task = task;
    // }

    saveTask(task) {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        tasks.push(task);
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    getTasksFromLS() {
        const getFromLS = JSON.parse(localStorage.getItem("tasks"));

        //If we have informatin in LS we get this loop
        if (getFromLS) {
            for (let i = 0; i < getFromLS.length; i++) {
                const currentObject = getFromLS[i];
                let template = '<tr>'; // Start a new row for each object

            for (let key in currentObject) {
                template += `<td>${currentObject[key]}</td>`;
            }

            template += '</tr>'; // End the row after all keys are processed

            let myTable = document.getElementById('ulTaskList');
            myTable.innerHTML += template;
            }
        }
    }
}