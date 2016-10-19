# tinify-sample

tinyPNGのAPIを使ってjpgまたはpng画像を軽量化する。
https://tinypng.com/

## how-to-use
軽量化したい画像をひとつのディレクトリにまとめておき、以下のコードを実行。
```
node index.js 画像をまとめたディレクトリ
```
実行すると、画像をまとめたディレクトリ内に`compressed/`ができ、その中に元と同じファイル名で軽量化された画像が格納される。

## how-to-set API-Key
tinyPNGのサイトでAPI-Keyを発行したら、`index.js`と同じディレクトリに`config.js`を作成し、取得したAPI-Keyを記載する。
```
exports.YOUR_TINYPNG_API_KEY = '取得したAPI Key';
```
