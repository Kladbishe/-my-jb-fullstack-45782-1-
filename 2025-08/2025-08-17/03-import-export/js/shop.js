"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopName = void 0;
exports.showBrands = showBrands;
exports.default = sell;
exports.shopName = 'Urbanica';
function showBrands() {
    console.log('adidas', 'puma', 'nike');
}
function sell() {
    console.log('thanks for buying');
}
// in practice:
// i export 1 object with 2 properties
// {
//      shopName,
//      showBrands
// }
// sell
