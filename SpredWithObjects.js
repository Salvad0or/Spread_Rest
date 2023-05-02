const citiesRussia = {
    Moscow : 17,
    Kazan : 5,
    Chelny : 1, 
}

const Names = {
    Alex: 'Alex'
}

let finalMass = {...citiesRussia, ...Names} // Мы скопируем два объекта в один, причем у него будет своя ссылка

