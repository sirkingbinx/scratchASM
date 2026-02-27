; executables running outside of the raw mode (the default) can use x86-based stuff
; we use NASM style here since its pretty and easy to read

section .data:
    hello: .asciz "hello world\n"
    hello_len: equ $ - hello

section .text:
    global _start ; public function
_start:
    mov rax, 2 ; print syscall
    mov rdi, 1
    mov rsi, hello
    mov rdx, hello_len
    syscall

    mov rax, 1 ; exit syscall
    mov rdi, 1
    mov rsi, 0
    mov rdx, 1
    syscall
