const chai = require('chai');
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const Payment = require('../models/Payment');

const expect = chai.expect;
chai.use(chaiHttp);

describe("confirm Payment Intents", function () {
    this.timeout(2500);
    let paymentId = "" //paymentIntentId;
    const token = `token=${process.env.TOKEN}`;
    it('should confirm a payment', (done) => {
        chai.request(`http://localhost:3001/payments/${paymentId}`)
        .get('/pay')
        .set('Cookie', token)
        .end(function(err, res) {
            expect(res).to.have.status(200); 
            expect(res.body.success).to.be.eql('succeeded');
            done();
        })
    })
})
