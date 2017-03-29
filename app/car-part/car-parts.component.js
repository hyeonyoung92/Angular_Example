"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by owner on 2017-03-29.
 */
var core_1 = require("@angular/core");
var mocks_1 = require("./mocks");
var CarPartsComponent = (function () {
    function CarPartsComponent() {
    }
    CarPartsComponent.prototype.totalCarParts = function () {
        var sum = 0;
        // return this.carParts.reduce(function(first, now)
        //     {
        //         return first+now.inStock;
        //     },0
        // )
        return this.carParts.reduce(function (first, now) {
            return first += now.inStock;
        }, 0);
    };
    CarPartsComponent.prototype.ngOnInit = function () {
        this.carParts = mocks_1.CARPARTS;
    };
    return CarPartsComponent;
}());
CarPartsComponent = __decorate([
    core_1.Component({
        selector: 'car-parts',
        templateUrl: 'app/car-part/car-parts.component.html',
        styleUrls: ['app/car-part/car-parts.component.css']
    })
], CarPartsComponent);
exports.CarPartsComponent = CarPartsComponent;
//# sourceMappingURL=car-parts.component.js.map