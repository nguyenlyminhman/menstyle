const getMenu = require('../model/Category');
const getBrand = require('../model/Producer');

module.exports = async (req, res) => {
    try {
        let mainMenu = await getMenu.getCategory();
        let brandMenu = await getBrand.getProducer();
        res.render('products', { mainMenu, brandMenu })
    } catch (err) {
        res.send('Navigation menu erorr :' + err);
    }
}