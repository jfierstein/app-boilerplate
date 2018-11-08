'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let User = new Schema({
    email: { type: String, unique: true, required: true },
    passwordHash: { type: String },
    accessToken: { type: String },
    refreshToken: { type: String },
    defaultAccount:  { type: Object },
    expiresIn: { type: Number },
    expires: { type: Date },
    isActive: { type: Boolean, required: true, default: true },
    isAdmin: { type: Boolean, required: true, default: false },
    permissions: [{
       _id: false,
       model: { type: String },
       actions: [{ _id: false, type: String }]
    }],
    history: [{
        _id: false,
        action: { type: String },
        data: { type: Object },
        user: { type: String },
        timestamp: { type: Date }
    }]
}, { timestamps: true });


module.exports = mongoose.model('Users', User);