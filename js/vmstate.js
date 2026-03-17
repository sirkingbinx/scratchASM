// scratch-vm-js/vmstate.js - VM state handler
// (C) Copyright 2026 SirKingBinx / MIT License

import { preprocess } from "./preprocess";

/**
 * @description Represents a register on the scratch-VM CPU.
 */
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

/**
 * @description The class responsible for representing an instance of scratch-VM. This holds all of the memory, code loading, memory get/set, and everything else related to the CPU.
 */
export class ScratchVMState {
    /**
     * @description Please use scratchVM.createState() instead.
     */
    constructor(memSize = 32000) {
        /** @type {Array} All allocated memory to the VM (in bytes) */
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

    /**
     * @param {string} code The main program code.
     * @description Initialize the scratch-VM and begin code execution.
     */
    init(code) {
        this.loadCode(code, true);
    }

    /**
     * @param {string} code The code to load into memory.
     * @param {bool} mainProgram If the parser should allow _start labels to remain in the code.
     * @description Load code into memory to be executed. To automatically begin execution, use init().
    */
    loadCode(code, mainProgram = false) {
        let lines = preprocess(code, mainProgram);
        
        lines.forEach(line => {
            const error = this.loadIntoMemory(line);

            if (error != null) {
                console.log("Error: There is not enough allocated memory avaliable to load your program's code.");
                return;
            }
        });
    }

    /** @param {any} obj The object to add into memory. */
    loadIntoMemory(obj) {
        if (memUsage >= this.memory.length) {
            return 0x6A; // Memory unavaliable
        }

        this.memory[memUsage] = obj;
        this.memUsage++;
    }

    /**
     * @description Returns the content at a specific memory address. This will return a memory address or an error code (view ERRORS.md).
     * @returns { object } An object representing the content in memory that was requested.
     */
    atMemoryAddress(address) {
        if (address > this.memory.length) {
            return 0x7A;
        }

        if (this.memory[address] == null) {
            return 0x7B;
        }

        return this.memory[address];
    }
}