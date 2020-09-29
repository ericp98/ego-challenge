export const filterCars = (cars, filter) => {
    if (filter !== 'Todos'){
        const carsFilter = cars.filter(car => car.segment === filter);
        return carsFilter;      
    } else {
        return cars;
    }
}; 

export const sortCars = (cars, typeSort) => {
    switch (typeSort) {
      case "De menor a mayor precio":
        return sortMenorAMayor(cars);

      case "De mayor a menor precio":
        return sortMenorAMayor(cars).reverse();

      case "Más nuevos primero":
        return sortMasViejos(cars).reverse();

      case "Más viejos primero":
        return sortMasViejos(cars);

      default:
        return cars;
    }  
}

const sortMenorAMayor = (cars) => {
    const sort = cars.sort(function(a,b){
        return (a.price - b.price)
    })
    return sort
}

const sortMasViejos = (cars) => {
    const sort = cars.sort(function(a,b){
        return (a.year - b.year)
    })
    return sort
}