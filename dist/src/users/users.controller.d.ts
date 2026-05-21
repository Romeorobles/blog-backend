import { UsersService } from './users.service';
import { CreateUserDto } from './create-user.dto';
import { UpdateUserDto } from './update-user.dto';
import { QueryDto } from '../common/dto/dto/QueryDto.dto';
import { SuccessResponseDto } from '../common/dto/response.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(dto: CreateUserDto): Promise<SuccessResponseDto<import("./user.entity").User>>;
    findAll(query: QueryDto): Promise<SuccessResponseDto<import("nestjs-typeorm-paginate").Pagination<import("./user.entity").User, import("nestjs-typeorm-paginate").IPaginationMeta>>>;
    findOne(id: string): Promise<import("./user.entity").User | null>;
    update(id: string, dto: UpdateUserDto): Promise<SuccessResponseDto<import("./user.entity").User>>;
    remove(id: string): Promise<SuccessResponseDto<import("./user.entity").User>>;
}
