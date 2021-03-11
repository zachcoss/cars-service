const 
    _ = require('lodash'),
    CarsService = require('../db');

module.exports = {
    validate: function(req, res) {
        return {}
    },
    request: async function(payload) {
        try {
            const cars = await CarsService.listCars()
            return cars
        } catch(err) {
            throw new Error(err.message)
        }
    },
    response: function(response, res) {
        return res.status(200).send({
            data: response,
            error: false,
            errorMessage: '',
        })
    },
    error: function(err, res) {
        console.log('Cars List Cars error', err)
        return res.status(400).send({
            data: [],
            error: true,
            errorMessage: err.message,
        })
    },
}