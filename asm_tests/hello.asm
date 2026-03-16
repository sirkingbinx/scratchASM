; note: a start label is not required if your start function is at the beginning of your code, since
;       code begins executing at mem address 1.
;       if a start label is provided, the preprocessor will add a "JMP start" instruction into memory
;       to make the code move to the starting point
_start:
    ; syscall PRINT
    MOV rax, 2
    MOV rsi1, "hello world\n"
    SYSCALL

    ; syscall EXIT
    MOV rax, 1
    MOV rsi1, 0
    SYSCALL