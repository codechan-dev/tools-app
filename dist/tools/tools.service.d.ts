import { Repository } from 'typeorm';
import { Tool } from './entities/tool.entity';
export declare class ToolsService {
    private toolsRepository;
    constructor(toolsRepository: Repository<Tool>);
    findAll(): Promise<Tool[]>;
    create(tool: Tool): Promise<Tool>;
}
