const { Chart, registerables } = require("/node_modules/chart.js/dist/chart.js");
Chart.register(...registerables);

import {getParametersNumber, getParametersKits} from "./generate";
import {isGradeExist, getGradeNumbers} from "./grade";

function grathDraw() {
    let parametersKits = getParametersKits(),
        gradeNumbers = getGradeNumbers(),
        parametersNumber = getParametersNumber();


    const grathBlock = document.querySelector('.js_result-graths');
    grathBlock.innerHTML = '';

    // если количество параметров в графиках больше 64 и элементов в конечной выборке больше 128, ничего не рисуем
    if (parametersKits.length < 128 && parametersNumber < 64) {
        const parametersGrathBlock = document.createElement("div"),
            gradesGrathBlock = document.createElement("div"),
            parametersGrathBlockSecond = document.createElement("div");
        const parametersGrath = document.createElement("canvas"),
            parametersGrathSecond = document.createElement("canvas"),
            gradesGrath = document.createElement("canvas");

        let labels, datasets;

        // parameters kits grathic
        grathBlock.append(parametersGrathBlock);
        parametersGrathBlock.append(`Граффик изменения значений наборов весовых коофициентов`);
        parametersGrathBlock.append(parametersGrath);

        labels = new Array(parametersNumber).fill().map(function(item, i) {
            return `Показатель p${i + 1}`;
        });
        datasets = new Array(parametersKits.length).fill().map(function(item, i) {
            return {
                type: 'line',
                label: `Набор №${i + 1}`,
                data: parametersKits[i].slice(0, parametersNumber),
            };
        });
        new Chart (parametersGrath, {
            data: {
            labels: labels,
            datasets: datasets,
            },
            options: {
                scales: {
                    y: {
                    beginAtZero: true
                    }
                }
            }
        });

        // parameters kits grathic
        grathBlock.append(parametersGrathBlockSecond);
        parametersGrathBlockSecond.append(`Граффик изменения значений наборов весовых коофициентов`);
        parametersGrathBlockSecond.append(parametersGrathSecond);

        labels = new Array(parametersKits.length).fill().map(function(item, i) {
            return `Набор №${i + 1}`;
        });
        datasets = new Array(parametersNumber).fill().map(function(item, i) {
            return {
                type: 'line',
                label: `Показатель p${i + 1}`,
                data: parametersKits.map(function(item, k) {
                    return item[i]
                }),
            };
        });
        new Chart (parametersGrathSecond, {
            data: {
            labels: labels,
            datasets: datasets,
            },
            options: {
                scales: {
                    y: {
                    beginAtZero: true
                    }
                }
            }
        });

        // grades grathic
        if (isGradeExist() && gradeNumbers > 1 && gradeNumbers < 64) {
            grathBlock.append(gradesGrathBlock);
            gradesGrathBlock.append(`Граффик изменения значений оценок весовых коофициентов`);
            gradesGrathBlock.append(gradesGrath);
            
            labels = new Array(parametersKits.length).fill().map(function(item, i) {
                return `Набор №${i + 1}`;
            });
            datasets = new Array(gradeNumbers).fill().map(function(item, i) {
                return {
                    type: 'line',
                    label: `q${i + 1}`,
                    data: parametersKits.map( function(item, k) {
                        return item[parametersNumber + i];
                    }),
                };
            });
            new Chart (gradesGrath, {
                data: {
                labels: labels,
                datasets: datasets,
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
    } else {
        grathBlock.append(`В выборке слишком много элементов для отображения граффика.`);
    }
}

export {
    grathDraw,
};