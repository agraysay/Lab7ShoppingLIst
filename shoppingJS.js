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
 price:1.50}
];

//FOR LOOP 
//for (var i=0; i<groceryList.length;i++){

//  total+=groceryList[i].price;
 
//  console.log(groceryList[i].name + "  $"+groceryList[i].price);

// }
//   console.log("Total $"+total);

//FOR EACH LOOP
var total = 0;
groceryList.forEach(function(item){
	console.log(item.name + " - $" + item.price);
	total += item.price;
});
