function solution(strings, n){
    return strings.map(a => [...a][n]+a).sort().map( a => a.substr(1))
}
