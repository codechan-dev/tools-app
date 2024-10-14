import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tool } from './entities/tool.entity';

@Injectable()
export class ToolsService {
  constructor(
    @InjectRepository(Tool)
    private toolsRepository: Repository<Tool>,
  ) {}

  findAll(): Promise<Tool[]> {
    return this.toolsRepository.find();
  }

  create(tool: Tool): Promise<Tool> {
    tool.createdAt = new Date();
    return this.toolsRepository.save(tool);
  }
}
