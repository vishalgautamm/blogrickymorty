import React from 'react';

import renderer from 'react-test-renderer';

test('Link que retorna información de rick', () => {
  const component = renderer.create(
    <Link page="/detail/1"></Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});

