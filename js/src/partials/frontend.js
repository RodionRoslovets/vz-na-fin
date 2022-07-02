let resultTable;

function setResultTable(parametersTable) {
	resultTable = parametersTable;
}

function clear(errorField, parametersTable) {
	parametersTable.innerHTML = '';
	errorField.innerHTML = '';
}

function addTableHeaderItem(headerRow, itemName) {
	const headerItem = document.createElement("td");
	headerItem.classList.add('parameters-table__header-item');
	headerItem.classList.add('parameters-table__item');
	headerItem.innerHTML = itemName;
	headerRow.append(headerItem);
}

function addTableItem(parametersRow, itemValue) {
	const parametersItem = document.createElement("td");
	parametersItem.classList.add('parameters-table__item');
	parametersItem.innerHTML = itemValue;
		
	parametersRow.append(parametersItem);
}

function resultTableAdd(parametersKitsArray, gradeExist) {
	if (parametersKitsArray.length > 0) {
		const table = document.createElement("table");
		table.classList.add('parameters-table__table');

		// Создание шапки таблицы
		const tableHeader = document.createElement("thead");
		const headerRow = document.createElement("tr");
		headerRow.classList.add('parameters-table__header-row');

		addTableHeaderItem(headerRow, `№`);
		let parametersNumber = gradeExist ? parametersKitsArray[0].length : parametersKitsArray[0].length + 1;
		for (let i = 1; i < parametersNumber; i++) {
			addTableHeaderItem(headerRow, `p${i}`);
		}
		if (gradeExist) {
			addTableHeaderItem(headerRow, `Q`)
		}
		tableHeader.append(headerRow);
		table.append(tableHeader);

		// Наполнение таблицы
		const tableBody = document.createElement("tbody");
		parametersKitsArray.forEach((kit, num) => {
			const parametersRow = document.createElement("tr");
			parametersRow.classList.add('parameters-table__row');
			addTableItem(parametersRow, num);
			kit.forEach((item, i) => {
				addTableItem(parametersRow, item);
			});
	
			tableBody.append(parametersRow);
		});
		table.append(tableBody);
	
		resultTable.append(table);
	}
}

function resultAdd(parametersKitsArray, gradeExist) {
	resultTableAdd(parametersKitsArray, gradeExist);
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