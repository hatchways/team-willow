const expect = require('chai').expect;
const Payment = require('../models/Payment');


describe('payment model', function() {
    it('should create a payment document', () => {
        expect(new Payment({
            userId: '61e98c0cac7e7f077dae1956',
            sitterId: '61e98c6da4a0c0576a163e06',
            rate: 2000,
            hoursOfService: 5,
            customerId: 'supplied from Stripe.'
        })).to.be.an.instanceof(Payment);
    })
})
