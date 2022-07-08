'use strict';

import {submitToGenerate} from "./partials/generate";

const settingsForm = document.querySelector('.js_parameters-form');

const parametersTable = document.querySelector('.js_parameters-table');
const errorField = document.querySelector(".js_errno-field");

settingsForm.addEventListener('submit', function(event) {
	event.preventDefault();

	submitToGenerate(this, errorField, parametersTable);
});


function menuButtonEventListener(event) {
	const menuButton = this;
	const targetMenuItem = menuButton.dataset.menuName;
	menuButton.parentNode.querySelector('.active').classList.remove('active');
	const resultBlock = menuButton.parentNode.parentNode;
	resultBlock.querySelector('.active').classList.remove('active');
	resultBlock.querySelector(`[data-menu-name=${targetMenuItem}]:not(.js_result-menu-button)`).classList.add('active');
	menuButton.classList.add('active');
}
const resultMenuButtons = document.querySelectorAll('.js_result-menu-button');
resultMenuButtons.forEach( element => {
	element.addEventListener('click', menuButtonEventListener)
});