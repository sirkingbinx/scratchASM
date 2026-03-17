// scratch-vm-js/preprocess.js - Code preprocessor
// (C) Copyright 2026 SirKingBinx / MIT License

function stripComments(line = "") {
    if (line.trim().startsWith(";"))
        return "";
    if (!line.includes(";"))
        return line.trim();

    let commentIdx = line.indexOf(";");
    return line.substring(0, commentIdx).trim();
} 

/** @param {string} code Instructions to preprocess as code */
/** @param {bool} isMainProgram Whether to process this as the original program (meaning it will have a _start) */
export function preprocess(code = "__DONOTLEAVEMEBLANK!!!__", isMainProgram = true) {
    if (code == "__DONOTLEAVEMEBLANK!!!__") {
        return "";
    }

    let lines = code.split("\n");

    let hasStartLabel = code.includes("_start:");

    if (hasStartLabel && !isMainProgram) {
        // Strip non-primary program of start label
        let startLabelPoint = code.indexOf("_start:");
        let endingLine = startLabelPoint;

        for (let i = startLabelPoint; i < lines.length; i++) {
            if (stripComments(lines[i]).endsWith(":"))
                break;
            else
                endingLine = i;
        }

        lines.splice(startLabelPoint, endingLine - startLabelPoint);
    }

    if (hasStartLabel && !code.indexOf("_start") === 0 && isMainProgram) {
        lines.splice(0, 0, "jmp _start")
    } else if (!hasStartLabel && isMainProgram) {
        lines.splice(0, 0, "_start:");
    }

    for (let i = 0; i < lines.length; i++) {
        let line = stripComments(line);

        if (line == "") {
            lines.splice(i, 1);
            i--;
            continue;
        }
    }

    return lines.join("\n");
}