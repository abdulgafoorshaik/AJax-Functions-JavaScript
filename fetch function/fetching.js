
document.getElementById('fetchData').onclick = ()=>{
    fetch("https://restcountries.eu/rest/v2/all").then(data=>{
        document.write(data);
    })
}