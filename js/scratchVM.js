// scratch-vm-js/scratchVM.js - main thing to import
// (C) Copyright 2026 SirKingBinx / MIT License

import { ScratchVMState } from "./vmstate";

/**
 * The current version of scratch-vm-js that is installed.
 */
export const version = "1.0.0";

/**
 * The target scratch-VM assembly version of the compiler.
 */
export const target_version = "1.1";

/**
 * The repository attached to this version of scratch-vm-js.
 */
export const repository = "https://github.com/sirkingbinx/scratch-vm";

/**
 * @param {number} memSize The amount of memory (in bytes) to allocate.
 * @description Creates a new VM state for loading, executing, and debugging code.
 */
export function createState(memSize = 16000) {
    return new ScratchVMState(memSize);
}