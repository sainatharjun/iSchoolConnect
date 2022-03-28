"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Component = function (config) {
    return function (targetClass) {
        let tc = new targetClass();
        return class {
            constructor() {
                this.selector = config.selector;
                this.template = config.template;
                this.title = tc.title;
                this.clickMessage = tc.clickMessage;
            }
        };
    };
};
let appComponents = class appComponents {
    constructor() {
        this.title = 'hello world';
        this.clickMessage = "click here";
    }
};
appComponents = __decorate([
    Component({
        selector: 'app-root',
        template: '<h1>Title : {{title}}</h1><button>{{clickMessage}}</button>'
    })
], appComponents);
let ac = new appComponents();
document.addEventListener('DOMContentLoaded', function () {
    document.getElementsByTagName(ac.selector)[0].innerHTML = ac.template.replace('{{title}}', ac.title).replace('{{clickMessage}}', ac.clickMessage);
});
