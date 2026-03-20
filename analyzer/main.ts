// analyzer/main.ts -- scratch-vm analyzer
// (C) 2026 SirKingBinx

const version = "1.0.0";

const { parseArgs } = require('node:util');

const options = {
    test: { type: "boolean", short: "t" },
    analyze: { type: "boolean", short: "a" },
    input: { type: "string", short: "i"},
    output: { type: "string", short: "o"},

    help: { type: "boolean" },
    version: { type: "boolean" },
};

const { values } = parseArgs({ options });

if (values.version) {
    console.log(`@scratch-vm/analyzer v${version}\n(C) Copyright 2026 SirKingBinx.`)
}