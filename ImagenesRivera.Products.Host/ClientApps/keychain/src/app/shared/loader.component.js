export class LoaderComponent {
    constructor() {
        this.cssReady = false;
        this.jsReady = false;
    }
    scriptsLoadedEventHandler(loaded) {
        this.jsReady = loaded;
    }
    stylesLoadedEventHandler(loaded) {
        this.cssReady = loaded;
    }
    get jsCssReady() {
        return this.jsReady && this.cssReady;
    }
}
//# sourceMappingURL=loader.component.js.map