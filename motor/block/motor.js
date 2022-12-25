'use strict'
goog.provide("Blockly.Blocks.motor");
goog.require("Blockly.Blocks");

Blockly.Blocks.motor.HUE3 = 140;

Blockly.Blocks.Mecanum_Car_Init = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Car)
            .appendField(Blockly.Init_Car);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Car_Tip);
    }
}

Blockly.Blocks.Mecanum_Wheel_Init = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Wheel)
            .appendField(Blockly.Init_Wheel);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Wheel_Tip);
    }
}