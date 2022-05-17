module.exports = (function () {
	let parametersNumber = 3,
	parameterKitSumm = 1,
	parameterStep = 0.2,
	parameterDecimalPlaces,
	parametersKitsGenerateNumber;

	let parametersKitsArray = [],
	parametersKitsArrayGeneratePull = [];

	const settingsForm = document.querySelector('.js_parameters-form');

	const DecimalPlacesNumber = x => ( (x.toString().includes('.')) ? (x.toString().split('.').pop().length) : (0) );

	function decimalPlacesCount() {
		let DecimalPlaces = DecimalPlacesNumber(parameterStep);
		if (DecimalPlaces < DecimalPlacesNumber(parameterKitSumm)) {
			DecimalPlaces = DecimalPlacesNumber(parameterKitSumm)
		}
		return DecimalPlaces;
	}

	function toInteger() {
		parameterDecimalPlaces = decimalPlacesCount();
		parameterKitSumm *= Math.pow(10, parameterDecimalPlaces);
		parameterStep *= Math.pow(10, parameterDecimalPlaces);
	}

	function toDouble(parametersKit) {
		return parametersKit.map((item) => {
			return item / Math.pow(10, parameterDecimalPlaces);
		});
	}

	function parametersKitsGenerateSettings() {
		parametersNumber = settingsForm.querySelector('.js_parametrs-number-input').value;
		parameterStep = settingsForm.querySelector('.js_parametr-step-input').value;
		parametersKitsGenerateNumber = parameterKitSumm/parameterStep;
		if (Number.isInteger(parametersKitsGenerateNumber)) return true;
		return false;
	}

	function kitIsNotExist(parametersKit) {
		for (let j = 0; j < parametersKitsArrayGeneratePull.length; j++) {
			const kit = parametersKitsArrayGeneratePull[j].slice(0);
			let kitElemIsExist = 0;
			for (let i = 0; i < kit.length; i++) {
				if (kit[i] == parametersKit[i]) {
					kitElemIsExist++;
				}
			}
			if (kitElemIsExist == kit.length) return false;
		}
		return true;
	}

	function parametersKitArrayAdd(parametersKit) {
		let KitArray = parametersKit.slice(0);
		if (kitIsNotExist(KitArray)) {
			parametersKitsArrayGeneratePull.push(KitArray);
			KitArray = toDouble(KitArray);
			parametersKitsArray.push(KitArray);
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
		}

		parametersKitsArrayGenerateAfter();
	}
	
	function init() {
		settingsForm.addEventListener('submit', (event) => {
			event.preventDefault();

			if(parametersKitsGenerateSettings()) {
				parametersKitsArrayGenerate();

				const parametersTable = document.querySelector('.js_parameters-table');
				parametersTable.innerHTML = ''
				parametersKitsArray.forEach((parametersKit) => {
					parametersTable.innerHTML += "<div>" + parametersKit + "</div>";
				});
			} else {

			}
		});
	};

	return {
		init
	}
}());