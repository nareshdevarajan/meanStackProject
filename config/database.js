var crypto = require('crypto').randomBytes(256).toString('hex');


module.exports =  {

    'uri' : 'mongodb://127.0.0.1:27017/test',
    'secret' : crypto
};



