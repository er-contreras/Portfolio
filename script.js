import projects from './modules/projectsInfo.js';
import addElement from './modules/popUp.js';

const main = document.querySelector('#main');

for (let i = 0; i < projects.length; i += 1) {
  const divWorkSpace = document.createElement('div');
  const divWhiteScreenLeft = document.createElement('img');
  const section = document.createElement('section');
  const header = document.createElement('h2');
  const paragraph = document.createElement('p');
  const divVerticalLines = document.createElement('div');
  const buttonWorkSection = document.createElement('button');

  if ((i + 1) % 2 === 0) {
    divWorkSpace.classList.add('work-space-2');
  } else {
    divWorkSpace.classList.add('work-space-1');
  }

  main.appendChild(divWorkSpace);

  divWhiteScreenLeft.classList.add('white-screen');
  divWhiteScreenLeft.src = `${projects[i].image}`;
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

  for (let j = 0; j < projects[i].technologies.length + 1; j += 1) {
    const divVerticalLine = document.createElement('div');
    divVerticalLine.classList.add('vertical-line');

    const paragraphVerticalLines = document.createElement('p');
    paragraphVerticalLines.textContent = `${projects[i].technologies[j]}`;

    if (paragraphVerticalLines.innerHTML === 'undefined') {
      paragraphVerticalLines.innerHTML = '';
    }

    divVerticalLines.appendChild(divVerticalLine);
    divVerticalLines.appendChild(paragraphVerticalLines);
  }

  buttonWorkSection.textContent = 'See Project';
  buttonWorkSection.setAttribute('type', 'button');
  buttonWorkSection.setAttribute('onclick', 'topFunction()');
  buttonWorkSection.classList.add('btn-transition', `open-window-${i}`);
  buttonWorkSection.id = 'myBtn';
  section.appendChild(buttonWorkSection);

  const btn = document.querySelector(`.open-window-${i}`);
  const mainContainer = document.querySelector('.main-container');

  btn.addEventListener('click', () => {
    addElement(projects[i].id);
    mainContainer.style.filter = 'blur(20px)';
  });
}
