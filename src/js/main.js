const contentful = require("contentful");

const client = contentful.createClient({
  space: "231i4ecmbavi",
  environment: "master", // defaults to 'master' if not set
  accessToken: "wosTM2SJnO6jQr82SIZuRBfGgsL1QmgTk_wU9kpIpZE",
});

function createList(data) {
  data.sort();
  const nameList = document.getElementById("supporters-list");
  for (var i = 0; i < data.length; i++) {
    let li = document.createElement("li");
    li.innerHTML = data[i];
    nameList.appendChild(li);
    console.log("creating list from " + nameList);
  }
}

function createCounter(data) {
  const count = data.length;
  const counter = document.getElementById("counter-count");
  counter.innerHTML = count;
  console.log("count: " + count);
}

// about counter
function runCounterAnimation() {
  $(".counter-count").each(function () {
    $(this)
      .prop("Counter", 0)
      .animate(
        {
          Counter: $(this).text(),
        },
        {
          //if you want to change counter speed then change duration
          duration: 2500,
          easing: "swing",
          step: function (now) {
            $(this).text(Math.ceil(now));
          },
        }
      );
  });
}

function createListAndCounter(data) {
  createList(data);
  createCounter(data);
  runCounterAnimation();
  console.log("combination ran");
}

client
  .getEntries()
  .then((response) => createListAndCounter(response.items[0].fields.fullName))
  .catch(console.error);

// BUTTON CLICK SHOWS ALL NAMES
// let namesHidden = true;
// const supportersList = document.getElementById("supporters-list");

// function showAndHideNames() {
//   namesHidden
// ? supportersList.classList.remove("hidden")
//     : supportersList.classList.add("hidden");

//   namesHidden = !namesHidden;
//   console.log(namesHidden);
// }
