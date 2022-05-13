let parametersNumber = 3,
    parameterKitSumm = 1,
    parameterStep = 0.2;

let parametersKitsArray = [],
    parametersKitsArrayGeneratePull = [];

function parametersKitsGenerateStepNumber() {
    return parametersNumber/parameterStep;
}

function parametersKitArrayAdd(parametersKit) {
    if (parametersKitsArrayGeneratePull.indexOf(parametersKit)) {
        parametersKitsArray.push(parametersKit);
        parametersKitsArrayGeneratePull.push(parametersKit);
    }
}

function parametersKitArrayPrepareClear(parametersKit) {
    parametersKitsArray = [],
    parametersKitsArrayGeneratePull = [];

    parametersKitArrayAdd(parametersKit);
}

function parametersKitArrayPrepareBefore(parametersKit, i) {
    let KitArray = parametersKit;
    KitArray[0] -=  parameterStep;
    KitArray[i] += parameterStep;
    return KitArray
}

function parametersKitArrayPrepareAfter(parametersKit, i) {
    const KitArray = parametersKit;
    KitArray[0] +=  parameterStep;
    KitArray[i] -= parameterStep;
    return KitArray
}

function parametersKitArrayPrepareToGenerate() {
    const kitArray = [];
    for (let i = 0; i < parametersNumber; i++) {
        kitArray[i] = 0;
    }
    kitArray[0] = parameterKitSumm;

    parametersKitArrayPrepareClear(kitArray);
}

function parametersKitArrayGenerate() {
    parametersKitArrayPrepareToGenerate();

    for (let j = 0; j < parametersKitsGenerateStepNumber(); j++) {
        for (let p = 0; p < parametersKitsArrayGeneratePull.length; p++) {
            let KitArray = parametersKitsArrayGeneratePull.shift();
            for (let i = 1; i < KitArray.length; i++) {
                KitArray = parametersKitArrayPrepareBefore(KitArray, i);
                parametersKitArrayAdd(KitArray);
                KitArray = parametersKitArrayPrepareAfter(KitArray, i);
            }
        }
    }
}

parametersKitArrayGenerate();




console.log(parametersKitsArrayGeneratePull);
console.log(parametersKitsArray);
