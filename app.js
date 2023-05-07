// 1) Task 

// switch (traficLight) {
//   case "red":
//      console.log("Стой на месте")
//     break;
//   case "yellow":
//      console.log("Приготовься идти по дороге")
//     break;
//   case "green":
//      console.log("Все можешь идти не парься")
//     break
//   default:
//     console.log('Неправильное значение')
//     break;
// }

// var traficLight = prompt('Ввведите цвет светафова?')

if(traficLight === "red") {
  console.log("Стой на месте")
} else if(traficLight === "yellow") {
  console.log("Приготовься идти по дороге")
} else if (traficLight === "green") {
  console.log("Все можешь идти не парься")
} else {
  console.log('Неправильное значение')
}

console.log(traficLight)

// 2)task
var enterNumber = parseInt(prompt("Enter number from 1 to 9"))

var romanNumbes =[ "I","II","III","IV","V","VI","VII","VIII", "IX"]
if(enterNumber >= 1 && enterNumber <= 9) {
  console.log('Это римское число'+ " " + romanNumbes[enterNumber - 1])
} else {
  console.log("Не это не то число")
}


// 3) task

var choseAnyNumber = Number(prompt('Ввведите любое число от 1 до 9 '))

switch (choseAnyNumber) {
    case 1:
      console.log("Вы выбрали Меркурий")
    break;
    case 2:
      console.log("Вы выбрали Венера")
    break;
    case 3:
      console.log("Вы выбрали Земля")
    break;
    case 4:
      console.log("Вы выбрали Марс")
    break;
    case 5:
      console.log("Вы выбрали Юпитер")
    break;
    case 6:
      console.log("Вы выбрали Сатурн")
    break;
    case 7:
      console.log("Вы выбрали Уран")
    break;
    case 8:
      console.log("Вы выбрали Нептун")
    break;
  default:
    console.log("Введите что нибудь другое")
    break;
}