//first task
// const name = prompt("Введіть ваше ім'я: ");
// alert(`Привіт, ${name}!`);

//second task
// const year = 2025;
// const birth = prompt("Введіть рік вашого народження: ");
// const age = year - birth;
// if (isNaN(birth)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   alert(`Вам ${age}!`);
// }

//third task
// const side = prompt("Введіть довжину сторони квадрата: ");
// const perimeter = 4 * side;
// if (isNaN(side)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   const perimeter = 4 * side;
//   alert(`Периметр квадрата: ${perimeter}`);
// }

//fourth task
// const radius = prompt("Введіть радіус кола: ");
// const area = Math.PI * Math.pow(radius, 2);
// if (isNaN(radius)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   alert(`Площа круга ${area.toFixed(1)}!`);
// }

//fifth task
// const distance = prompt("Введіть відстань між містами у км:");
// const time = prompt("За скільки годин хочете дістатися?");
// const speed = distance / time;
// if (isNaN(distance) && isNaN(time)) {
//   alert("Ви ввели нечислові значення!");
// } else {
//   alert(`Необхідна швидкість, щоб прибути вчасно: ${speed} км/год`);
// }

//sixth task
// const course = 0.86;
// const dolars = prompt("Введіть суму в доларах:");
// const euros = dolars * course;
// if (isNaN(dolars)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   alert(`Ви отримаєте: ${euros.toFixed(1)} євро`);
// }

//seventh task
// const fileMB = 820;
// const GB = prompt("Введіть обсяг флешки у ГБ:");
// const MB = GB * 1024;
// const fileCount = Math.floor(MB / fileMB);
// if (isNaN(GB)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   alert(`На флешку вміститься: ${fileCount} файлів`);
// }

//eight task
// const money = prompt("Введіть ваш бюджет: ");
// const price = prompt("Введіть вартість 1 шоколадки?");
// const count = Math.floor(money / price);
// const change = money - count * price;
// if (isNaN(money) && isNaN(price)) {
//   alert("Ви ввели нечислові значення!");
// } else {
//   alert(
//     `Ви можете купити ${count} шоколадок і у вас залишиться ${change.toFixed(
//       1
//     )} грн.`
//   );
// }

//nineth task
// const number = prompt("Введіть тризначне число: ");
// const three_num = Math.floor(number / 100);
// const two_num = Math.floor((number % 100) / 10);
// const one_num = number % 10;
// const reversed = one_num * 100 + two_num * 10 + three_num;
// if (isNaN(number)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   alert(`Перевернуте число: ${reversed}`);
// }

//tenth task
// const number = prompt("Введіть ціле число:");
// const result = (number % 2 === 0 && "Парне") || "Непарне";
// alert(`Число: ${number} - ${result}`);

// if (isNaN(num)) {
//   alert("Ви ввели нечислове значення!");
// } else {
//   if (num % 2 === 0) {
//     alert(`Число: ${num} - Парне`);
//   } else {
//     alert(`Число: ${num} - Непарне`);
//   }
// }
