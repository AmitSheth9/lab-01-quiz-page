
import { countsAsAYes } from '../utils.js';
const test = QUnit.test;

test('countsAsAYes input is yessir', (expect) => {
    
    const expected = true;
    const actual = countsAsAYes('yessir');
    expect.equal(actual, expected);
});

test('countsAsAYes input is Nope', (expect) => {
    const expected = false;
    const actual = countsAsAYes('Nope');
    expect.equal(actual, expected);
});