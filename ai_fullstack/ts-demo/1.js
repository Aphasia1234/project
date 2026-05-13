function add(a,b){
    // js 是弱类型的 容易出错
    // 加法或者拼接操作
    return a + b;// 二义性，a和b可以是数字也可以是字符串
}

const result = add(10,"5");
console.log(result);// "105"
