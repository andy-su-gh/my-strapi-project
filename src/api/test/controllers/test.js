'use strict';

/**
 * test controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::test.test', ({strapi}) => ({
  async exampleAction(ctx) {
    try {
      ctx.body = 'ok';
    } catch (err) {
      ctx.body = err;
    }
  },
}));
