let parametersNumber = 3,
    parameterKitSumm = 1,
    parameterStep = 0.2,
    parameterDecimalPlaces;

let parametersKitsArray = [],
    parametersKitsArrayGeneratePull = [];

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

function parametersKitsGenerateNumber() {
    return parameterKitSumm/parameterStep;
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

function parametersKitArrayPrepareToGenerate() {
    toInteger();

    const kitArray = [];
    for (let i = 0; i < parametersNumber; i++) {
        kitArray[i] = 0;
    }
    kitArray[0] = parameterKitSumm;

    parametersKitArrayPrepareClear(kitArray);
}

function parametersKitArrayGenerate() {
    parametersKitArrayPrepareToGenerate();

    for (let j = 0; j < parametersKitsGenerateNumber(); j++) {
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
}

parametersKitArrayGenerate();


const parametersTable = document.querySelector('.js_parameters-table');
parametersKitsArray.forEach((parametersKit) => {
    parametersTable.innerHTML += "<div>" + parametersKit + "</div>";
});



console.log(parametersKitsArrayGeneratePull);
console.log(parametersKitsArray);