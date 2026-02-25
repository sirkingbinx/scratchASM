; switch between debugger view (with the bunch of tools) and display view (nothing, DIY)

changemode:
  MOV syc, 3 ; syscall DISPLAYMODE
  MOV syv, $ax ; change ax for this
  SYSCALL
  RET

dothing:
  CALL changemode
  
  MOV syc, 1
  MOV syv, 0
  SYSCALL

_start:
  MOV 
  CMP ax, 0
  JNZ dothing
