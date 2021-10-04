var fs = require('fs')
// file read
fs.readFile('dosya.txt', "utf-8", function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log(data);
});
// file write
fs.writeFile('dosya2.txt', "yazilacak line buraya yazýlýr.", function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log("satir yazildi");
});
// file append
fs.appendFile('dosya2.txt', "append edilecek line buraya yazýlýr.", function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log("satir eklendi");
});
// file delete
fs.unlink('dosya2.txt', function (hata, data) {
    if (hata) {
        throw hata;
    }
    console.log("dosya silindi");
});
