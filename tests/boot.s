// tests/boot.s - Bootable thing that does nothing for testing
// (C) Copyright 2026 SirKingBinx

section .data
_init db 0xFB // ftype byte goes here. 0xFB - bootable thing for the BIOS

section .text
_start:
    nop // do nothing