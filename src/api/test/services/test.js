'use strict';

/**
 * test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test.test', ({strapi}) => ({
  async exampleService(...args) {
    let response = { okay: true }

    if (response.okay === false) {
      return { response, error: true }
    }

    return response
  },
}));
