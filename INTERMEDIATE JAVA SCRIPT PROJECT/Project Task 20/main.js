// Foursquare API Info
const clientId = '';
const clientSecret = '';
const url = '';

// OpenWeather Info
const openWeatherKey = 'd5ef0dcb58612aaf5460dd5263a07c39';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDiv = $("#weather1");
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Add AJAX functions here:
async function placeSearch() {
    try {
        const searchParams = new URLSearchParams({
          query: 'coffee',
          ll: '41.8781,-87.6298',
          open_now: 'true',
          sort: 'DISTANCE'
        });
        const results = await fetch(
          `https://api.foursquare.com/v3/places/search?${searchParams}`,
          {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              Authorization: 'fsq3kC1W3mxDI/eZ2Rk9yxRG9Wo5b5lLtEMuirWhXo0RMfQ=',
            }
          }
        );
        const data = await results.json();
        return data;
    } catch (err) {
        console.error(err);
    }
}

const getVenues = async () => {
    const city = $('#city').val();
    const urlToFetch = `${url}${city}&limit=10&client_id=${clientId}&client_secret=${clientSecret}&v=${getDate()}`;
    try {
      const response = await fetch(urlToFetch);
      if (response.ok) {
        const jsonResponse = await response.json();
        const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
        return venues;
      }
    } catch(error) {
      console.log(error);
    }
}

const getForecast = async () => {
   const urlFetch = weatherUrl+ openWeatherKey;
   try{
    const response = await fetch(urlFetch);
    const results = await response.json();
    return results;
   }
   catch(error){
    console.log(error)
   }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (day) => {
  const weatherContent = createWeatherHTML(day);
  $('#weather1').append(weatherContent);
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDiv.empty();
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)