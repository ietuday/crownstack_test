import mongoose = require('mongoose');

import DataAccess = require('../DataAccess');
import ICurrencyModel = require('../../model/interfaces/CurrencyModel');
let Mongoose = mongoose.Schema;
const CurrencySchema = new Mongoose({

    name: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })

CurrencySchema.pre('save', function (next) {
    console.log('Pre Save Called');

    // This middleware will prevent `save()` from executing and go straight
    // to executing the error handling middleware
    // next(new Error('pre save error'));
    next();
});

CurrencySchema.post('save', function (doc, next) {
    console.log('Post Save Called');
    // If this hook is defined _before_ an error handler middleware, this will
    // skip all other non-error-handler post save hooks and execute the next
    // error handler middleware
    // next(new Error('post save error'));
    next();
});


const handleE11000 = (error, res, next) => {
    if (error.name === 'MongoError' && error.code === 11000) {
        next(new Error('There was a duplicate key error'));
    } else {
        next();
    }
};

CurrencySchema.post('save', handleE11000);
CurrencySchema.post('update', handleE11000);
CurrencySchema.post('findOneAndUpdate', handleE11000);
CurrencySchema.post('insertMany', handleE11000);

let Currency = DataAccess.mongooseConnection.model<ICurrencyModel>("Currency", CurrencySchema)


export = Currency;