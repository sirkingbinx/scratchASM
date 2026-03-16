// scratch-vm-js/preprocess.js - Code preprocessor
// (C) Copyright 2026 SirKingBinx / MIT License

/** @param {string} code Instructions to preprocess as code */
/** @param {bool} isMainProgram Whether to process this as the original program (meaning it will have a _start) */
export function preprocess(code, isMainProgram = true) {
    if (code == "" && !isMainProgram) {
        console.log("[scratchvm :: preprocessor] : Code is blank but it is not the main program; ignoring..");
        
    }
}