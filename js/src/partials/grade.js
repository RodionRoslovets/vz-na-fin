let gradeExist = true;
let gradeValues = [];

function setGradeValues(values, parametersNumber) {
    gradeExist = true;
    if (values) {
        gradeValues = values.split(', ');
        if (gradeValues.length != parametersNumber) return false;
        for(let i = 0; i < gradeValues.length; i++) {
            if (!isFinite(gradeValues[i])) return false;
        }
    } else {
        gradeExist = false;
    }
    return true;
}

function isGradeExist() {
    return gradeExist;
}

function getGrade(parametersKit) {
    let kitGrade = 0;
    for (let i = 0; i < parametersKit.length; i++) {
        kitGrade += parametersKit[i] * gradeValues[i];
    }
    return kitGrade
}

function addGrade(parametersKit) {
    let kitArray = parametersKit.slice(0);
    kitArray.push(getGrade(kitArray));
    return kitArray;
}

export {
    isGradeExist,
    setGradeValues,
    addGrade
};