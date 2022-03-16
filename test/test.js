import assert from 'assert';
import { format } from 'path';
import { min } from '../js/app.js';
import { moy } from '../js/app.js';
import { string } from '../js/app.js';
import { tbpairimpair } from '../js/app.js';
import { double } from '../js/app.js';
import { doubleremove } from '../js/app.js';
import { occu } from '../js/app.js';

describe('min', () => {
    it('should return min of tb', () => {
      assert.equal(min([5, 6, 2, 7, 1]), 1);
    });
})

describe('moy', () => {
    it('should return moyenne', () => {
      assert.equal(moy([15, 16, 12, 17, 11]), 14.2);
    });
})

describe('string', () => {
    it('should return remove string', () => {
      assert.deepEqual(string(["plouk", 5, "ratata", 7]), [5, 7]);
    });
})

describe('tbpairimpair', () => {
    it('should return 2 tb impair & impair', () => {
      assert.deepEqual(tbpairimpair([2, 3, 4, 5]), [[2, 4],[3, 5]]);
    });
})

describe('double', () => {
  it('should return doublon', () => {
    assert.deepEqual(double([1, 2, 4, 1],[1, 6, 4, 5]), [1,4]);
  });
})

describe('doubleremove', () => {
  it('should return doublon remove', () => {
    assert.deepEqual(doubleremove([1, 1, 2, 3]), [1, 2, 3]);
  });
})

describe('occu', () => {
  it('should return doublon', () => {
    assert.deepEqual(occu(["a", "a", "b", "b"]), { a: 2, b: 2 });
  });
})