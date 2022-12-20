'use strict';

goog.provide('Blockly.Blocks.test');
goog.require('Blockly.Blocks');

Blockly.Blocks.test.HUE3 = 140;
//PS2
Blockly.Blocks.PS2X_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        this.appendDummyInput("")
            .appendField("匹配无线手柄");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('www.7gp.cn 微信公众号：奇果派工坊');

    }
};

//
Blockly.Blocks.PS2X_Button = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var PSBUTTON = [
            ["PSB_PAD_UP", "PSB_PAD_UP"],
            ["PSB_PAD_DOWN", "PSB_PAD_DOWN"],
            ["PSB_PAD_LEFT", "PSB_PAD_LEFT"],
            ["PSB_PAD_RIGHT", "PSB_PAD_RIGHT"],
            ["PSB_TRIANGLE", "PSB_TRIANGLE"],
            ["PSB_CIRCLE", "PSB_CIRCLE"],
            ["PSB_CROSS", "PSB_CROSS"],
            ["PSB_SQUARE", "PSB_SQUARE"],
            ["PSB_L1", "PSB_L1"],
            ["PSB_L2", "PSB_L2"],
            ["PSB_L3", "PSB_L3"],
            ["PSB_R1", "PSB_R1"],
            ["PSB_R2", "PSB_R2"],
            ["PSB_R3", "PSB_R3"],
            ["PSB_SELECT", "PSB_SELECT"],
            ["PSB_START", "PSB_START"]
        ];
        this.appendDummyInput("")
            .appendField("PS2按钮")
            .appendField(new Blockly.FieldDropdown(PSBUTTON), "psbt")
            .appendField("状态")
            .appendField(new Blockly.FieldDropdown([["按下", "1"], ["松开", "0"]]), "btstate");
        this.setOutput(true, Boolean);
        var thisBlock = this;
        this.setTooltip('www.7gp.cn 微信公众号：奇果派工坊');

    }
};

Blockly.Blocks.PS2X_stk = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var PSSTK = [
            ["PSS_RX", "PSS_RX"],
            ["PSS_RY", "PSS_RY"],
            ["PSS_LX", "PSS_LX"],
            ["PSS_LY", "PSS_LY"],
        ];
        this.appendDummyInput("")
            .appendField("PS2摇杆")
            .appendField(new Blockly.FieldDropdown(PSSTK), "psstk");

        this.setOutput(true, Number);
        var thisBlock = this;
        this.setTooltip('www.7gp.cn 微信公众号：奇果派工坊');

    }
};

//
Blockly.Blocks.PS2X_vibrate = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        this.appendDummyInput("")
            .appendField("手柄震动一次");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setInputsInline(true);

    }
};

//Motor_init
Blockly.Blocks.Motor_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        this.appendDummyInput("初始化驱动器")
            .appendField("初始化驱动器");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('启动驱动器的第一个步骤');

    }
};


//DCMotorRun
Blockly.Blocks.DCMotorRun = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var MOTOR = [
            ["M1", "1"],
            ["M2", "2"],
            ["M3", "3"],
            ["M4", "4"],
        ];
        var DIRECTION = [
            ["FORWARD", "FORWARD"],
            ["BACKWARD", "BACKWARD"],
        ];
        var SPEED = [
            ["100", "100"],
            ["150", "150"],
            ["200", "200"],
            ["250", "250"],
        ];

        this.appendDummyInput("")
            .appendField("转动电机")
            .appendField(new Blockly.FieldDropdown(MOTOR), "motor")
            .appendField(" 方向：")
            .appendField(new Blockly.FieldDropdown(DIRECTION), "direction")
            .appendField(" 速度：")
            .appendField(new Blockly.FieldDropdown(SPEED), "speed");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('转动电机');

    }
};



//DCMotorStop
Blockly.Blocks.DCMotorStop = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var MOTOR = [
            ["M1", "1"],
            ["M2", "2"],
            ["M3", "3"],
            ["M4", "4"],
        ];

        this.appendDummyInput("")
            .appendField("停止电机")
            .appendField(new Blockly.FieldDropdown(MOTOR), "motor");
        this.setPreviousStatement(true);
        this.setNextStatement(true);

    }
};

//SERVO init
Blockly.Blocks.SERVO_init = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var SERVO = [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
        ];
        this.appendDummyInput("")
            .appendField("舵机初始化")
            .appendField(new Blockly.FieldDropdown(SERVO), "servo");
        this.appendValueInput("DEGREE", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_DEGREE_0_180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setTooltip('在setup函数中初始化舵机');

    }
};


//SERVO
Blockly.Blocks.SERVO = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);
        var SERVO = [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
        ];
        this.appendDummyInput("")
            .appendField("舵机")
            .appendField(new Blockly.FieldDropdown(SERVO), "servo");
        this.appendValueInput("DEGREE", Number)
            .setCheck(Number)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField(Blockly.MIXLY_DEGREE_0_180);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);


    }
};




Blockly.Blocks.ReadSERVO = {
    init: function () {
        this.setColour(Blockly.Blocks.Motor_Shield_7GP.HUE3);

        var SERVO = [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
        ];
        this.appendDummyInput("")
            .appendField("读舵机角度")
            .appendField(new Blockly.FieldDropdown(SERVO), "servo");

        this.setOutput(true, Number);
        var thisBlock = this;
    }
};