// scratch-vm-js/error.js - Error class, for error information stuff
// (C) Copyright 2026 SirKingBinx / MIT License

const errorData = require("./errors.json");

export class VMError {
    constructor(errorCode) {
        const data = errorData[errorCode.toString()];

        this.id = errorCode;
        this.message = data.message;
        this.source = data.source;
    }
}