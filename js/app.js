function updateMemory() {
  memory.push(input.value);
}

function showMemory() {
  input.value = memory.join(", ");
}

var list = linkedListGenerator();
var memory = [];
var input = document.getElementById('input');

var linkedList = (function() {

  document.getElementById('save').addEventListener('click', function() {
    updateMemory();
    input.value = "";
  });

  document.getElementById('dump').addEventListener('click', function() {
    showMemory();
  });
})();