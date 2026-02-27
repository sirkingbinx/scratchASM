; this is the default program you get when scratch VM is ran for the first time

hello:
    MOV rax, 2 ; print syscall
    MOV rsi1, "hello world\n" ; our text
    SYSCALL ; do syscall
    RET
    
_start:
    CALL hello ; hello world function
    MOV rax, 1 ; exit
    MOV rsi1, 0 ; status code
    SYSCALL ; do syscall
