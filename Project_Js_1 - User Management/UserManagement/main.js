let usersArray = [];

let detailsInLs = localStorage.getItem('StudentsArray');;
if (detailsInLs) {
    usersArray = JSON.parse(detailsInLs);
    showInUI()
}
console.log(usersArray);

//* פונקציה שבונה את הפרטים וקוראת לפונקציה אחרת להכניס הכל למערך
function takeDetailesFromNewUser (event) {
    event.preventDefault();
    const userName = document.getElementById('userName').value;
    const userLastName = document.getElementById('userLastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    newUserToLS(userName, userLastName, email, password)
    userName.value = '';
    userLastName.value = '';
    email.value = '';
    password.value = '';
}

function newUserToLS (username, userLastName, email, password) {
    let msg = document.getElementById('registerBtn');
    if(username && userLastName && email && password) {
        usersArray.push({username, userLastName, email, password, connected: false})
        console.log(usersArray);
        saveArrayInLS()
        showInUI()
        msg.innerHTML = "הרישום בוצע בהצלחה";
        setTimeout(() => {
            msg.innerHTML = "הרשמה";
        }, 2000);
    } else {
        msg.innerHTML = "<div class='loader'></div>";
        setTimeout(() => {
            msg.innerHTML = "יש למלא את כל הפרטים בכדי להירשם";
        }, 2000);
        setTimeout(() => {
            msg.innerHTML = "הרשמה";
        }, 4000);
    }
}

function saveArrayInLS () {
    localStorage.setItem('StudentsArray', JSON.stringify(usersArray));
}

function showInUI() {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';
    usersArray.forEach((user, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.username}</td>
            <td>${user.userLastName}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td class="${user.connected ? "connect" : "disconnect"}">${user.connected ? "מחובר" : "לא מחובר"}</td>
            <td>
                <button class="delete btn" onclick="deleteUser(${index})">מחיקה</button>
                ${user.connected ? `<button class="logout btn" onclick="logOutUser(${index})">התנתק</button>` : ''}
            </td>
        `;
        usersList.appendChild(row);
    });
}

function takeDetailesFromLogIn (event) {
    event.preventDefault();
    const userName = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    checkingStudent(userName, password);
    this.reset();
};

function checkingStudent(name, pass) {
    const user = usersArray.find(user => user.username === name && user.password === pass);
    let msg = document.getElementById('loginBtn');
    if (user) {
        user.connected = true;
        showInUI();
        saveArrayInLS();
        msg.innerHTML = "התחברות בוצעה בהצלחה";
        setTimeout(() => {
            msg.innerHTML = "התחברות";
        }, 2000);

    } else {
        msg.innerHTML = "<div class='loader'></div>";
        setTimeout(() => {
            msg.innerHTML = "יש לנסות שוב או להירשם מחדש";
        }, 2000);
        setTimeout(() => {
            msg.innerHTML = "התחברות";
        }, 4000);
    }
}

function logOutUser(index) {
    const user = usersArray[index];
    user.connected = false;
    showInUI();
    saveArrayInLS();
}

function deleteUser(index) {
    usersArray.splice(index, 1);
    showInUI();
    saveArrayInLS();
}
//Buttons
document.getElementById('registerBtn').addEventListener('click', takeDetailesFromNewUser);

document.getElementById('login-form').addEventListener('submit', takeDetailesFromLogIn);


function registerBtn () {
    document.getElementById('login').style.display = "none";
    document.getElementById('register').style.display = "block";
    document.getElementById('login-btn').style.border = "none"
    document.getElementById('register-btn').style.border = "2px solid #000";
}

function loginBtn () {
    document.getElementById('register').style.display = "none";
    document.getElementById('login').style.display = "block";
    document.getElementById('login-btn').style.border = "2px solid #000";
    document.getElementById('register-btn').style.border = "none";
}