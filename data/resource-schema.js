const knex = require('knex');
const DB = require('../data/db-config');

module.exports = {
 find,
 add,
 findById
}

function find() {
    return DB('resources');
}

function add(item) {
    return DB('resources').insert(item);
}

function findById(id) {
    return DB('resourcesbyprojects as RP').join('resources as R' , 'R.id' , 'RP.resource_id')
                                          .where('RP.project_id' , '=' , id);
}