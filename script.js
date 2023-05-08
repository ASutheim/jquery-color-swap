$(document).ready(onReady);

function onReady() {
  console.log("JQ is loaded!");
  $(`#generate-button`).on(`click`, generateNew);
}

function generateNew() {
  event.preventDefault();
  console.log("Generate button clicked");
  
}
