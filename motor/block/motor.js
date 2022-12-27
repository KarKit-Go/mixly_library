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
};

Blockly.Blocks.Mecanum_Wheel_Init = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Wheel)
            .appendField(Blockly.Init_Wheel);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Wheel_Tip);
    }
};

Blockly.Blocks.Mecanum_Car_Speed = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendValueInput('Speed', Number)
            .appendField(`${Blockly.Init_Speed} (0~4095)`)
            .setCheck(Number);
        this.setInputsInline(true);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Speed_Tip);
    }
};

Blockly.Blocks.Init_Go = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Go)
            .appendField(Blockly.Init_Go);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Go_Tip);
    }
}

Blockly.Blocks.Init_Back = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Back)
            .appendField(Blockly.Init_Back);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Back_Tip);
    }
}

Blockly.Blocks.Init_Right = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Right)
            .appendField(Blockly.Init_Right);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Right_Tip);
    }
}

Blockly.Blocks.Init_Left = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_Left)
            .appendField(Blockly.Init_Left);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_Left_Tip);
    }
}