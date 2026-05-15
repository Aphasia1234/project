数据库连接不是 Service，是资源。
资源应该用 Provider 提供，而不是用 Service 包装。
数据库连接 ≠ 业务服务
数据库连接属于 Infrastructure Provider（基础设施提供者）