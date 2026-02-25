; quick script for grabbing the CPU speed. Press STOP after 1 sec
count:
    INC ax
    JMP count

_start:
    JMP count