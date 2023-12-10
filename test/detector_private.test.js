const DetectorPrivate = require('../module/detector_private');

test('getMaxLength test', () => {
    const detectorPrivate = new DetectorPrivate();

    const axx = [
        'aaa',
        'abc',
        'ade',
        'aef'
    ];

    expect(detectorPrivate.getMaxLength(axx)).toBe(3);

    const stairs = [
        'a',
        'bc',
        'def',
        'ghij',
        'klmno'
    ]

    expect(detectorPrivate.getMaxLength(stairs)).toBe(5);

});

test('divideColumn test', () => {
    const detectorPrivate = new DetectorPrivate();

    const axx = [
        'aaa',
        'abc',
        'ade',
        'aef'
    ];


    expect(detectorPrivate.divideColumn(axx)).toStrictEqual(
        [
            ['a', 'a', 'a', 'a'],
            ['a', 'b', 'd', 'e'],
            ['a', 'c', 'e', 'f']
        ]
    );

    const stairs = [
        'a',
        'bc',
        'def',
        'ghij',
        'klmno'
    ]

    expect(detectorPrivate.divideColumn(stairs)).toStrictEqual(
        [
            ['a', 'b', 'd', 'g', 'k'],
            [null, 'c', 'e', 'h', 'l'],
            [null, null, 'f', 'i', 'm'],
            [null, null, null, 'j', 'n'],
            [null, null, null, null, 'o']
        ]
    );

});

test('isUpperCase test', () => {

    const detectorPrivate = new DetectorPrivate();

    const lower = 'a';
    const upper = 'A';
    const number = '0';

    expect(detectorPrivate.isUpperAlphabet(lower)).toBeFalsy();

    expect(detectorPrivate.isUpperAlphabet(upper)).toBeTruthy();

    expect(detectorPrivate.isUpperAlphabet(number)).toBeFalsy();

})

test('isLowerCase test', () => {

    const detectorPrivate = new DetectorPrivate();

    const lower = 'a';
    const upper = 'A';
    const number = '0';

    expect(detectorPrivate.isLowerAlphabet(lower)).toBeTruthy();

    expect(detectorPrivate.isLowerAlphabet(upper)).toBeFalsy();

    expect(detectorPrivate.isLowerAlphabet(number)).toBeFalsy();
});

test('isNumber test', () => {

    const detectorPrivate = new DetectorPrivate();

    const lower = 'a';
    const upper = 'A';
    const numberString = '0';
    const number = 0;

    expect(detectorPrivate.isNumber(lower)).toBeFalsy();

    expect(detectorPrivate.isNumber(upper)).toBeFalsy();

    expect(detectorPrivate.isNumber(numberString)).toBeTruthy();

    expect(detectorPrivate.isNumber(number)).toBeTruthy();


});

test('char type detect test', () => {

    const detectorPrivate = new DetectorPrivate();

    const numbers = '12345'.split('');
    const lowerAlphabets = 'abcdef'.split('');
    const upperAlphabets = 'ABCDEF'.split('');
    const others = '-*.,$#'.split('');

    expect(detectorPrivate.charTypeDetect(numbers)).toStrictEqual([1]);
    expect(detectorPrivate.charTypeDetect(lowerAlphabets)).toStrictEqual([2]);
    expect(detectorPrivate.charTypeDetect(upperAlphabets)).toStrictEqual([3]);
    expect(detectorPrivate.charTypeDetect(others)).toStrictEqual([4]);

    const lowerAlphabetAndNumber = 'abc456'.split('');
    const upperAlphabetAndNumber = 'ABC456'.split('');
    const allMix = 'abCD56'.split('');

    expect(detectorPrivate.charTypeDetect(lowerAlphabetAndNumber)).toStrictEqual([1, 2]);
    expect(detectorPrivate.charTypeDetect(upperAlphabetAndNumber)).toStrictEqual([1, 3]);
    expect(detectorPrivate.charTypeDetect(allMix)).toStrictEqual([1, 2, 3]);

});