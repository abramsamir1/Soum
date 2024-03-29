export const data = {
  categories: [
    {
      id: 1,
      name: 'Mobile Phones',
      brands: [
        {
          id: 101,
          name: 'Apple',
          models: [
            {
              id: 10101,
              name: 'iPhone 8',
              variants: [
                {
                  id: 1010101,
                  name: '128 GB',
                },
                {
                  id: 1010102,
                  name: '256 GB',
                },
              ],
            },
            {
              id: 10102,
              name: 'iPhone X',
              variants: [
                {
                  id: 1010201,
                  name: '128 GB',
                },
                {
                  id: 1010202,
                  name: '256 GB',
                },
              ],
            },
          ],
        },
        {
          id: 102,
          name: 'Nokia',
          models: [
            {
              id: 10201,
              name: 'Nokia 7.2',
              variants: [
                {
                  id: 1020101,
                  name: '64 GB',
                },
                {
                  id: 1020102,
                  name: '128 GB',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: 'Watches',
      brands: [
        {
          id: 201,
          name: 'Rolex',
          models: [
            {
              id: 20101,
              name: 'Submariner',
            },
            {
              id: 20102,
              name: 'Daytona',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: 'Computers',
      brands: [
        {
          id: 301,
          name: 'Dell',
          models: [
            {
              id: 30101,
              name: 'XPS 13',
            },
            {
              id: 30102,
              name: 'Inspiron 15',
            },
          ],
        },
      ],
    },
  ],
};
