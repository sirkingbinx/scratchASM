; BIOS.S - scratchASM virtual machine BIOS stuff
; (C) Copyright 2026 SirKingBinx - MIT License

#import io.s
#import load.s

section .data
    NBOOTERR: db "No program loaded", 0
    WELCSTR: db "ScratchASM VM v1.0", 0
section .text
_start:
    ; version string
    mov si, WELCSTR
    call __IO_print_msg
    
    call __SYSLOAD_load
    ; no OS found
    mov si, NBOOTERR
    call __IO_print_msg

    int 0x00 ; end execution now, you did it