; mouse stuff
; use syscalls 7 (MOUSEX) & 8 (MOUSEY), they both push mouse coords to the stack
; syscall 9 (MOUSECOORDS) pushes X & Y to stack
mpos:
  mov syc, 9
  syscall
  ; in reverse order, since X is pushed first (so Y goes to the bottom of the stack before it)
  pop dx ; y
  pop cx ; x
  ret

main:
  call mpos
  jmp main

_start:
  jmp main
