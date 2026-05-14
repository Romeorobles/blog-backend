import { ProductDto } from './product.dto';
export declare class AppService {
    private products;
    getHealth(): any;
    createProduct(product: ProductDto): ProductDto;
    findAll(): ProductDto[];
}
