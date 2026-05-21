import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    create(createPostDto: CreatePostDto): Promise<import("./post.entity").Post>;
    findAll(page?: number, limit?: number): Promise<import("nestjs-typeorm-paginate").Pagination<import("./post.entity").Post, import("nestjs-typeorm-paginate").IPaginationMeta>>;
    findOne(id: string): Promise<import("./post.entity").Post | null>;
    update(id: string, updatePostDto: UpdatePostDto): Promise<import("./post.entity").Post>;
    remove(id: string): Promise<import("./post.entity").Post>;
}
