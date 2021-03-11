const 
    _ = require('lodash'),
    cars = [
        {
            Make: 'Ford',
            Model: 'F10',
            Package: 'Base',
            Color: 'Silver',
            Year: '2010',
            Category: 'Truck',
            Mileage: 120123,
            Price: 1999900,
            Id: 'JHk290Xj',
        },
        {
            Make: 'Toyota',
            Model: 'Camry',
            Package: 'SE',
            Color: 'White',
            Year: '2019',
            Category: 'Sedan',
            Mileage: 3999,
            Price: 2899000,
            Id: 'fWl37la',
        },
        {
            Make: 'Toyota',
            Model: 'Rav4',
            Package: 'XSE',
            Color: 'Red',
            Year: '2018',
            Category: 'SUV',
            Mileage: 24001,
            Price: 2275000,
            Id: '1i3xjRllc',
        },
        {
            Make: 'Toyota',
            Model: 'Rav4',
            Package: 'XSE',
            Color: 'Red',
            Year: '2018',
            Category: 'SUV',
            Mileage: 24001,
            Price: 2275000,
            Id: '1i3xjRllc',
        },
        {
            Make: 'Ford',
            Model: 'Bronco',
            Package: 'Badlands',
            Color: 'Burnt Orange',
            Year: '2022',
            Category: 'SUV',
            Mileage: 1,
            Price: 4499000,
            Id: 'dku43920s',
        },
    ];

module.exports.listCars = async function () {
    return cars
}
module.exports.getCar = async function (carId) {
    const carSearch = _.filter(cars, (car) => {
        return car.id === carId
    })

    if (!_.size(carSearch)) return {}
    else return carSearch[0]
}