var fs = require('fs');

fs.writeFile('test.txt', 'Hello world again!', function (err) {
    if (err) throw new Error(err);

    fs.rename('test.txt', 'test2.txt', function (err) {
        if (err) throw new Error(err);

        fs.readFile('test2.txt', {encoding: 'utf-8'}, function (err, data) {
            if (err) throw new Error(err);
    
            console.log(data);
        });
    });

});