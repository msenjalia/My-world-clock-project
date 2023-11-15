function updateCurrentTime() {
  let firstElement = document.querySelector("#first");
  let firstDateElement = firstElement.querySelector(".date");
  let firstTimeElement = firstElement.querySelector(".time");
  let currentFirstElement = moment().tz("America/Toronto");

  firstDateElement.innerHTML = currentFirstElement.format("MMMM Do, YYYY");
  firstTimeElement.innerHTML = currentFirstElement.format(
    "hh:mm [<small>] A [</small>]"
  );

  let secondElement = document.querySelector("#second");
  let secondDateElement = secondElement.querySelector(".date");
  let secondTimeElement = secondElement.querySelector(".time");

  let currentSecondElement = moment().tz("America/Vancouver");
  secondDateElement.innerHTML = currentSecondElement.format("MMMM Do, YYYY");
  secondTimeElement.innerHTML = currentSecondElement.format(
    "hh:mm [<small>] A[</small>]"
  );

  let thirdElement = document.querySelector("#third");
  let thirdDateElement = thirdElement.querySelector(".date");
  let thirdTimeElement = thirdElement.querySelector(".time");

  let currentThirdElement = moment().tz("America/Halifax");
  thirdDateElement.innerHTML = currentThirdElement.format("MMMM Do, YYYY");
  thirdTimeElement.innerHTML = currentThirdElement.format(
    "hh:mm [<small>] A [</small>] "
  );
}

function showSelectedCity(event) {
  let cityTimeZone = event.target.value;
  let cityTime = moment().tz(event.target.value);
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let citiesElement = document.querySelector("#selectCity");

  citiesElement.innerHTML = `
  <div class="currentCity">
    <div>
      <p class="currentCity">${cityName}</p>
      <div class="currentDate">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="currentTime">
      ${cityTime.format(
        "hh:mm [<small>] A  [<span id=zone>]z[</span>][</small>]"
      )} 
    </div>
  </div> `;
}

let selectCityList = document.querySelector("#cities");
selectCityList.addEventListener("change", showSelectedCity);

updateCurrentTime();
setInterval(showSelectedCity, 1000);
