const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  // Get the token from the header
  const token = req.header('x-auth-token');

  //check if no token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // verify the token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret')); // decode the user using token
    req.user = decoded.user;    //now we can use req.user in any of our routes
    next();
  } catch (error) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
