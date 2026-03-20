#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#include <stdlib.h>

#include "futils.h"

#define SSM_VERSION "1.0"

int main(int argc, char* argv[]) {
    for (int i = 1; i < argc; i++) {
        char* arg = argv[i];

        if (strcmp(arg, "--version") == 0) {
            printf("ScratchASM Compiler v%s\n", SSM_VERSION);
            printf("(C) Copyright 2026 SirKingBinx. MIT License\n");
            exit(0);
        }

        if (strcmp(arg, "--help") == 0) {
            printf("usage: %s [OPTIONS] [file]\n", getfname(argv[0]));
            puts("OPTIONS:");
            puts("  --version       : Display version information");
            puts("  --help          : Show this help menu");
            puts("");
            puts("Enter any file that exists to input a file for compilation.");
            exit(0);
        }
    }
}