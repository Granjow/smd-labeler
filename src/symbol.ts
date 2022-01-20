import fs from 'fs';
import path from 'path';

export class Symbol {
    public readonly template: string;
    public readonly name: string;

    constructor( name: string ) {
        this.template = fs.readFileSync( path.join( __dirname, '../..', `symbols/${name}.svg` ), { encoding: 'utf8' } );
        this.name = name;
    }

    applies( text: string ): boolean {
        return text.startsWith( `${this.name} ` );
    }

    adjustText( text: string ): string {
        return text.replace( new RegExp( `^${this.name}\\s*` ), '' );
    }

    templateAt( x: number, y: number ): string {
        return this.template.replace( '<g', `<g transform="translate(${x}, ${y})"` );
    }
}
