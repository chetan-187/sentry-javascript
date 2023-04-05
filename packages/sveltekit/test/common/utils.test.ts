import { isRedirect } from '../../src/common/utils';

describe('isRedirect', () => {
  it.each([
    { location: '/users/id', status: 300 },
    { location: '/users/id', status: 304 },
    { location: '/users/id', status: 308 },
    { location: '', status: 308 },
  ])('returns `true` for valid Redirect objects', redirectObject => {
    expect(isRedirect(redirectObject)).toBe(true);
  });

  it.each([
    300,
    'redirect',
    { location: { route: { id: 'users/id' } }, status: 300 },
    { status: 308 },
    { location: '/users/id' },
    { location: '/users/id', status: 201 },
    { location: '/users/id', status: 400 },
    { location: '/users/id', status: 500 },
  ])('returns `false` for invalid Redirect objects', redirectObject => {
    expect(isRedirect(redirectObject)).toBe(false);
  });
});