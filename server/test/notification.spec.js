const mongoose = require('mongoose');
const chai = require('chai');
const chaiHttp = require('chai-http');
const Notifications = require('../models/Notifications');

const expect = chai.expect;
chai.use(chaiHttp);

describe("Notifications model", function() {
    let token, id;
    before(function() {
        token = `token=${process.env.TOKEN}`;
    });
    it("should create notification document", function(done) {
        chai.request('http://localhost:3001')
        .post('/notifications/make')
        .set('Cookie', token)
        .send({
            "type": "Promo",
            "title": "Test Notification",
            "description": "Hello World!",
        })
        .end(function(err, res) {
            expect(res).to.have.status(201);
            expect(res.body.message).to.be.eql("Notification created.");
            done();
        })
    });
    it("should get all notifications", function(done) {
        chai.request('http://localhost:3001')
        .get('/notifications/get-all')
        .set('Cookie', token)
        .end(function(err, res) {
            id = res.body.success[0]._id;
            expect(res.body.success.length).to.be.gte(1);
            done();
        })
    })
    it("should get unread notifications", function(done) {
        chai.request('http://localhost:3001')
        .get('/notifications/get-unread')
        .set('Cookie', token)
        .end(function(err, res) {
            expect(res.body.success.length).to.be.gte(1);
            done();
        })
    })
    it("should mark notification as read", function(done) {
        chai.request('http://localhost:3001')
        .put('/notifications/mark-read')
        .set('Cookie', token)
        .query({id})
        .end(function(err, res) {
            expect(res).to.have.status(201);
            done();
        })
    })
    after(function(done) {
        mongoose.disconnect();
        done();
    })
})
