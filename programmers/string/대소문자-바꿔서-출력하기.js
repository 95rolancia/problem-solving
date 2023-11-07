// solution('aBcDeFg') => 'AbCdEfG'
function solution(str) {
  const converted = Array.from(str).map((char) =>
    // a~z에 해당하면 toUppercase() 아니면 toLowserCase() 적용
    char.match(/[a-z]/) ? char.toUpperCase() : char.toLowerCase()
  );
  console.log(converted.join(""));
}
