
var cities = ["Delhi", "Hyd"];

function LoadCities() {
    document.getElementById("lstCities").innerHTML = "";
    cities.map(function (city) {
        var option = document.createElement("option");
        option.text = city;
        option.value = city;
        document.getElementById("lstCities").appendChild(option);
    })
    document.getElementById("lblCount").innerHTML = `Total Number of Cities:${cities.length}`
}

function AddClick(){
    var cityName = document.getElementById("textCity").value;
    if(cities.indexOf(cityName)==-1){
        cities.push(cityName);
        LoadCities();
        document.getElementById("textCity").value = "";
    }
    else{
        alert(`${cityName} exists`);
    }
}

function sortAsc(){
    cities.sort();
    LoadCities();
}

function sortDsc(){
    cities.sort().reverse();
    LoadCities();
}

function removeClick(){
    var selectedCity = document.getElementById("lstCities").value;
    var selectedCityIndex = cities.indexOf(selectedCity);
    
    var flag = confirm(`Delete City\n${selectedCity} will be removed\nAre you sure?`)
     
    if(flag==true){
        cities.splice(selectedCityIndex, 1);
        LoadCities();
    }
}

function clearAll(){
    cities.length = 0;
    LoadCities();
}