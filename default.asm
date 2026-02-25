; this is the default program you get when scratch VM is ran for the first time

hello:
    MOV syc, 2 ; print syscall
    MOV syv, "hello world\n" ; our text
    SYSCALL ; do syscall
    RET
_start:
    CALL hello ; hello world function
    MOV syc, 1 ; exit
    MOV syv, 0 ; status code
    SYSCALL ; do syscall
