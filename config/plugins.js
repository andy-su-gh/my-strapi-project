module.exports = {
  'preview-button': {
    config: {
      contentTypes: [
        {
          uid: 'api::page.page',
          draft: {
            url: 'http://localhost:3000/api/preview',
            query: {
              type: 'page',
              slug: '{Slug}',
            },
          },
          published: {
            url: 'http://localhost:3000/{Slug}',
          },
        },
      ],
    },
  },
  'upload-aws-s3': {
    enabled: true,
    resolve: './src/plugins/preview-button' // path to plugin folder
  },
};