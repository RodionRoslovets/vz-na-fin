const { Chart, registerables } = require("/node_modules/chart.js/dist/chart.js");
Chart.register(...registerables);

import {getParametersNumber, getParametersKits, getAverage, getParameterKitSumm, getParameterStep} from "./generate";
import {isGradeExist, getGradeNumbers} from "./grade";

function grathDraw() {
    let parametersKits = getParametersKits(),
        gradeNumbers = getGradeNumbers(),
        parametersNumber = getParametersNumber(),
        parameterKitSumm = getParameterKitSumm(),
        parameterStep =  getParameterStep();


    const grathBlock = document.querySelector('.js_result-graths');
    grathBlock.innerHTML = '';

    const parametersAverage = getAverage();

    // если количество параметров в графиках больше 64, ничего не рисуем
    if (parametersNumber < 64) {
        const parametersGrathBlock = document.createElement("div"),
            gradesGrathBlock = document.createElement("div");

        let labels, datasets, values, valuesNumber;

        // parameters kits grathic
        grathBlock.append(parametersGrathBlock);
        parametersGrathBlock.append(`Граффики значений наборов весовых коофициентов`);

        valuesNumber = Math.round((parameterKitSumm/parameterStep) * 100) / 100;
        values = new Array(valuesNumber).fill().map(function(item, i) {
            return Math.round((parameterKitSumm - parameterStep*i) * 100) / 100;
        });

        labels = new Array(valuesNumber).fill().map(function(item, i) {
            return `${values[i]}`;
        });
        datasets = new Array(parametersNumber).fill().map(function(item, i) {
            const parametersGrath = document.createElement("canvas");
            parametersGrathBlock.append(parametersGrath);
            return new Chart (parametersGrath, {
                data: {
                labels: labels,
                datasets: [{
                    type: 'bar',
                    label: `Показатель p${i + 1}`,
                    data: new Array(values.length).fill().map(function(item, k) {
                        return parametersKits.reduce(function(currentSum, currentKit) {
                            return currentKit[i] == values[k] ? ++currentSum : currentSum;
                        }, 0);
                    }),
                }],
                },
                options: {
                    scales: {
                        y: {
                        beginAtZero: true
                        }
                    }
                }
            });
        });

        // grades grathic
        if (isGradeExist() && gradeNumbers > 1 && gradeNumbers < 64) {
            grathBlock.append(gradesGrathBlock);
            gradesGrathBlock.append(`Граффики изменения значений оценок весовых коофициентов`);
            
            for (let i = 0; gradeNumbers > i; i++) {
                let values = Array();
                let kit = parametersKits.map((kit,k)=>{
                    let num = parametersNumber+i;
                    return kit.slice(num, num+1);
                });
                kit.forEach((element) => {
                    if (!values.includes(element)) {
                        values.push(element);
                    }
                });
                valuesNumber = values.length;

                labels = new Array(valuesNumber).fill().map(function(item, i) {
                    return `${values[i]}`;
                });

                const gradesGrath = document.createElement("canvas");
                gradesGrathBlock.append(gradesGrath);
                new Chart (gradesGrath, {
                    data: {
                    labels: labels,
                    datasets: [{
                        type: 'bar',
                        label: `Оценка q${i + 1}`,
                        data: new Array(values.length).fill().map(function(item, k) {
                            return parametersKits.reduce(function(currentSum, currentKit) {
                                return currentKit[parametersNumber + i] == values[k] ? ++currentSum : currentSum;
                            }, 0);
                        }),
                    }],
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        }
                    }
                });
            }
        }
    }
}

export {
    grathDraw,
};