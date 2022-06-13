// 퀴즈!
let num = 2;
// num의 숫자가 짝수이면 👍🏻, 홀수라면 👎🏻을 출력하도록
// if
// ternary

// if
if(num % 2 === 0) {
    console.log('👍🏻');
} else {
    console.log('👍🏻');
}

// ternary
num % 2 === 0 ? console.log('👍🏻') : console.log('👍🏻');

// 좀 더 간결하게 쓰는 법 
let emoji = num % 2 === 0 ? '👍🏻' : '👎🏻'