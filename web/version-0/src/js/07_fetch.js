'use strict';

const createBtn = document.querySelector('.js-create-btn');
const cardResult = document.querySelector('.js-card-link');
const shareHidden = document.querySelector('.js-share-hidden');
const formSubmit = document.querySelector('.js-submit');

const twitterHiddenElement = document.querySelector('.js-twitter-share');

let shareLink = '';

function handleCreateBtn(ev) {
  ev.preventDefault();

  fetchAPI();

  shareHidden.classList.remove('js-share-hidden');
  createBtn.classList.add('js-create-hidden');
  createBtn.disabled = true;
  twitterHiddenElement.classList.remove('hidden-share');
}

createBtn.addEventListener('click', handleCreateBtn);
formSubmit.addEventListener('submit', handleCreateBtn);

function fetchAPI() {
  const url = 'https://awesome-profile-cards.herokuapp.com/card';
  // eslint-disable-next-line no-undef
  const data = getUserData();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;
        const linkElement = document.querySelector('.js-card-link');
        linkElement.innerHTML = `<a href="${shareLink}" class="share__result--link js-card-link" target="_blank">${shareLink}</a>;`;
      } else {
        cardResult.innerHTML =
          'Debes cumplimentar todos los campos para poder crear tu enlace';
      }
    });
}
