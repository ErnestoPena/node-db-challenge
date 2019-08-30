
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('projects').insert([
        {id: 1, name: 'Build a Tower' , description: "", completed: 0},
        {id: 2, name: 'Fix My Car' , description: "" , completed: 0},
        {id: 3, name: 'Get a new Job' , description: "" , completed: 0}
      ]);
};
