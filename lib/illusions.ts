import {IIllusion} from './iillusion';
import {IIllusionStatic} from './iillusionstatic';

import {Area} from './illusions/area';
import {Arrows} from './illusions/arrows';
import {Bend} from './illusions/bend';
import {BendCircle} from './illusions/bend-circle';
import {Cornsweet} from './illusions/cornsweet';
import {Dizzy} from './illusions/dizzy';
import {Ehrenstein} from './illusions/ehrenstein';
import {Hermann} from './illusions/hermann';
import {HorizontalVertical} from './illusions/horizontal-vertical';
import {Mach} from './illusions/mach';
import {MullerLyer} from './illusions/muller-lyer';
import {Scintillating} from './illusions/scintillating';
import {Watercolor} from './illusions/watercolor';

export var Illusions:IIllusion[] = [
    Area,
    Arrows,
    Bend,
    BendCircle,
    Cornsweet,
    Dizzy,
    Ehrenstein,
    Hermann,
    HorizontalVertical,
    Mach,
    MullerLyer,
    Scintillating,
    Watercolor,
];

export var Classes = {};

// OVERCASTING :-)
(<IIllusionStatic[]><any>Illusions).forEach(function (i:IIllusionStatic) {
    Classes[i.name] = i;
});
