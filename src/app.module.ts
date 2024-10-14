import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Tool } from './tools/entities/tool.entity'; // Assume we create a Tool entity
import { ToolsService } from './tools/tools.service';
import { ToolsController } from './tools/tools.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: +process.env.DB_PORT || 3306,
      username: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'tools_db',
      entities: [Tool],
      synchronize: true, // Auto-syncs DB, use only in dev!
    }),
    TypeOrmModule.forFeature([Tool]),
  ],
  controllers: [ToolsController],
  providers: [ToolsService],
})
export class AppModule {}
