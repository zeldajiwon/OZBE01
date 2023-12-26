

/*
 * ❗️❗️ 필독 ❗️❗️
 * - 함수 블록 내부에만 작성해주세요.
 */

/*  문제 출제
 *
 *   ☘️당신의 운을 시험해 보세요☘️
 * - n은 내가 정하는 수 1~9까지의 숫자만 넣어주세요.
 * - 1~9번 중 랜덤으로 행운의 숫자를 출력합니다.
 * - 콘솔에 1~10회차의 각 행운의 숫자를 비교해 당첨 여부를 표시합니다. ex) 1회차 행운의 숫자 : 2 당첨!
 * - 총 당첨 횟수와 배팅금액을 곱해주세요.
 * - 최종 금액을 콘솔에 표시해주세요. ex) 당첨금은 30000원 입니다.
 *
 *  *❗️ 제한 조건 ❗️
 * - 랜덤 숫자는 정수 입니다.
 *
 *
 */

function question(n, m) {
    let totalWinnigs = 0;
    for (let i=1; i<=9; i++) {
        const luckyNumber = Math.floor(Math.random() * 9) + 1;
        
        console.log(`${i}회차 행운의 숫자: ${luckyNumber}`);

        if (luckyNumber === n) {
            console.log(`${i}회차 행운의 숫자: ${luckyNumber} 당첨!`)
            totalWinnigs += m;
        } else {
            console.log(`${i}회차 행운의 숫자: ${luckyNumber} 꽝! 다음 기회에!`)
        }
    }

    console.log(`당첨금은 ${totalWinnigs}원 입니다.`);
    
}

question(4, 10000);