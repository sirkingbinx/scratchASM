// tests/boot.s - Bootable thing that does nothing for testing
// (C) Copyright 2026 SirKingBinx

section .data
_init db 0x5A // ftype byte goes here. 0x5A - bootable thing for the BIOS

section .text
_start:
    nop // do nothing