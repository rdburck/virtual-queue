const db = require('../../models');
const router = require("express").Router;

router.post('data', (req, res) => {
    console.log('server side', req.body);
    db.customer.create(req.body)
                .then((data) => {
                console.log('data', data);
                res.json(data).status(201);
                })
                .catch((err) => console.log(err));
})

router.get('/data', (req, res) => {
    console.log('get route');
    db.customer.find({})
    .then((res) => {
        console.log(res);
        res.json(res).status(200);
    })
    .catch((err) => console.log(err));
});

router.delete('/data', async (req, res) => {
    const waitingCustomer = await db.customer.findById(req.body._id);
    db.customer.findByIdAndDelete(customer).then((data) => res.json(data))
    .catch((err) => console.log(err));

})

module.exports = router;


