export class Sym {
    static led( colour: string, nm: number, u: number, i: number, mcd: number, mfr: string ): string {
        return `LED ${colour}\n${u} V ${i} mA\n${mfr}\n${mcd} mcd ${nm} nm`;
    }

    static d( type: 'Sc' | 'Si', i: number, u: number, vf: number, mfr: string ): string {
        return `D-${type} Diode ${u} V\n${i} A ${vf} Vf\n${mfr}`;
    }

    static r( r: string, p: number, prec: number, u: number | undefined, mfr: string ): string {
        const match = /([0-9.]+)(\D+)?/.exec( r );
        const number = match ? match[ 1 ] : r;
        const unit = match ? match[ 2 ] : '';

        const uText = u ? `${u} V` : '';
        const precText = prec ? `${prec} %` : '';
        const pText = Sym.toPrettyNumber( p );

        return `R ${this.addSymbol( r, 'Ω' )}  ${pText} W\n${precText} ${uText}\n${mfr}`;
    }

    static c( c: string, u: number, tol: number | undefined, prec: string, mfr: string ): string {
        const tolText = tol ? `${tol} %` : '';

        return `C ${this.addSymbol( c, 'F' )}  ${u} V\n${prec} ${tolText}\n${mfr}`;
    }

    static fet( type: 'N' | 'P', id: number, u: number, vgs: number, rds: number, mfr: string ): string {
        return `FET-${type} FET ${type} ${u} V\n${vgs} Vgs ${rds} mΩ\n${mfr}\n${id} A`;
    }

    static ic( name: string, desc: string, mfr: string, icPackage: string ): string {
        return `IC ${name}\n${desc}\n${mfr}\n${icPackage}`;
    }

    private static toPrettyNumber( nr: number ): string {
        if ( nr === .5 ) return '½';
        if ( nr === 1 / 3 ) return '⅓';
        if ( nr === .25 ) return '¼';
        if ( nr === .125 ) return '⅛';
        return nr.toString( 10 );
    }

    private static addSymbol( nrWithUnit: string, symbol: string ): string {
        const match = /([0-9.]+)(\D+)?/.exec( nrWithUnit );
        const number = match ? match[ 1 ] : nrWithUnit;
        const unit = match ? match[ 2 ] ?? '' : '';

        return `${number} ${unit}${symbol}`;
    }
}
