let alluser = JSON.parse(localStorage.getItem('users')) || [];

function signup() {
    let getusername = document.getElementById("username");
    let getemail = document.getElementById("email");
    let getPassword = document.getElementById("password");
    let getconfirm = document.getElementById("confirm-password");
     
    if (getPassword.value !== getconfirm.value) {
        alert("Passwords do not match");
        return;
    }

    let obj = {
        user: getusername.value,
        email: getemail.value,
        password: getPassword.value
    };

    alluser.push(obj);
    localStorage.setItem('users', JSON.stringify(alluser));

    getusername.value = '';
    getemail.value = '';
    getPassword.value = '';
    getconfirm.value = '';
   
     
}
function login() {
     
    let getEmail = document.getElementById('emaill').value;
    let getPassword = document.getElementById('passwordl').value;

    let foundUser = alluser.find(user => user.email === getEmail && user.password === getPassword);

    if (foundUser) {
        if (getEmail === 'admin@gmail.com' && getPassword === 'adminadmin') {
            alert('admin login success');
            location.href = "./admin.html";
        } 
        else {
            alert('user login success');
            location.href = "user.html";
        }
    } else {
        alert('Invalid email or password');
    }

}


