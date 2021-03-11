const 
    _ = require('lodash'),
    CarsService = require('../db');

module.exports = {
    validate: function(req, res) {
        if (!req.params.id || !_.isString(req.params.id)) throw new Error('Missing or incorrect car id.')
        return { id } = req.params
    },
    request: async function(payload) {
        try {
            const car = await CarsService.getCar(payload.id)
            return car
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
        console.log('Cars Get Car error', err)
        return res.status(400).send({
            data: {},
            error: true,
            errorMessage: err.message,
        })
    },
}