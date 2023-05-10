$(document).ready(onReady);

function onReady() {
  console.log("JQ is loaded!");
  $(`#generate-button`).on(`click`, generateNew);
  $(`#appendStuffHere`).on(`click`, `#yellow-button`, yellowButton);
  $(`#appendStuffHere`).on(`click`, `#delete-button`, deleteButton);
}
let clicks = 0;

function generateNew(event) {
  event.preventDefault();
  clicks++;
  console.log("Generate button clicked");
  $(`#appendStuffHere`).append(`
    <div id="generated">
      <p>
        <text>${clicks}</text>
        <button id="yellow-button">Yellow</button>
        <button id="delete-button">Delete</button>
      </p>
    </div>
  `);
}

function yellowButton(event) {
  console.log("Yellow clicked!");
  $(this).parent().parent().css({ "background-color": "yellow" });
}

function deleteButton(event) {
  console.log("Delete clicked");
  $(this).parent().parent().remove();
}
