//creating an array and total
var total=0;
var groceryList=[

 {name: "Bananas",
 price:3.00},
 {name: "Bread",
 price:2.00},
 {name: "Milk",
 price:2.50},
 {name: "Eggs",
 price:1.50},
 {name:"Lettuce",
  price:3.00}
];

for (var i=0; i<groceryList.length;i++){

total+=groceryList[i].price;
 
console.log(groceryList[i].name + "  $"+groceryList[i].price.toFixed(2));
 
var printedList = document.createElement('div');
printedList.id = "totalList";

printedList.innerHTML = groceryList[i].name + "  $"+ groceryList[i].price.toFixed(2);

document.body.appendChild(printedList);

};

var printedTotal = document.createElement('div');
printedTotal.id="totalStyle";
printedTotal.innerHTML = "Total $"+total.toFixed(2);
document.body.appendChild(printedTotal);

//input adds new element to array
document.getElementById("submit").onclick = function addToList(){
	var newItemName = document.getElementById('newItemName').value;
	var newItemPrice = document.getElementbyId('newItemPrice').value;
};

var newElement = {name: newItemName, price: newItemPrice};

groceryList.push(newElement);

