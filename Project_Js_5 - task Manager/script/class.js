export class TaskUI {
    details;

    constructor(details) {
        this.details = details;
    }

    createTaskElement() {
        let template = `
            <td>${this.details}</td>
        `;

        let myTable = document.getElementById('ulTaskList');
        myTable.innerHTML += template;
    }

    // Add code here for delete and end task buttons
    finishTask() { }

    deleteElement() {    }

    deleteAll() {
        localStorage.clear();
        document.getElementById("details").value = "";
        document.getElementById("ulTaskList").innerHTML = "";
    }
}