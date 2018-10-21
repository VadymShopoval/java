class Options  {
  constructor(height=100, width=100, bg='red', fontSize=16, textAlign='left') {
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.textAlign = textAlign;
  }
  diV(){
    let div = document.createElement('div');
    div.className = "div";
    div.innerHTML = "Ура!";
    div.style.cssText = `height= ${this.height}px; width= ${this.width}px; background: ${this.bg}; font-size: ${this.fontSize}px; text-align: ${this.textAlign};`;
    return document.body.appendChild(div);
  }
}
let vadim = new Options();
vadim.diV();


const john = new Person(21313);
john.sayName();
// Person John said his name
console.log(john.sayName());