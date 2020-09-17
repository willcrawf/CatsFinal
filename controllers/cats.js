const Cat = require('../models/cat');

module.exports = {
    index,
    create,
    show,
    update,
    delete: deleteOne

};

async function index(req, res) {
    Cat.find({})
    .populate('addedBy')
    .then(cat => { res.json(cat) })
        .catch(err => { res.json(err) })
}

async function create(req, res) {
    req.body.addedBy = req.user._id
    console.log("b")
    const cat = await Cat.create(req.body);
    res.status(201).json(cat);
}

async function show(req, res) {
    const cat = await Cat.findById(req.params.id);
    res.status(200).json(cat);
}

function update(req, res) {
    Cat.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .populate('addedBy')
    .then(cat => {res.json(cat)})
    .catch(err => {res.json(err)})
  }

async function deleteOne(req, res) {
    const deletedCat = await Cat.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCat);
}
