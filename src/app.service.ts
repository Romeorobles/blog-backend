import { Injectable } from '@nestjs/common';
import { ProductDto } from './product.dto';

@Injectable()
export class AppService {
  private products: ProductDto[] = [];

  getHealth(): any {
    return {
      "status": "online",
      "service": "blog service api",
      "version": "0.0.1",
      "date": new Date()
    };
  }

  createProduct(product: ProductDto): ProductDto {
    const newProduct: ProductDto = {
      ...product,
      id: Math.floor(Math.random() * 1000) + 1
    };

    this.products.push(newProduct);

    return {
      "id": newProduct.id,
      "name": newProduct.name,
      "price": newProduct.price,
      "stock": newProduct.stock
    };
  }

  findAll(): ProductDto[] {
    return this.products;
  }
}
