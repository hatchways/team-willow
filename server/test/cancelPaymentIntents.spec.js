const chai = require('chai');
const mongoose = require('mongoose');
const chaiHttp = require('chai-http');
const Payment = require('../models/Payment');

const expect = chai.expect;
chai.use(chaiHttp);

describe("Payment Intents", function () {
    let paymentId = ""; //paymentIntentId
    const token = `token=${process.env.TOKEN}`;
    it('should cancel a payment', (done) => {
        chai.request(`http://localhost:3001/payments/${paymentId}`)
        .get('/cancel')
        .set('Cookie', token)
        .end(function(err, res) {
            expect(res).to.have.status(200);
            expect(res.body.success).to.be.eql('canceled');
            done();
        })
    })
})
