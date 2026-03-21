; tests/boot.s - Bootable thing that does nothing for testing
; (C) Copyright 2026 SirKingBinx

section .data
    start: db 0x5A ; hey system! we can boot!
section .text
_start:
    nop ; do nothing