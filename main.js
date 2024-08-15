let button = document.getElementById("button");

button.onclick = () => {

    if (button.classList.contains("fa-bars-staggered")) {
        button.classList.replace("fa-bars-staggered", "fa-square-xmark");
        document.querySelector("header nav").classList.add("slip");
    } else {
        button.classList.replace("fa-square-xmark", "fa-bars-staggered");
        document.querySelector("header nav").classList.remove("slip");
    };

};

window.onscroll = () => {

    button.classList.replace("fa-square-xmark", "fa-bars-staggered");
    document.querySelector("header nav").classList.remove("slip");

};

let boxes = document.querySelectorAll(".section-6 .box");
let currentBox = 0;

function prev() {

    boxes[currentBox].classList.remove("act");

    currentBox = (currentBox - 1 + boxes.length) % boxes.length; // [-1 + 6] = 5 [5 % 6] = 1

    boxes[currentBox].classList.add("act");
    
};

function next() {

    boxes[currentBox].classList.remove("act");

    currentBox = (currentBox + 1) % boxes.length; // [0 + 1] = 1 [1 % 6] = 1

    boxes[currentBox].classList.add("act");
    
};

document.querySelector("footer").prepend(myInformation())

function myInformation(myInfo) {

    myInfo = document.createElement("div");
    myInfo.className = `my-info`;

    let xLink = document.createElement("a");
    xLink.href = "https://twitter.com/AhmadAlhadidi95";
    xLink.target = "_blank";
    xLink.rel = "noopener noreferrer";
    xLink.title = "Visit my X";

    let xIcon = document.createElement("i");
    xIcon.className = `fa-brands fa-x-twitter`;

    xLink.appendChild(xIcon);

    let myWebsiteLink = document.createElement("a");
    myWebsiteLink.href = "https://alhadidi95.netlify.app";
    myWebsiteLink.target = "_blank";
    myWebsiteLink.rel = "noopener noreferrer";
    myWebsiteLink.title = `Visit my website`;

    let myLogo = document.createElement("img");
    myLogo.src = `/images/My-sign.png`;
    myLogo.alt = `My-sign`;
    myLogo.style.width = `40px`;

    myWebsiteLink.appendChild(myLogo);

    let githubLink = document.createElement("a");
    githubLink.href = "https://github.com/AhmadAlhadidi95";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.title = "Visit my Github";

    let githubIcon = document.createElement("i");
    githubIcon.className = `fa-brands fa-github`;

    githubLink.appendChild(githubIcon);

    myInfo.append(xLink, myWebsiteLink, githubLink);

    return myInfo;

};