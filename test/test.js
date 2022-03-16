import assert from 'assert';
import { min } from '../js/app.js';
import { moy } from '../js/app.js';

describe('min', () => {
    it('should return min of tb', () => {
      assert.equal(min([5, 6, 2, 7, 1]), 1);
    });
})

describe('moy', () => {
    it('should return min of tb', () => {
      assert.equal(moy([15, 16, 12, 17, 11]), 14.2);
    });
})