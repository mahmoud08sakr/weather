


call()

async function call(location="cairo") {

    
    let res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=f83e651ab3b7471780d81006232202&q=${location}&days=7`)

    let allData = await res.json()
    console.log(allData);
    display(allData)
}

function display(allData){
    
    var cartona = `

    <div class="container"> 
    <div class="w-100 position-relative ">
        <div class="row gx-5  ">
            <div class=" backColor gx-5 col-md-4  ">


<p class ="py-3">${allData.forecast.forecastday[0].date}</p>

                <h3>${allData.location.name}</h3>

                <div class ="d-flex justify-content-between  ">
        <h1 class="py-4">${allData.current.temp_c} C * </h1>
    
                <img src=" ${allData.current.condition.icon} " alt="">
                </div>

                <h3 class="py-4"> ${allData.current.wind_kph} KPH</h3>
    
    
            </div>
            <div class=" backMidColor col-md-4 text-center  ">
                <p class ="py-3" >${allData.forecast.forecastday[1].date}</p>
                <img src=" ${allData.forecast.forecastday[1].day.condition.icon} " alt="tjgh">
    
                <h1 class="py-4"> ${allData.forecast.forecastday[1].day.maxtemp_c} C * </h1>
                <h3 class="py-4"> ${allData.forecast.forecastday[1].day.maxwind_kph} KPH </h3>
    
    
            </div>
            <div class=" backColor col-md-4 text-center ">
            <p class ="py-3" >${allData.forecast.forecastday[2].date}</p>
            <img src=" ${allData.forecast.forecastday[2].day.condition.icon} " alt="tjgh">

            <h1 class="py-4"> ${allData.forecast.forecastday[2].day.maxtemp_c} C * </h1>
            <h3 class="py-4"> ${allData.forecast.forecastday[2].day.maxwind_kph} KPH </h3>

    
            </div>
        </div>
    
    </div>
    
    
    </div>
    
    `
        document.getElementById("inner").innerHTML = cartona;

}


let inputField = document.querySelector('#data')
console.log(inputField);

inputField.addEventListener("keyup", function () {

    call(inputField.value)

})








