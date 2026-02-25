; note: a start label is not required if your start function is at the beginning of your code, since
;       code begins executing at mem address 1.
;       if a start label is provided, the preprocessor will add a "JMP start" instruction into memory
;       to make the code move to the starting point
_start:
    ; syscall PRINT
    MOV syc, 2
    MOV syv, "hello world\n"
    CALL

    ; syscall EXIT
    MOV syc, 1
    MOV syv, 0
    CALL