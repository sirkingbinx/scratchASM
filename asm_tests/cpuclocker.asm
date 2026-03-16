; See the call stack's length for the CPU speed.
; Div by 1000 for kHz speed.
; Div by 1e+6 (100000) for mHz speed.
.l:
    jmp .l

_start:
    jmp .l
