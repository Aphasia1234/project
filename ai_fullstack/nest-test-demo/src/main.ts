import { NestFactory } from '@nestjs/core';
// 模块化
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  // 创建应用实例
  // 工厂模式，创建应用实例
  // 根模型
  const app = await NestFactory.create(AppModule);
  // 监听端口  node 进程对象 process.env.PORT 环境变量获取端口，默认3000
  // ?? 空值合并运算符 es2020 es11 新增
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
