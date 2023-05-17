function Item(title,price){
  this.title = title;
  this.price = price;
  this.showPrice = function(){console.log('가격은'+this.price+'원 입니다.');
  }
}

const item01 = new Item('인형', 3000);
const item02 = new Item('가방', 5000);
const item03 = new Item('지갑', 9000);

console.log(item01,item02,item03);
item03.showPrice();