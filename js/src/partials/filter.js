let filterParameters = [];

function getOperationcode(operation) {
	switch (operation) {
		case '>':
    		return 1;
		case '<':
			return 2;
		case '>=':
    		return 3;
		case '<=':
			return 4;
		default:
			return -1;
	}
}

function setFilterParameters(parameters) {
	filterParameters = [];
	if(parameters) {
		parameters = parameters.split(', ');
		for (let i = 0; i < parameters.length; i++) {
			const operationParameters = parameters[i].split(' ');
			if (operationParameters.length != 3) return false;
			const operationFirstParameters = operationParameters[0].split(',');
			const operation = getOperationcode(operationParameters[1]);
			const operationSecondParameters = operationParameters[2].split(',');
			for (let j = 0; j < operationFirstParameters.length; j++) {
				for (let k = 0; k < operationSecondParameters.length; k++) {
					if (operation && operationFirstParameters[j] > 0 && operationSecondParameters[k] > 0) {
						filterParameters.push([
							operationFirstParameters[j] - 1,
							operation,
							operationSecondParameters[k] - 1
						]);
					} else {
						return false;
					}
				}
			}
		}
	}
	return true;
}

function operationСomparison(operationFirstParameters, operation, operationSecondParameters) {
	switch (operation) {
		case 1:
    		return operationFirstParameters > operationSecondParameters;
		case 2:
			return operationFirstParameters < operationSecondParameters;
		case 3:
    		return operationFirstParameters >= operationSecondParameters;
		case 4:
			return operationFirstParameters <= operationSecondParameters;
	}
}

function filter(parametersKit) {
	// Проверка на массивы с нулевыми элементами
	for(let i=0; i < parametersKit.length; i++) {
		if (parametersKit[i] <= 0) return false;
	}
	// Проверка на соотведствие данным для фильтрации
	for (let i=0; i < filterParameters.length; i++) {
		if(!operationСomparison(parametersKit[filterParameters[i][0]], filterParameters[i][1], parametersKit[filterParameters[i][2]])) return false;
	}
	return true;
}

export {
	filter,
	setFilterParameters
}