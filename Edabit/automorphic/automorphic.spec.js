const isAutomorphic = require('./automorphic.js');

const testAutomorphicNumbers = [0,1,5,6,25,76,376,625,9376,90625,109376,890625,
    2890625,7109376,12890625,87109376]

// Note: test will fail for automorphic numbers greater than 2^53 - 1 unless function is refactored to use BigInt

describe('isAutomorphic function', () => {
    testAutomorphicNumbers.forEach(n => {
        it(`returns true for n = ${n}`, () => {
            expect(isAutomorphic(n)).toBeTruthy()
        });
    })
});
