

// conditional operaters 
//  ==, >, <, >=, <= 


// Logical operators
// &&, ||, !


// Link this script to index.html

// Assign ages to Ram and Shyam and print name of elder brother.
console.log("Assignment-1");

ram=24;
shyam = 23;

if(ram > shyam){
	console.log("Ram is elder.");
}
else if(ram==shyam){
	console.log("Both are of equal age.");
}
else{
	console.log("Shyam is elder.");
}

// Assign number to a variable and print if it is even or odd.
console.log("Assignment-2");

a=19;

if(a%2==0){
	console.log(a," is even.");
}
else{
	console.log(a," is odd.")
}
// Print maximum of 2 numbers
console.log("Assignment-3");

a=5;
b=6;

if(a>b){
	console.log(a," is maximum.");
}
else if(a==b){
	console.log("Both are maximum.");
}
else{
	console.log(b," is maximum.");
}
// Print maximum of 3 numbers
console.log("Assignment-4");

a=4;
b=7;
c=3;

if(a>b){
	if(a>c){
		console.log(a," is maximum.");
	}
	else if(a==c){
		console.log(a," is maximum.");
	}
	else {
		console.log(c," is maximum.");
	}
}
else{
	if(c>b){
		console.log(c," is maximum.")
	}
	else{
		console.log(b," is maximum.")
	}
}

// Check if a character is vowel or consonant
console.log("Assignment-5");

char='a'

if(char=='a' || char=='e' || char=='i' || char=='o' || char=='u'){
	console.log(char," is vowel.")
}
else{
	console.log(char," is consonant.")
}


// Given 3 angles of a triangle print if it is valid or not.
console.log("Assignment-6");

a=61
b=60
c=60
sum=a+b+c
if(sum==180){
	console.log("ABC is a triangle.")
}
else{
	console.log("ABC is not a triangle.")
}


// Given 2 angles of a triangle print value of third angle
console.log("Assignment-7");

a=44
b=72
sum=a+b
if(sum<=179){
	console.log("Third angle c =",c=180-a-b);
}
else{
	console.log("ABC is not a triangle.")
}
