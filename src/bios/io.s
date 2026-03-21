; IO.S - does IO related stuff
; (C) Copyright 2026 SirKingBinx - MIT License

; This is designed to be imported as a header file, not as a standalone program

section .text
__IO_print_msg:
    mov ah, 0x02 ; call #2 (printchar)
.loop:
    lodsb ; load next character in our string
    cmp al, 0
    je .done ; stop doing thing
    int 0x10 ; call it now
    jmp .loop ; keep going
.done:
    ret ; go back
