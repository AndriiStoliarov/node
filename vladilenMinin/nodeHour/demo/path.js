const path = require('path');

console.log('Название файла: ', path.basename(__dirname));

console.log('Имя директории: ', path.dirname(__dirname));

console.log('Расширение файла: ', path.extname(__dirname));

console.log('Parse: ', path.parse(__filename).name);

console.log(path.join(__dirname, 'server', 'index.html'));