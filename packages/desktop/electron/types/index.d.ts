declare module "electron" {
  export interface BrowserWindowConstructorOptions {
    blur: boolean;
    blurType: string;
    blurGnomeSigma: number;
    blurCornerRadius: number;
  }
}

declare module "glasstron" {
  import { BrowserWindow as ElectronBrowserWindow } from "electron";

  export class BrowserWindow extends ElectronBrowserWindow {}
}
