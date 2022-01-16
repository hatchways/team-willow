
const mongoose = require('mongoose')
const chai = require("chai");
const chaiHttp = require("chai-http");
const Request = require('../models/Request');
const { app, server } = require("../app.js");

const expect = chai.expect;
chai.use(chaiHttp);

describe("Request model", function() {
    let start, end, token, currentDate, userId, sitterId;
    before(function() {
        currentDate = new Date();
        token = `token=${process.env.TOKEN}`;
        userId = "61e450c524ae3676e5670ae1";
        sitterId = "61e4514a24ae3676e5670ae7"
        start = new Date(2022,0,14, 10,30).toTimeString();
        end = new Date(2022,0,14, 18,30).toTimeString();
    })
    it("should create a request document",  function(done) {
        chai.request('http://localhost:3001')
        .post('/requests/create')
        .set('Cookie', token)
        .send({
            'userId': userId,
            "sitterId": sitterId,
            "date": currentDate,
            "start": start,
            "end": end,
        })
        .end(function(err, res) {
            expect(res).to.have.status(201);
            done()
        })
    });
  it("should get a request document", function(done) {
    chai.request('http://localhost:3001')
    .get('/requests/get')
    .query({ userId })
    .set('Cookie', token)
    .end(function(err, res) {
        expect(res).to.have.status(200);
        expect(res.body.requests.length).to.be.gte(1);
        done()
    })
  });
  it("should edit a request document", function(done) {
      chai.request('http://localhost:3001')
      .put('/requests/edit')
      .set('Cookie', token)
      .send({
        'userId': userId,
        "sitterId": sitterId,
        "date": currentDate,
        "start": start,
        "end": end,
        "accepted": true,
        "declined": true,
        "paid": false,
    })
      .end(function(err, res) {
          expect(res).to.have.status(200);
          expect(res.body.savedRequest.accepted).to.be.equal(true);
          expect(res.body.savedRequest.declined).to.be.equal(true);
          done();
      })
  })
  after(async function() {
      await Request.deleteOne({userId}).exec();
      await mongoose.disconnect();

  })
});


