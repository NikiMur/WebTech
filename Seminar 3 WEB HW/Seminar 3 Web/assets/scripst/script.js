let namePeople = prompt('Введите свое имя', 'Имя не введено')
alert(`Привет, ${namePeople}`);


let Age = +prompt('Введите свой возраст', 'Возраст не введен')
switch (Age) {
  case 10 :
    alert(`${namePeople} ты еще маленький!`);
    break;

  case 18 :
    alert(`${namePeople} тебе уже можно! `);
    break;

  case 30 :
    alert(`${namePeople} Иди спи завтра работать!`);
    break;

  default:
    alert(` ${namePeople} мы не знаем что вам делать((( `);
}
// // добавили класс
// element.classList.add('active');
// // удалили класс
// element.classList.remove('active')

let count = 0;
function chanchedCollor() {
    let box = document.getElementsByClassName('box');
    // console.log(box[0]);
    let element = box[0];
    
    // if (count %2 == 0 ) {
    //     element.classList.add('activeBox');
    // }
    // else{
    //      element.classList.remove('activeBox');
    // }
    // count++;
    element.classList.toggle('activeBox');
    
    
}

let btn = document.getElementById('btn');
console.log(btn);
btn.addEventListener('click', chanchedCollor );

function chanchedText() {
  let title =document.getElementsByClassName('title');
  let element = title[0]
  element.textContent = "Всем пока!";
}



let btn2 = document.getElementById('btn2');
console.log(btn2);
btn2.addEventListener('click', chanchedText );
