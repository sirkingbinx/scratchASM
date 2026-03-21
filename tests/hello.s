; tests/hello.s - prints "hello world" to the console
; (C) Copyright 2026 SirKingBinx

section .data:
    helloWorld: db "hello world", 0
    helloWorldLen: len helloWorld
section .text:
_start:
    ; Syscall ID is stored in register ICI
    ; You can call either `syscall` or signal `0xA9` with `int 0xA9` to call a system call
    ; We assume you are using the default system included in /src/system, this may need adaptation for
    ; other systems if you want it to work

    mov ici, 2 ; SIGWRITE
    mov ica, helloWorldLen
    mov icb, helloWorld
    syscall ; do it

    mov ici, 1 ; SIGEXIT
    syscall