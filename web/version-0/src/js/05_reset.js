/* eslint-disable no-undef */
'use strict';
const resetButton = document.querySelector('.js-reset');
const previewName = document.querySelector('.js-preview-name');
const previewJob = document.querySelector('.js-preview-job');
const previewEmail = document.querySelector('.js-preview-email');
const previewPhone = document.querySelector('.js-preview-phone');
const previewLinkedin = document.querySelector('.js-preview-linkedin');
const previewGithub = document.querySelector('.js-preview-github');
const cardImage = document.querySelector(".js__profile-image");
const previewImage = document.querySelector(".js__profile-preview");

const form = document.querySelectorAll(".js-form");

function reset(ev) {
    for (let i = 0; i < form.length; i++) {
        form[i].value = '';
    }
    previewName.innerHTML = 'Tree Huggers';
    previewJob.innerHTML = 'Front-end developers';
    previewEmail.removeAttribute("href");
    previewPhone.removeAttribute("href");
    previewLinkedin.removeAttribute("href");
    previewGithub.removeAttribute("href");
    cardImage.style.backgroundImage = "url(./assets/images/animals.gif)";
    previewImage.style.backgroundImage = "";
    resetLocalStorage();
    clearShare();
    showGithub();
    showLinkedin();
    showPhone();
    showEmail();

};

function resetLocalStorage(ev) {
    localStorage.clear('js-palette');
    localStorage.clear('js-preview-name');
    localStorage.clear('js-preview-job');
    localStorage.clear('image');
    localStorage.clear('phone');
    localStorage.clear('email');
    localStorage.clear('linkedin');
    localStorage.clear('github');

}

function clearShare() {
  createBtn.disabled = false;
  shareHidden.classList.add('js-share-hidden');
  twitterHiddenElement.classList.add('hidden-share');
  createBtn.classList.remove('js-create-hidden');
}

resetButton.addEventListener('click', reset);
