`use strict`;
const config = require('./config');

// tinifyモジュール
const tinify = require('tinify');
tinify.key = config.YOUR_TINYPNG_API_KEY;

// fsモジュール
const fs = require('fs');

// 変数
const TARGET_DIR = process.argv[2];
if(!fs.existsSync(TARGET_DIR + "/compressed")) {
  fs.mkdirSync(TARGET_DIR + "/compressed");
  console.log("Make Directory " + TARGET_DIR + "/compressed");
};

fs.readdir(TARGET_DIR, function(err, files) {
  if(err) throw err;
  const srcImgs = files.filter(function(file) {
    return fs.statSync(TARGET_DIR + "/" + file).isFile() && /.*\.png$|.*\.jpg/.test(TARGET_DIR + "/" + file);
  });

  srcImgs.forEach(function(srcImg) {
    const filename = srcImg.split('/').slice(srcImg.split('/').length -1);
    tinify.fromFile(TARGET_DIR + "/" + srcImg).toFile(TARGET_DIR + '/compressed/' + filename, function() {
      console.log("compressed : " + filename);
    });
  });

});
