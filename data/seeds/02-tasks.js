
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, notes: 'Find and Architect' , description: "" , completed: "false" , project_id: 1},
        {id: 2, notes: 'rowValue1' , description: "" , completed: "false" , project_id: 1},
        {id: 3, notes: 'rowValue1' , description: "" , completed: "false" , project_id: 1}

      ]);
};
