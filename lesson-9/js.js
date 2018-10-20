let age = document.getElementById('age');

function showUser(surname, name) {
  console.log(this);
  console.log(this.value);
  alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
  return;
}
 //let double = count.bind(2);

let double = showUser.bind(age);
double('asda', 'asdad');