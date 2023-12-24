@if exist src/sample1.txt (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample1.txt
)
@if exist src/sample2.txt (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample2.txt
)
@if exist src/sample3.txt (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample3.txt
)
@if exist src/sample4.txt (
  call ./node_modules/.bin/ts-node src/script.ts < src/sample4.txt
)