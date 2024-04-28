const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
    
    if (!token)
    return res.status(401).json({ msg: "No token access denied"});
    const token2 = token.split(' ')[1];
    if (!token2)
    return res.status(401).json({msg: "No token after Bearer, access denied"});

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified)
        return res.status(401).json({ msg: 'Token verifivation failed, autjentication denied'});
        req.user = verified.id;
        next();
 } catch (err) {
            res.status(500).json({error: err.message});
        }
};
module.exports = auth;