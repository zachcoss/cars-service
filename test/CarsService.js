const 
    chai = require('chai'),
    expect = chai.expect,
    CarsService = require('../src/db'),
    CarsSchema = require('../src/schema');

describe('Cars Service', () => {

    describe('DB List Cars', () => {
        it('It should return list of cars', async () => {
            const cars = await CarsService.listCars()
            const { error } = CarsSchema.validateCarData(cars[0])

            expect(cars).to.be.a('array')
            expect(error).to.be.undefined
        })
    })

    describe('DB Get Car', () => {
        it('It should return a car', async () => {
            const car = await CarsService.getCar('JHk290Xj')
            const { error } = CarsSchema.validateCarData(car)

            expect(car).to.be.a('object')
            expect(error).to.be.undefined
        })

        it('It should return an empty object', async () => {
            const car = await CarsService.getCar('id')
            const { error } = CarsSchema.validateCarData(car)

            expect(car).to.be.a('object').empty
            expect(error).to.be.a('error')
        })
    })

})