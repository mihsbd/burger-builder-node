const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    // Get the Token from the Request Header -> Authorization: Bearer <token>
    let token = req.header('Authorization');
    if (!token) res.status(401).send('Access denied. No Token provided!')
    token = token.split(" ")[1].trim()

    // Verify the Token
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = decoded          // can get all data from payload
        next();
    } catch (err) {
        return res.status(400).send('Invalid Token!');
    }
}