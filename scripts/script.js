let adult = 200;
let children = 100;
let room = 300;
document.getElementById("minus_adult").addEventListener("click", ()=>{substract("adult");});
document.getElementById("plus_adult").addEventListener("click", ()=>{add("adult")});
document.getElementById("minus_children").addEventListener("click", ()=>{substract("children")});
document.getElementById("plus_children").addEventListener("click", ()=>{add("children")});
document.getElementById("minus_room").addEventListener("click", ()=>{substract("room")});
document.getElementById("plus_room").addEventListener("click", ()=>{add("room")});
function add(target) {
  let count;
  switch (target) {
    case 'adult' :
      count = document.getElementById("count_adult").innerHTML;
      document.getElementById("count_adult").innerHTML = parseInt(count) + 1;
      break;
    case 'children' :
      count = document.getElementById("count_children").innerHTML;
      document.getElementById("count_children").innerHTML = parseInt(count) + 1;
      break;
    case 'room' :
      count = document.getElementById("count_room").innerHTML;
      document.getElementById("count_room").innerHTML = parseInt(count) + 1;
      break;
  }
  let count_adult = document.getElementById("count_adult").innerHTML;
  let count_children = document.getElementById("count_children").innerHTML;
  let count_room = document.getElementById("count_room").innerHTML;
  document.getElementById("summ").value = count_adult * adult + count_children * children + count_room * room;
}
function substract(target) {
  let count;
  switch (target) {
    case 'adult' :
      count = document.getElementById("count_adult").innerHTML;
      count >= 1 ? document.getElementById("count_adult").innerHTML = parseInt(count) - 1 : document.getElementById("count_adult").innerHTML = 0;
      break;
    case 'children' :
      count = document.getElementById("count_children").innerHTML;
      count >= 1 ? document.getElementById("count_children").innerHTML = parseInt(count) - 1 : document.getElementById("count_children").innerHTML = 0;
      break;
    case 'room' :
      count = document.getElementById("count_room").innerHTML;
      count >= 1 ? document.getElementById("count_room").innerHTML = parseInt(count) - 1 : document.getElementById("count_room").innerHTML = 0;
      break;
  }
  let count_adult = document.getElementById("count_adult").innerHTML;
  let count_children = document.getElementById("count_children").innerHTML;
  let count_room = document.getElementById("count_room").innerHTML;
  let summ = (parseInt(count_adult) * adult) + (parseInt(count_children) * children) + (parseInt(count_room) * room);
  summ >= 0 ? document.getElementById("summ").value = summ : document.getElementById("summ").value = 0;
}

function querySelectOrFail(context, query){
  const element = context.querySelector(query);
  if(!element) {
    throw new Error("Can't find element with query:" + query + " on context", context);
  }
  return element;
}

class Counter {
  element;
  titleElement;
  value;
  price;
  callback;
  summ;

  constructor(name,price,callback) {
    this.element = querySelectOrFail(document.body, '.counter[data-type=' + name + ']');
    this.titleElement = querySelectOrFail(this.element, '.counter_item_title');
    this.value = 0
    this.price = parseFloat(price);
    this.callback = callback;
    this.summ = 0;
    querySelectOrFail(this.element, '.counter_item_minus').addEventListener('click', this.add.bind(this, -1));
    querySelectOrFail(this.element, '.counter_item_plus').addEventListener('click', this.add.bind(this, 1));
  }

  add(val){
    const oldValue = this.value;
    this.value = Math.max(0, this.value+val);
    if(oldValue !== this.value){
      this.summ = this.value * this.price;
      this.titleElement.innerHTML = this.value.toString();
      this.callback();
    }
  }
}

class Calculator{
  counters;
  summ;
  summElement;

  constructor(){
    const callback = ()=>{
      this.recalc();
    }
    this.counters = {
      adult: new Counter('adult', 200, callback),
      children: new Counter('children', 100, callback),
      room: new Counter('room', 300, callback),
    }
    this.summElement = querySelectOrFail(document,"#summ");
  }

  recalc(){
    this.summ = 0;
    for(const counter of Object.values(this.counters)){
      this.summ += counter.summ;
    }
    this.summElement.value = this.summ.toString();
  }
}

window.onload = (event) => {
  const calc = new Calculator();
};
