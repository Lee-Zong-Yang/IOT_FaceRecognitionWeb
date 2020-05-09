const mongoose = require('mongoose');
const Image = mongoose.model('Image');

const getUnauthorizedImgs = async (req, res) => {
    console.log('Get UnauthorizedImages. ');
    try {
        const results = await Image.find({ "status": "unauthorized"}).sort("_id").exec();
        console.log('Fetched UnauthorizedImages.');
        res.status(200).json(results);
    } catch (err) {
        console.log('Failed to fetch UnauthorizedImages: ' + err);
        res.status(404).json(err);
    }
};

const getAuthorizedImgs = async (req, res) => {
    console.log('Get AuthorizedImages. ');
    try {
        const results = await Image.find({ "status": "authorized"}).sort("_id").exec();
        console.log('Fetched AuthorizedImages.');
        res.status(200).json(results);
    } catch (err) {
        console.log('Failed to fetch AuthorizedImages: ' + err);
        res.status(404).json(err);
    }
};

module.exports = {
    getUnauthorizedImgs,
    getAuthorizedImgs
};