let appId = '89f8d6d2d104d82a15f32233c5e39971';
let units = 'imperial'
let searchMethod;

function getSearchMethod(searchTerm){
    if(searchTerm.length === 5 && Number.parseInt(searchTerm) + '' === searchTerm)
        searchMethod = 'zip';
    else
        searchMethod = 'q';
}

function searchWeather(searchTerm){
    getSearchMethod(searchTerm);
    fetch('http://api.openweathermap.org/data/2.5/weather?$(searchMethod)=$(searchTerm)&APPID=$(appID)&units=$(units)').then(result =>{
        return result.json();
    }).then(result=>{
        init(result);
    })

}

function init(resultFromServer){
    console.log(resultFromServer);
}

document.getElementById('searchBtn').addEventListener('click', () => {
    let searchTerm = document.getElementById('searchInput').ariaValueMax;
    if(searchTerm)
        searchWeather(searchTerm);
})