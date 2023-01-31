const mongoose = require ('mongoose');

const roomSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
    },
    maxcount: {
        type: 'number',
        required: true,
    },

    rentperdays: {
        type: 'number',
        required: true,
    },
    imgurl: [],
    currentBookings: [],
    view:[],
    type: {
        type: 'string',
        required: true,
    },
    description: [],
})

const Room = mongoose.model('Room', roomSchema);
module.exports = Room;