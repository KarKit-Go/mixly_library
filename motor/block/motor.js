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
        this.appendValueInput('WaitTime', Number)
            .setCheck(Number)
            .appendField("状态机等待时间");
        this.setInputsInline(true);
        this.appendStatementInput('DO0')
            .appendField("test2");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setHelpUrl("https://mixly.readthedocs.io/zh_CN/latest/arduino/03.Control.html#if");
        this.wiki = {
            'zh-hans': {
                page: ['Arduino AVR', '控制', 'if 选择']
            }
        };
        this.setMutator(new Blockly.Mutator(['controls_if_elseif',
            'controls_if_else', "Init_Left"]));
        // Assign 'this' to a variable for use in the tooltip closure below.
        var thisBlock = this;
        this.setTooltip(function () {
            if (!thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_1;
            } else if (!thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_2;
            } else if (thisBlock.elseifCount_ && !thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_3;
            } else if (thisBlock.elseifCount_ && thisBlock.elseCount_) {
                return Blockly.Msg.CONTROLS_IF_TOOLTIP_4;
            }
            return '';
        });
        this.elseifCount_ = 0;
        this.elseCount_ = 0;
    },
    /**
     * Create XML to represent the number of else-if and else inputs.
     * @return {Element} XML storage element.
     * @this Blockly.Block
     */
    mutationToDom: function () {
        if (!this.elseifCount_ && !this.elseCount_) {
            return null;
        }
        var container = document.createElement('mutation');
        if (this.elseifCount_) {
            container.setAttribute('elseif', this.elseifCount_);
        }
        if (this.elseCount_) {
            container.setAttribute('else', 1);
        }
        return container;
    },
    /**
     * Parse XML to restore the else-if and else inputs.
     * @param {!Element} xmlElement XML storage element.
     * @this Blockly.Block
     */
    domToMutation: function (xmlElement) {
        var containerBlock = this;
        var valueConnections = [];
        var statementConnections = [];
        var elseStatementConnection = null;
        if (this.elseCount_) {
            if (containerBlock.getInputTargetBlock('ELSE') && containerBlock.getInputTargetBlock('ELSE').previousConnection)
                elseStatementConnection = containerBlock.getInputTargetBlock('ELSE').previousConnection;
            this.removeInput('ELSE');
        }
        for (var i = this.elseifCount_; i > 0; i--) {
            if (containerBlock.getInputTargetBlock('IF' + i) && containerBlock.getInputTargetBlock('IF' + i).previousConnection)
                valueConnections[i] = (containerBlock.getInputTargetBlock('IF' + i).previousConnection);
            else
                valueConnections[i] = null;
            this.removeInput('IF' + i);
            if (containerBlock.getInputTargetBlock('DO' + i) && containerBlock.getInputTargetBlock('DO' + i).previousConnection)
                statementConnections[i] = (containerBlock.getInputTargetBlock('DO' + i).previousConnection);
            else
                statementConnections[i] = null;
            this.removeInput('DO' + i);
        }
        this.elseifCount_ = parseInt(xmlElement.getAttribute('elseif'), 10);
        this.elseCount_ = parseInt(xmlElement.getAttribute('else'), 10);
        //this.compose(containerBlock);
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck([Boolean, Number])
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSEIF);
            this.appendStatementInput('DO' + i)
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_THEN);
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE')
                .appendField(Blockly.Msg.CONTROLS_IF_MSG_ELSE);
        }
        for (var i = valueConnections.length - 2; i > 0; i--) {
            if (valueConnections[i])
                Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
        }
        for (var i = statementConnections.length - 2; i > 0; i--) {
            if (statementConnections[i])
                Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
    },
    /**
     * Populate the mutator's dialog with this block's components.
     * @param {!Blockly.Workspace} workspace Mutator's workspace.
     * @return {!Blockly.Block} Root block in mutator.
     * @this Blockly.Block
     */
    decompose: function (workspace) {
        var containerBlock = workspace.newBlock('controls_if_if');
        containerBlock.initSvg();
        var connection = containerBlock.getInput('STACK').connection;
        for (var i = 1; i <= this.elseifCount_; i++) {
            var elseifBlock = workspace.newBlock('controls_if_elseif');
            elseifBlock.initSvg();
            connection.connect(elseifBlock.previousConnection);
            connection = elseifBlock.nextConnection;
        }
        if (this.elseCount_) {
            var elseBlock = workspace.newBlock('controls_if_else');
            elseBlock.initSvg();
            connection.connect(elseBlock.previousConnection);
        }
        return containerBlock;
    },
    /**
     * Reconfigure this block based on the mutator dialog's components.
     * @param {!Blockly.Block} containerBlock Root block in mutator.
     * @this Blockly.Block
     */
    compose: function (containerBlock) {
        // Disconnect the else input blocks and remove the inputs.
        if (this.elseCount_) {
            this.removeInput('ELSE');
        }
        this.elseCount_ = 0;
        // Disconnect all the elseif input blocks and remove the inputs.
        for (var i = this.elseifCount_; i > 0; i--) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
        }
        this.elseifCount_ = 0;
        // Rebuild the block's optional inputs.
        var clauseBlock = containerBlock.getInputTargetBlock('STACK');
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;
        while (clauseBlock) {
            switch (clauseBlock.type) {
                case 'controls_if_elseif':
                    this.elseifCount_++;
                    valueConnections.push(clauseBlock.valueConnection_);
                    statementConnections.push(clauseBlock.statementConnection_);
                    break;
                case 'controls_if_else':
                    this.elseCount_++;
                    elseStatementConnection = clauseBlock.statementConnection_;
                    break;
                default:
                    throw TypeError('Unknown block type: ' + clauseBlock.type);
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }

        this.updateShape_();
        // Reconnect any child blocks.
        this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);

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
                case 'controls_if_elseif':
                    var inputIf = this.getInput('IF' + i);
                    var inputDo = this.getInput('DO' + i);
                    clauseBlock.valueConnection_ =
                        inputIf && inputIf.connection.targetConnection;
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    i++;
                    break;
                case 'controls_if_else':
                    var inputDo = this.getInput('ELSE');
                    clauseBlock.statementConnection_ =
                        inputDo && inputDo.connection.targetConnection;
                    break;
                default:
                    throw 'Unknown block type.';
            }
            clauseBlock = clauseBlock.nextConnection &&
                clauseBlock.nextConnection.targetBlock();
        }
    },
    /**
     * Reconstructs the block with all child blocks attached.
     */
    rebuildShape_: function () {
        var valueConnections = [null];
        var statementConnections = [null];
        var elseStatementConnection = null;

        if (this.getInput('ELSE')) {
            elseStatementConnection = this.getInput('ELSE').connection.targetConnection;
        }
        var i = 1;
        while (this.getInput('IF' + i)) {
            var inputIf = this.getInput('IF' + i);
            var inputDo = this.getInput('DO' + i);
            console.log(inputIf.connection.targetConnection);
            valueConnections.push(inputIf.connection.targetConnection);
            statementConnections.push(inputDo.connection.targetConnection);
            i++;
        }
        this.updateShape_();
        this.reconnectChildBlocks_(valueConnections, statementConnections, elseStatementConnection);
    },
    /**
     * Modify this block to have the correct number of inputs.
     * @this Blockly.Block
     * @private
     */
    updateShape_: function () {
        // Delete everything.
        if (this.getInput('ELSE')) {
            this.removeInput('ELSE');
        }
        var i = 1;
        while (this.getInput('IF' + i)) {
            this.removeInput('IF' + i);
            this.removeInput('DO' + i);
            i++;
        }
        // Rebuild block.
        for (var i = 1; i <= this.elseifCount_; i++) {
            this.appendValueInput('IF' + i)
                .setCheck([Number, Boolean])
                .appendField(Blockly.Msg['CONTROLS_IF_MSG_ELSEIF']);
            this.appendStatementInput('DO' + i)
                .appendField(Blockly.Msg['CONTROLS_IF_MSG_THEN']);
        }
        if (this.elseCount_) {
            this.appendStatementInput('ELSE')
                .appendField(Blockly.Msg['CONTROLS_IF_MSG_ELSE']);
        }
    },
    /**
     * Reconnects child blocks.
     * @param {!Array<?Blockly.RenderedConnection>} valueConnections List of value
     * connectsions for if input.
     * @param {!Array<?Blockly.RenderedConnection>} statementConnections List of
     * statement connections for do input.
     * @param {?Blockly.RenderedConnection} elseStatementConnection Statement
     * connection for else input.
     */
    reconnectChildBlocks_: function (valueConnections, statementConnections,
        elseStatementConnection) {
        for (var i = 1; i <= this.elseifCount_; i++) {
            Blockly.Mutator.reconnect(valueConnections[i], this, 'IF' + i);
            Blockly.Mutator.reconnect(statementConnections[i], this, 'DO' + i);
        }
        Blockly.Mutator.reconnect(elseStatementConnection, this, 'ELSE');
    }
};

Blockly.Blocks['controls_if_if'] = {
    /**
     * Mutator block for if container.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CONTROLS_IF_IF_TITLE_IF);
        this.appendStatementInput('STACK');
        this.setTooltip(Blockly.Msg.CONTROLS_IF_IF_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['controls_if_elseif'] = {
    /**
     * Mutator bolck for else-if condition.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CONTROLS_IF_ELSEIF_TITLE_ELSEIF);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSEIF_TOOLTIP);
        this.contextMenu = false;
    }
};

Blockly.Blocks['controls_if_else'] = {
    /**
     * Mutator block for else condition.
     * @this Blockly.Block
     */
    init: function () {
        this.setColour(Blockly.Blocks.loops.HUE);
        this.appendDummyInput()
            .appendField(Blockly.Msg.CONTROLS_IF_ELSE_TITLE_ELSE);
        this.setPreviousStatement(true);
        this.setTooltip(Blockly.Msg.CONTROLS_IF_ELSE_TOOLTIP);
        this.contextMenu = false;
    }
};