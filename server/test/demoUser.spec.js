const chai = require('chai');
const mongoose = require('mongoose');
const connectDB = require('../db');
const chaiHttp = require('chai-http');
const { createDemoUser } = require('../seeds/demoSeed');
const User = require('../models/User');
const Profile = require('../models/Profile');

const expect = chai.expect;
chai.use(chaiHttp);

describe("Demo User flow", function() {
    const token = `token=${process.env.TOKEN}`
    const email = process.env.DEMO_USER_EMAIL;
    const password = process.env.DEMO_USER_PASSWORD;
    it('should create a demo User', async () => {
        await createDemoUser();
    })
    it('should POST to /auth/demo.', (done) => {
        chai.request('http://localhost:3001/auth')
        .post('/demo')
        .set('Cookie', token)
        .send({ email, password })
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.success.message).to.be.string("You have successfully Logged In.")
            done();
        })
    })
    after( async ()=> {
        await connectDB();
        await User.findOneAndDelete({email: process.env.DEMO_USER_EMAIL});
        await Profile.findOneAndDelete({ name: "Demo Account"});
        await mongoose.disconnect();
        console.log("Demo User Removed.")
    })
})