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
        <button id="yellow-button">Yellow</button>
        <button id="delete-button">Delete</button>
      </p>
    </div>
  `);
}

let clicks = 0;
function countClicks() {
  clicks++;
  console.log(clicks);
}

function yellowButton(event) {
  console.log("Yellow clicked!");
  $(this).parent().parent().css({ "background-color": "yellow" });
}

function deleteButton(event) {
  console.log("Delete clicked");
  $(this).parent().parent().remove();
}

/*

Stuff I tried to get the countClicks function to display inside the <p> tag:


          <embed type=`text/js`, src=`countClicks(clicks).js`>

        $(this).append(countClicks)

        $("appendStuffHere".child).append(countClicks())

        .... and a lot of other stuff I didn't save, but I worked on it for SO LONG . 

*/
