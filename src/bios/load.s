; LOAD.S - Locates & loads system on the scratchASM VM
; (C) Copyright 2026 SirKingBinx - MIT License

; This is designed to be imported as a header file, not as a standalone program

section .bss
    bootPoint: resb 64 ; we only need one byte to boot to
section .text
__SYSLOAD_load:
    mov cx, byteref bootPoint ; first byte of our boot reserve
    cmp cx, 0x5A ; compare to magic thingy
    jz __SYSLOAD_noboot
    ret ; no boot, return for errors
__SYSLOAD_BOOT:
    mov ip, OFFSET bootPoint ; jump to OS code