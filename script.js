// ===============================
// PAGE SWITCHING
// ===============================

function showPage(pageId) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
}


// ===============================
// YES BUTTON
// ===============================

function sayYes() {

    showPage("success");

    createHearts();
}


// ===============================
// HEART CELEBRATION
// ===============================

function createHearts() {

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("div");

        heart.innerHTML = Math.random() > 0.5 ? "♡" : "✦";

        heart.style.position = "fixed";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.top =
            Math.random() * 100 + "vh";

        heart.style.fontSize =
            12 + Math.random() * 25 + "px";

        heart.style.color =
            "rgba(255,255,255,0.7)";

        heart.style.pointerEvents = "none";

        heart.style.zIndex = "9999";

        heart.style.animation =
            "celebrate 3.5s ease forwards";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 3500);
    }
}


// ===============================
// PLAYFUL MAYBE BUTTON
// ===============================

const maybeButton =
    document.getElementById("maybeButton");


maybeButton.addEventListener(
    "mouseenter",
    moveMaybeButton
);


maybeButton.addEventListener(
    "touchstart",
    moveMaybeButton
);


function moveMaybeButton(event) {

    event.preventDefault();

    const x =
        (Math.random() * 140) - 70;

    const y =
        (Math.random() * 80) - 40;

    maybeButton.style.transform =
        `translate(${x}px, ${y}px)`;
}


// ===============================
// CELEBRATION ANIMATION
// ===============================

const celebrationStyle =
document.createElement("style");

celebrationStyle.innerHTML = `

@keyframes celebrate {

    0% {
        transform: translateY(0) scale(0.5) rotate(0deg);
        opacity: 0;
    }

    20% {
        opacity: 1;
    }

    100% {
        transform:
            translateY(-180px)
            scale(1.2)
            rotate(25deg);

        opacity: 0;
    }
}

`;

document.head.appendChild(celebrationStyle);
