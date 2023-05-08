$(document).ready(onReady);

function onReady() {
  console.log("JQ is loaded!");
  $(`#generate-button`).on(`click`, generateNew);
  $(`#appendStuffHere`).on(`click`, `#yellow-button`, yellowButton);
  $(`#appendStuffHere`).on(`click`, `#delete-button`, deleteButton);
}

function generateNew(event) {
  event.preventDefault();
  console.log("Generate button clicked");
  $(`#appendStuffHere`).append(`
    <div id="generated">
      <p>
        <!-- something displaying the clicks count-->
        <button id="yellow-button">Yellow</button>
        <button id="delete-button">Delete</button>
      </p>
    </div>
  `);
  countClicks();
}

let clicks = 0;
function countClicks() {
  clicks++;
  console.log(clicks);
}

function yellowButton(event) {
  console.log("Yellow clicked!");
}

function deleteButton(event) {
  console.log("Delete clicked");
  $(this).parent().parent().remove();
}
