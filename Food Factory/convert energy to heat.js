import print from "./print.js";
import { RangeType } from "./range.js";

const convert_energy_to_heat = function (source_type, minutes) {
    let energy = 0;
    if (source_type == RangeType.Electric) energy = 1;
    if (source_type == RangeType.Gas) energy = 2;
    let e = energy * minutes;
    print (`Range generated ${e} unit(s) of energy.`);
    return energy * minutes;
};

const convert = convert_energy_to_heat;