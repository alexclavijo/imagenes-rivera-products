

export abstract class LoaderComponent {

  public cssReady = false;
  public jsReady = false;

  public scriptsLoadedEventHandler(loaded: boolean) {
    this.jsReady = loaded;
  }

  public stylesLoadedEventHandler(loaded: boolean) {
    this.cssReady = loaded;
  }

  public get jsCssReady(): boolean {
    return this.jsReady && this.cssReady;
  }

}
