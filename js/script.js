(()=>{"use strict";var e,r;function t(e){r=e}var n=[];function a(e){switch(e){case">":return 1;case"<":return 2;case">=":return 3;case"<=":return 4;default:return-1}}function u(e,r,t){switch(r){case 1:return e>t;case 2:return e<t;case 3:return e>=t;case 4:return e<=t}}var c,o,i=3,s=1,l=.2,f=[],p=[],m=function(e){return e.toString().includes(".")?e.toString().split(".").pop().length:0};function v(e){return i=e.querySelector(".js_parametrs-number-input").value,l=e.querySelector(".js_parametrs-step-input").value,o=s/l,Number.isInteger(o)?!!function(e){if(n=[],e){e=e.split(", ");for(var r=0;r<e.length;r++){var t=e[r].split(" ");if(3!=t.length)return!1;for(var u=t[0].split(","),c=a(t[1]),o=t[2].split(","),i=0;i<u.length;i++)for(var s=0;s<o.length;s++){if(!(c&&u[i]>0&&o[s]>0))return!1;n.push([u[i]-1,c,o[s]-1])}}}return!0}(e.querySelector(".js_parametrs-filter-input").value)||(r.innerHTML+="Введите пожалуйста корректную строку для фильтрации",!1):(function(e){r.innerHTML+="Введите пожалуйста шаг, которому кратна сумма ряда равная: ".concat(e)}(s),!1)}function d(e){var r=e.slice(0);(function(e){for(var r=p.length-1;r>=0;r--){var t=p[r].slice(0);if(t[0]!=e[0])return!0;for(var n=1,a=1;a<t.length;a++)t[a]==e[a]&&n++;if(n==t.length)return!1}return!0})(r)&&(p.push(r),function(e){for(var r=0;r<n.length;r++){if(!u(e[n[r][0]],n[r][1],e[n[r][2]]))return!1;console.log(n[r],e,e[n[r][0]],n[r][2]),console.log(u(e[n[r][0]],n[r][1],e[n[r][2]]))}return!0}(r)&&(r=function(e){return e.map((function(e){return e/Math.pow(10,c)}))}(r),f.push(r)))}function h(e,r){var t=e.slice(0);return t[0]-=l,t[r]+=l,t}function g(e,r){var t=e.slice(0);return t[0]+=l,t[r]-=l,t}function M(){var e;(e=m(l))<m(s)&&(e=m(s)),c=e,s*=Math.pow(10,c),l*=Math.pow(10,c);for(var r=[],t=0;t<i;t++)r[t]=0;r[0]=s,f=[],p=[],d(r)}function _(){M();for(var r=0;r<o;r++)for(var t=0;t<p.length;t++){var n=p.shift();if(!(n[0]<=0))for(var a=1;a<n.length;a++)d(n=h(n,a)),n=g(n,a)}s/=Math.pow(10,c),l/=Math.pow(10,c),function(r){!function(r){var t=document.createElement("table");t.classList.add("parameters-table__table"),r.forEach((function(e,r){var n=document.createElement("tr");n.classList.add("parameters-table__row"),e.forEach((function(e,r){var t=document.createElement("td");t.classList.add("parameters-table__item"),t.innerHTML=e,n.append(t)})),t.append(n)})),e.append(t)}(r)}(f)}var b=document.querySelector(".js_parameters-form"),L=document.querySelector(".js_parameters-table"),y=document.querySelector(".js_errno-field");b.addEventListener("submit",(function(r){r.preventDefault(),function(r,n,a){!function(e,r){r.innerHTML="",e.innerHTML=""}(n,a),function(r){e=r}(a),t(n),performance.mark("начало"),v(r)&&(document.body.classList.add("calculate"),_(),document.body.classList.remove("calculate")),performance.mark("конец"),performance.measure("итого","начало","конец"),console.log(performance.getEntriesByName("итого")[0].duration),performance.clearMeasures(),performance.clearMarks()}(this,y,L)}))})();