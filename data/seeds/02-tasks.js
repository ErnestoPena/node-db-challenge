
exports.seed = function(knex) {

      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, notes: 'Find and Architect' , description: "" , completed: 0 , project_id: 1},
        {id: 2, notes: 'Obtain Funding' , description: "" , completed: 0 , project_id: 1},
        {id: 3, notes: 'Negotiate the constructiohn project' , description: "" , completed: 0 , project_id: 1},
        {id: 4, notes: 'Call a Mechanic' , description: "" , completed: 0 , project_id: 2},
        {id: 5, notes: 'Negotiate the cost of the fix' , description: "" , completed: 0 , project_id: 2},
        {id: 6, notes: 'Buy the parts' , description: "" , completed: 0 , project_id: 2},
        {id: 7, notes: 'open Google' , description: "" , completed: 0 , project_id: 3},
        {id: 8, notes: 'Get on indeed.com' , description: "" , completed: 0 , project_id: 3},
        {id: 9, notes: 'Contact recruiters' , description: "" , completed: 0 , project_id: 3}
      ]);
};
