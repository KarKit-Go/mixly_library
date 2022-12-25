Blockly.Arduino.Mecanum_Car_Init = function () {
    Blockly.Arduino.definitions_['define_PWMServoDriver'] = '#include <Adafruit_MS_PWMServoDriver.h>';
    Blockly.Arduino.definitions_['define_Motor_Init'] = 'Adafruit_MS_PWMServoDriver pwm = Adafruit_MS_PWMServoDriver(0x60);'

    Blockly.Arduino.setups_['setup_Motor_Init'] = "pwm.begin();\n  pwm.setPWMFreq(50);"
    return '';
};

Blockly.Arduino.Mecanum_Wheel_Init = function () {
    Blockly.Arduino.definitions_['define_LeftWheelGo'] = "#define wheelLeftFrontGo 9";
    Blockly.Arduino.definitions_['define_LeftWheelBack'] = "#define wheelLeftFrontBack 8";
    return '';
}