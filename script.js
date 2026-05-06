// // 1
// const num = [2, 4, 6, 8];
// const squaredNum = num.map(n => n * n);
// console.log(squaredNum);

// // 2
// const numbers = [10, 55, 23, 78, 34, 90];
// const greaterNum = numbers.filter(n => n > 50);
// console.log(greaterNum);

// // 3
// let nums = [2, 3, 4];
// let productNum = nums.reduce((total, n) => total * n, 1);
// console.log(productNum);

// // 4
// let users = ["emma", "stella", "aisha", "abdul"];
// let names = users.map(name => name.toUpperCase());
// console.log(names);

// // 5
// let numbers5 = [10, 15, 21, 30, 42];
// let values = numbers5.find(n => n % 7 === 0);
// console.log(values);

// // 6
// let numbers6 = [1, 2, 3, 4, 5, 6];
// let data = numbers6.filter(n => n % 2 === 0);
// console.log(data);

// // 7
// const num7 = [5, 10, 15, 20];
// const countResult= num7.reduce((total,num) => total + 1, 0);
// console.log(countResult);

// // 8
// let prices = [200, 150, 300, 50];
// let totalPrice = prices.reduce((total, price) => total + price, 0);
// console.log(totalPrice);

// // 9
// let values9 = [200, 150, 300, 50];
// let greatherThan100 = values9.some(v => v > 100);
// console.log(greatherThan100);

// // 10
// let allNumbers = [3, 5, 7, 9];
// let allPositive = allNumbers.every(n => n > 0);
// console.log(allPositive);

// // 11
// const fruits = ["apple", "orande", "pineapple", "mango"];
// const sweetFruits = fruits.filter(f => f !== "apple");
// console.log(sweetFruits);

// // 12
// let animals = ["cat", "dog", "parrot"];
// let lengths = animals.map(a => a.length);
// console.log(lengths);

// // 13
// let string = "javascript";
// let startsWithJava = string.startsWith("java");
// console.log(startsWithJava);

// // 14
// let strings = "javascript";
// let part = strings.substring(4);
// console.log(part);

// // 15
// let str = "javascript";
// let part2 = str.slice(4);
// console.log(part2);

// // 16
// function capitalizeFirst(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// };
// console.log(capitalizeFirst("hello"));

// // 17
// const text = "i love-javascript";
// const replaced = text.replace(/ /g, "-");
// console.log(replaced);

// // 18
// let value = "Backend Developer";
// let count = value.length;
// console.log(count);

// // 19
// let animals19 = "cat, dog, parrot";
// let pets = animals19.split(", ");
// console.log(pets);

// // 20
// let sentence = "Backend developer roadmap";
// let hasDeveloper = sentence.includes("developer");
// console.log(hasDeveloper);

// // 21
// const messyData = " java script ";
// const cleanData = messyData.replace(/\s/g, "d");
// console.log(cleanData);

// // 22
// let random1to10 = Math.floor(Math.random() * 10) + 1;
// console.log(random1to10);

// // 23
// let num23 = [12, 45, 7, 89, 23];
// let largest = Math.max(...num23);
// console.log(largest);

// // 24
// const numbers24 = [100, 34, 9, 67];
// const smallest = Math.min(...numbers24);
// console.log(smallest);

// // 25
// const nums25 = 5.67891;
// const rounded = parseFloat(nums25.toFixed(2));
// console.log(rounded);

// // 26
// let random1to100 = Math.floor(Math.random() * 100) + 1;
// console.log(random1to100);

// // 27
// const absoluteValue = Math.abs(-45);
// console.log(absoluteValue);

// // 28
// let student = { name: "stella", score: 85 };
// student.grade = "A";
// console.log(student);

// // 29
// let user = { name: "aisha", age: 30 };
// console.log(Object.keys(user));

// // 30
// let car = { Brand: "mercedes-Benz", year: 2022, color: "black" };
// for (let key in car) {
//   console.log(key + ":" + car[key]);
// }

// // 31
// let person = { name: "abdul", address: { city: "Address:America", zip: 12345 } };
// console.log(person.address.city);



//conditional Statements

//let boy= "rich"
// let poor="poor"
// let ave="average"

// if (boy === "rich"){
//   console.log("Accept Him!!!!")
// }
// else if (boy === "average") {
//   console.log("consider him")
// }
// else (boy === "poor") {
//   console.log("Reject Him")
// };//


// let today = "Monday";

// switch (today) {
//   case "Monday"
//     console.log("Today is Monday")
//    break;
//    case "Tuesday":
//      console.log("Today is Tuesday")
// // }
// let users = ["Smith","John","Ada","Mike"];
// let caps = users.map((u) => u.toUpperCase());
// console.log(caps);
//  let words = "I love JavaScript";
//  let dash = words.replaceAll(" ", "-");



//  let words = "I love JavaScript";
//  let dash = words.replaceAll(" ", "-");
//  console.log(dash);
//  let random = Math.floor(Math.random()*10);
//  console.log(random);
 

// passowrd reset to 3479=  +


function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  li.onclick = function () {
    li.classList.toggle("completed");
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.onclick = function (e) {
    e.stopPropagation();
    li.remove();
  };

  li.appendChild(deleteBtn);
  document.getElementById("taskList").appendChild(li);
  input.value = "";
}
console.log(chalk.green("Database connected"));
console.log(chalk.red("Server crashed"));
console.log(chalk.yellow("Warning: Missing file"));

 //home
    if (req.url ==='/') {
        console.log(chalk.green('user visited the home page'));

        fs.readFile('index.html',(err,data)=>{
            if (err) {
                res.end('Error loading home page');
                return;
            }

      res.writeHead(200,{'content-Type':'text/html'});
    res.end(data);//send HTMl file  
    )};

// let age = 18

// if age < 16 {
//   print("Too young")
// } else if age >= 16 {print("Almost there")
// } else {
//   print("Eligible")
// }


// let score = 230;
// if (score >= 210) { print("Qualified for unilag")}https://open.spotify.com/artist/4TKhxSkqClXrdtUWgKqHVU

// let score = 109;

// if (score >= 210) {
//     console.log("Qualified for ABU Pharmacy");
// } else {
//     console.log("Not qualified");
// }

// let score = 290;

// if (score >= 210) {
//     console.log("Qualified for Pharmacy");
// } else if (score >= 170) {
//     console.log("Qualified for other courses");
// } else {
//     console.log("Not qualified");
// }


// let hasMath = true;
// let hasEnglish = true;
// let hasChemistry = true;
// let hasBiology = true;
// let hasPhysics = true;

// if (hasMath && hasEnglish && hasChemistry && hasBiology && hasPhysics) {
//     console.log("O’Level requirements complete for Pharmacy");
// } else {
//     console.log("O’Level requirements not complete");
// }