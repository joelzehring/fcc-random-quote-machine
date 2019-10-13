/* by Matthew Carpenter */
console.log(`--------------------------------------------------------------------------------`);
console.log(`Come check out my LinkedIn: https://www.linkedin.com/in/matthewcarpenter22`);
console.log(`See my current projects on GitHub: https://www.github.com/getHashSet`);
console.log(`--------------------------------------------------------------------------------`);
console.log(`launching ./resources/javascript/app.js...`);
$( document ).ready(function() {
    console.log(`app.js ready!`);
    /* ----- Code Start ----- */
  

const quoteData = [
	{
		quote: "An apple a day",
		author: "Ben Frank"
	},
	{
		quote: "I cannot tell a lie",
		author: "George Wash"
	},
	{
		quote: "Do or do not, or, whatever",
		author: "Yo-dah"
	},
	{
		quote: "Yeah, okay, um.. what?",
		author: "Weird Itchy Cat"
	}
]

const randNum = Math.floor(Math.random() * quoteData.length);
$("#text").html("\"" + quoteData[randNum].quote + "\"");
$("#author").html(quoteData[randNum].author); 

$( "button" ).click(function( event ) {
	const randNum = Math.floor(Math.random() * quoteData.length);
	$("#text").html("\"" + quoteData[randNum].quote + "\"");
	$("#author").html(quoteData[randNum].author); 
});


    /* ------ Code End ------ */
});
console.log(`loading...`);