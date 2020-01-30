const fs = require('fs');

// fs.writeFileSync('notes.txt', 'My name is Yvan');

fs.appendFileSync('notes.txt', ' and I\'m a senior developer.' );
