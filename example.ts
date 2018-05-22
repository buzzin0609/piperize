import piperize from './index';
import log from "./src/util/log";

const double = num => num * 2;
const minus2 = num => num - 2;
const buildMessage = num => `Num is ${num}`;

piperize(
    double,
    log,
    minus2,
    buildMessage,
    log
)(10);