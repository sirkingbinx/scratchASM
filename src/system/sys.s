; SYS.S - system
; (C) Copyright 2026 SirKingBinx - MIT License

#include syscall.s

section .data
    magicNum: db 0xAB
    progStart: resb 512

    noProgram: db "No program loaded", 0
    noProgramLen: len noProgram
section .text
_start:
    ; set syscall int
    push 0xA9
    mov ax, LOCATE syscallA9
    push ax
    int 0x02 ; here's where the syscalls are, use them for syscall

    ^2 pop void ; pop mem into nowhere 2 times

    ; clear everything
    mov ax, 0
    mov bx, 0
    mov cx, 0
    mov dx, 0

    mov ici, 0
    mov ica, 0
    mov icb, 0
    mov icc, 0
    mov icd, 0

    ; strip any start labels
    int 0x03 

    ; start program loading
    mov ax, byteref progStart
    cmp ax, [magicNum]
    je load

    mov ici, 2 ; sigwrite
    mov ica, noProgramLen
    mov icb, noProgram
    syscall
load:
    mov ip, OFFSET progStart