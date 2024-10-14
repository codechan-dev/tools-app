import { ToolsService } from './tools.service';
import { Tool } from './entities/tool.entity';
export declare class ToolsController {
    private readonly toolsService;
    constructor(toolsService: ToolsService);
    findAll(): Promise<Tool[]>;
    create(tool: Tool): Promise<Tool>;
}
