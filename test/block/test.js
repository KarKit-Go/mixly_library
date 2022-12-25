'use strict';

goog.provide('Blockly.Blocks.test');
goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE3 = 140;

//Motor_init
Blockly.Blocks.Motor_init = {
    init: function () {
        this.setColour(Blockly.Blocks.test.HUE3);
        this.appendDummyInput("初始化工程")
            .appendField("初始化驱动器");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('启动驱动器的第一个步骤');
    }
};
