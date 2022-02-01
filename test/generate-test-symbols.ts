import { Sym } from '../src';
import SmdLabeler from '../src';


const data: string[] = [
    Sym.r( '33k', .5, 5, 400, 'ERJ-P06J103V' ),
    Sym.r( '220', .5, 5, 400, 'ERJ-P06J221V' ),
    Sym.c( '200n', 25, 10, 'X7R', '08053C224K4T2A' ),
    Sym.ic( 'Si7201', 'Hall Sensor push/pull', 'Si7201-B-01-FV', 'SOT-23-3' ),
    Sym.led( 'Green', 570, 2.2, 20, 45, 'LG R971-KN-1' ),
    Sym.led( 'Orange', 606, 2, 20, 45, 'LO R976-PS-1' ),
    '2→1 AND\n74AHCT1G08\nDBVRG4',
    'FET-N N-Ch 30 V\nIRLB8721PBF',
    Sym.fet( 'P', 1.2, 20, 0.45, 210, 'PM160UP,215' ),
    Sym.d( 'Si', 1, 400, 1.1, 'FM4004-W' ),
    Sym.d( 'Sc', .2, 30, .5, 'BAT54T1G' ),
    Sym.bjt( 'Darlington-NPN', 'Darlington N', 5000, 1, .5, 'FMMT614AT' ),
    Sym.bjt( 'NPN', 'NPN', 150, 1, .5, 'FMMT614AT' ),
    Sym.bjt( 'PNP', 'PNP', 150, 1, .5, 'FMMT614AT' ),
];


const labeler = new SmdLabeler();
labeler.saveSvg( data, 'output.svg' );
