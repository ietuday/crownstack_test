import mongoose = require('mongoose');

interface UserModel extends mongoose.Document {

    _id?: string;
    name?: string;
    code?: string;    
    createdAt?: Date; 
    updatedAt?: Date;
}

export = UserModel;