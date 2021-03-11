const Joi = require('joi');

const CarSchema = {
    Id: Joi.string().required(),
    Make: Joi.string().required(),
    Model: Joi.string().required(),
    Package: Joi.string().required(),
    Color: Joi.string().required(),
    Year: Joi.string().required(),
    Category: Joi.string().required(),
    Mileage: Joi.number().required(),
    Price: Joi.number().required(),
}

module.exports.validateCarData = (carData) => Joi.validate(carData, CarSchema)