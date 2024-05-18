// ===== While Loop ====
let minutesUntilBusArrived = 5;
while (minutesUntilBusArrived > 0) {
  // console.log(`Bus Arrives in ${minutesUntilBusArrived}: minutes.`);
  minutesUntilBusArrived--;
}

//=== Do-While loop ====

let minutesUntilBusArrived1 = 5;
do {
  // console.log("Checking for bus...");
} while (minutesUntilBusArrived1 > 0);

//function with loop

let minutes_UntilBusArrived = 5;
function CheckBusArrival() {
  if (minutes_UntilBusArrived != 0) {
    return `Checking for the bus`;
  } else {
    return false;
  }
}
do {
  let response = CheckBusArrival();
  // console.log(response);
} while (minutes_UntilBusArrived > 0);

// ==== FOR LOOP===

for (let index = 0; index < 5; index++) {
  console.log(`watering plant ${index + 1}`);
}

// ===== FOR-in-Loop
let person: any = {
  name: "ali",
  age: 43,
  city: "Karachi",
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

//===For Of Loop====
let flavors = ["vanilla", "chocolate", "mint", "strawberry"];
for (let flavor of flavors) {
  console.log(flavor);
}
