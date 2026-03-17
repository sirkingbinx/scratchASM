// scratch-vm-js/scratchVM.js - main thing to import
// (C) Copyright 2026 SirKingBinx / MIT License

import { ScratchVMState } from "./vmstate";

export const version = "1.0.0";
export const repository = "https://github.com/sirkingbinx/scratch-vm";

/** @type {number} memSize The amount of memory (in bytes) to allocate. */
export function createState(memSize = 16000) {
    return new ScratchVMState(memSize);
}