const menu = document.querySelector('.menu-dropdown');

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

// Create project Section dinamically.
const projects = [
  {
    name: 'Multi - Post stories',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionPopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionPopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionPopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionPopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
];

// First, from where our work section will be located?
// We need a id for reference our JS section.
const works = document.querySelector('.works');

// Work Section 1
const divWorkSpace1 = document.createElement('div');
const divWhiteScreenLeft = document.createElement('div');
const section1 = document.createElement('section');
const header1 = document.createElement('h2');
const paragraph1 = document.createElement('p');
const divVerticalLines = document.createElement('div');
const paragraphVerticalLines1 = document.createElement('p');
const divVerticalLine1 = document.createElement('div');
const paragraphVerticalLines2 = document.createElement('p');
const divVerticalLine2 = document.createElement('div');
const paragraphVerticalLines3 = document.createElement('p');
const paragraphVerticalLines4 = document.createElement('p');
const divVerticalLine3 = document.createElement('div');
const buttonWorkSection1 = document.createElement('button');

divWorkSpace1.classList.add('work-space-1');
works.appendChild(divWorkSpace1);

divWhiteScreenLeft.classList.add('white-screen-left');
divWorkSpace1.appendChild(divWhiteScreenLeft);

section1.classList.add('work-section-description');
divWorkSpace1.appendChild(section1);

header1.textContent = `${projects[0].name}`;
section1.appendChild(header1);

paragraph1.classList.add('work-p');
paragraph1.textContent = `${projects[0].descriptionMobile}`;
section1.appendChild(paragraph1);

divVerticalLines.classList.add('vertical-lines', 'flex');
section1.appendChild(divVerticalLines);

paragraphVerticalLines1.textContent = 'css';
divVerticalLines.appendChild(paragraphVerticalLines1);

divVerticalLine1.classList.add('vertical-line');
divVerticalLines.appendChild(divVerticalLine1);

paragraphVerticalLines2.textContent = 'html';
divVerticalLines.appendChild(paragraphVerticalLines2);

divVerticalLine2.classList.add('vertical-line');
divVerticalLines.appendChild(divVerticalLine2);

paragraphVerticalLines3.textContent = 'bootstrap';
divVerticalLines.appendChild(paragraphVerticalLines3);

divVerticalLine3.classList.add('vertical-line');
divVerticalLines.appendChild(divVerticalLine3);

paragraphVerticalLines4.textContent = 'Ruby';
divVerticalLines.appendChild(paragraphVerticalLines4);

buttonWorkSection1.textContent = 'See Project';
buttonWorkSection1.setAttribute('type', 'button');
buttonWorkSection1.setAttribute('onclick', 'topFunction()');
buttonWorkSection1.classList.add('btn-transition', 'openWindow');
section1.appendChild(buttonWorkSection1);

// Work Section 2
const divWorkSpace11 = document.createElement('div');
const divWhiteScreenLeft2 = document.createElement('div');
const section11 = document.createElement('section');
const header11 = document.createElement('h2');
const paragraph11 = document.createElement('p');
const divVerticalLines2 = document.createElement('div');
const paragraphVerticalLines11 = document.createElement('p');
const divVerticalLine11 = document.createElement('div');
const paragraphVerticalLines22 = document.createElement('p');
const divVerticalLine22 = document.createElement('div');
const paragraphVerticalLines32 = document.createElement('p');
const paragraphVerticalLines42 = document.createElement('p');
const divVerticalLine32 = document.createElement('div');
const buttonWorkSection12 = document.createElement('button');

divWorkSpace11.classList.add('work-space-2');
works.appendChild(divWorkSpace11);

divWhiteScreenLeft2.classList.add('white-screen-right');
divWorkSpace11.appendChild(divWhiteScreenLeft2);

section11.classList.add('work-section-description');
divWorkSpace11.appendChild(section11);

header11.textContent = `${projects[0].name}`;
section11.appendChild(header11);

paragraph11.classList.add('work-p');
paragraph11.textContent = `${projects[0].descriptionMobile}`;
section11.appendChild(paragraph11);

divVerticalLines2.classList.add('vertical-lines', 'flex');
section11.appendChild(divVerticalLines2);

paragraphVerticalLines11.textContent = 'css';
divVerticalLines2.appendChild(paragraphVerticalLines11);

divVerticalLine11.classList.add('vertical-line');
divVerticalLines2.appendChild(divVerticalLine11);

paragraphVerticalLines22.textContent = 'html';
divVerticalLines2.appendChild(paragraphVerticalLines22);

divVerticalLine22.classList.add('vertical-line');
divVerticalLines2.appendChild(divVerticalLine22);

paragraphVerticalLines32.textContent = 'bootstrap';
divVerticalLines2.appendChild(paragraphVerticalLines32);

divVerticalLine32.classList.add('vertical-line');
divVerticalLines2.appendChild(divVerticalLine32);

paragraphVerticalLines42.textContent = 'Ruby';
divVerticalLines2.appendChild(paragraphVerticalLines42);

buttonWorkSection12.textContent = 'See Project';
buttonWorkSection12.setAttribute('type', 'button');
buttonWorkSection12.setAttribute('onclick', 'topFunction()');
buttonWorkSection12.classList.add('btn-transition', 'openWindow2');
section11.appendChild(buttonWorkSection12);

// Work Section 3
const divWorkSpace13 = document.createElement('div');
const divWhiteScreenLeft3 = document.createElement('div');
const section13 = document.createElement('section');
const header13 = document.createElement('h2');
const paragraph13 = document.createElement('p');
const divVerticalLines3 = document.createElement('div');
const paragraphVerticalLines13 = document.createElement('p');
const divVerticalLine13 = document.createElement('div');
const paragraphVerticalLines23 = document.createElement('p');
const divVerticalLine23 = document.createElement('div');
const paragraphVerticalLines33 = document.createElement('p');
const paragraphVerticalLines43 = document.createElement('p');
const divVerticalLine33 = document.createElement('div');
const buttonWorkSection13 = document.createElement('button');

divWorkSpace13.classList.add('work-space-1');
works.appendChild(divWorkSpace13);

divWhiteScreenLeft3.classList.add('white-screen-left');
divWorkSpace13.appendChild(divWhiteScreenLeft3);

section13.classList.add('work-section-description');
divWorkSpace13.appendChild(section13);

header13.textContent = `${projects[0].name}`;
section13.appendChild(header13);

paragraph13.classList.add('work-p');
paragraph13.textContent = `${projects[0].descriptionMobile}`;
section13.appendChild(paragraph13);

divVerticalLines3.classList.add('vertical-lines', 'flex');
section13.appendChild(divVerticalLines3);

paragraphVerticalLines13.textContent = 'css';
divVerticalLines3.appendChild(paragraphVerticalLines13);

divVerticalLine13.classList.add('vertical-line');
divVerticalLines3.appendChild(divVerticalLine13);

paragraphVerticalLines23.textContent = 'html';
divVerticalLines3.appendChild(paragraphVerticalLines23);

divVerticalLine23.classList.add('vertical-line');
divVerticalLines3.appendChild(divVerticalLine23);

paragraphVerticalLines33.textContent = 'bootstrap';
divVerticalLines3.appendChild(paragraphVerticalLines33);

divVerticalLine33.classList.add('vertical-line');
divVerticalLines3.appendChild(divVerticalLine33);

paragraphVerticalLines43.textContent = 'Ruby';
divVerticalLines3.appendChild(paragraphVerticalLines43);

buttonWorkSection13.textContent = 'See Project';
buttonWorkSection13.setAttribute('type', 'button');
buttonWorkSection13.setAttribute('onclick', 'topFunction()');
buttonWorkSection13.classList.add('btn-transition', 'openWindow3');
section13.appendChild(buttonWorkSection13);

// Work Section 4
const divWorkSpace114 = document.createElement('div');
const divWhiteScreenLeft24 = document.createElement('div');
const section114 = document.createElement('section');
const header114 = document.createElement('h2');
const paragraph114 = document.createElement('p');
const divVerticalLines24 = document.createElement('div');
const paragraphVerticalLines114 = document.createElement('p');
const divVerticalLine114 = document.createElement('div');
const paragraphVerticalLines224 = document.createElement('p');
const divVerticalLine224 = document.createElement('div');
const paragraphVerticalLines324 = document.createElement('p');
const paragraphVerticalLines424 = document.createElement('p');
const divVerticalLine324 = document.createElement('div');
const buttonWorkSection124 = document.createElement('button');

divWorkSpace114.classList.add('work-space-2');
works.appendChild(divWorkSpace114);

divWhiteScreenLeft24.classList.add('white-screen-right');
divWorkSpace114.appendChild(divWhiteScreenLeft24);

section114.classList.add('work-section-description');
divWorkSpace114.appendChild(section114);

header114.textContent = `${projects[0].name}`;
section114.appendChild(header114);

paragraph114.classList.add('work-p');
paragraph114.textContent = `${projects[0].descriptionMobile}`;
section114.appendChild(paragraph114);

divVerticalLines24.classList.add('vertical-lines', 'flex');
section114.appendChild(divVerticalLines24);

paragraphVerticalLines114.textContent = 'css';
divVerticalLines24.appendChild(paragraphVerticalLines114);

divVerticalLine114.classList.add('vertical-line');
divVerticalLines24.appendChild(divVerticalLine114);

paragraphVerticalLines224.textContent = 'html';
divVerticalLines24.appendChild(paragraphVerticalLines224);

divVerticalLine224.classList.add('vertical-line');
divVerticalLines24.appendChild(divVerticalLine224);

paragraphVerticalLines324.textContent = 'bootstrap';
divVerticalLines24.appendChild(paragraphVerticalLines324);

divVerticalLine324.classList.add('vertical-line');
divVerticalLines24.appendChild(divVerticalLine324);

paragraphVerticalLines424.textContent = 'Ruby';
divVerticalLines24.appendChild(paragraphVerticalLines424);

buttonWorkSection124.textContent = 'See Project';
buttonWorkSection124.setAttribute('type', 'button');
buttonWorkSection124.setAttribute('onclick', 'topFunction()');
buttonWorkSection124.classList.add('btn-transition', 'openWindow4');
section114.appendChild(buttonWorkSection124);

// Array with projects details. POPUP Window--------------->
// Bounce the button of see project with the window you going to generate with javascript.
const btn = document.querySelector('.openWindow');
const btn2 = document.querySelector('.openWindow2');
const btn3 = document.querySelector('.openWindow3');
const btn4 = document.querySelector('.openWindow4');
const mainContainer = document.querySelector('.mainContainer');

// Create a div to open the window into the div.
function addElement() {
  const modal = document.createElement('div');
  const divHeader = document.createElement('div');
  const header = document.createElement('h1');
  const closeBtn = document.createElement('button');
  const img = document.createElement('img');
  const textDescription = document.createElement('p');
  const technologiesContainer = document.createElement('div');
  const verticalLine1 = document.createElement('div');
  const tech1 = document.createElement('p');
  const verticalLine2 = document.createElement('div');
  const tech2 = document.createElement('p');
  const verticalLine3 = document.createElement('div');
  const tech3 = document.createElement('p');
  const verticalLine4 = document.createElement('div');
  const newBtn = document.createElement('button');
  const newBtn2 = document.createElement('button');
  const divBtns = document.createElement('div');
  const imgBtn1 = document.createElement('img');
  const imgBtn2 = document.createElement('img');
  const tech4 = document.createElement('p');
  const verticalLine5 = document.createElement('div');

  modal.className = 'divClass';
  modal.classList.add('divClassClose');
  document.body.appendChild(modal);

  // Header and Close Btn
  divHeader.className = 'divHeader';
  modal.appendChild(divHeader);

  header.className = 'h1Class';
  header.textContent = `${projects[0].name}`;
  divHeader.appendChild(header);

  closeBtn.classList.add('divBtnClass');
  closeBtn.textContent = 'X';
  divHeader.appendChild(closeBtn);

  // Image
  img.className = 'imgClass';
  img.src = `${projects[0].image}`;
  if (window.matchMedia('(min-width: 1000px)').matches) {
    img.src = './BG/Snapshoot-Portfolio-desktop.png';
  }
  img.alt = 'snapshoot-portfolio';
  modal.appendChild(img);

  // Description
  textDescription.className = 'pClass';

  if (window.matchMedia('(min-width: 1000px)').matches) {
    textDescription.textContent = `${projects[0].descriptionDesktop}`;
  }

  if (window.matchMedia('(max-width: 999px)').matches) {
    textDescription.textContent = `${projects[0].descriptionPopup}`;
  }

  modal.appendChild(textDescription);

  // Technologies
  technologiesContainer.classList.add('vertical-lines-modal');
  modal.appendChild(technologiesContainer);

  verticalLine1.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine1);

  verticalLine2.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine2);

  verticalLine3.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine3);

  verticalLine4.classList.add('vertical-line-modal');
  technologiesContainer.appendChild(verticalLine4);

  tech1.classList.add('techs');
  tech2.classList.add('techs');
  tech3.classList.add('techs');

  technologiesContainer.appendChild(tech1);
  technologiesContainer.appendChild(verticalLine2);
  technologiesContainer.appendChild(tech2);
  technologiesContainer.appendChild(verticalLine3);
  technologiesContainer.appendChild(tech3);
  technologiesContainer.appendChild(verticalLine4);

  tech1.textContent = `${projects[0].technologies[0]}`;
  tech2.textContent = `${projects[0].technologies[1]}`;
  tech3.textContent = `${projects[0].technologies[2]}`;

  if (window.matchMedia('(min-width: 1000px)').matches) {
    tech4.classList.add('techs');
    verticalLine5.classList.add('vertical-line-modal');
    technologiesContainer.appendChild(tech4);
    technologiesContainer.appendChild(verticalLine5);
    tech4.textContent = 'Github';
  }

  // Buttons
  divBtns.className = 'divBtns';
  modal.appendChild(divBtns);

  newBtn.className = 'newBtn';
  newBtn.textContent = 'See Live';
  divBtns.appendChild(newBtn);

  newBtn2.className = 'newBtn2';
  newBtn2.textContent = 'See Source';
  divBtns.appendChild(newBtn2);

  imgBtn1.className = 'imgClassBtn';
  imgBtn1.src = './icons/Icon-btn.png';
  imgBtn1.alt = 'github-icon';
  newBtn.appendChild(imgBtn1);

  imgBtn2.className = 'imgClassBtn';
  imgBtn2.src = './icons/github.png';
  imgBtn2.alt = 'github-icon';
  newBtn2.appendChild(imgBtn2);

  // Hide an element
  const hide = (() => {
    modal.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    mainContainer.style.filter = 'blur(0px)';
    hide();
  });
}

// After clicking in the button the window popup to show your project deatails.
btn.addEventListener('click', () => {
  addElement();
  mainContainer.style.filter = 'blur(20px)';
});

btn2.addEventListener('click', () => {
  addElement();
  mainContainer.style.filter = 'blur(20px)';
});

btn3.addEventListener('click', () => {
  addElement();
  mainContainer.style.filter = 'blur(20px)';
});

btn4.addEventListener('click', () => {
  addElement();
  mainContainer.style.filter = 'blur(20px)';
});

// Get the button to the top
const mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = 'block';
  } else {
    mybutton.style.display = 'none';
  }
}

window.onscroll = () => {
  scrollFunction();
};

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

topFunction();