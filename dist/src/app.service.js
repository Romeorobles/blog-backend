"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    products = [];
    getHealth() {
        return {
            "status": "online",
            "service": "blog service api",
            "version": "0.0.1",
            "date": new Date()
        };
    }
    createProduct(product) {
        const newProduct = {
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
    findAll() {
        return this.products;
    }
    findById(id) {
        return this.products.find(p => p.id === parseInt(id));
    }
    update(id, updatedProduct) {
        const index = this.products.findIndex(p => p.id === parseInt(id));
        this.products[index] = { ...this.products[index], ...updatedProduct, id: parseInt(id) };
        return this.products[index];
    }
    delete(id) {
        const index = this.products.findIndex(p => p.id === parseInt(id));
        this.products.splice(index, 1);
        return { message: `Producto ${id} eliminado correctamente` };
    }
    calcularAreaTriangulo(triangulo) {
        const area = (triangulo.base * triangulo.altura) / 2;
        return {
            base: triangulo.base,
            altura: triangulo.altura,
            area: area
        };
    }
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
//# sourceMappingURL=app.service.js.map