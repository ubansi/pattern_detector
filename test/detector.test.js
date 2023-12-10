const Detector = require('../module/detector');

test('normal test', () => {
    const detector = new Detector();

    const axx = [
        'aaa',
        'abc',
        'ade',
        'aef'
    ];


    expect(detector.detect(axx)).toBe('a..');

    expect(detector.strictDetect(axx)).toBe('a[a-e][a-f]');

});


test('detail test',()=>{
    const detector = new Detector();

    const axx = [
        'aaa',
        'abc',
        'ade',
        'aef'
    ];

    const resultDetail = {
        "result": "a..",
        "strictResult": "a[a-e][a-f]",
        "inputNum": 4,
        "minLength":3,
        "maxLength":3,
        "detail": [
            {
                "pattern": "a",
                "numberOfTypes": 1,
                "ranking": [
                    {
                        "charactor": "a",
                        "matchRate": 1
                    }
                ]
            },
            {
                "pattern": "[a-e]",
                "numberOfTypes": 4,
                "ranking": [
                    {
                        "charactor": "a",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "b",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "d",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "e",
                        "matchRate": 0.25
                    }
                ]
            },
            {
                "pattern": "[a-e]",
                "numberOfTypes": 4,
                "ranking": [
                    {
                        "charactor": "a",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "c",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "e",
                        "matchRate": 0.25
                    },
                    {
                        "charactor": "f",
                        "matchRate": 0.25
                    }
                ]
            }
        ]
    };

    expect(detector.detectWithDetail(axx)).toStrictEqual(resultDetail)

})