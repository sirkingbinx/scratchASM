// analyzer/classes/AnalyzerResults.ts -- AnalyzerResult class
// (C) 2026 SirKingBinx

import { AdvancedArray } from "./AdvancedArray";
import { AnalyzerError } from "./errors/AnalyzerError"

/** Returned by the scratch-VM analyzer to give a list of problems in your code. */
export class AnalyzerResult {
    private constructor() {
        this.errors = new AdvancedArray<AnalyzerError>();
        this.warnings = new AdvancedArray<AnalyzerError>();
    }

    /** List of errors reported by the analyzer. */
    public errors: AdvancedArray<AnalyzerError>;

    /** List of warnings reported by the analyzer. */
    public warnings: AdvancedArray<AnalyzerError>;

    /** If the code being analyzed will successfully compile. */
    public compiles(): boolean {
        return this.errors.empty();
    }
}