    function validateForm() {
        var fullName = document.getElementById('fullName').value.trim();
        var email = document.getElementById('email').value.trim();
        var phone = document.getElementById('phone').value.trim();
        var messageContent = document.getElementById('exampleFormControlTextarea1').value.trim();

        // בדיקת תקינות שם מלא
        if (fullName === "") {
            alert("יש למלא שם מלא.");
            return false;
        }

        // בדיקת תקינות דואר אלקטרוני
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("יש להזין כתובת דואר אלקטרוני חוקית.");
            return false;
        }

        // בדיקת תקינות מספר טלפון
        var phoneRegex = /^\d{2,3}-?\d{7}$/;
        if (!phoneRegex.test(phone)) {
            alert("יש להזין מספר טלפון חוקי (לדוגמה: 055-5555555).");
            return false;
        }

        // בדיקת תקינות תוכן ההודעה
        if (messageContent === "") {
            alert("יש למלא תוכן להודעה.");
            return false;
        }

        // אם הכל תקין
        return true;
    }

    document.querySelector('.contact-box').addEventListener('submit', function(event) {
        if (validateForm()) {
            document.querySelector('.contact-box').reset();
            alert("הטופס נשלח בהצלחה!");
        } else {
            event.preventDefault(); // מניעת שליחת הטופס אם אחד מהשדות אינו תקין
        }
    });