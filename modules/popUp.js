import projects from './projectsInfo.js';

function addElement(id) {
  const modal = document.createElement('div');
  const divHeader = document.createElement('div');
  const header = document.createElement('h1');
  const closeBtn = document.createElement('button');
  const img = document.createElement('img');
  const textDescription = document.createElement('p');
  const technologiesContainer = document.createElement('div');

  const newBtn = document.createElement('button');
  const newBtnAnchor = document.createElement('a');
  const newBtn2 = document.createElement('button');
  const newBtn2Anchor = document.createElement('a');
  const divBtns = document.createElement('div');
  const imgBtn1 = document.createElement('img');
  const imgBtn2 = document.createElement('img');

  modal.className = 'divClass';
  document.body.appendChild(modal);

  divHeader.className = 'divHeader';
  modal.appendChild(divHeader);

  header.className = 'h1Class';

  divHeader.appendChild(header);

  closeBtn.classList.add('divBtnClass');
  closeBtn.textContent = 'X';
  divHeader.appendChild(closeBtn);

  img.className = 'imgClass';

  img.alt = 'snapshot-portfolio';
  modal.appendChild(img);

  textDescription.className = 'pClass';

  modal.appendChild(textDescription);

  technologiesContainer.classList.add('vertical-lines-modal');
  modal.appendChild(technologiesContainer);

  divBtns.className = 'divBtns';
  modal.appendChild(divBtns);

  newBtn.className = 'newBtn';
  newBtn.textContent = 'See Live';
  newBtnAnchor.appendChild(newBtn);
  newBtnAnchor.setAttribute('target', '_blank');
  divBtns.appendChild(newBtnAnchor);

  newBtn2.className = 'newBtn2';
  newBtn2.textContent = 'See Source';
  newBtn2Anchor.appendChild(newBtn2);
  newBtn2Anchor.setAttribute('target', '_blank');
  divBtns.appendChild(newBtn2Anchor);

  imgBtn1.className = 'imgClassBtn';
  imgBtn1.src = './icons/Icon-btn.png';
  imgBtn1.alt = 'github-icon';
  newBtn.appendChild(imgBtn1);

  imgBtn2.className = 'imgClassBtn';
  imgBtn2.src = './icons/github.png';
  imgBtn2.alt = 'github-icon';
  newBtn2.appendChild(imgBtn2);

  for (let i = 0; i < projects.length; i += 1) {
    if (projects[i].id === id) {
      header.textContent = `${projects[i].name}`;
      img.src = `${projects[i].image}`;

      for (let j = 0; j < projects[i].technologies.length + 1; j += 1) {
        const verticalLine = document.createElement('div');
        verticalLine.classList.add('vertical-line-modal');

        const tech = document.createElement('p');
        tech.classList.add('techs');
        tech.textContent = `${projects[i].technologies[j]}`;

        if (tech.innerHTML === 'undefined') {
          tech.innerHTML = '';
        }

        technologiesContainer.appendChild(verticalLine);
        technologiesContainer.appendChild(tech);
      }

      if (window.matchMedia('(min-width: 1000px)').matches) {
        textDescription.textContent = `${projects[i].descriptionDesktopPopUp}`;
      }

      if (window.matchMedia('(max-width: 999px)').matches) {
        textDescription.textContent = `${projects[i].descriptionMobilePopup}`;
      }

      newBtnAnchor.setAttribute('href', `${projects[i].demoLive}`);
      newBtn2Anchor.setAttribute('href', `${projects[i].link}`);
    }
  }

  const hide = (() => {
    modal.style.display = 'none';
  });

  const mainContainer = document.querySelector('.main-container');

  closeBtn.addEventListener('click', () => {
    mainContainer.style.filter = 'blur(0px)';
    hide();
  });
}

export default addElement;