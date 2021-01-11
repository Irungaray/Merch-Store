import React from 'react';
import { mount } from 'enzyme';

import Footer from '../../components/Footer';

describe('<Footer />', () => {
  const footer = mount(<Footer />);

  test('Render of Footer Component', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render of Footer Title', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Merch Store');
  })
});