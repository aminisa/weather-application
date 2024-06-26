const API_KEY = '1ad6d10e9ca7b412f8979c1b295ae424'
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const getWeatherData = (infoType, searchParams) => {
    const url = new URL(BASE_URL + '/' + infoType);
    url.search = new URLSearchParams({...searchParams, appid:API_KEY});
    return fetch(url).then((res) => res.json()).then(data => data);
};

export default getWeatherData;