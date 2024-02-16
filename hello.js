// Exercise 1-
// console.log("Installed Ts, NodeJs and vs code");
// Exercise 2-
var person = "Umar";
console.log("Hello ".concat(person, ", would you like to learn some Python today?"));
// Exercise 3-
// let personName: string = "Umar";
// console.log(`Lowercase: ${personName.toLowerCase()}`);
// console.log(`Uppercase: ${personName.toUpperCase()}`);
// console.log(`Titlecase: ${personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase()}`);
// Exercise 4- 
// let quote = "Truth is the only way to escape from problem";
// let author = "Umar Waqar";
// console.log(`${author} once said, "${quote}"`);
//Exercise  5- 
// let famousPerson: string =  "Umar Waqar";
// let quoted: string = "Truth is the only way to escape from problem";
// let message: string = `${famousPerson} once said, "${quoted}"`;
// console.log(message);
// Exercise 6-
// let personNameWithWhitespace: string = "\t   Umar\n";
// console.log(`Original Name: "${personNameWithWhitespace}"`);
// let strippedName: string = personNameWithWhitespace.trim();
// console.log(`Stripped Name: "${strippedName}"`);
//  Exercise 7-
// Addition
// let additionResult: number = 5 + 3;
// console.log(`Addition: 5 + 3 = ${additionResult}`);
// // Subtraction
// let subtractionResult: number = 10 - 2;
// console.log(`Subtraction: 10 - 2 = ${subtractionResult}`);
// // Multiplication
// let multiplicationResult: number = 4 * 2;
// console.log(`Multiplication: 4 * 2 = ${multiplicationResult}`);
// // Division
// let divisionResult: number = 16 / 2;
// console.log(`Division: 16 / 2 = ${divisionResult}`);
//Exercise 8
// Generating result of 8 in four lines
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// Exercise 9
// let favoriteNumber: number = 7;
// let messages: string = `My favorite number is ${favoriteNumber}.`;
// console.log(messages);
// Exercise 10
// Muhammad Umar
// Generating result of 8 in four lines
// (Task8)
// console.log(5 + 3);
// console.log(10 - 2);
// console.log(4 * 2);
// console.log(16 / 2);
// Muhammad Umar
// Generating name with space and in new line
// (Task6)
// let personNameWithWhitespace: string = "\t   Umar\n";
// console.log(`Original Name: "${personNameWithWhitespace}"`);
// Exercise 11-
// let names: string[] = ["Khizar", "Waqar", "Ali", "Dawood", "Eram"];
// for (let i = 0; i < names.length; i++) {
//     console.log(names[i]);
// }
//Exercise  12-
// let names: string[] = ["Khizar", "Waqar", "Ali", "Dawood", "Eram"];
// for (let i = 0; i < names.length; i++) {
//     console.log(`Hello ${names[i]}, have a great day!`);
// }
// Exercise 13-
// let favoriteTransportation: string[] = ["Corolla", "Honda 70", "Khizar's Motorcycle", "Bicycle"];
// for (let i = 0; i < favoriteTransportation.length; i++) {
//     console.log(`I would like to own a ${favoriteTransportation[i]}.`);
// }
// Exercise 14
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Exercise 15
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// let unableToAttend: string = "Ali";
// let replacementGuest: string = "Maria";
// console.log(`${unableToAttend} cannot make it to the dinner.`);
// let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);
// if (indexOfUnableToAttend !== -1) {
//     guestList[indexOfUnableToAttend] = replacementGuest;
// }
// for (let guest of guestList) {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// Exercise 16
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// let unableToAttend: string = "Ali";
// let replacementGuest: string = "Maria";
// console.log(`${unableToAttend} cannot make it to the dinner.`);
// let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);
// if (indexOfUnableToAttend !== -1) {
//     guestList[indexOfUnableToAttend] = replacementGuest;
// }
// for (let guest of guestList) {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// console.log("Great news! We found a bigger dinner table.");
// guestList.unshift("John"); 
// guestList.splice(Math.floor(guestList.length / 2), 0, "Sophia");
// guestList.push("Daniel");
// for (let guest of guestList) {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
//Exercise 17
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// let unableToAttend: string = "Ali";
// let replacementGuest: string = "Maria";
// console.log(`${unableToAttend} cannot make it to the dinner.`);
// let indexOfUnableToAttend: number = guestList.indexOf(unableToAttend);
// if (indexOfUnableToAttend !== -1) {
//     guestList[indexOfUnableToAttend] = replacementGuest;
// }
// for (let guest of guestList) {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// // Additional requirements for inviting more guests
// console.log("Great news! We found a bigger dinner table.");
// // Add new guests
// guestList.unshift("John"); 
// guestList.splice(Math.floor(guestList.length / 2), 0, "Sophia"); 
// guestList.push("Daniel"); 
// for (let guest of guestList) {
//     console.log(`Dear ${guest}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// console.log("Unfortunately, the new dinner table won't arrive in time, and we can only invite two people for dinner.");
// while (guestList.length > 2) {
//     let removedGuest = guestList.pop();
//     console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
// }
// for (let remainingGuest of guestList) {
//     console.log(`Dear ${remainingGuest}, you're still invited to dinner.`);
// }
// guestList.pop();
// guestList.pop();
// console.log("Final guest list:", guestList);
//Exercise 18
// let placesToVisit: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];
// console.log("Original Order:", placesToVisit);
// console.log("Alphabetical Order:", [...placesToVisit].sort());
// console.log("Original Order (unchanged):", placesToVisit);
// console.log("Reverse Alphabetical Order:", [...placesToVisit].sort().reverse());
// console.log("Original Order (unchanged):", placesToVisit);
// placesToVisit.reverse();
// console.log("Reversed Order:", placesToVisit);
// placesToVisit.reverse();
// console.log("Back to Original Order:", placesToVisit);
// placesToVisit.sort();
// console.log("Sorted in Alphabetical Order:", placesToVisit);
// placesToVisit.sort((a, b) => b.localeCompare(a));
// console.log("Sorted in Reverse Alphabetical Order:", placesToVisit);
//Exercise 19
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// for (let i = 0; i < guestList.length; i++) {
//     console.log(`Dear ${guestList[i]}, you are cordially invited to dinner. We would be honored to have your presence.`);
// }
// // Print the number of people you are inviting to dinner
// console.log(`Total number of guests invited to dinner: ${guestList.length}`);
// Exercise 20
// let countries: string[] = ["USA", "Canada", "France", "Japan", "Australia", "Brazil"];
// // Print the list of countries
// console.log("List of Countries:", countries);
//Exercise 21
// interface Book {
//   title: string;
//   author: string;
//   publicationYear: number;
// }
// let book1: Book = {
//   title: "The Great Gatsby",
//   author: "F. Scott Fitzgerald",
//   publicationYear: 1925
// };
// let book2: Book = {
//   title: "To Kill a Mockingbird",
//   author: "Harper Lee",
//   publicationYear: 1960
// };
// let book3: Book = {
//   title: "1984",
//   author: "George Orwell",
//   publicationYear: 1949
// };
// console.log("Book 1:", book1);
// console.log("Book 2:", book2);
// console.log("Book 3:", book3);
//Exercise 22
// let guestList: string[] = ["Khizar", "Ali", "Hamza"];
// try {
//     console.log(`Guest at index 3: ${guestList[3]}`);
// } catch (error) {
//     console.error("Error:", error.message);
//     // Correct the error 
//     console.log(`Guest at index 1: ${guestList[1]}`);
// }
// Exercise 23
// let car: string = 'subaru';
// //
// console.log(car === 'subaru');
// // Test 1:
// console.log(car !== 'ford');
// // Test 3:
// console.log(car.length > 4);
// // Test 4: 
// console.log(car === 'Subaru');
// // Test 5:
// console.log(car !== 'subaru');
// // Test 6:
// console.log(car.length <= 6);
// // Task 7:
// console.log(car === 'honda');
// // Test 8:
// console.log(car.charAt(0) === 's');
// // Test 9:
// console.log(typeof car === 'string');
// // Test 10:
// console.log(car == 'subaru');
//Exercise 24
// let fruits: string[] = ["apple", "orange", "banana", "grape"];
// console.log("Item in Array Test:", fruits.indexOf("banana") !== -1);
// console.log("Item Not in Array Test:", fruits.indexOf("watermelon") === -1);
// Exercise 25
// Passing version 
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
// Failing version
// let alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// }
//Exercise 26
// Passing Condition
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Oops! You just earned 10 points for shooting a non-green alien.");
// }
// Failing condtion
// let alien_color: string = 'red';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points for shooting the green alien.");
// } else {
//     console.log("Oops! You just earned 10 points for shooting a non-green alien.");
// }
//Exercise 27
// let alien_color: string = 'green';
// if (alien_color === 'green') {
//     console.log("Congratulations! You just earned 5 points.");
// } else if (alien_color === 'yellow') {
//     console.log("Congratulations! You just earned 10 points.");
// } else if (alien_color === 'red') {
//     console.log("Congratulations! You just earned 15 points.");
// } else {
//     console.log("Unknown alien color. No points earned.");
// }
// Exercise 28
// let age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Exercise 29
// let favorite_fruits: string[] = ["banana", "apple", "strawberry"];
// if (favorite_fruits.indexOf("banana") !== -1) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.indexOf("apple") !== -1) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.indexOf("strawberry") !== -1) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.indexOf("orange") !== -1) {
//     console.log("You really like oranges!");
// } else {
//     console.log("Oranges are not in your list of favorite fruits.");
// }
// if (favorite_fruits.indexOf("kiwi") !== -1) {
//     console.log("You really like kiwis!");
// } else {
//     console.log("Kiwis are not in your list of favorite fruits.");
// }
// Exercise 30
// let usernames: string[] = ["admin", "Eric", "Alice", "Bob", "John"];
// for (let username of usernames) {
//     if (username.toLowerCase() === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// Exercise 31
// let usernames: string[] = [];
// if (usernames.length === 0) {
//     console.log("We need to find some users!");
// } else {
//     for (let username of usernames) {
//         if (username.toLowerCase() === 'admin') {
//             console.log("Hello admin, would you like to see a status report?");
//         } else {
//             console.log(`Hello ${username}, thank you for logging in again.`);
//         }
//     }
// }
//Exercise  32
// let current_users: string[] = ["Alice", "Bob", "John", "Eric", "Admin"];
// let new_users: string[] = ["John", "Sarah", "Mike", "Tom", "admin"];
// let current_users_lowercase: string[] = current_users.map(user => user.toLowerCase());
// for (let new_username of new_users) {
//     let isUsernameTaken: boolean = current_users_lowercase.indexOf(new_username.toLowerCase()) !== -1;
//     if (isUsernameTaken) {
//         console.log(`Sorry, the username '${new_username}' is already taken. Please choose a different username.`);
//     } else {
//         console.log(`Congratulations! The username '${new_username}' is available.`);
//     }
// }
//Exercise  33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let number of numbers) {
//     let ordinalSuffix: string;
//     if (number === 1) {
//         ordinalSuffix = "st";
//     } else if (number === 2) {
//         ordinalSuffix = "nd";
//     } else if (number === 3) {
//         ordinalSuffix = "rd";
//     } else {
//         ordinalSuffix = "th";
//     }
//     console.log(`${number}${ordinalSuffix}`);
// }
// Exercise 34
// let favoritePizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];
// // Printing the names of each pizza
// console.log("Pizza Names:");
// for (let pizza of favoritePizzas) {
//     console.log(pizza);
// }
// // Printing a sentence for each pizza
// console.log("\nPizza Statements:");
// for (let pizza of favoritePizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// // Additional sentence outside the loop
// console.log("\nI really love pizza!");
// Exercise 35
// let commonCharacteristic: string = "make a great pet";
// let animals: string[] = ["Dog", "Cat", "Rabbit"];
// console.log("Animal Names:");
// for (let animal of animals) {
//     console.log(animal);
// }
// console.log("\nAnimal Statements:");
// for (let animal of animals) {
//     console.log(`A ${animal.toLowerCase()} would ${commonCharacteristic}.`);
// }
// console.log(`\nAny of these animals would ${commonCharacteristic}!`);
//Exercise 36
// function make_shirt(size: string, message: string): void {
//   console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }
// make_shirt("Medium", "Hello, World!");
// Exercise 37
// function make_shirt(size: string = "Large", message: string = "I love TypeScript"): void {
//   console.log(`A ${size}-sized shirt will be printed with the message: "${message}".`);
// }
// make_shirt("Medium");
// make_shirt("Small", "Hello, TypeScript!");
// Exercise 38
// function describe_city(city: string, country: string = "Default Country"): void {
//   console.log(`${city} is in ${country}.`);
// }
// describe_city("Karachi", "Pakistan");
// describe_city("New York", "USA");
// describe_city("Tokyo"); // 
// Exercise  39
// function city_country(city: string, country: string): string {
//   return `${city}, ${country}`;
// }
// let location1: string = city_country("Lahore", "Pakistan");
// let location2: string = city_country("New York", "USA");
// let location3: string = city_country("Tokyo", "Japan");
// console.log(location1);
// console.log(location2);
// console.log(location3);
//Exercise 40
// interface Album {
//   artist: string;
//   title: string;
//   tracks?: number;
// }
// function make_album(artist: string, title: string, tracks?: number): Album {
//   let album: Album = {
//       artist: artist,
//       title: title
//   };
//   if (tracks !== undefined) {
//       album.tracks = tracks;
//   }
//   return album;
// }
// let album1: Album = make_album("Artist1", "Album One");
// let album2: Album = make_album("Artist2", "Album Two", 12); // Including the number of tracks
// let album3: Album = make_album("Artist3", "Album Three", 8); // Including the number of tracks
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Exercise 41
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//       console.log(magician);
//   }
// }
// let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Derren Brown", "Penn Jillette", "Teller"];
// show_magicians(magicianNames);
// Exercise 42
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//       console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   
//   return magicians.map(magician => magician + " the Great");
// }
// let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Derren Brown", "Penn Jillette", "Teller"];
// let greatMagicians: string[] = make_great(magicianNames);
// show_magicians(greatMagicians);
//Exercise 43
// function show_magicians(magicians: string[]): void {
//   for (let magician of magicians) {
//       console.log(magician);
//   }
// }
// function make_great(magicians: string[]): string[] {
//   return magicians.map(magician => magician + " the Great");
// }
// let magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Derren Brown", "Penn Jillette", "Teller"];
// let greatMagicians: string[] = make_great([...magicianNames]);
// console.log("Original Magicians:");
// show_magicians(magicianNames);
// console.log("\nModified Magicians:");
// show_magicians(greatMagicians);
//Exercise 44
// function order_sandwich(...items: string[]): void {
//   console.log("Sandwich Summary:");
//   if (items.length > 0) {
//       console.log(`Bread with: ${items.join(', ')}`);
//   } else {
//       console.log("No items selected. Please choose some ingredients for your sandwich.");
//   }
//   console.log();
// }
// order_sandwich("Turkey", "Cheese", "Spicy");
// order_sandwich("Aloo", "Tomato");
// order_sandwich(); 
// Exercise 45
// interface Car {
//   manufacturer: string;
//   modelName: string;
//   color?: string;
//   optionalFeature?: string;
// }
// function create_car(manufacturer: string, modelName: string, ...options: string[]): Car {
//   let car: Car = {
//       manufacturer: manufacturer,
//       modelName: modelName
//   };
//   for (let i = 0; i < options.length; i += 2) {
//       const key: string = options[i];
//       const value: string = options[i + 1];
//       if (key && value) {
//           car[key] = value;
//       }
//   }
//   return car;
// }
// let myCar: Car = create_car("Toyota", "Camry", "color", "blue", "optionalFeature", "Sunroof");
// console.log(myCar);
