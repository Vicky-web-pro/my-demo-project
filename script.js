```javascript
/* ==============================
   JOB PORTAL JAVASCRIPT
   ============================== */

/* Page Load Message */
window.onload = function () {
    console.log("Job Portal Loaded Successfully");
};

/* ==============================
   JOB SEARCH FUNCTION
   ============================== */
function searchJobs() {
    let keyword = document.getElementById("jobKeyword").value.toLowerCase();
    let location = document.getElementById("jobLocation").value.toLowerCase();

    let jobs = document.getElementsByClassName("job-listing");

    for (let i = 0; i < jobs.length; i++) {
        let jobText = jobs[i].innerText.toLowerCase();

        if (jobText.includes(keyword) && jobText.includes(location)) {
            jobs[i].style.display = "block";
        } else {
            jobs[i].style.display = "none";
        }
    }
}

/* ==============================
   APPLY JOB FUNCTION
   ============================== */
function applyJob(jobTitle) {
    alert("You have successfully applied for the position: " + jobTitle);
}

/* ==============================
   LOGIN VALIDATION (DEMO)
   ============================== */
function validateLogin() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please enter username and password");
        return false;
    }

    alert("Login Successful (Demo)");
    return true;
}

/* ==============================
   REGISTER VALIDATION (DEMO)
   ============================== */
function validateRegister() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("regPassword").value;

    if (name === "" || email === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    alert("Registration Successful (Demo)");
    return true;
}
```
