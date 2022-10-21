module.exports = {
  routes: [
    {
     method: 'GET',
     path: '/andy',
     handler: 'andy.exampleAction',
     config: {
       policies: [],
       middlewares: [],
     },
    },
  ],
};
