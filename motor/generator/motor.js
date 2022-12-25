Blockly.Arduino.Mecanum_Car_Init = function () {
    var stk = this.getFieldValue('psstk');
    var st = "ps2x.Analog(" + stk + ")";
    return [st];
};