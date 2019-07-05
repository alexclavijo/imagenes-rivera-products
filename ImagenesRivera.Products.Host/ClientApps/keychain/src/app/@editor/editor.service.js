import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
let EditorService = class EditorService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
    }
};
EditorService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    }),
    tslib_1.__metadata("design:paramtypes", [HttpClient])
], EditorService);
export { EditorService };
//# sourceMappingURL=editor.service.js.map