//navbar
const toggleButton = document.getElementById('toggleButton')
const navbarLinks = document.getElementById('navbarLinks')

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})
//about-count

let count = 0;
const countDisplay = document.getElementById("count-display");

const interval = setInterval(() => {
    count++;
    countDisplay.textContent = count;

    if (count >= 35) {
        clearInterval(interval);
    }

}, 100);

let count1 = 1;
const countDisplay1 = document.getElementById("count-display1");

const interval1 = setInterval(() => {
    count1++;
    countDisplay1.textContent = count1;

    if (count1 >= 357) {
        clearInterval(interval1);
    }

}, 8);

let count2 = 1;
const countDisplay2 = document.getElementById("count-display2");

const interval2 = setInterval(() => {
    count2++;
    countDisplay2.textContent = count2;

    if (count2 >= 57) {
        clearInterval(interval2);
    }

}, 60);

let count3 = 1;
const countDisplay3 = document.getElementById("count-display3");
3
const interval3 = setInterval(() => {
    count3++;
    countDisplay3.textContent = count3;

    if (count3 >= 486) {
        clearInterval(interval3);
    }

}, 5);

let count4 = 1;
const countDisplay4 = document.getElementById("count-display4");

const interval4 = setInterval(() => {
    count4++;
    countDisplay4.textContent = count4;

    if (count4 >= 46) {
        clearInterval(interval4);
    }

}, 75);


// JavaScript to control the progress bar
  // JavaScript to control the progress bars
function startAutoProgress() {
    let progress = 0;
    const progressBar = document.getElementById('progressBar');
    
    const interval = setInterval(() => {
      if (progress >= 90) {
        clearInterval(interval);
      } else {
        progress += 1;
        progressBar.style.width = `${progress}%`;
        progressBar.setAttribute('aria-valuenow', progress);
        progressBar.innerText = `${progress}%`;
      }
    }, 20);
}

function startAutoProgress2() {
    let progress2 = 0;
    const progressBar2 = document.getElementById('progressBar2');
    
    const interval2 = setInterval(() => {
      if (progress2 >= 85) {
        clearInterval(interval2);
      } else {
        progress2 += 1;
        progressBar2.style.width = `${progress2}%`;
        progressBar2.setAttribute('aria-valuenow', progress2);
        progressBar2.innerText = `${progress2}%`;
      }
    }, 20);
}

function startAutoProgress1() {
    let progress1 = 0;
    const progressBar1 = document.getElementById('progressBar1');
    
    const interval1 = setInterval(() => {
      if (progress1 >= 70) {
        clearInterval(interval1);
      } else {
        progress1 += 1;
        progressBar1.style.width = `${progress1}%`;
        progressBar1.setAttribute('aria-valuenow', progress1);
        progressBar1.innerText = `${progress1}%`;
      }
    }, 20);
}
window.onload = function() {
    startAutoProgress();
    startAutoProgress1();
    startAutoProgress2();
};
//FAQ
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
//Tab
// document.addEventListener("DOMContentLoaded", function () {
//     // Select tab buttons
//     const homeTab = new bootstrap.Tab(document.getElementById('home-tab'));
//     const profileTab = new bootstrap.Tab(document.getElementById('profile-tab'));
//     const contactTab = new bootstrap.Tab(document.getElementById('contact-tab'));
//     const managementTab = new bootstrap.Tab(document.getElementById('management-tab'));
//     const marketingTab = new bootstrap.Tab(document.getElementById('marketing-tab'));
//     const photographyTab = new bootstrap.Tab(document.getElementById('photography-tab'));

//     // Switch to 'Profile' tab after 3 seconds
//     setTimeout(() => {
//         profileTab.show();
//     }, 3000);

//     // Event listener to programmatically switch to 'Contact' tab
//     document.getElementById('home-tab').addEventListener('click', () => {
//         contactTab.show();
//     });
// });

//form validation
function formValidation(event) {
    event.preventDefault();
  
    let userName = document.getElementById("userName");
    let number = document.getElementById("number");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
  
    let usernameError = document.getElementById("usernameError");
    let numberError = document.getElementById("numberError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");
  
    let isValid = true;
    let regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
    let successMessage = document.getElementById("successMessage");
  
    if (userName.value.trim() == "") {
      usernameError.innerHTML = "First Name is valid";
      isValid = false;
    } else if (userName.value.legth < 5) {
      usernameError.innerHTML = "First Name length greater than 5";
    }
  
    if (number.value.trim() == "") {
      numberError.innerHTML = "First Number is Valid";
    } else if (number.value.length != 10) {
      numberError.innerHTML = "Number length greater than 10";
      isValid == false;
    } else if (number.value.length > 10) {
      numberError.innerHTML = "Number length less than 10";
      isValid == false;
    }
  
    if (!email.value.match(regex)) {
      emailError.innerHTML = "Email is not Valid";
    }
    if (password.value != userpass.value) {
      passwordError.innerHTML = "Password and confirm Password must be equl";
      isValid == false;
    }
  
    if (isValid) {
      successMessage.innerHTML = "Form Submitted Successfuly!!";
    }
  }
  