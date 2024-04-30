const a1: string = "Hello TS!!!";
document.querySelector('.out-1').textContent = a1;

const a2: string = document.querySelector('.out-2').textContent;
console.log(a2);

const a3: string = document.querySelector('.out-3').textContent;
console.log(a3, typeof a3);

// const i5 = <HTMLInputElement> document.querySelector('.i-5');
const i5 = document.querySelector('.i-5') as HTMLInputElement;
console.log(i5.value);


const i6 = document.querySelector('.i-6') as HTMLInputElement;
console.log(+i6.value);