; SYSCALL.S - handles systemcalls
; (C) Copyright 2026 SirKingBinx - MIT License

#import io.s

syscallA9:
    ; syscall ID stored in ici
    ; syscall args stored in ica, icb, icc, icd
    ; do `int 0xA9` or `syscall` to run the system call

    ; syscall EXIT (1)
    cmp ici, 1
    je SIGEXIT

    ; syscall WRITE (2)
    cmp ici, 2
    je SIGWRITE
SIGEXIT:
    int 0x00 ; end the system
SIGWRITE:
    push 2 ; sigwrite
    push ica ; msg len
    push icb ; msg content
    int 0x01 ; do the thing
SIGREAD:
    push 3 ; sigread
    int 0x01 ; you get it
    ; ends up at top of memory, figure it out you chud
    ; (hint: pop [reg])
SIGDMODE:
    push 4 ; sigdmode
    push ica ; (1 = terminal, 2 = raw (do your own graphics blud))
    int 0x01