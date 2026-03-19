// analyzer/classes/errors/AnalyzerResults.ts -- AnalyzerResult class
// (C) 2026 SirKingBinx

import errorData from "../../json/errors.json" with { type: "json" }

/**
 * An error thrown by the analyzer.
 */
export class AnalyzerError {
    constructor(errorCode: string, address: number) {
        let thisErrorData = errorData[errorData.findIndex(item => item.id === errorCode)];

        this.errorCode = errorCode;
        this.message = thisErrorData.message;
        this.source = address;
    }

    /**
     * @description The ID of this error.
     */
    public errorCode: string;

    /**
     * @description The message attached to this error. May help you debug the source of the problem.
     */
    public message: string;
    
    /**
     * @description The memory address or line number of the line that generated this error.
     */
    public source: number;
}