let gradeExist = true,
    gradeKitNumbers = 0;
let gradeValues = [];

function setGradeValues(valuesTable, parametersNumber) {
    let gradeKit;
    gradeExist = true;
    gradeValues = [];
    const valuesTableRows = valuesTable.querySelector(".js-parameters-grade-table-block").querySelectorAll(".js_parameters-grade-table-row");
    for (let j = 0; j < valuesTableRows.length; j++) {
        gradeKit = [];
        const inputItems = valuesTableRows[j].querySelectorAll(".js_parameters-grade-table-item-input");
        for(let i = 0; i < inputItems.length; i++) {
            let value = inputItems[i].value;
            if (!value) {
                gradeExist = false;
                return true;
            }
            if (isFinite(value)) {
                gradeKit.push(Number(inputItems[i].value));
            } else {
                return gradeExist = false;
            };
        }
        if (gradeKit.length != parametersNumber) return gradeExist = false;
        gradeValues.push(gradeKit);
    }

    gradeKitNumbers = valuesTableRows.length;
    return true;
}

function isGradeExist() {
    return gradeExist;
}

function getGrade(parametersKit) {
    let kitGrade = [], grade;
    for (let i = 0; i < gradeValues.length; i++) {
        grade = 0;
        let valuesKit = gradeValues[i];
        for (let i = 0; i < parametersKit.length; i++) {
            grade += parametersKit[i] * valuesKit[i];
        }
        kitGrade.push(grade);
    }
    return kitGrade
}

function getGradeNumbers() {
    return gradeKitNumbers;
}

function addGrade(parametersKit) {
    let kitArray = parametersKit.slice(0);
    kitArray = kitArray.concat(getGrade(kitArray));
    return kitArray;
}

export {
    isGradeExist,
    setGradeValues,
    addGrade,
    getGradeNumbers,
};