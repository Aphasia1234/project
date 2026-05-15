import { Controller, Get,Post,Body,Inject } from '@nestjs/common';
import { AppService } from './app.service';

// 服务于路由
@Controller()
export class AppController {
  // service 实例
  constructor(
    @Inject('PG_CONNECTION')
    private readonly db:any,
    private readonly appService:AppService
  ){}

  @Get()
  // 路由映射不依赖方法名
  getHello(): any {
    return {
      message: this.appService.getHello(),
      status: 200
    };
  }
  // 加不加/ 都可以访问，推荐不加
  @Get('welcome')
  getWelcome(): string {
    return this.appService.getWelcome();
  }

  @Post('login')
  // Body() 装饰器 从请求体中获取参数
  login(@Body() body:{username:string,password:string}): any {
    const {username,password} = body;
    console.log(username,password);
    if(!username || !password){
      return {
        code:400,
        msg:'用户名或密码不能为空'
      };
    }
    if(password.length < 6){
      return {
        code:400,
        msg:'密码长度不能小于6位'
      };
    }
    return this.appService.handleLogin(username,password);
  }

  @Get('db-test')
  async testDB(){
    try{
      const res = await this.db.query('SELECT * FROM users');
      return {
        code:200,
        msg:'数据库连接成功',
        data:res.rows
      };
    }catch(err){
      return {
        code:500,
        msg:'数据库连接失败'
      };
    }
  }
}