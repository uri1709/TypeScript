"use strict";
const a1 = "Hello TS!!!";
document.querySelector('.out-1').textContent = a1;
const a2 = document.querySelector('.out-2').textContent;
console.log(a2);
const a3 = document.querySelector('.out-3').textContent;
console.log(a3, typeof a3);
// const i5 = <HTMLInputElement> document.querySelector('.i-5');
const i5 = document.querySelector('.i-5');
console.log(i5.value);
const i6 = document.querySelector('.i-6');
console.log(+i6.value);
const checkbox = document.querySelector('input[type="checkbox"]');
// console.log(checkbox);
if (checkbox.checked) {
    console.log('checked');
}
//# sourceMappingURL=script.js.map