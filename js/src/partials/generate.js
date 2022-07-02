import * as frontend from "./frontend";
import * as error from "./errno";

import {filter, setFilterParameters} from "./filter";
import {isGradeExist, setGradeValues, addGrade} from "./grade";

let parametersNumber = 3,
	parameterKitSumm = 1,
	parameterStep = 0.2,
	parameterDecimalPlaces,
	parametersKitsGenerateNumber;

let parametersKitsArray = [],
	parametersKitsArrayGeneratePull = [];

const DecimalPlacesNumber = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

function decimalPlacesCount() {
	let DecimalPlaces = DecimalPlacesNumber(parameterStep);
	if (DecimalPlaces < DecimalPlacesNumber(parameterKitSumm)) {
		DecimalPlaces = DecimalPlacesNumber(parameterKitSumm);
	}
	return DecimalPlaces;
}

function toInteger() {
	parameterDecimalPlaces = decimalPlacesCount();
	parameterKitSumm *= 10 ** parameterDecimalPlaces;
	parameterStep *= 10 ** parameterDecimalPlaces;
}

function toDouble(parametersKit) {
	return parametersKit.map((item) => {
		return item / (10 ** parameterDecimalPlaces);
	});
}

function parametersKitsGenerateSettings(settingsForm) {
	// parameters to generate parameters kit
	parametersNumber = settingsForm.querySelector('.js_parametrs-number-input').value;
	parameterStep = settingsForm.querySelector('.js_parametrs-step-input').value;
	parametersKitsGenerateNumber = parameterKitSumm/parameterStep;
	if(!Number.isInteger(parametersKitsGenerateNumber)) {
		error.stepError(parameterKitSumm);
		return false;
	}

	// parameters to filter parameters kit
	if (!setFilterParameters(settingsForm.querySelector('.js_parametrs-filter-input').value)) {
		error.setFilterParametersError();
		return false;
	}

	// parameters to calculete grade of parameters kit
	if (!setGradeValues(settingsForm.querySelector('.js_parametrs-grade-input').value, parametersNumber)) {
		error.setGradeValuesError();
		return false;
	}

	//const setGradeParameterSuccess = setFilterParameters(settingsForm.querySelector('.js_parametrs-grade-input').value);
	return true;
}

function kitIsNotExist(parametersKit) {
	for (let j = parametersKitsArrayGeneratePull.length - 1; j >= 0; j--) { // с конца пула генерации проверяем
		const kit = parametersKitsArrayGeneratePull[j].slice(0);
		if (kit[0] != parametersKit[0]) return true; // если кончились элементы вычесленные в этой итерации цикла генерации
		let kitElemIsExist = 1;
		for (let i = 1; i < kit.length; i++) {
			if (kit[i] == parametersKit[i]) {
				kitElemIsExist++;
			}
		}
		if (kitElemIsExist == kit.length) return false;
	}
	return true;
}

function parametersKitArrayAdd(parametersKit) {
	let kitArray = parametersKit.slice(0);
	if (kitIsNotExist(kitArray)) {
		parametersKitsArrayGeneratePull.push(kitArray);

		// Фильтрация конечных значений
		if (filter(kitArray)) {

			//Добавление оценки
			if (isGradeExist()) kitArray = addGrade(kitArray);

			// Приведение набора к вещественному типу данных
			kitArray = toDouble(kitArray);

			// Добавление результата в результирующий массив
			parametersKitsArray.push(kitArray);
		}
	}
}

function parametersKitArrayPrepareClear(parametersKit) {
	parametersKitsArray = [],
	parametersKitsArrayGeneratePull = [];

	parametersKitArrayAdd(parametersKit);
}

function parametersKitArrayPrepareBefore(parametersKit, i) {
	const KitArray = parametersKit.slice(0);
	KitArray[0] -= parameterStep;
	KitArray[i] += parameterStep;
	return KitArray;
}

function parametersKitArrayPrepareAfter(parametersKit, i) {
	const KitArray = parametersKit.slice(0);
	KitArray[0] +=  parameterStep;
	KitArray[i] -= parameterStep;
	return KitArray;
}

function parametersKitsArrayPrepareToGenerate() {
	toInteger();

	const kitArray = [];
	for (let i = 0; i < parametersNumber; i++) {
		kitArray[i] = 0;
	}
	kitArray[0] = parameterKitSumm;

	parametersKitArrayPrepareClear(kitArray);
}

function parametersKitsArrayGenerateAfter() {
	parameterKitSumm /= Math.pow(10, parameterDecimalPlaces);
	parameterStep /= Math.pow(10, parameterDecimalPlaces);

	frontend.resultAdd(parametersKitsArray, isGradeExist());
}

function parametersKitsArrayGenerate() {
	parametersKitsArrayPrepareToGenerate();

	for (let j = 0; j < parametersKitsGenerateNumber; j++) {
		for (let p = 0; p < parametersKitsArrayGeneratePull.length; p++) {
			let KitArray = parametersKitsArrayGeneratePull.shift();
			if (KitArray[0] <= 0) continue;
			for (let i = 1; i < KitArray.length; i++) {
				KitArray = parametersKitArrayPrepareBefore(KitArray, i);
				parametersKitArrayAdd(KitArray);
				KitArray = parametersKitArrayPrepareAfter(KitArray, i);
			}
		}
		// delete to relise
		// console.log(j);
		// console.log(parametersKitsArrayGeneratePull[1]);
		// console.log(parametersKitsArrayGeneratePull.length);
	}

	parametersKitsArrayGenerateAfter();
}

export default function submitToGenerate(settingsForm, errorField, parametersTable) {
	frontend.clear(errorField, parametersTable);
	frontend.setResultTable(parametersTable);
	error.setErrorField(errorField);
	const start = performance.mark('начало')

	if(parametersKitsGenerateSettings(settingsForm)) {
		frontend.generateBegin();
		parametersKitsArrayGenerate();
		frontend.generateEnd();
	}

	const finish = performance.mark('конец')

	performance.measure('итого', 'начало', 'конец')
	console.log(performance.getEntriesByName('итого')[0].duration)
	performance.clearMeasures()
	performance.clearMarks()
}