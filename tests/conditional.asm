; tests conditionals

_start:
    mov ax, 5
    cmp ax, 5
    je .equal

    ; not good down here
    mov syc, 2
    mov syv, "not equal"
    syscall

; good down here
.equal:
    mov syc, 2
    mov syv, "equal"
    syscall