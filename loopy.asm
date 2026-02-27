; here's the kicker
.loop:
    jmp .loop

_start:
    ; warning
    MOV rax, 2
    MOV rsi1, "Press STOP if your fans start turning up\nentering loop.."
    SYSCALL

    jmp .loop ; uh oh
