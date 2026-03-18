// scratch-vm-js/error.js - Error class, for error information stuff
// (C) Copyright 2026 SirKingBinx / MIT License

import errors from "./errors.json" with { type: 'json' }

export class VMError {
    /**
     * @private
     */
    constructor(errorCode) {
        const data = errors[errorCode.toString()];

        /**
         * @type { number }
         * @description The specific error ID thrown. This will be unique to the source of the error.
         */
        this.errorId = errorCode;

        /**
         * @type { string }
         * @description The error message attached to this error ID. This is a more generic error message which may help you debug your code.
         */
        this.message = data.message;
        
        /**
         * @type { string }
         * @description The internal function call that generated this error. This will be unique for each error code.
         */
        this.source = data.source;
    }
}