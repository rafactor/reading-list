const router = require('express').Router();

//middleware to allow user proceed or redirect to login
const authCheck = (req, res, next) => {
    if(!req.user){
        res.redirect('/api/auth/login');
    } else {
        next();
    }
};

router.get('/', authCheck, (req, res) => {
    res.render('profile', { user: req.user });
});

module.exports = router;