import { ProductDto } from './product.dto';
import { TrianguloDto } from './triangulo.dto';
export declare class AppService {
    private products;
    getHealth(): any;
    createProduct(product: ProductDto): ProductDto;
    findAll(): ProductDto[];
    findById(id: string): ProductDto | undefined;
    update(id: string, updatedProduct: ProductDto): any;
    delete(id: string): any;
    calcularAreaTriangulo(triangulo: TrianguloDto): any;
}
