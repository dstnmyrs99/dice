var slider = document.getElementById("range");
var output = document.getElementById("value");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

function run() {
  let sides = document.querySelector('#sides').value;
  let num = document.querySelector('#range').value;
  let results = document.querySelector('.result');
  let roll = [];
  let rollResults = '';
  let totalResult = 0;
  for (i = 0; i < num; i++) {
    roll.push(Math.floor(Math.random() * sides) + 1);
    totalResult += roll[i];
    rollResults += roll[i] + ' '; //'<br>';
  }
  rollResults += "<br>Total: " + totalResult;
  results.innerHTML = rollResults;

}
