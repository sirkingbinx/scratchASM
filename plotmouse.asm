; adds a dot everywhere the mouse is

_start:
    ; enter display mode for raw display management
    mov syc, 3
    mov syv, 2
    syscall

    ; start the thing
    jmp .plotmouse

.plotmouse:
   ; mouse x (7) & mouse y (8)
    mov syc, 7
    mov syv, cx
    syscall
    
    mov syc, 8
    mov syv, dx
    syscall

; move to mouse x & y
    mov syc, 4
    mov syv, $cx
    syscall
    
    mov syc, 5
    mov syv, $dx
    syscall

; plot a white pixel
    mov syc, 6
    syscall

; & repeat
    jmp .plotmouse
