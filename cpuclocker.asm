; quick script for grabbing the CPU speed. Press STOP after 1 sec
cpucycle:
    inc ax
    jmp cpucycle

_start:
    jmp cpucycle
