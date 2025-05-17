document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            // Reset error messages
            document.querySelectorAll(".error").forEach(el => el.textContent = "");

            let valid = true;

            const fname = document.getElementById("firstName").value.trim();
            const lname = document.getElementById("lastName").value.trim();
            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();
            const supportReason = document.getElementById("supportReason").value.trim();
            const sex = document.querySelector('input[name="sex"]:checked');

            if (!fname) {
                document.getElementById("firstNameError").textContent = "Required";
                valid = false;
            }

            if (!lname) {
                document.getElementById("lastNameError").textContent = "Required";
                valid = false;
            }

            if (!email) {
                document.getElementById("emailError").textContent = "Required";
                valid = false;
            }

            if (!password) {
                document.getElementById("passwordError").textContent = "Required";
                valid = false;
            }

            if (!supportReason) {
                document.getElementById("supportReasonError").textContent = "Required";
                valid = false;
            }

            if (!sex) {
                document.getElementById("sexError").textContent = "Required";
                valid = false;
            }

            if (valid) {
                // Save data to localStorage
                localStorage.setItem("fName", fname);
                localStorage.setItem("lName", lname);
                localStorage.setItem("email", email);
                localStorage.setItem("sex", sex.value);
                localStorage.setItem("supportReason", supportReason);

                // Redirect to profile page
                window.location.href = "proj_profile_chua.html";
            }
        });
    }

    // Profile page data population
    const pfname = document.getElementById("profileFirstName");
    if (pfname) {
        document.getElementById("profileFirstName").textContent = localStorage.getItem("fName") || "N/A";
        document.getElementById("profileLastName").textContent = localStorage.getItem("lName") || "N/A";
        document.getElementById("profileEmail").textContent = localStorage.getItem("email") || "N/A";
        document.getElementById("profileSex").textContent = localStorage.getItem("sex") || "N/A";
        document.getElementById("profileSupportReason").textContent = localStorage.getItem("supportReason") || "N/A";

        const mainButton = document.getElementById("main");
        if (mainButton) {
            mainButton.addEventListener("click", function () {
                const fname = localStorage.getItem("fName") || "there";
                alert(`Welcome, ${fname}! Allow us to present to you our Website!`);
                window.location.href = "Mattheo's Website.html";
            });
        }
    }
});