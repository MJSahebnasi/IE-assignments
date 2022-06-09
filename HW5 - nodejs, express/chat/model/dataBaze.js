const JoinRequest = require('../entities').JoinRequest
const Group = require('../entities').Group
const User = require('../entities').User

const users = [];
const groups = [];
var join_requests = [];

var connection_requests = [];
var group_connections = []; // keeps group IDs: [[1,2], [3,4,5]]

// returns unddfined or an array (the connection)
// cannot use group_connections, because modifications do not cast on this file :/
const find_connection_of_gp = function(gp_id, gp_connections){
    return gp_connections.find(gc => gc.filter(gp => gp === gp_id).length > 0)
};

const chats = [];

module.exports = {
    users: users,
    groups: groups,
    join_requests: join_requests,
    connection_requests: connection_requests,
    group_connections: group_connections,
    find_connection_of_gp: find_connection_of_gp,
    chats: chats
}