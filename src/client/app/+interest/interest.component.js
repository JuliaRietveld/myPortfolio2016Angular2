"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var InterestComponent = (function () {
    function InterestComponent() {
        this.heading = 'Interest';
        this.hobbyTitle1 = 'BBQ Grill Master';
        this.hobbyText1 = 'All year long I grill and smoke food on seven barbecues in mu garden. I am a certified grill master from Weber. Even made it to Dutch tv once.';
        this.hobbyTitle1 = 'Globe trotter';
        this.hobbyText2 = '46 countries and still counting. I love to travel, meet new people. I guess me speaking 5 languages says a lot about my interest in other cultures.';
    }
    InterestComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'interest',
            templateUrl: 'interest.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], InterestComponent);
    return InterestComponent;
}());
exports.InterestComponent = InterestComponent;
//# sourceMappingURL=interest.component.js.map