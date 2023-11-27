@for %%i in (src/sample/1.txt) do @set SIZE=%%~zi
@if not %SIZE% == 0 (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample/1.txt
)

@for %%i in (src/sample/2.txt) do @set SIZE=%%~zi
@if not %SIZE% == 0 (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample/2.txt
)

@for %%i in (src/sample/3.txt) do @set SIZE=%%~zi
@if not %SIZE% == 0 (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample/3.txt
)

@for %%i in (src/sample/4.txt) do @set SIZE=%%~zi
@if not %SIZE% == 0 (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample/4.txt
)