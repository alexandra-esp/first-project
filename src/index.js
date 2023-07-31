function formatDate(date) {
    let hours = date.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  
    let dayIndex = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let day = days[dayIndex];
  
    return `${day} ${hours}:${minutes}`;
  }
  
  let dateElement = document.querySelector("#date");
  let currentTime = new Date();
  dateElement.innerHTML = formatDate(currentTime);
  
  function handleSubmit(event) {
    event.preventDefault();
  
    let cityInputElement = document.querySelector("#city-input");
    search(cityInputElement.value);
  
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.name;
  
    let form = document.querySelector("#search-form");
    form.addEventListener("submit", handleSubmit);
  }
  