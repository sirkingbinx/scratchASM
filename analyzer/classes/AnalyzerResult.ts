// classes/AnalyzerResults.ts -- AnalyzerResult class
// (C) 2026 SirKingBinx

import { AnalyzerArray } from "../interfaces/AnalyzerArray";
import { AnalyzerError } from "./errors/AnalyzerError"

/** Returned by the scratch-VM analyzer to give a list of problems in your code. */
export class AnalyzerResult {
    private constructor() {
        this.errors = new AnalyzerArray<AnalyzerError>();
        this.warnings = new AnalyzerArray<AnalyzerError>();
    }

    /** List of errors reported by the analyzer. */
    public errors: AnalyzerArray<AnalyzerError>;

    /** List of warnings reported by the analyzer. */
    public warnings: AnalyzerArray<AnalyzerError>;

    /** If the code being analyzed will successfully compile. */
    public compiles(): boolean {
        return this.errors.empty();
    }
}