export class Table {

    public readonly x0: number;
    public readonly y0: number;
    public readonly dx: number;
    public readonly dy: number;
    public readonly w: number;
    public readonly h: number;
    public readonly cols: number;
    public readonly rows: number;
    private _index: number;

    constructor( x0: number, y0: number, dx: number, dy: number, w: number, h: number ) {
        this.x0 = x0;
        this.y0 = y0;
        this.dx = dx;
        this.dy = dy;
        this.w = w;
        this.h = h;
        this._index = 0;

        this.cols = Math.floor( w / dx );
        this.rows = Math.floor( h / dy );
    }

    next(): void {
        this._index++;
    }

    get col(): number {
        return ( this._index % this.cols );
    }

    get row(): number {
        return Math.floor( this._index / this.cols );
    }

    get x(): number {
        return this.x0 + this.col * this.dx;
    }

    get y(): number {
        return this.y0 + this.row * this.dy;
    }
}
