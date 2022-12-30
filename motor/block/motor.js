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

Blockly.Blocks.Init_SoftSerial = {
    init: function () {
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendDummyInput(Blockly.Init_SoftSerial)
            .appendField(Blockly.Init_SoftSerial);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Init_SoftSerial_Tip);
    }
}

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

Blockly.Blocks.Init_State_Machine = {
    /**
     * Block for if/elseif/else condition.
     * @this Blockly.Block
     */
    init: function () {
        //this.setHelpUrl(Blockly.Msg.CONTROLS_IF_HELPURL);
        this.setColour(Blockly.Blocks.motor.HUE3);
        this.appendValueInput('IF0', Number)
            .appendField("状态机等待时间")
            .setCheck(Number);
        this.appendStatementInput('DO0')
            .appendField("默认指令");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setMutator(new Blockly.Mutator(['Define_Command']));
        this.setTooltip(Blockly.Init_State_Machine_Tip);
        this.commandCount_ = 0;
        // this.updateShape_();
    },

    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        if (!this.commandCount_) {
            return null;
        }

        var container = document.createElement('mutation');

        if (this.commandCount_) {
            container.setAttribute('elseif', this.commandCount_);
        }

        return container;
    },

    /**
         * Parse XML to restore the else-if and else inputs.
         * @param {Element} xmlElement XML storage element.
         * @this Blockly.Block
         */
    domToMutation: function (xmlElement) {
        var containerBlock = this;
        var valueConnections = [];
        var statementConnections = [];

        for (var i = this.commandCount_; i > 0; i--) {
            if (containerBlock.getInputTargetBlock('IF' + i) && containerBlock.getInputTargetBlock('IF' + i).previousConnection) {
                valueConnections[i] = (containerBlock.getInputTargetBlock('IF' + i).previousConnection);
            } else {
                valueConnections[i] = null;
            }
            this.removeInput('IF' + i);

            if (containerBlock.getInputTargetBlock('DO' + i) && containerBlock.getInputTargetBlock('DO' + i).previousConnection) {
                statementConnections[i] = (containerBlock.getInputTargetBlock('DO' + i).previousConnection);
            } else {
                statementConnections[i] = null;
            }
            this.removeInput('DO' + i);
        }

        this.commandCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);

        for (var i = 1; i <= this.commandCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck([Boolean, Number])
                .appendField("如果指令是");
            this.appendStatementInput('DO' + i)
                .appendField("执行");
        }

        for (var i = valueConnections.length - 2; i > 0; i--) {
            if (valueConnections[i]) {
                Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            }
        }

        for (var i = statementConnections.length - 2; i > 0; i--) {
            if (statementConnections[i]) {
                Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
            }
        }
    },

    /**
         * Populate the mutator's dialog with this block's components.
         * @param {!Blockly.Workspace} workspace Mutator's workspace.
         * @return {!Blockly.Block} Root block in mutator.
         * @this Blockly.Block
         */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('State_Machine');
        containerBlock.initSvg();

        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 1; i <= this.commandCount_; i++) {
            var commandBlock = workspace.newBlock('Define_Command');
            commandBlock.initSvg();
            connection.connect(commandBlock.previousConnection);
            connection = commandBlock.nextConnection;
        }

        return containerBlock;
    },

    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        for (var i = this.commandCount_; i > 0; i--) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
        }
        this.commandCount_ = 0;

        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var valueConnections = [null];
        var statementConnections = [null];

        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'Define_Command':
                    this.commandCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push((clauseBlock.statementConnection_));
                    break;
                default:
                    throw TypeError('Unknown block type: ' + clauseBlock.type);
            }

            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }

        this.updateShape_();
        this.reconnectChileBlocks_(valueConnections, statementConnections);
    },

    /**
     * Store pointers to any connected child blocks.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    saveConnections: function (containerBlock) {
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var i = 1;

        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'Define_Command':
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlock.valueConnection_ = inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ = inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection && clauseBlock.nextConnection.targetBlock();
        }
    },

    /**
     * Reconstructs the block with all child blocks attached.
     */
    rebuildShape_: function () {
        var valueConnections = [null];
        var statementConnections = [null];

        var i = 1;

        while (this.getInput('IF' + i)) {
            var inputIf = this.getInput('IF' + i);
            var inputDo = this.getInput('DO' + i);
            valueConnections.push(inputIf.connection.targetConnection);
            statementConnections.push(inputDo.connection.targetConnection);
            i++;
        }

        this.updateShape_();
        this.reconnectChileBlocks_(valueConnections, statementConnections);
    },

    /**
         * Modify this block to have the correct number of inputs.
         * @this Blockly.Block
         * @private
         */
    updateShape_: function () {
        var i = 1;
        while (this.getInput('IF' + i)) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
            i++;
        }

        for (var i = 1; i <= this.commandCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck([Number, Boolean])
                .appendField("如果指令是");
            this.appendStatementInput('DO' + i)
                .appendField("执行");
        }
    },

    /**
     * Reconnects child blocks.
     * @param {!Array<?Blockly.RenderedConnection>} valueConnections List of value
     * connectsions for if input.
     * @param {!Array<?Blockly.RenderedConnection>} statementConnections List of
     * statement connections for do input.
     */
    reconnectChileBlocks_: function (valueConnections, statementConnections) {
        for (var i = 1; i <= this.commandCount_; i++) {
            Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
    }
}

Blockly.Blocks.State_Machine = {
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Init_State_Machine);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Init_State_Machine.Tip);
        this.contextMenu = false;
    }
}

Blockly.Blocks.Define_Command = {
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput()
            .appendField("增加指令");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.contextMenu = false;
    }
}