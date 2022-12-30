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
        + "}"
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
        + "}"
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
        + "}"
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
        + "}"
    Blockly.Arduino.definitions_['define_Left'] = code;
    return "";
}