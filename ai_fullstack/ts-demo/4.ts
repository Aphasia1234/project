let a:number = 1;
// a="11";// 类型不可变 编译不通过
let b:string = "hello";
let c:boolean = true;
let d: null = null;
let e: undefined = undefined;
let arr:number[] = [1,2,3];
let user:[number,string] = [1,"张三"];
// 泛型 类型的传参 T
let arr2:Array<string> = ['a','b','c'];

// ts 借鉴 java 
// 枚举类型
enum Status {
    Pending, // 0
    Success, // 1
    Failed, // 2
}

let s:Status = Status.Pending;
s = Status.Success;
// 类型推导
let aa:any = 1;// 任意类型 可以赋值为任意类型，放弃类型约束
aa = "hello";
aa = true;
aa = null;
aa = undefined;

let bb:unknown = 1; // 未知类型 可以赋值为任意类型，但是不能直接使用
bb = "hello";
// bb.hello();// 对象 未知类型，可以接收任何类型，但是不能直接调用方法

let user2:{name:string,age:number,hometown:string} = {
    name:'张三',
    age:18,
    hometown:'北京'
}

// 接口 约定对象的属性和方法
interface User {
    name:string;
    age:number;
    readonly id :number;
    hobby?:string;
}

const u:User = {
    name:'张三',
    age:18,
    id:1,
    hobby:'篮球'// 可选属性
}

u.name = '李四';
// u.id = 2;// 只读属性 不能赋值

type ID = string | number; // 自定义类型 可以是字符串或数字
let num:ID = 1111;

type UserType = {
    name:string;
    age:number;
    hobby?:string;
}

const user3:UserType = {
    name:'张三',
    age:18,
    hobby:'篮球'
}