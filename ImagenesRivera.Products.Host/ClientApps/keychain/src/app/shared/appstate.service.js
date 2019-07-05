import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
let AppStateService = class AppStateService {
    constructor() {
        this.user = new BehaviorSubject(null);
    }
};
AppStateService = tslib_1.__decorate([
    Injectable()
], AppStateService);
export { AppStateService };
//# sourceMappingURL=appstate.service.js.map