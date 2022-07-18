let foods = ["pizza", "corn", "hot dogs", "ramen"];
// for(let food of foods){
//     console.log("I like to eat", food);
// }

let printFood = function(food){
    console.log("I like to eat", food);
}

foods.forEach(printFood);