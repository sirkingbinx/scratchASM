<p align="center">
  <img width="493" height="411" alt="image" src="https://github.com/user-attachments/assets/dd969cd2-21d1-483c-98a4-4c39fbb25082" />
  <h1 align="center"><a href="https://scratch.mit.edu/projects/1283178575/">scratch-vm</a></h1>
</p>

scratch-VM is an Assembly editor, executor, and VM built in Scratch. It aims to be somewhat compatable with x86 Assembly and be fast enough to run on standalone Scratch (so without TurboWarp, Penguin, etc.)

This repository is not the actual scratch-vm source code, it holds the language tests and documentation.

## Specs
| Spec        | Value           | Tested with                                         |
| ----------- | --------------- | ----------------------------------------------------|
| RAM         | 32 kb           | Scratch (length of Memory)                          |
| CPU Speed   | 16.13 kHz       | [cpuclocker.asm](/cpuclocker.asm)                   |

## Instructions
Opcodes, registers, and labels are not case sensitive (as they are converted to uppercase by the preprocessor anyway)
| Opcode  | Usage                | Operation                                    |
| ------- | -------------------- | -------------------------------------------- |
| MOV     | `MOV ax, 1`          | ax = 1                                       |
| ADD     | `ADD ax, 1`          | ax += 1                                      |
| SUB     | `SUB ax, 1`          | ax -= 1                                      |
| MUL     | `MUL ax, 2`          | ax *= 2 (unsigned)                           |
| DIV     | `DIV ax, 2`          | ax /= 2 (unsigned)                           |
| IMUL    | `IMUL ax, 2`         | ax *= 2 (signed)                             |
| IDIV    | `IDIV ax, 2`         | ax /= 2 (signed)                             |
| INC     | `INC ax`             | ax++                                         |
| PUSH    | `PUSH 1`             | add `1` to top of stack                      |
| POP     | `POP ax`             | move top of stack to `ax`                    |
| JMP     | `JMP label`          | jump to label                                |
| CALL    | `CALL label`         | jump to label `func` and set point of `RET`  |
| RET     | `RET`                | jump to line after `CALL`er                  |
| SYSCALL | `SYSCALL`            | invoke system func in `syc` with arg `syv`   |
| PUSH    | `PUSH data`          | push `data` to top of stack                  |
| POP     | `POP ax`             | move data at top of stack to register `ax`   |
| CMP     | `CMP ax, 1`          | compare `ax` to 1, update flags              |
| JE      | `JE label`           | (cmp) jump if equal                          |
| JZ      | `JZ label`           | (cmp) jump if 0                              |
| JNE     | `JNE label`          | (cmp) jump if not equal                      |
| JNZ     | `JNZ label`          | (cmp) jump if not 0                          |
| JG      | `JG label`           | (cmp) jump if greater than                   |
| JL      | `JL label`           | (cmp) jump if less than                      |
| JS      | `JS label`           | (cmp) jump if signed / negative              |

## Registers
| Register Names | Purpose                           |
| -------------- | --------------------------------- |
| ax, bx, cx, dx | general-purpose                   |
| sp             | stack pointer                     |
| ip             | instruction pointer               |
| rp             | return pointer (`RET`)            |
| rax            | syscall id                        |
| rsi1, rsi2     | syscall arguments                 |