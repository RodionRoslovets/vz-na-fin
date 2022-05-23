'use strict';

import submitToGenerate from "./partials/generate";

const settingsForm = document.querySelector('.js_parameters-form');
const parametersTable = document.querySelector('.js_parameters-table');
const errorField = document.querySelector(".js_errno-field");

settingsForm.addEventListener('submit', (event) => {
	event.preventDefault();

	submitToGenerate(settingsForm, errorField, parametersTable);
});