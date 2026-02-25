; quick script for grabbing the CPU speed. Press STOP after 1 sec
count:
    inc ax
    jmp count

_start:
    JMP count