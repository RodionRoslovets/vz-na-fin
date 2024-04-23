const { Chart, registerables } = require("/node_modules/chart.js/dist/chart.js");
Chart.register(...registerables);

import {getParametersNumber, getParametersKits, getAverage, getParameterKitSumm, getParameterStep} from "./generate";
import {isGradeExist, getGradeNumbers} from "./grade";

function grathDraw() {
    let parametersKits = getParametersKits(),
        gradeNumbers = getGradeNumbers(),
        parametersNumber = getParametersNumber(),
        parameterKitSumm = getParameterKitSumm(),
        parameterStep =  getParameterStep(),
        grathStep = 0.05;

    grathStep = grathStep < parameterStep ? grathStep : parameterStep;


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

        valuesNumber = Math.round((parameterKitSumm/grathStep) * 100) / 100;
        values = new Array(valuesNumber).fill().map(function(item, i) {
            return Math.round((parameterKitSumm - grathStep*i) * 100) / 100;
        });

        values.sort((a, b) => a - b);

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
                    },
                }
            });
        });

        labels = new Array(parametersNumber).fill().map(function(item, i) {
            return `p${i + 1}`;
        });

        let parametersGrath = document.createElement("canvas");
        parametersGrathBlock.append(parametersGrath);
        
        datasets = new Chart (parametersGrath, {
                type: 'bar',
                data: {
                labels: labels,
                datasets: [{
                    type: 'bar',
                    label: `Соотношение максимальных и минимальных значений коофициентов в наборах`,
                    data: labels.map(function(item, k) {
                        return [Math.max(...parametersKits.map(innerArray => innerArray[k])), Math.min(...parametersKits.map(innerArray => innerArray[k]))];
                    }),
                }],
                },
                options: {
                    scales: {
                        y: {
                        beginAtZero: true
                        }
                    },
                }
        });

        // grades grathic
        if (isGradeExist() && gradeNumbers > 1 && gradeNumbers < 64) {
            grathBlock.append(gradesGrathBlock);
            gradesGrathBlock.append(`Граффики изменения рейтинговых оценок`);
            
            for (let i = 0; gradeNumbers > i; i++) {
                let values = Array();
                let kit = parametersKits.map((kit,k)=>{
                    let num = parametersNumber+i;
                    return kit[num];
                });
                kit.forEach((element) => {
                    if (!values.includes(element)) {
                        values.push(element);
                    }
                });
                valuesNumber = values.length;

                values.sort((a, b) => a - b);

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
                        label: `Оценка Q${i + 1}`,
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
                        },
                    }
                });
            }
            
            labels = new Array(gradeNumbers).fill().map(function(item, i) {
                return `Q${i+1}`;
            });
    
            const gradesGrath = document.createElement("canvas");
            gradesGrathBlock.append(gradesGrath);
            
            new Chart (gradesGrath, {
                    type: 'bar',
                    data: {
                    labels: labels,
                    datasets: [{
                        type: 'bar',
                        label: `Соотношение максимальных и минимальных значений оценок в наборах`,
                        data: labels.map(function(item, k) {
                            return [Math.max(...parametersKits.map(innerArray => innerArray[parametersNumber + k])), Math.min(...parametersKits.map(innerArray => innerArray[parametersNumber + k]))];
                        }),
                    }],
                    },
                    options: {
                        scales: {
                            y: {
                            beginAtZero: true
                            }
                        },
                    }
            });
        }
    }
}

export {
    grathDraw,
};