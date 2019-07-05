import * as tslib_1 from "tslib";
import { HttpClientModule } from '@angular/common/http';
import { OrderService } from './order.service';
import { NgModule } from '@angular/core';
import { OrderComponent } from './order.component';
import { SharedModule } from '../shared/shared.module';
import { NgxPayPalModule } from 'ngx-paypal';
import { FormsModule } from '@angular/forms';
let OrderModule = class OrderModule {
};
OrderModule = tslib_1.__decorate([
    NgModule({
        declarations: [
            OrderComponent
        ],
        exports: [OrderComponent],
        imports: [
            SharedModule,
            NgxPayPalModule,
            FormsModule,
            HttpClientModule
        ],
        providers: [OrderService]
    })
], OrderModule);
export { OrderModule };
//# sourceMappingURL=order.module.js.map