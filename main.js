/* =====================================================
   THOMAS
   MAIN JAVASCRIPT ENGINE
   STABLE / CLEAN VERSION
===================================================== */


/* =====================================================
   ELEMENT REFERENCES
===================================================== */

const electronLayer =
    document.getElementById("electronLayer");

const sparkLayer =
    document.getElementById("sparkLayer");

const systemButton =
    document.getElementById("systemButton");

const emergencyButton =
    document.getElementById("emergencyButton");

const thomasCursor =
    document.getElementById("thomasCursor");

const thomasLetters =
    document.querySelectorAll(".thomas-letter");

const lamp =
    document.querySelector(".lamp-bulb");

const lampGlow =
    document.querySelector(".lamp-glow");


/* =====================================================
   MOUSE STATE
===================================================== */

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;


/* =====================================================
   LAMP STATE
===================================================== */

let lampIntensity = 1;


/* =====================================================
   ELECTRON COLORS
===================================================== */

const electronColors = [
    "#168CFF",
    "#7038FF",
    "#B42CFF"
];

function updateParticleLayerHeight() {

    const pageHeight =
        document.documentElement.scrollHeight;

    if (electronLayer) {
        electronLayer.style.height =
            `${pageHeight}px`;
    }

    if (sparkLayer) {
        sparkLayer.style.height =
            `${pageHeight}px`;
    }
}

updateParticleLayerHeight();

window.addEventListener(
    "resize",
    updateParticleLayerHeight
);
/* =====================================================
   CREATE NEON ELECTRONS
===================================================== */

function createElectrons() {

    if (!electronLayer) {
        return;
    }

    const total = 90;

    for (let i = 0; i < total; i++) {

        const electron =
            document.createElement("span");

        electron.className = "electron";


        const size =
            1.5 +
            Math.random() * 3.5;


        const x0 =
            Math.random() * 80 - 40;

        const x1 =
            Math.random() * 160 - 80;

        const x2 =
            Math.random() * 240 - 120;

        const x3 =
            Math.random() * 320 - 160;

        const x4 =
            Math.random() * 400 - 200;


        const duration =
            2.2 +
            Math.random() * 3.5;

        const delay =
            Math.random() * 5;


        const color =
            electronColors[
                Math.floor(
                    Math.random() *
                    electronColors.length
                )
            ];


        electron.style.setProperty(
            "--size",
            `${size}px`
        );

        electron.style.setProperty(
            "--x0",
            `${x0}px`
        );

        electron.style.setProperty(
            "--x1",
            `${x1}px`
        );

        electron.style.setProperty(
            "--x2",
            `${x2}px`
        );

        electron.style.setProperty(
            "--x3",
            `${x3}px`
        );

        electron.style.setProperty(
            "--x4",
            `${x4}px`
        );

        electron.style.setProperty(
            "--duration",
            `${duration}s`
        );

        electron.style.setProperty(
            "--delay",
            `${delay}s`
        );


        electron.style.color = color;


 electron.style.left =
    `${25 + Math.random() * 50}%`;

electron.style.bottom =
    "0px";

        electronLayer.appendChild(
            electron
        );
    }
}


/* =====================================================
   CREATE FIRE SPARKS
===================================================== */

function createSparks() {

    if (!sparkLayer) {
        return;
    }

    const total = 60;

    for (let i = 0; i < total; i++) {

        const spark =
            document.createElement("span");

        spark.className = "spark";


        const size =
            1 +
            Math.random() * 3.5;


        const trail =
            7 +
            Math.random() * 24;


        const duration =
            0.8 +
            Math.random() * 2.2;

        const delay =
            Math.random() * 4;


        const blastX =
            Math.random() * 100 - 50;

        const x1 =
            Math.random() * 220 - 110;

        const x2 =
            Math.random() * 420 - 210;

        const x3 =
            Math.random() * 600 - 300;

        const x4 =
            Math.random() * 760 - 380;

        const x5 =
            Math.random() * 900 - 450;


        spark.style.setProperty(
            "--size",
            `${size}px`
        );

        spark.style.setProperty(
            "--trail",
            `${trail}px`
        );

        spark.style.setProperty(
            "--duration",
            `${duration}s`
        );

        spark.style.setProperty(
            "--delay",
            `${delay}s`
        );

        spark.style.setProperty(
            "--blast-x",
            `${blastX}px`
        );

        spark.style.setProperty(
            "--x1",
            `${x1}px`
        );

        spark.style.setProperty(
            "--x2",
            `${x2}px`
        );

        spark.style.setProperty(
            "--x3",
            `${x3}px`
        );

        spark.style.setProperty(
            "--x4",
            `${x4}px`
        );

        spark.style.setProperty(
            "--x5",
            `${x5}px`
        );

        spark.style.setProperty(
            "--trail-angle",
            `${Math.random() * 50 - 25}deg`
        );


        spark.style.setProperty(
            "--left",
            `${35 + Math.random() * 30}%`
        );

        spark.style.setProperty(
            "--bottom",
            `${-10 - Math.random() * 30}px`
        );


        sparkLayer.appendChild(
            spark
        );
    }
}


/* =====================================================
   SYSTEM BUTTON
===================================================== */

if (systemButton) {

    systemButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "system-active"
            );


            const active =
                document.body.classList.contains(
                    "system-active"
                );


            if (active) {

                systemButton.innerHTML = `
                    <span class="button-light"></span>
                    SYSTEM ONLINE
                `;

            } else {

                systemButton.innerHTML = `
                    <span class="button-light"></span>
                    روشن کردن سیستم
                `;
            }
        }
    );
}


/* =====================================================
   RGB + CUSTOM CURSOR
===================================================== */

document.addEventListener(
    "mousemove",
    (event) => {

        mouseX = event.clientX;
        mouseY = event.clientY;


        /* ---------------------------------------------
           RGB LIGHT POSITION
        --------------------------------------------- */

        document.body.style.setProperty(
            "--mouse-x",
            `${mouseX}px`
        );

        document.body.style.setProperty(
            "--mouse-y",
            `${mouseY}px`
        );


        /* ---------------------------------------------
           RGB HUE
        --------------------------------------------- */

        const hue =
            Math.round(
                (
                    mouseX /
                    window.innerWidth
                ) * 360
            );


        document.body.style.setProperty(
            "--rgb-hue",
            hue
        );


        document.body.classList.add(
            "rgb-flashlight-active"
        );


        /* ---------------------------------------------
           CUSTOM CURSOR
        --------------------------------------------- */

        document.body.classList.add(
            "cursor-visible"
        );


        /* ---------------------------------------------
           LETTER RGB RESPONSE
        --------------------------------------------- */

        const color =
            hslToRgb(
                hue,
                100,
                65
            );


        thomasLetters.forEach(
            (letter) => {

                const rect =
                    letter.getBoundingClientRect();


                const centerX =
                    rect.left +
                    rect.width / 2;


                const centerY =
                    rect.top +
                    rect.height / 2;


                const distance =
                    Math.hypot(
                        mouseX - centerX,
                        mouseY - centerY
                    );


                const influence =
                    Math.max(
                        0,
                        1 -
                        distance / 260
                    );


                const r =
                    238 +
                    (
                        color.r - 238
                    ) *
                    influence;


                const g =
                    238 +
                    (
                        color.g - 238
                    ) *
                    influence;


                const b =
                    238 +
                    (
                        color.b - 238
                    ) *
                    influence;


                letter.style.setProperty(
                    "--rgb-r",
                    r
                );

                letter.style.setProperty(
                    "--rgb-g",
                    g
                );

                letter.style.setProperty(
                    "--rgb-b",
                    b
                );
            }
        );
    }
);


/* =====================================================
   HSL → RGB
===================================================== */

function hslToRgb(h, s, l) {

    s /= 100;
    l /= 100;


    const k =
        n =>
            (
                n +
                h / 30
            ) % 12;


    const a =
        s *
        Math.min(
            l,
            1 - l
        );


    const f =
        n =>
            l -
            a *
            Math.max(
                -1,
                Math.min(
                    k(n) - 3,
                    Math.min(
                        9 - k(n),
                        1
                    )
                )
            );


    return {

        r:
            Math.round(
                255 * f(0)
            ),

        g:
            Math.round(
                255 * f(8)
            ),

        b:
            Math.round(
                255 * f(4)
            )
    };
}


/* =====================================================
   CUSTOM CURSOR
===================================================== */

function animateThomasCursor() {

    cursorX +=
        (
            mouseX -
            cursorX
        ) * 0.18;


    cursorY +=
        (
            mouseY -
            cursorY
        ) * 0.18;


    if (thomasCursor) {

        thomasCursor.style.left =
            `${cursorX}px`;

        thomasCursor.style.top =
            `${cursorY}px`;
    }


    requestAnimationFrame(
        animateThomasCursor
    );
}


animateThomasCursor();


/* =====================================================
   CURSOR LEAVE
===================================================== */

document.addEventListener(
    "mouseleave",
    () => {

        document.body.classList.remove(
            "cursor-visible"
        );

        document.body.classList.remove(
            "rgb-flashlight-active"
        );
    }
);


/* =====================================================
   LAMP POWER ENGINE
===================================================== */

function setLampIntensity(value) {

    lampIntensity =
        Math.max(
            0.05,
            Math.min(
                1,
                value
            )
        );


    document.body.style.setProperty(
        "--lamp-intensity",
        lampIntensity
    );


    if (lamp) {

        lamp.style.opacity =
            lampIntensity;
    }


    if (lampGlow) {

        lampGlow.style.opacity =
            lampIntensity;
    }
}


/* =====================================================
   LAMP → REAL PAGE SCROLL
===================================================== */

function updateLampFromScroll() {

    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight;


    const viewportHeight =
        window.innerHeight;


    const maxScroll =
        documentHeight -
        viewportHeight;


    if (maxScroll <= 0) {

        return;
    }


    const scrollProgress =
        Math.min(
            1,
            Math.max(
                0,
                scrollTop /
                maxScroll
            )
        );


    const intensity =
        1 -
        (
            scrollProgress *
            0.95
        );


    setLampIntensity(
        intensity
    );
}


window.addEventListener(
    "scroll",
    updateLampFromScroll,
    {
        passive: true
    }
);


/* =====================================================
   LAMP → MOUSE WHEEL FALLBACK
   Works even when page has little/no scroll
===================================================== */

window.addEventListener(
    "wheel",
    (event) => {

        const maxScroll =
            document.documentElement.scrollHeight -
            window.innerHeight;


        /*
         * اگر صفحه واقعاً قابل اسکرول باشد،
         * کنترل اصلی را Scroll انجام می‌دهد.
         */

        if (maxScroll > 0) {
            return;
        }


        const sensitivity = 0.0015;


        lampIntensity -=
            event.deltaY *
            sensitivity;


        setLampIntensity(
            lampIntensity
        );
    },
    {
        passive: true
    }
);


/* =====================================================
   EMERGENCY MODE
===================================================== */

if (emergencyButton) {

    emergencyButton.addEventListener(
        "click",
        () => {

            document.body.classList.toggle(
                "emergency-mode"
            );


            const active =
                document.body.classList.contains(
                    "emergency-mode"
                );


            const textElement =
                emergencyButton.querySelector(
                    ".emergency-button-text"
                );


            if (textElement) {

                textElement.textContent =
                    active
                        ? "EMERGENCY ACTIVE"
                        : "EMERGENCY";

            } else {

                emergencyButton.innerHTML =
                    active
                        ? `
                            <span class="emergency-light"></span>
                            EMERGENCY ACTIVE
                          `
                        : `
                            <span class="emergency-light"></span>
                            EMERGENCY MODE
                          `;
            }
        }
    );
}


/* =====================================================
   INITIAL STATE
===================================================== */

createElectrons();

createSparks();

setLampIntensity(1);

updateLampFromScroll();


/* =====================================================
   THOMAS ENGINE READY
===================================================== */

console.log(
    "THOMAS SYSTEM — ENGINE ONLINE"
);

async function loadThomasSystem() {
    try {
        const response = await fetch("api.php");

        if (!response.ok) {
            throw new Error("PHP API response failed");
        }

        const data = await response.json();

        console.log("THOMAS PHP API:", data);

    } catch (error) {
        console.error("THOMAS PHP API ERROR:", error);
    }
}

loadThomasSystem();

async function updateThomasStatus() {
    try {
        const response = await fetch("api.php");

        if (!response.ok) {
            throw new Error("HTTP " + response.status);
        }

        const data = await response.json();

        const statusValues = document.querySelectorAll(
    ".system-status .status-value"
);

if (statusValues.length >= 4) {

    statusValues[0].textContent = data.status;
    statusValues[1].textContent = data.power;
    statusValues[2].textContent = data.core;
    statusValues[3].textContent = data.server_time;

}
		const serverTime = document.getElementById("serverTime");
		
		

if (serverTime) {
    serverTime.textContent = data.server_time;
}
		const statusDots = document.querySelectorAll(
    ".system-status .status-dot"
);

if (statusDots.length >= 3) {
    statusDots[0].classList.toggle(
        "status-online",
        data.status === "ONLINE"
    );

    statusDots[1].classList.toggle(
        "status-online",
        data.power === "STABLE"
    );

    statusDots[2].classList.toggle(
        "status-online",
        data.core === "100%"
    );
console.log(
        "THOMAS DOT CLASSES:",
        [...statusDots].map(dot => dot.className)
    );		
	
}
		
        console.log("THOMAS STATUS UPDATED:", data);

    } catch (error) {
        console.error("THOMAS STATUS ERROR:", error);
    }
}

updateThomasStatus();

function updateEmergencyRails() {
    const pageHeight = document.documentElement.scrollHeight;

    document.querySelectorAll('.emergency-rail').forEach(rail => {
        rail.style.height = `${pageHeight}px`;
    });
}

updateEmergencyRails();

window.addEventListener('resize', updateEmergencyRails);/* THOMAS GENERATOR ENGINE */

const generator =
    document.getElementById("thomasGenerator");

const generatorBlades =
    document.querySelectorAll(".generator-blade");


function startGenerator() {

    if (!generator) {
        return;
    }

    generator.classList.add(
        "generator-active"
    );

    console.log(
        "THOMAS GENERATOR — ONLINE"
    );
}


function activateGeneratorBlades() {

    generatorBlades.forEach(
        (blade, index) => {

            blade.style.setProperty(
                "--blade-index",
                index
            );

        }
    );

    setTimeout(
        startGenerator,
        300
    );
}


activateGeneratorBlades();