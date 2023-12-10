const Detector = require('./module/detector');



const run = ()=>{
    const detector = new Detector();
    const result = detector.detect(['aaa','bbb']);

    console.log(result);
}

run();