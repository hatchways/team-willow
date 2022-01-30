const chai = require('chai');
const chaiHttp = require('chai-http');
const Payment = require('../models/Payment');

const expect = chai.expect;
chai.use(chaiHttp);

describe('Payments', function() {
    let sitterId, userId, rate, hoursOfService, customerId;
    const token = `token=${process.env.TOKEN}`;

    before(()=>{
        userId = "";
        sitterId = "";
        rate = 20;
        hoursOfService = 5
        customerId = 'supplied from Stripe.'
    })
    it('should create a payment document', () => {
        const payment = new Payment({
            userId,
            sitterId,
            rate,
            hoursOfService,
            customerId,
        })
        expect(payment).to.be.an.instanceof(Payment);
    })
    it('should create a payment for a user', (done) => {
        chai.request('http://localhost:3001/payments')
        .post('/')
        .set('Cookie', token)
        .send({
            sitterId,
            rate,
            hoursOfService,
        })
        .end(function(err ,res) {
            expect(res).to.have.status(201);
            expect(res.body.success.client_secret).to.be.string;
            done()
        })
    })
    it('should get a list of payments for a user', (done) => {
        chai.request('http://localhost:3001/payments')
        .get('/')
        .set('Cookie', token)
        .end(function(err ,res) {
            expect(res).to.have.status(200);
            expect(res.body.payments.length).to.be.gte(1);
            done();
        })
    })
})

