; Finds the OS in memory and starts execution

section .data
    noBootableMsg: db "No bootable program in memory" ; nothing here msg
    bootableMagicNum: db 0x5A ; i can boot msg
section .bss
    bootPoint: resb 64 ; we only need one byte to boot to
section .text

print_msg:
    mov ah, 0x02 ; call #2 (printchar)
.loop:
    lodsb ; load next character in our string
    cmp al, 0
    je .done ; stop doing thing
    int 0x10 ; call it now
    jmp .loop ; keep going
.done:
    ret ; go back

noboot:
    mov si, [noBootableMsg]
    call print_msg
    mov ah, 0x01 ; stop
    int 0x10

_start:
    mov cx, <bootPoint ; first byte of our boot reserve
    cmp cx, [bootableMagicNum] ; compare to magic thingy
    jnz noboot

    mov ip, OFFSET bootPoint ; jump to OS code
    ; we're done
