// let arr=[3,5,9];
// let sum=0;
// for (let i=0; i < arr.length;i++){
//     sum = sum+arr[i];   
// }
// console.log(sum);

// 1-masala
// Massivning barcha elementlarining yig indisini hisoblaydigan funksiya yozing.
// function summ(arg) {
//     let sum = 0;
//     for(let i = 0;i<arg.length;i++){
//         sum+=arg[i]
//     }
//     return sum;
// }
// console.log(summ([1,2,3,4,5,6,7]));

// 2-masala
// function summ(arg) {
//     let max = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(max >= arg[i]) {
//             max = max;
//         } else {
//             max = arg[i];
//         }
//     }

//     return max;
//   }

//   alert(summ([2, 3, 6, 7, 9, 12, 3]));

// 3-masala
// function summ(arg) {
//     let min = arg[0];
//     for (let i = 0; i < arg.length; i++) {
//         if(min <= arg[i]) {
//             min = min;
//         } else {
//             min = arg[i];
//         }
//     }

//     return min;
//   }

//   alert(summ([2, 3, 6, 7, 9, 12, 3]));

// 4-masala
// function manfiy() {
//   let arg = [2, -3, 5, 7, -9, -12, 21];
//   for (let m = 0; m < arg.length; m++) {
//     if (arg[m] < 0) {
//       console.log(arg[m] * -1);
//     }
//   }

//   return arg;
// }

// console.log(manfiy());

// 5-masala

// function summ(arg) {
//     for (let i = 0; i < arg.length; i++) {
//         console.log(arg[i] * 2);
//     }

//     return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 6-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 0) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 7-masala
// function summ(arg) {
//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] % 2 == 1) {
//       arg.splice(i, 1);

//       i--;
//     }
//   }

//   return arg;
// }

// console.log(summ([2, 3, 5, 7, 9, 12, 21]));

// 8-masala
// function teksh() {
//     let massiv = [2,4,7,'salom', true, null];
//     if (massiv.length > 0) {
//         console.log(${massiv}  mavjud);
//     } else  {
//         console.log(${massiv}  mavjud emas);
//     }

//     return massiv;
// }

// console.log(teksh());

// 9-masala
// function tesTar(arg) {
//     for(let i = 0; i < arg.length; i++)  {
//         console.log(arg[i] * -1);
//     }

// return arg;
// }

// console.log(tesTar([1,3,-4,6,-9,-12,15]));

// 10-masala
// function katta(arg) {
//   let a = 6;

//   for (let i = 0; i < arg.length; i++) {
//     if (arg[i] < a) {
//       arg.splice(i, 1);
//       i--;
//     }
//   }

//   return arg;
// }

// console.log(katta([2, 23, -10, 3, 5, 7, 9, 12, 21]));





// Massivning barcha elementlarining yig indisini hisoblaydigan funksiya yozing.
// Massivning eng katta elementini topadigan funksiya yozinMassivning eng kichik elementini topadigan funksiya yozinMassivdagi barcha manfiy elementlarni musbatga aylantiradigan funksiya yozing.
// Massivning har bir elementini ikki barobarga oshiradigan funksiya yozing.
// Massivdagi barcha juft sonlarni olib tashlaydigan funksiya yozing.
// Massivdagi barcha toq sonlarni olib tashlaydigan funksiya yozing.
// Massivdagi berilgan elementning mavjudligini aniqlaydigan funksiya yozing.
// Massivdagi barcha elementlarni teskari tartibda chiqaradigan funksiya yozing.
// Massivdagi ma'lum bir qiymatdan katta bolgan barcha elementlarni hisoblaydigan funksiya yozing.
// Massivda har bir elementning qiymatini 1 ga oshiradigan funksiya yozing.
// Massivdagi berilgan elementning indeksini topadigan funksiya yozing.
// Massivning barcha elementlari orasida berilgan qiymatning nechta borligini aniqlaydigan funksiya yozing.
// Massivdagi faqat musbat solardan iborat yangi massiv yaratadigan funksiya yozing.
// Massivdagi faqat manfiy sonardan iborat yangi massiv yaratadigan funksiya yozing.
// Massivning barcha elementarini sarga aylantiradigan funksiya yozing.
// Massivda har bir elementning kvadratini qaytaradigan funksiya yozing.
// Massivdagi barcha elementlarni boshqa massivga nusalaydigan funksiya yozing.
// Massivdagi barcha elementlarni yig 'indi va o'rtacha qiymatini qaytaradigan funksiya yozing.
// Massivdagi barcha takroriy elementlarni olib tashlaydigan funksiya yozing.