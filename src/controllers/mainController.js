//const db = require ("../../database/models");


module.exports = {
    maintenance: (req, res)=> {
        res.render("maintenance");
    },
    
    index: (req, res) => {
        res.render("index");
    },
   
  /*   inicio: (req, res) => {
        res.render("index");
    }, */

    /* indexAdmin: (req, res) => {
        res.render("index-admin");
    }, */

    contact: (req, res) => {
        res.render("contact");
        
    },

    notAllowed: (req, res) => {
        res.render("notAllowed");
        
    },

    closeSession: (req, res) => {
        res.render("closeSession");
        
    },

    comingSoon: (req, res) => {
        res.render("coming-soon");
        
    },
    
    /*  carrito: (req, res) => {
        res.render("products/carrito");
        
    },*/

    logout: (req, res) => {
        req.session.destroy();
        res.redirect('/');
    },  

    formulario: (req, res) => {
        console.log(req.body);
        res.render("index");
    },
 
};