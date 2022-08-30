function authentification(req, res, next) {
    console.log('Authenticating...');
    next();
}

module.exports = authentification;