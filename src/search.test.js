import {render} from '@testing-library/react';
import {axe, toHaveNoViolations} from 'jest-axe';
import Search from '../src/search';

expect.extend(toHaveNoViolations);

test('should not any accessibility violations', async () => {
    const {container} = render(<Search searchQuery='' />);
    const result = await axe(container);

    expect(result).toHaveNoViolations();
});