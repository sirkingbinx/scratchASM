; adds a dot everywhere the mouse is

_start:
    ; enter display mode for raw display management
    mov rax, 3
    mov rsi1, 2
    syscall

    ; start the thing
    jmp .plotmouse

.plotmouse:
   ; mouse x (7) & mouse y (8)
    mov rax, 7
    mov rsi1, cx
    syscall
    
    mov rax, 8
    mov rsi1, dx
    syscall

; move to mouse x & y
    mov rax, 4
    mov rsi1, $cx
    syscall
    
    mov rax, 5
    mov rsi1, $dx
    syscall

; plot a white pixel
    mov rax, 6
    syscall

; & repeat
    jmp .plotmouse
