let resultTable;

function setResultTable(parametersTable) {
	resultTable = parametersTable;
}

function clear(errorField, parametersTable) {
	parametersTable.innerHTML = '';
	errorField.innerHTML = '';
}

function resultTableAdd(parametersKitsArray) {
	let table = document.createElement("table");
	table.classList.add('parameters-table__table');

	parametersKitsArray.forEach((kit, num) => {
		const parametersRow = document.createElement("tr");
		parametersRow.classList.add('parameters-table__row');
		kit.forEach((item, i) => {
			const parametersItem = document.createElement("td");
			parametersItem.classList.add('parameters-table__item');
			parametersItem.innerHTML = item;
	
			parametersRow.append(parametersItem);
		});

		table.append(parametersRow);
	});

	resultTable.append(table);
}

function resultAdd(parametersKitsArray) {
	resultTableAdd(parametersKitsArray);
}

function generateBegin() {
	document.body.classList.add('calculate');
}

function generateEnd() {
	document.body.classList.remove('calculate');
}

export {
	clear,
	resultAdd,
	generateBegin,
	generateEnd,
	setResultTable
};