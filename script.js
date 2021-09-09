const countryDetails = [
    {
        "name":"Iceland",
        "population": "334,300",
        "region": "Europe",
        "flag": "img/1.png",
        "capital": "Reykjavik"
    },
    {
        "name":"United States of America",
        "population": "323,947,000",
        "region": "Amaricas",
        "flag": "img/4.jpg",
        "capital": "Washigton, D.C."
    },
    {
        "name":"Germany",
        "population": "81,770,900",
        "region": "Europe",
        "flag": "img/3.png",
        "capital": "Berlin"
    },
    {
        "name":"Brazil",
        "population": "206,135,893",
        "region": "Americas",
        "flag": "img/2.png",
        "capital": "Brasilia"
    },
    {
        "name":"Afghanistan",
        "population": "27,667,145",
        "region": "Asia",
        "flag": "img/5.png",
        "capital": "Kabul"
    },
    {
        "name":"Algeria",
        "population": "40,400,000",
        "region": "Africa",
        "flag": "img/6.png",
        "capital": "Algiers"
    },
    {
        "name":"Albania",
        "population": "2,886,026",
        "region": "Europe",
        "flag": "img/7.jpg",
        "capital": "Tirana"
    },
    {
        "name":"Aland Island",
        "population": "28,875",
        "region": "Europe",
        "flag": "img/8.png",
        "capital": "Mariehamn"
    }
];

const getData = () =>{
    let i = 0;
    let text = "";
    while(i<countryDetails.length){
        text += `<div class="col">
                  <div class="card h-100">
                    <img src="${countryDetails[i].flag}" class="card-img-top" alt="">
                    <div class="card-body">
                      <h5 class="card-title">${countryDetails[i].name}</h5>
                        <p class="card-text"><strong>Population: </strong>${countryDetails[i].population}</p>
                        <p class="card-text"><strong>Region: </strong>${countryDetails[i].region}</p>
                        <p class="card-text"><strong>Capital: </strong>${countryDetails[i].capital}</p>
                    </div>
                  </div>
                </div>`;
        i++;
    }
    return text;
}

const container = document.createElement("div");
const rowclass = document.createElement("div");

container.setAttribute("class", "container");
rowclass.setAttribute("class", "row row-cols-1 row-cols-md-4 g-4 mt-2 mb-2");

rowclass.innerHTML = `${getData()}`;

container.append(rowclass);
document.body.append(container);
