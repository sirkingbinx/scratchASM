; test references to registers
; get the value of a register by prepending its name with an $
; will not work with 3 letter registers (syc and syv)

_start:
    ; move some stuff
    MOV ax, 5
    MOV bx, $ax

    ; print out bx
    MOV rax, 2
    MOV rsi1, $bx
    SYSCALL
    
    MOV rax, 1
    MOV rsi1, 0
    SYSCALL
