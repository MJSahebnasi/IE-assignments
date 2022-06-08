const users = require('../model/dataBaze').users

exports.authorize = function(token) {
    let userTokens = users.filter(user => user.token);
    if (userTokens.length === 0)
        return undefined;
    if (userTokens.length > 1){
        console.log('##### WTF ##### token not unique');
        return undefined;
    }
    return userTokens[0];
}