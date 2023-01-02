Blockly.Arduino.Mecanum_Car_Init = function () {
    Blockly.Arduino.definitions_['define_PWMServoDriver'] = '#include <Adafruit_MS_PWMServoDriver.h>';
    Blockly.Arduino.definitions_['define_Motor_Init'] = 'Adafruit_MS_PWMServoDriver pwm = Adafruit_MS_PWMServoDriver(0x60);'

    Blockly.Arduino.setups_['setup_Motor_Init'] = "pwm.begin();\n  pwm.setPWMFreq(50);"
    return '';
};

Blockly.Arduino.Mecanum_Wheel_Init = function () {
    Blockly.Arduino.definitions_['define_LeftFrontGo'] = "#define wheelLeftFrontGo 9";
    Blockly.Arduino.definitions_['define_LeftFrontBack'] = "#define wheelLeftFrontBack 8";

    Blockly.Arduino.definitions_['define_LeftRearGo'] = "#define wheelLeftRearGo 12";
    Blockly.Arduino.definitions_['define_LeftRearBack'] = "#define wheelLeftRearGo 13";

    Blockly.Arduino.definitions_['define_RightFrontGo'] = "#define wheelRightFrontGo 10";
    Blockly.Arduino.definitions_['define_RightFrontBack'] = "#define wheelRightFrontBack 11";

    Blockly.Arduino.definitions_['define_RightRearGO'] = "#define wheelRightRearGO 15";
    Blockly.Arduino.definitions_['define_RightRearBack'] = "#define wheelRightRearBack 14";

    Blockly.Arduino.setups_['init_pwm'] = "for (uint8_t i = 0; i < 16; i++)\n"
        + "\t{\n"
        + "\t\tpwm.setPwm(i, 0, 0)\n"
        + "\t}"
    return '';
}

Blockly.Arduino.Mecanum_Car_Speed = function () {
    let maxSpeed = Blockly.Arduino.valueToCode(this, 'Speed', Blockly.Arduino.ORDER_ASSIGNMENT) || 100;
    if (maxSpeed < 0) {
        maxSpeed = 0;
    } else if (maxSpeed > 4095) {
        maxSpeed = 4095;
    }
    Blockly.Arduino.definitions_['define_CarSpeed'] = `#define maxSpeed ${maxSpeed}`;
    return '';
}

Blockly.Arduino.Init_SoftSerial = function () {
    Blockly.Arduino.definitions_['define_SoftwareSerial'] = '#include<SoftwareSerial.h>';
    Blockly.Arduino.definitions_['define_softSerial'] = 'SoftwareSerial softSerial(5,6);'
    Blockly.Arduino.definitions_['int_items'] = 'String _items;';
    Blockly.Arduino.setups_['setup_softSerial'] = 'softSerial.begin(115200);\n'
        + "\tsoftSerial.listen()";
    return '';
}

Blockly.Arduino.Init_Go = function () {
    const code = "void go()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, 0);\n"
        + "}";
    Blockly.Arduino.definitions_['define_GoCommand'] = '#define GO "GO"';
    Blockly.Arduino.definitions_['define_Go'] = code;
    return "";
}

Blockly.Arduino.Init_Back = function () {
    const code = "void back()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, maxSpeed);\n"
        + "}";
    Blockly.Arduino.definitions_['define_BackCommand'] = '#define BACK "BACK"';
    Blockly.Arduino.definitions_['define_Back'] = code;
    return "";
}

Blockly.Arduino.Init_Right = function () {
    const code = "void right()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, 0);\n"
        + "}";
    Blockly.Arduino.definitions_['define_RightCommand'] = '#define RIGHT "RIGHT"';
    Blockly.Arduino.definitions_['define_Right'] = code;
    return "";
}

Blockly.Arduino.Init_Left = function () {
    const code = "void left()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0,0);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, maxSpeed);\n"
        + "}";
    Blockly.Arduino.definitions_['define_LeftCommand'] = '#define LEFT "LEFT"';
    Blockly.Arduino.definitions_['define_Left'] = code;
    return "";
}

Blockly.Arduino.Init_Stop = function () {
    const code = "void stop()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0,0);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, 0);\n"
        + "}";
    Blockly.Arduino.definitions_['define_StopCommand'] = '#define STOP "STOP"';
    Blockly.Arduino.definitions_['define_Stop'] = code;
    return "";
}

Blockly.Arduino.Init_SpinClockWise = function () {
    const code = "void spinClockWise()\n"
        + "{\n"
        + "\tpwm.setPWM(wheelLeftFrontGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftFrontBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelLeftRearGo, 0, maxSpeed);\n"
        + "\tpwm.setPWM(wheelLeftRearBack, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontGo, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightFrontBack, 0,maxSpeed);\n"
        + "\tpwm.setPWM(wheelRightRearGO, 0, 0);\n"
        + "\tpwm.setPWM(wheelRightRearBack, 0, maxSpeed);\n"
        + "}";
    Blockly.Arduino.definitions_['define_SpinClockWiseCommand'] = '#define SpinClockWise "SCW"';
    Blockly.Arduino.definitions_['define_SpinClockWise'] = code;
    return "";
}

Blockly.Arduino.Init_State_Machine = function () {
    Blockly.Arduino.definitions_['int_num'] = 'int _num = 0;';
    const time = Blockly.Arduino.valueToCode(this, 'IF0', Blockly.Arduino.ORDER_ASSIGNMENT) || 500;
    const defaultCommand = Blockly.Arduino.statementToCode(this, 'DO0');
    const codeAfter = `\tdelay(10);\n`
        + `\t_num = _num + 1;\n`
        + `\tif (_num > ${time / 10})\n`
        + `\t{\n`
        + `\t${defaultCommand}`
        + `\t}`;

    let argument, branch;
    let code = `if (softSerial.available() > 0)\n{\n\t_items = softSerial.readStringUntil('a');\n`;
    for (let i = 1; i <= this.commandCount_; i++) {
        argument = Blockly.Arduino.valueToCode(this, 'IF' + i, Blockly.Arduino.ORDER_ATOMIC);
        branch = Blockly.Arduino.statementToCode(this, 'DO' + i);

        code += `\tif (String(_items).euqals(String(${argument})))\n`
            + `\t{\n`
            + `\t${branch}`
            + `\t\t_num=0\n`
            + `\t}\n`;
    }
    return code + codeAfter;
}