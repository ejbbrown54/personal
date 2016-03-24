/*console.log('hello world'); */

var div_element = document.createElement("div");      /* creating a div */
document.body.appendChild(div_element);               /* adds the div to the end of the document body */
var h2_element = document.createElement("h2");        /* creating an h2 */
div_element.appendChild(h2_element);                  /* adding the h2 to the div; the h2 is now a child of the div created on line 3 */
h2_element.innerText = "Calculate All Things";        /* adding inner text to the h2 */
var cal_div_elem = document.createElement("div");     /* creating another div */
cal_div_elem.id = "calculator";                       /* the div created on line 8 has an id of "calculator" */
div_element.appendChild(cal_div_elem);                /* adds the div "calculator" to the div on line 4 */

var arr = [1,2,3,"+",4,5,6,"-",7,8,9,"="];            /* create an array that programmatically adds text to each div */

for (var i=0; i<arr.length; i++){
  var num_elem = document.createElement("div");
  num_elem.innerText = arr[i];
  cal_div_elem.appendChild(num_elem);
num_elem.addEventListener('click', showNumber);
  
}

var sol_element = document.createElement("div");
sol_element.id ="solution_bar";
div_element.appendChild(sol_element);

function showNumber(event){
	sol_element.innerText = event.target.innerText;
}
