//  "type": "module", 加到package.json以启用'import ... from ...'语法
class Product {
    title;
    imageUrl;

    constructor(t, i) {
        this.title = t;
        this.imageUrl = i;
    }
}

const p = new Product('p', 'www.baidu.com')

console.dir(p)
