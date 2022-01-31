const chai = require('chai');

const connectDB = require('../db');
const mongoose = require('mongoose');
const { Availability, Schedule, Day} = require('../models/Availability');

const expect = chai.expect;

describe("Availability Schema", function() {
    let availability;
    let schedule;
    let dayOne, dayTwo;

    before(function() {
        connectDB();
    })
    it("should create a day document", function() {
        dayOne = new Day({
            name: "Monday",
            startTime: "10:00",
            endTime: "18:00",
        });
        expect(dayOne).to.be.an.instanceOf(Day);
    })
    it("should create a schedule document", function () {
        schedule = new Schedule({
            name: "Work Schedule A",
            days: [dayOne]
        })
        expect(schedule).to.be.an.instanceOf(Schedule);
    })
    it("should push a day into a schedule", function() {
        dayTwo = new Day({
            name: "Tuesday",
            startTime: "8:00",
            endTime: "21:00",
        });
        schedule.days.push(dayTwo);
        expect(schedule.days.length).to.be.gte(1);
    })
    it("should create an availability document", function() {
        availability = new Availability({
            sitterId: "61e98c0cac7e7f077dae1956",
            schedule: [schedule],
            activeSchedule: schedule.id,
        });
        expect(availability).to.be.an.instanceOf(Availability);
    });
    it("should save an availability document", async function() {
        const newAvailability = await availability.save();
        expect(newAvailability).to.be.eql(availability);
    });
    after( function() {
        mongoose.disconnect();
    });
})