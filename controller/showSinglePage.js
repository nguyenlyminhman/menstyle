const Category = require('../model/Category');
const Producer = require('../model/Producer');

module.exports = async (req, res) => {
    try {
        let mainMenu = await Category.getCategory();
        let brandMenu = await Producer.getProducer();
        res.render('single', { mainMenu, brandMenu })
    } catch (err) {
        res.send('Navigation menu erorr :' + err);
    }
}