import { Controller, Get, Post, Body } from '@nestjs/common';
import { ToolsService } from './tools.service';
import { Tool } from './entities/tool.entity';

@Controller('tools')
export class ToolsController {
  constructor(private readonly toolsService: ToolsService) {}

  @Get()
  findAll() {
    return this.toolsService.findAll();
  }

  @Post()
  create(@Body() tool: Tool) {
    return this.toolsService.create(tool);
  }
}
