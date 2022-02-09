function detectMob() {
  const toMatch = [
    /Android/i,
    /webOS/i,
    /iPhone/i,
    /iPad/i,
    /iPod/i,
    /BlackBerry/i,
    /Windows Phone/i,
  ];

  return toMatch.some((toMatchItem) => {
    return navigator.userAgent.match(toMatchItem);
  });
}
function hideMenu() {
  document.querySelector("nav .first").classList.remove("first2");
  document.querySelector("nav .second").classList.remove("second2");
  document.querySelector("nav .third").classList.remove("third2");
  document.querySelector("nav").classList.remove("activenav");
  document.querySelector("nav").classList.add("nonactivenav");
  document.querySelector(".nonactivenav ul").style.opacity = "0";
  document.querySelector(".nonactivenav #lang").style.opacity = "0";
  if (document.querySelector("nav").classList.contains("activenavmobile")) {
    document.querySelector("nav").classList.remove("activenavmobile");
  }
}
document.querySelector("#hamburger").addEventListener("click", function () {
  if (document.querySelector("nav").classList.contains("activenav")) {
    hideMenu();
  } else {
    document.querySelector("nav .first").classList.add("first2");
    document.querySelector("nav .second").classList.add("second2");
    document.querySelector("nav .third").classList.add("third2");
    document.querySelector("nav").classList.add("activenav");
    document.querySelector("nav").classList.remove("nonactivenav");
    document.querySelector(".activenav ul").style.transition = "all .3s";
    document.querySelector(".activenav #lang").style.transition = "all .6s";
    window.setTimeout(function () {
      document.querySelector(".activenav ul").style.opacity = "1";
      document.querySelector(".activenav #lang").style.opacity = "1";
    }, 800);
    if (width < 1024) {
      document.querySelector("nav").classList.add("activenavmobile");
    }
  }
});
function clean(node) {
  for (var n = 0; n < node.childNodes.length; n++) {
    var child = node.childNodes[n];
    if (
      child.nodeType === 8 ||
      (child.nodeType === 3 && !/\S/.test(child.nodeValue))
    ) {
      node.removeChild(child);
      n--;
    } else if (child.nodeType === 1) {
      clean(child);
    }
  }
}
clean(document.body);
const plVersion = [
  "Strona główna",
  "O mnie",
  "Poznane technologie",
  "Projekty",
  "Kontakt",
  "en",
  " / ",
  "pl",
  "<CZEŚĆ />",
  "Paweł Poręba - portfolio",
  "O MNIE",
  "Opis",
  "Nazywam się Paweł Poręba.",
  "Mam dwadzieścia lat i jestem na pierwszym roku studiów, na kierunku Mikro- i Nanotechnologie w Biofizyce, w Akademi Górniczo-Hutniczej w Krakowie. ",
  "Zacząłem programować pięć lat temu, a odtrzech lat staram się robić to regularnie. Na początku uczyłem się w C++, a kiedy opanowałem jego podstawy postanowiłem dodać do nauki kolejno HTML, CSS, JavaScript (wraz z React, React Native oraz Node.js), Javy (przede wszystkim Android Studio), PHP oraz MySQL. ",
  "Obecnie szukam stażu jako młodszy programista JavaScript",
  "POZNANE TECHNOLOGIE",
  "Znam technologię CSS, umiem stworzyć responsywną stronę internetową",
  "Potrafię pisać style w SASS",
  "Potrafię napisać nieco bardziej skomplikowane skrypty do strony internetowej",
  "Znam podstawy React, stworzyłem kilka projektów w tej technologii",
  "Potrafię stworzyć backend w Node.js oraz express.js, umiem napisać REST API oraz stworzyć funkcje CRUD",
  "Znam składnię języka Java, korzystałem z niej głównie przy projektach tworzonych w Android Studio",
  "Potrafię tworzyć aplikacje na Androida z wykorzystaniem narzędzia Android Studio oraz technologii React Native",
  "Znam język PHP, umiem napisać podstawowe skrypty backendowe",
  "Umiem zarządzać bazami danych MySQL, oraz pisać kwerendy w języku SQL",
  "Potrafię tworzyć oraz zarządzać bazami MongoDB, głównie z wykorzystaniem biblioteki mongoose do Node.js",
  "Posiadam dyplom z zaawansowanego administrowania systemem Linix Ubuntu Desktop",
  "Korzystam z podstawowych narzędzi oferowanych przez system kontroli wersji Git",
  "PROJEKTY",
  "Aplikacja Keep Healthy, PWA na konkurs",
  "Wykorzystane technologie i narzędzia: ",
  "HTML, CSS, JS, Firebase, Firestore",
  "Repozytorium",
  "Aplikacja pogodowa, napisana na krótkim hackathonie w firmie SWM",
  "Wykorzystane technologie i narzędzia: ",
  "React Native",
  "Repozytorium",
  "Mój pierwszy projekt - Tetris",
  "Wykorzystane technologie i narzędzia: ",
  "HTML, CSS, JavaScript, PHP, MySQL",
  "Live",
  "Repozytorium",
  "Tetris 3D, stworzony na szkolny konkurs aplikacji w C#, w którym zająłem 3 miejsce",
  "Wykorzystane technologie i narzędzia: ",
  "Unity, C#",
  "Repozytorium",
  "Projekt mojego portfolio",
  "Wykorzystane technologie i narzędzia: ",
  "HTML, CSS, JavaScript, PHP",
  "Repozytorium",
  "Aplikacja Guess The Footballer na androida",
  "Wykorzystane technologie i narzędzia: ",
  "Java, Android Studio",
  "Repozytorium",
  "Zdalnie sterowany pojazd, stworzony razem z bratem",
  "Wykorzystane technologie i narzędzia: ",
  "C",
  "Pobierz plik",
  "KONTAKT",
  "Znajdź mnie na:",
  "Lub zadzwoń: 788 550 097",
  "Pobierz CV",
];
const enVersion = [
  "Home",
  "About me",
  "Learned technologies",
  "Projects",
  "Contact",
  "en",
  " / ",
  "pl",
  "<HELLO />",
  "Paweł Poręba - portfolio",
  "ABOUT ME",
  "Description",
  "My name's Paweł Poręba.",
  "I'm twenty years old and I'm a first-year student of Micro and Nanotechnologies in Biophysics, at the AGH University of Science and Technology, Krakow",
  "I've started programing 5 years ago and I've been doing it regulary for a three years now. At first I learned C++, and then HTML, CSS, JavaScript (React, React Native and Node.js), Java (Android Studio), PHP, MySQL and MongoDB",
  "I am currently looking for an internship as a junior JavaScript programmer",
  "LEARNED TECHNOLOGIES",
  "I know CSS, I can create a responsive website",
  "I can create styles in SASS",
  "I can write a bit more complicated scripts for a website",
  "I know the basics of React, I've created several projects in this technology",
  "I can write back-end scripts in Node.js and express.js, i can create REST API and use CRUD functions",
  "I know the Java language syntax, I used it mainly for projects created in Android Studio",
  "I can create Android applications using the Android Studio and React Native",
  "I know PHP, I can write basic backend scripts",
  "I can manage MySQL databases and write queries in SQL",
  "I can create and manage MongoDB databases, mainly using the mongoose library for node.js",
  "I have a diploma in advanced administration of Linux Ubuntu Desktop",
  "I use the basic tools offered by the Git version control system",
  "PROJECTS",
  "Keep Healthy app, PWA for the competition",
  "Technologies and tools used: ",
  "HTML, CSS, JavaScript, Firebase, Firestore",
  "Repository",
  "A weather app, written during a short hackathon at SWM company",
  "Technologies and tools used: ",
  "React Native",
  "Repository",
  "My first project - Tetris",
  "Technologies and tools used: ",
  "HTML, CSS, JavaScript, PHP, MySQL",
  "Live",
  "Repository",
  "Tetris 3D, created for a school competition in c#, in which i took 3rd place",
  "Technologies and tools used: ",
  "Unity, C#",
  "Repository",
  "My portfolio",
  "Technologies and tools used: ",
  "HTML, CSS, JavaScript, PHP",
  "Repository",
  "Guess The Footballer application for android",
  "Technologies and tools used: ",
  "Java, Android Studio",
  "Repository",
  "A remote-controlled vehicle, created together with my brother",
  "Technologies and tools used: ",
  "C",
  "Download the file",
  "CONTACT",
  "Check my media:",
  "Or call me: 788 550 097",
  "Download CV",
];
function textNodesUnder(el) {
  var n,
    a = [],
    walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
  while ((n = walk.nextNode())) {
    a.push(n);
  }
  return a;
}
const nodes = textNodesUnder(document.body);
let langPrevState = false;
document.getElementById("en").addEventListener("click", function () {
  if (!langPrevState) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].nodeValue = enVersion[i];
    }
    if (isMobile) {
      let body = document.body,
        html = document.documentElement;
      height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      c.style.height = height;
    }
    document
      .querySelector("#contact form input[type='text']")
      .setAttribute("placeholder", "subject");
    document
      .querySelector("#contact form textarea")
      .setAttribute("placeholder", "message");
    document
      .querySelector("#contact form input[type='submit']")
      .setAttribute("value", "Send");
    document
      .querySelector("footer .buttonin a")
      .setAttribute("href", "assets/Pawel-Poreba-CV-en.pdf");
    document
      .querySelector("footer .buttonin a")
      .setAttribute("download", "Pawel-Poreba-CV-en.pdf");
    langPrevState = true;
    hideMenu();
  }
});
document.getElementById("pl").addEventListener("click", function () {
  if (langPrevState) {
    for (let i = 0; i < nodes.length; i++) {
      nodes[i].nodeValue = plVersion[i];
    }
    if (isMobile) {
      let body = document.body,
        html = document.documentElement;
      height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      );
      c.style.height = height;
    }
    document
      .querySelector("#contact form input[type='text']")
      .setAttribute("placeholder", "temat");
    document
      .querySelector("#contact form textarea")
      .setAttribute("placeholder", "wiadomość");
    document
      .querySelector("#contact form input[type='submit']")
      .setAttribute("value", "Prześlij");
    document
      .querySelector("footer .buttonin a")
      .setAttribute("href", "assets/Pawel-Poreba-CV-pl.pdf");
    document
      .querySelector("footer .buttonin a")
      .setAttribute("download", "Pawel-Poreba-CV-pl.pdf");
    langPrevState = false;
    hideMenu();
  }
});
let skills = document.querySelectorAll(".skill");
for (let i = 0; i < skills.length; i++) {
  skills[i].style.borderColor =
    "rgb(0," +
    Math.round(25 + (230 / skills.length) * i) +
    "," +
    Math.round(12 + (116 / skills.length) * i) +
    ")";
}
function smoothScroll(target, duration) {
  let distance = target.getBoundingClientRect().top;
  let startPos = window.pageYOffset;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    let timeElapsed = currentTime - startTime;
    let run = ease(timeElapsed, startPos, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }
  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  requestAnimationFrame(animation);
}
document
  .querySelector(".navi .buttonin:nth-child(1) li")
  .addEventListener("click", function () {
    smoothScroll(document.querySelector("header"), 1000);
    hideMenu();
  });
document
  .querySelector(".navi .buttonin:nth-child(2) li")
  .addEventListener("click", function () {
    smoothScroll(document.querySelector("#about"), 1000);
    hideMenu();
  });
document
  .querySelector(".navi .buttonin:nth-child(3) li")
  .addEventListener("click", function () {
    smoothScroll(document.querySelector("#skills"), 1000);
    hideMenu();
  });
document
  .querySelector(".navi .buttonin:nth-child(4) li")
  .addEventListener("click", function () {
    smoothScroll(document.querySelector("#projects"), 1000);
    hideMenu();
  });
document
  .querySelector(".navi .buttonin:nth-child(5) li")
  .addEventListener("click", function () {
    smoothScroll(document.querySelector("footer"), 1000);
    hideMenu();
  });
document.getElementById("scrollup").addEventListener("click", function () {
  smoothScroll(document.querySelector("header"), 1000);
});
let isMobile = detectMob();
const c = document.getElementById("can");
let cursorX = -1000;
let cursorY = -1000;
if (!isMobile) {
  document.body.addEventListener("mousemove", (e) => {
    // ustawia zmienne kursorowe
    cursorX = e.clientX;
    cursorY = e.clientY;
  });
  document.body.addEventListener("mouseout", (e) => {
    // wyrzuca zmienne kursorowe na takie co nie przeszkadzają
    cursorX = -1000;
    cursorY = -1000;
  });
}
let width;
let height;
if (!isMobile) {
  width = window.innerWidth;
  height = window.innerHeight;
} else {
  let body = document.body,
    html = document.documentElement;
  height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  );
  width = Math.max(
    body.scrollWidth,
    body.offsetWidth,
    html.clientWidth,
    html.scrollWidth,
    html.offsetWidth
  );
  c.style.width = width;
  c.style.height = height;
  c.style.position = "absolute";
}
const windowFill = () => {
  // wypełnia canvas piłkami
  balls.forEach((cell) => {
    ctx.beginPath();
    ctx.fillStyle = cell[3];
    ctx.arc(cell[0], cell[1], cell[2], 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  });
};
const ctx = c.getContext("2d");
if (!isMobile) {
  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
} else {
  ctx.canvas.width = width;
  ctx.canvas.height = height;
}
const balls = [];
for (i = 0; i < 50; i++) {
  //tworzy piłki
  balls.push([
    Math.ceil(Math.random() * width),
    Math.ceil(Math.random() * height),
    Math.ceil(Math.random() * 80),
    "rgba(0," +
      (Math.ceil(Math.random() * 153) + 102) +
      "," +
      (Math.ceil(Math.random() * 153) + 102) +
      ",0.13)",
    Math.random() * 2 - 1,
    Math.random() * 2 - 1,
  ]);
}
window.addEventListener("resize", function () {
  // w razie zmiany rozmiaru okna
  if (width < 1050 && window.innerWidth >= 1050) {
    if (document.querySelector("nav").classList.contains("activenavmobile")) {
      document.querySelector("nav").classList.remove("activenavmobile");
    }
  }
  if (width >= 1050 && window.innerWidth < 1050) {
    if (
      document.querySelector("nav").classList.contains("activenav") &&
      !document.querySelector("nav").classList.contains("activenavmobile")
    ) {
      document.querySelector("nav").classList.add("activenavmobile");
    }
  }
  if (!isMobile) {
    width = window.innerWidth;
    height = window.innerHeight;
  } else {
    let body = document.body,
      html = document.documentElement;
    height = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    width = document.body.clientWidth;
  }
  if (!isMobile) {
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    balls.forEach((cell) => {
      if (cell[0] > width) {
        cell[0] = width % cell[0];
      }
      if (cell[1] > height) {
        cell[1] = height % cell[1];
      }
    });
    windowFill();
  }
});
function movement() {
  // rusza piłki
  balls.forEach((cell) => {
    cell[0] = cell[0] + cell[4];
    cell[1] = cell[1] + cell[5];
    if (cell[0] - cell[2] > width) {
      cell[0] = 0 - cell[2];
    } else if (cell[0] + cell[2] < 0) {
      cell[0] = width + cell[2];
    }
    if (cell[1] - cell[2] > height) {
      cell[1] = 0 - cell[2];
    } else if (cell[1] + cell[2] < 0) {
      cell[1] = height + cell[2];
    }
    if (
      Math.sqrt(
        Math.pow(Math.abs(cursorX - cell[0]), 2) +
          Math.pow(Math.abs(cursorY - cell[1]), 2)
      ) <
      130 + cell[2]
    ) {
      let sum = Math.abs(cursorX - cell[0]) + Math.abs(cursorY - cell[1]);
      let speedSum = Math.abs(cell[4]) + Math.abs(cell[5]);
      let markx = cursorX - cell[0] > 0 ? 1 : -1;
      let marky = cursorY - cell[1] > 0 ? 1 : -1;
      cell[4] = markx * speedSum * (Math.abs(cursorX - cell[0]) / sum);
      cell[5] = marky * speedSum * (Math.abs(cursorY - cell[1]) / sum);
    }
  });
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, width, height);
  windowFill();
}
windowFill();
if (!isMobile) {
  const it = setInterval(movement, 15);
} else {
  const it = setInterval(movement, 30);
}
