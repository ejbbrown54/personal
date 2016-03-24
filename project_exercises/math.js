$(document).ready(function(){
   var number;

   function showRandomText(data) {
     // 1. retrieve the number returned in this json(data)
    // 2. assign that number to var number 
    console.log(data);
    number = data.data[0];
     $("#number").text(number);

   };
   var fact; //I added this variable.

   function getAndDisplayFact(){
     $.get('http://numbersapi.com/' + number + '/math?json')
       .done(function(data) {
         // 1. retrieve the fact returned in this json(data)
         // 2. display both number and its fact on the html page
         fact = data.text;  //assigned fact the value of data.text
          $("#math-fact").text(fact);  //replaced the empty text in #math-fact with the value of fact
       });
   }
  
  $.get('https://qrng.anu.edu.au/API/jsonI.php?length=1&type=uint8')
    .done(showRandomText)
    .done(getAndDisplayFact);

});