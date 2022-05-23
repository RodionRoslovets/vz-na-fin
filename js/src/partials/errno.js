let errorField;

function setErrorField(field) {
    errorField = field;
}

function stepError(parameterKitSumm) {
    errorField.innerHTML += `Введите пожалуйста шаг, которому кратна сумма ряда равная: ${parameterKitSumm}`;
}

export {
    stepError,
    setErrorField
};