// Custom Provider（自定义提供者）
// 数据库基础服务
// 数据库连接 ≠ 业务服务
// 数据库连接属于 Infrastructure Provider（基础设施提供者）
import { Module,Global } from '@nestjs/common';
// 数据库驱动
import { Pool } from 'pg';
import 'dotenv/config';

// 全局模块, 可以在任何模块中使用
@Global()
@Module({
    providers:[{
        provide:'PG_CONNECTION',
        // 数据库连接池
        useValue:new Pool({
            user:process.env.DB_USER,
            host:process.env.DB_HOST,
            database:process.env.DB_NAME,
            password:process.env.DB_PASSWORD,
            port:parseInt(process.env.DB_PORT || '5432',10)
        })
    }],
    exports:['PG_CONNECTION']
})
export class DatabaseModule {}