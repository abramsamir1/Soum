import React from 'react';
import ProductTree from '../screens/ProductTree';
import {render} from '@testing-library/react';

describe('ProductTree', () => {
  const mockData = {
    categories: [
      {
        id: 1,
        name: 'Mobile Phones',
        brands: [],
      },
      {
        id: 2,
        name: 'Watches',
        brands: [],
      },
    ],
  };

  it('renders categories', () => {
    const {getByText} = render(<ProductTree data={mockData} />);

    const mobilePhonesCategory = getByText('Mobile Phones');
    const watchesCategory = getByText('Watches');

    expect(mobilePhonesCategory).toBeDefined();
    expect(watchesCategory).toBeDefined();
  });
});
