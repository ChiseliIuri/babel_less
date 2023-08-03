"use strict";

var adult = 200;
var children = 100;
var room = 300;
document.getElementById("minus_adult").addEventListener("click", function () {
  substract("adult");
});
document.getElementById("plus_adult").addEventListener("click", function () {
  add("adult");
});
document.getElementById("minus_children").addEventListener("click", function () {
  substract("children");
});
document.getElementById("plus_children").addEventListener("click", function () {
  add("children");
});
document.getElementById("minus_room").addEventListener("click", function () {
  substract("room");
});
document.getElementById("plus_room").addEventListener("click", function () {
  add("room");
});
function add(target) {
  var count;
  switch (target) {
    case 'adult':
      count = document.getElementById("count_adult").innerHTML;
      document.getElementById("count_adult").innerHTML = parseInt(count) + 1;
      break;
    case 'children':
      count = document.getElementById("count_children").innerHTML;
      document.getElementById("count_children").innerHTML = parseInt(count) + 1;
      break;
    case 'room':
      count = document.getElementById("count_room").innerHTML;
      document.getElementById("count_room").innerHTML = parseInt(count) + 1;
      break;
  }
  var count_adult = document.getElementById("count_adult").innerHTML;
  var count_children = document.getElementById("count_children").innerHTML;
  var count_room = document.getElementById("count_room").innerHTML;
  document.getElementById("summ").value = count_adult * adult + count_children * children + count_room * room;
}
function substract(target) {
  var count;
  switch (target) {
    case 'adult':
      count = document.getElementById("count_adult").innerHTML;
      count >= 1 ? document.getElementById("count_adult").innerHTML = parseInt(count) - 1 : document.getElementById("count_adult").innerHTML = 0;
      break;
    case 'children':
      count = document.getElementById("count_children").innerHTML;
      count >= 1 ? document.getElementById("count_children").innerHTML = parseInt(count) - 1 : document.getElementById("count_children").innerHTML = 0;
      break;
    case 'room':
      count = document.getElementById("count_room").innerHTML;
      count >= 1 ? document.getElementById("count_room").innerHTML = parseInt(count) - 1 : document.getElementById("count_room").innerHTML = 0;
      break;
  }
  var count_adult = document.getElementById("count_adult").innerHTML;
  var count_children = document.getElementById("count_children").innerHTML;
  var count_room = document.getElementById("count_room").innerHTML;
  var summ = parseInt(count_adult) * adult + parseInt(count_children) * children + parseInt(count_room) * room;
  summ >= 0 ? document.getElementById("summ").value = summ : document.getElementById("summ").value = 0;
}