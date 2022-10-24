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

  // works config
  // upload: {
  //   config: {
  //     provider: 'aws-s3',
  //     providerOptions: {
  //       accessKeyId: '', // env('AWS_ACCESS_KEY_ID'),
  //       secretAccessKey: '', // env('AWS_ACCESS_SECRET'),
  //       region: 'ap-northeast-1', // env('AWS_REGION'),
  //       params: {
  //         Bucket: 'ofe-cms-media-library', // env('AWS_BUCKET'),
  //       },
  //     },
  //     actionOptions: {
  //       upload: {},
  //       uploadStream: {},
  //       delete: {},
  //     },
  //   },
  // },

  upload: {
    config: {
      provider: 'aws-s3-iam',
      providerOptions: {
        region: 'ap-northeast-1', // env('AWS_REGION'),
        bucket: 'ofe-cms-media-library',
        // accessKeyId: '', // env('AWS_ACCESS_KEY_ID'),
        // secretAccessKey: '', // env('AWS_ACCESS_SECRET'),
        RoleName: 'lambda-s3-role',
        params: {
          Bucket: 'ofe-cms-media-library', // env('AWS_BUCKET'),
        },
      },
    }
  },
};
