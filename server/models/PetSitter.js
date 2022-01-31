const mongoose = require('mongoose');
const Profile = require('./Profile');

const PetSitterSchema = new mongoose.Schema({
    stripeAccountId: {
        type: String,
    },
    availabilityId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Availability',
    },
    activatedAvailabilitySchedule: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Schedule',
    },
    rate: {
        type: Number,
        default: 100,
        min: 100,
    },
});

PetSitterSchema.pre("save", function(next) {
    this.rate *= 100;
    next();
})

const PetSitter = Profile.discriminator('PetSitter', PetSitterSchema);

module.exports = PetSitter;