import L2Object from "./L2Object";

export default class L2WorldRegion {
  private _tileX!: number;
  private _tileY!: number;
  private _active: boolean = false;

  private _visibleObjects: Map<number, L2Object> = new Map();

  public getTileX(): number {
    return this._tileX;
  }

  public getTileY(): number {
    return this._tileY;
  }

  public getActive(): boolean {
    return this._active;
  }

  public setTileX(value: number) {
    this._tileX = value;
  }

  public setTileY(value: number) {
    this._tileY = value;
  }

  public setActive(value: boolean) {
    this._active = value;
  }
}
