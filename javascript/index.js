function updateCurrentTime() {
  let firstElement = document.querySelector("#first");
  let firstDateElement = firstElement.querySelector(".date");
  let firstTimeElement = firstElement.querySelector(".time");
  let currentFirstElement = moment().tz("America/Toronto");

  firstDateElement.innerHTML = currentFirstElement.format("MMMM Do, YYYY");
  firstTimeElement.innerHTML = currentFirstElement.format(
    "hh:mm [<small>] A z[</small>]"
  );

  let secondElement = document.querySelector("#second");
  let secondDateElement = secondElement.querySelector(".date");
  let secondTimeElement = secondElement.querySelector(".time");

  let currentSecondElement = moment().tz("America/Vancouver");
  secondDateElement.innerHTML = currentSecondElement.format("MMMM Do, YYYY");
  secondTimeElement.innerHTML = currentSecondElement.format(
    "hh:mm [<small>] A z[</small>]"
  );

  let thirdElement = document.querySelector("#third");
  let thirdDateElement = thirdElement.querySelector(".date");
  let thirdTimeElement = thirdElement.querySelector(".time");

  let currentThirdElement = moment().tz("America/Halifax");
  thirdDateElement.innerHTML = currentThirdElement.format("MMMM Do, YYYY");
  thirdTimeElement.innerHTML = currentThirdElement.format(
    "hh:mm [<small>] A  z[</small>] "
  );
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);
