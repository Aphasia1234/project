import { Injectable } from '@nestjs/common';

// 将类标记为可被依赖注入容器管理的提供者（Provider）
@Injectable()
// 服务层 业务逻辑
export class AppService {
  getHello(): string {
    return '你好';
  }
  
  getWelcome(): string {
    return '欢迎来到Nest Test Demo!';
  }

  handleLogin(username:string,password:string){
    if(username === 'admin' && password === '123456'){
      return {
        status:200,
        message:'登录成功'
      }
    }else{
      return {
        status:400,
        message:'登录失败，用户名或密码错误'
      }
    }
  }
}