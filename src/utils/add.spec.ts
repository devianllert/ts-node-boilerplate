import add from './add';

describe('add.ts', (): void => {
  it('should return value', (): void => {
    expect(add(3, 3)).toBe(6);
  });
});
