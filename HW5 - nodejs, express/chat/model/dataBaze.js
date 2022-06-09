const JoinRequest = require('../entities').JoinRequest
const Group = require('../entities').Group
const User = require('../entities').User

const users = [];
const groups = [];
var join_requests = [
    // TODO: remove
    new JoinRequest(2, 1, 3, 1654761665935 ),
    new JoinRequest(1, 1, 2, 1654761561316),
    new JoinRequest(0, 0, 2, 1654761547119)
];

module.exports = {
    users: users,
    groups: groups,
    join_requests: join_requests
}