import {getParametersKits} from "./generate";

let resultTable,
	errnoField;

let resultTablePageNumber,
	itemNumberOnPage = 100,
	resultTableOpenPage = 1;

function setResultTable(parametersTable) {
	resultTable = parametersTable;
}

function setErrorField(errorField) {
	errnoField = errorField;
}

function clear(errnoField, parametersTable) {
	parametersTable.innerHTML = '';
	errnoField.innerHTML = '';
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

function setResultTablePageNumber(parametersKitsArray) {
	resultTablePageNumber = Math.ceil(parametersKitsArray.length / itemNumberOnPage);
}

function getParametersKitsOnThisPage() {
	const pageShiftParameter = itemNumberOnPage * (resultTableOpenPage - 1);
	return getParametersKits().slice(0 + pageShiftParameter, itemNumberOnPage + pageShiftParameter);
}

function paginationItemEventListenerOnClick(event) {
	console.log(event);
	const paginationItem = this;
	const paginationBlock = paginationItem.parentNode;
	paginationBlock.querySelectorAll('.open').forEach(function(element){
		element.classList.remove('open');
	})
	paginationItem.classList.add('open');
	resultTableOpenPage = paginationItem.value;

	clear(errnoField, resultTable);
	resultTableDraw();
}

function resultTableDraw(gradeExist) {
	const parametersKitsArray = getParametersKitsOnThisPage();
	if (parametersKitsArray.length > 0) {
		const table = document.createElement("table");
		table.classList.add('parameters-table__table');
		resultTable.append(table);

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
		const itemNumberShift = itemNumberOnPage * (resultTableOpenPage - 1) + 1;
		parametersKitsArray.forEach((kit, num) => {
			const parametersRow = document.createElement("tr");
			parametersRow.classList.add('parameters-table__row');
			addTableItem(parametersRow, itemNumberShift + num);
			kit.forEach((item, i) => {
				addTableItem(parametersRow, item);
			});
	
			tableBody.append(parametersRow);
		});
		table.append(tableBody);

		// Добавление пагинации
		const resultTableBlock = resultTable.parentNode;
		const paginationBlock = resultTableBlock.querySelector('.js_result-table-pagination');
		const paginationInfo = resultTableBlock.querySelector('.js_this-page-info');
		paginationBlock.innerHTML = '';
		paginationInfo.innerHTML = ``;
		if (resultTablePageNumber > 1) {
			for (let i = 0; i < resultTablePageNumber; i++) {
				const paginationItem = document.createElement('button');
				paginationItem.classList.add('result-table__pagination-item');
				paginationItem.value = i + 1;
				paginationItem.innerHTML = paginationItem.value;
				paginationBlock.append(paginationItem);
	
				paginationItem.addEventListener('click', paginationItemEventListenerOnClick);
			}
			paginationInfo.innerHTML = `Текущая страница ${resultTableOpenPage} из ${resultTablePageNumber}`;
		}
	}
}

function resultAdd(gradeExist) {
	setResultTablePageNumber(getParametersKits());
	resultTableOpenPage = 1;
	resultTableDraw(gradeExist);
	document.querySelector('.js_result-block').style.display = 'block';
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
	setResultTable,
	setErrorField,
};