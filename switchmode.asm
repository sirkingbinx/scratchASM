; switch between debugger view (with the bunch of tools) and display view (nothing, DIY)

changemode:
  MOV rax, 3 ; syscall DISPLAYMODE
  MOV rsi1, $ax ; change ax for this
  SYSCALL
  RET

dothing:
  CALL changemode
  
  MOV rax, 1
  MOV rsi1, 0
  SYSCALL

_start:
  MOV 
  CMP ax, 0
  JNZ dothing
