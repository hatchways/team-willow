const mongoose = require('mongoose');

const DaySchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ["Monday", "Tuesday", "Thursday", "Friday", "Saturday", "Sunday"],
        required: true,
    },
    startTime: {
        type: String,
    },
    endTime: {
        type: String,
    },
});

const ScheduleSchema = new mongoose.Schema({
    name: {
        type: String,
        default: "Default Schedule"
    },
    days: {
        type: [DaySchema],
    },
});

const AvailabilitySchema = new mongoose.Schema({
    sitterId: {
        type: mongoose.Types.ObjectId,
        ref: 'PetSitter',
    },
    schedule: {
        type: [ScheduleSchema],
        required: true,
    },
    activeSchedule: {
        type: mongoose.Types.ObjectId,
    },
});

module.exports = {
    Availability: new mongoose.model('Availability', AvailabilitySchema),
    Schedule: new mongoose.model('Schedule', ScheduleSchema),
    Day: new mongoose.model('Day', DaySchema),
}
