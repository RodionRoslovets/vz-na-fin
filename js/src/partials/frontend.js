let resultTable;

function setResultTable(parametersTable) {
    resultTable = parametersTable;
}

function clear(errorField, parametersTable) {
    parametersTable.innerHTML = '';
	errorField.innerHTML = '';
}

function resultAddInTable(parametersKit) {
    const parametersRow = document.createElement("tr");
    parametersRow.classList.add('parameters-table__row');
    parametersKit.forEach((item, i) => {
        const parametersItem = document.createElement("td");
        parametersItem.classList.add('parameters-table__item');
        parametersItem.innerHTML = item;

        parametersRow.append(parametersItem);
    });
    resultTable.append(parametersRow);
}

export {
    clear,
    resultAddInTable,
    setResultTable
};