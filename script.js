//1
let text = "salom dunyo, bu javascript dunyosi";
let result = text
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // birinchi harf katta
  .join(" ");
console.log(result);

//2
let fullName = "Islomov Javohir";
let parts = fullName.split(" ");
let lastName = parts[0];
let firstName = parts[1];
let shortName = lastName.charAt(0).toUpperCase() + ". " + firstName;
console.log(shortName);
