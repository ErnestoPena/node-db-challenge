
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build a Tower' , description: "", completed: 'false'},
        {id: 2, name: 'Fix My Car' , description: "" , completed: 'false'},
        {id: 3, name: 'Get a new Job' , description: "" , completed: 'false'}
      ]);
};
