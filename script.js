
// Part 1: Basics

function checkAge() {
  let age = document.getElementById("ageInput").value;
  
  if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult!";
  } else {
    document.getElementById("ageResult").textContent = "You are a minor!";
  }
}

// Part 2: Functions
function calculateTotal(a, b) {
  let total = a + b;
  document.getElementById("totalResult").textContent = `Total: ${total}`;
}

function formatGreeting(name) {
  let greeting = `Hello, ${name}! Welcome to JavaScript practice.`;
  document.getElementById("greetingResult").textContent = greeting;
}

// Part 3: Loops
function countToFive() {
  let list = document.getElementById("countList");
  list.innerHTML = ""; // clear previous list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Count: ${i}`;
    list.appendChild(li);
  }
}

function listFruits() {
  let fruits = ["Apple", "Banana", "Cherry", "Mango"];
  let list = document.getElementById("fruitList");
  list.innerHTML = "";

  fruits.forEach(fruit => {
    let li = document.createElement("li");
    li.textContent = fruit;
    list.appendChild(li);
  });
}

// Part 4: DOM Manipulation

// 1. Change text on click
document.getElementById("changeTextBtn").addEventListener("click", () => {
  document.getElementById("textTarget").textContent = "Text changed with DOM!";
});

// 2. Toggle color on click
document.getElementById("toggleColorBtn").addEventListener("click", () => {
  document.getElementById("colorText").classList.toggle("highlight");
});

// 3. Add new list item dynamically
document.getElementById("addItemBtn").addEventListener("click", () => {
  let li = document.createElement("li");
  li.textContent = "New dynamic item!";
  document.getElementById("dynamicList").appendChild(li);
});
