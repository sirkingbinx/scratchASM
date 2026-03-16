// scratch-vm-js/vmstate.js - VM state handler
// (C) Copyright 2026 SirKingBinx / MIT License

export const Register = Object.freeze({
    AX: "ax",
    BX: "bx",
    CX: "cx",
    DX: "dx",
    SP: "sp",
    IP: "ip",
    RAX: "rax",
    RSI1: "rsi1",
    RSI2: "rsi2"
});

export class ScratchVMState {
    /** @param {number} memSize Amount of memory to allocate to the VM. */
    constructor(memSize = 32000) {
        /** @type {Array} All allocated memory to the VM */
        this.memory = new Array(memSize).fill(0);

        /** @type {Map} All of the registers on the CPU */
        this.registers = new Map();

        Register.forEach(register => {
            this.registers.set(register, 0);
        });

        /** @type {number} The current usage (in bytes) of the VM's memory. */
        this.memUsage = 0;

        /** @type {number} The max usage (in bytes) of the VM's memory. */
        this.maxMemUsage = 0;
    }

    /** @param {string} code The code to load into memory. */
    loadCode(code) {
        
    }
}