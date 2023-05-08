$(document).ready(onReady);

function onReady() {
  console.log("JQ is loaded!");
  $(`#generate-button`).on(`click`, generateNew);
}

function generateNew() {
  event.preventDefault();
  console.log("Generate button clicked");
  $(`div.appendStuffHere`).append(`
    <div class="new">
      <p>
        <!-- something displaying the clicks count-->
        <button class="yellow-button">Yellow</button>
        <button class="delete-button">Delete</button>
      </p>
    </div>
  `);
  countClicks();
}

let clicks = 0;
function countClicks() {
  console.log("This works?");
  clicks++;
  console.log(clicks);
}

