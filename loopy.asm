; here's the kicker
loop:
  jmp loop

start:
  ; warning
  MOV syc, 2
  MOV syv, "Press STOP if your fans start turning up\nentering loop.."
  CALL

  jmp loop ; uh oh
