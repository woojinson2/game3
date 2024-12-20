// script.js

// 슬롯에 표시할 아이템 배열
const symbols = ['🍓', '🍋', '🍇', '🍀'];

// 슬롯 머신 요소
const slot1 = document.getElementById('slot1');
const slot2 = document.getElementById('slot2');
const slot3 = document.getElementById('slot3');
const result = document.getElementById('result');
const spinButton = document.getElementById('spinButton');

// 슬롯을 랜덤으로 선택하는 함수
function getRandomSymbol() {
    const randomIndex = Math.floor(Math.random() * symbols.length);
    return symbols[randomIndex];
}

// 각 슬롯을 회전시키는 함수 (순차적으로)
function spinSlots() {
    // 버튼 비활성화 (중복 클릭 방지)
    spinButton.disabled = true;

    // 슬롯을 초기화 (기존 심볼을 초기화)
    slot1.textContent = '';
    slot2.textContent = '';
    slot3.textContent = '';
    result.textContent = '';  // 결과도 초기화

    // 슬롯의 최종 심볼을 담을 변수들
    let finalSlot1, finalSlot2, finalSlot3;

    // 첫 번째 슬롯 애니메이션 시작
    let spin1Interval = setInterval(() => {
        slot1.textContent = getRandomSymbol();
    }, 100);

    // 첫 번째 슬롯이 끝나면 두 번째 슬롯 애니메이션 시작
    setTimeout(() => {
        clearInterval(spin1Interval); // 첫 번째 슬롯 회전 멈추기
        finalSlot1 = getRandomSymbol(); // 첫 번째 슬롯의 최종 심볼
        slot1.textContent = finalSlot1; // 첫 번째 슬롯 최종 심볼 고정

        let spin2Interval = setInterval(() => {
            slot2.textContent = getRandomSymbol();
        }, 100);

        // 두 번째 슬롯이 끝나면 세 번째 슬롯 애니메이션 시작
        setTimeout(() => {
            clearInterval(spin2Interval); // 두 번째 슬롯 회전 멈추기
            finalSlot2 = getRandomSymbol(); // 두 번째 슬롯의 최종 심볼
            slot2.textContent = finalSlot2; // 두 번째 슬롯 최종 심볼 고정

            let spin3Interval = setInterval(() => {
                slot3.textContent = getRandomSymbol();
            }, 100);

            // 세 번째 슬롯이 끝난 후 결과 확인
            setTimeout(() => {
                clearInterval(spin3Interval); // 세 번째 슬롯 회전 멈추기
                finalSlot3 = getRandomSymbol(); // 세 번째 슬롯의 최종 심볼
                slot3.textContent = finalSlot3; // 세 번째 슬롯 최종 심볼 고정
                showFinalSymbols(finalSlot1, finalSlot2, finalSlot3); // 결과 확인
            }, 1000); // 1초 후 세 번째 슬롯 종료
        }, 1000); // 1초 후 두 번째 슬롯 종료
    }, 1000); // 1초 후 첫 번째 슬롯 종료
}

// 최종 심볼을 표시하고 결과 확인
function showFinalSymbols(symbol1, symbol2, symbol3) {
    // 각 슬롯에 최종 심볼을 표시
    slot1.textContent = symbol1;
    slot2.textContent = symbol2;
    slot3.textContent = symbol3;

    checkResult(symbol1, symbol2, symbol3); // 결과를 체크
}

// 결과를 확인하는 함수
function checkResult(symbol1, symbol2, symbol3) {
    // 당첨인 경우
    if (symbol1 === symbol2 && symbol2 === symbol3) {
        result.textContent = '';
    } 
    // 당첨이 아닌 경우, 아무 텍스트도 표시하지 않음
    else {
        result.textContent = ''; // 결과를 비워두기
    }

    // 버튼 다시 활성화
    spinButton.disabled = false;
}

// 버튼 클릭 시 슬롯 회전
spinButton.addEventListener('click', spinSlots);
