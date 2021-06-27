const menu = document.querySelector('.menu-dropdown');

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

// Data of the projects section.
const projects = [
  {
    name: 'Multi - Post stories One',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionMobilePopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktopPopUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories Two',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionMobilePopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktopPopUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories Three',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionMobilePopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktopPopUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories Four',
    descriptionMobile: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    descriptionMobilePopup: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktopPopUp: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
];

// First, from where our work section will be located?
// We need a id for reference our JS section.
const works = document.querySelector('.works');

for (let i = 0; i < projects.length; i += 1) {
  // Work Section 1
  const divWorkSpace = document.createElement('div');
  const divWhiteScreenLeft = document.createElement('div');
  const section = document.createElement('section');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');
  const divVerticalLines = document.createElement('div');
  const paragraphVerticalLines1 = document.createElement('p');
  const divVerticalLine1 = document.createElement('div');
  const paragraphVerticalLines2 = document.createElement('p');
  const divVerticalLine2 = document.createElement('div');
  const paragraphVerticalLines3 = document.createElement('p');
  const paragraphVerticalLines4 = document.createElement('p');
  const divVerticalLine3 = document.createElement('div');
  const buttonWorkSection = document.createElement('button');

  if ((i + 1) % 2 === 0) {
    divWorkSpace.classList.add('work-space-2');
  } else {
    divWorkSpace.classList.add('work-space-1');
  }

  works.appendChild(divWorkSpace);

  divWhiteScreenLeft.classList.add('white-screen');
  divWorkSpace.appendChild(divWhiteScreenLeft);

  section.classList.add('work-section-description');
  divWorkSpace.appendChild(section);

  header.textContent = `${projects[i].name}`;
  section.appendChild(header);

  paragraph.classList.add('work-p');
  paragraph.textContent = `${projects[i].descriptionMobile}`;
  section.appendChild(paragraph);

  divVerticalLines.classList.add('vertical-lines', 'flex');
  section.appendChild(divVerticalLines);

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

  buttonWorkSection.textContent = 'See Project';
  buttonWorkSection.setAttribute('type', 'button');
  buttonWorkSection.setAttribute('onclick', 'topFunction()');
  buttonWorkSection.classList.add('btn-transition', `openWindow${i}`);
  section.appendChild(buttonWorkSection);
}

/* Array with projects details. POPUP Window */
// Bounce the button of see project with the window you going to generate with javascript.
const btn = document.querySelector('.openWindow0');
const btn2 = document.querySelector('.openWindow1');
const btn3 = document.querySelector('.openWindow2');
const btn4 = document.querySelector('.openWindow3');
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
    textDescription.textContent = `${projects[0].descriptionDesktopPopUp}`;
  }

  if (window.matchMedia('(max-width: 999px)').matches) {
    textDescription.textContent = `${projects[0].descriptionMobilePopup}`;
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

// Get to the top with a button
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

/* Client Validation */
const form = document.getElementById('signup');
// let form = document.getElementById('subscribe');
const { email } = form.elements;
// const emailAddress = email.value;

const requiredFields = [
  { input: email, message: 'Email is required' },
];

function error(input, message) {
  input.className = 'error';
  // show the error message
  const error = document.querySelector('.labelformat');
  error.innerText = message;
  return false;
}

function success(input) {
  input.className = 'success';
  // hide the error message
  const error = input.previousElementSibling;
  error.innerText = '';
  return true;
}

function validateEmail(input) {
  const re = /^[a-z0-9.!#$%&'*+=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z90-]+)*$/;

  return re.test(input.value.trim())
    ? success(input)
    : error(input, 'Invalid email format. Use Lowercase');
}

// checks if an input element has a non-empty
function requireValue(input, message) {
  return input.value.trim() === ''
    ? error(input, message)
    : success(input);
}

form.addEventListener('submit', (event) => {
  // check required fields
  let valid = true;
  requiredFields.forEach((input) => {
    valid = requireValue(input.input, input.message);
  });
  // validate email
  if (valid) {
    valid = validateEmail(email);
  }
  // stop submitting the form if the data is invalid
  if (!valid) {
    event.preventDefault();
  }
});

/* Local Storage */
const localStorageName = document.getElementById('name');
const localStorageEmail = document.getElementById('email');
const localStoragebtnInsert = document.getElementById('btnInsert');

localStoragebtnInsert.onclick = () => {
  const key = localStorageName.value;
  const { value } = localStorageEmail;

  if (key && value) {
    localStorage.setItem(key, value);
    window.location.reload();
  }
};
