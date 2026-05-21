import { AppService } from './app.service';
import { ProductDto } from './product.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHealth(): any;
    createProduct(product: ProductDto): ProductDto;
    findAll(): ProductDto[];
    findById(id: string): ProductDto | undefined;
    update(id: string, updatedProduct: ProductDto): any;
    delete(id: string): any;
}
