const chai = require("chai");
const mongoose = require('mongoose');
const PetSitter = require('../models/PetSitter');   
const connectDB = require("../db");
const expect = chai.expect;

describe("PetSitter model", function() {
    connectDB();
    let petSitter;
    before( async function() {
        petSitter = new PetSitter({
            userId: '61e450c524ae3676e5670ae1',
            stripeAccountId: 'ai_12345abcd',
            availabilityId: '61e450c524ae3676e5670ae1',
            activatedAvailabilitySchedule: "61e98c6da4a0c0576a163e06",
            rate: 10,
        });
        await petSitter.save();
    });
    it("should create a pet sitter document", function() {
        expect(petSitter).to.be.an.instanceOf(PetSitter);
    });
    it("invoke save middleware", function() {
        expect(petSitter.rate).to.be.equal(1000);
    });

    after( function() {
        mongoose.disconnect();
    })
})