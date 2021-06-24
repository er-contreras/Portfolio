const menu = document.querySelector('.menu-dropdown');

function openMenu() {
  menu.style.visibility = 'visible';
}

function closeMenu() {
  menu.style.visibility = 'hidden';
}

openMenu();
closeMenu();

// Array with projects details.
const projects = [
  {
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    descriptionDesktop: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scramble.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
  {
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },

  {
    name: 'Multi - Post stories',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s, when an unknown printer took a galley of type veris lapoa todoe.',
    image: './BG/Snapshoot-Portfolio.png',
    technologies: ['html', 'Ruby on rails', 'css'],
    link: 'link_to_live_version.com',
  },
];

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
    img.src = '/BG/Snapshoot-Portfolio-desktop.png';
  }
  img.alt = 'snapshoot-portfolio';
  modal.appendChild(img);

  // Description
  textDescription.className = 'pClass';

  if (window.matchMedia('(min-width: 1000px)').matches) {
    textDescription.textContent = `${projects[0].descriptionDesktop}`;
  }

  if (window.matchMedia('(max-width: 999px)').matches) {
    textDescription.textContent = `${projects[0].description}`;
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