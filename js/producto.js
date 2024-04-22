import fs from 'node:fs';
fs.readFile(import.meta.dirname+"/db/product.json", 'utf-8', (err, data) => {
    let json = JSON.parse(data);
    let [producto1] = json.products;
    let {description: des} = producto1
    console.log(des);
});
