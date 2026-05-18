import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { ProductDto } from './product.dto';
import { TrianguloDto } from './triangulo.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/health')
  getHealth(): any {
    return this.appService.getHealth();
  }

  @Post('/products')
  createProduct(@Body() product: ProductDto): ProductDto {
    return this.appService.createProduct(product);
  }

  @Get('/products')
  findAll(): ProductDto[] {
    return this.appService.findAll();
  }

  @Get('/products/:id')
  findById(@Param('id') id: string): ProductDto | undefined {
    return this.appService.findById(id);
  }

  @Put('/products/:id')
  update(
    @Param('id') id: string,
    @Body() updatedProduct: ProductDto
  ): any {
    return this.appService.update(id, updatedProduct);
  }

  @Delete('/products/:id')
  delete(@Param('id') id: string): any {
    return this.appService.delete(id);
  }

  @Post('/triangulo/area')
  calcularAreaTriangulo(@Body() triangulo: TrianguloDto): any {
    return this.appService.calcularAreaTriangulo(triangulo);
  }
}
