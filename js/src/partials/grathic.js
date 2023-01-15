const { Chart, registerables } = require("/node_modules/chart.js/dist/chart.js");
Chart.register(...registerables);

import {getParametersNumber, getParametersKits} from "./generate";
import {isGradeExist, getGradeNumbers} from "./grade";

function grathDraw() {
    let parametersKits = getParametersKits(),
        gradeNumbers = getGradeNumbers(),
        parametersNumber = getParametersNumber();


    const grathBlock = document.querySelector('.js_result-graths');
    const parametersGrathBlock = document.createElement("div"),
        gradesGrathBlock = document.createElement("div");
    const parametersGrath = document.createElement("canvas"),
        gradesGrath = document.createElement("canvas");

    let labels, datasets;

    grathBlock.innerHTML = '';

    // parameters kits grathic
    grathBlock.append(parametersGrathBlock);
    parametersGrathBlock.append(`Граффик изменения значений наборов весовых коофициентов`);
    parametersGrathBlock.append(parametersGrath);

    labels = new Array(parametersNumber).fill().map(function(item, i) {
        return `Коофициент №${i + 1}`;
    });
    datasets = new Array(parametersKits.length).fill().map(function(item, i) {
        return {
            type: 'line',
            label: `p${i + 1}`,
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

    // grades grathic
    if (isGradeExist() && gradeNumbers > 1) {
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
}

export {
    grathDraw,
};