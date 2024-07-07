// Strings
let name = "Harry";
console.log(name);
console.log(name.length);
console.log(name[0]);
console.log(name[1]);
let friend = 'Garry';
console.log(friend);

// Template Literals
let boy1 = "Harry";
let boy2 = "Garry";
console.log(`${boy1} is a friend of ${boy2}`);

// Escape Sequence
let fruit = "Bana\"na";
console.log(fruit);
let fruit1 = 'Bana\'na';
console.log(fruit1);

// \n for new line
// \t for new tab
// \r for carriage return

// String Properties and Methods
let name = "Harry";
let friend = "  Garry  "
// String length
console.log(name.length); 

// String Upper Case and Lower Case
console.log(name.toUpperCase());
console.log(name.toLowerCase());

// Slice
console.log(name.slice(2,4));
console.log(name.slice(1));

// Replace
console.log(name.replace("H","G"));

// Concat
console.log(name.concat(" is a good JS developer ", "who writes Code"));
console.log(name.concat(" is a friend of ", friend));

console.log(name + " is a friend of " + friend);

// Trim
console.log(friend.trim()); 

// Strings are immuteable