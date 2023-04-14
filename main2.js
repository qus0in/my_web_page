// main.js
// 예매 버튼 클릭 시 티켓 예매 페이지로 이동하는 기능 추가
const bookBtn = document.querySelector('#book-btn');
bookBtn.addEventListener('click', () => {
  window.location.href = 'ticket.html';
});

// 락페스티벌 일정의 상세 정보를 팝업으로 표시하는 기능 추가
const scheduleRows = document.querySelectorAll('tbody tr');
scheduleRows.forEach(row => {
  row.addEventListener('click', () => {
    const date = row.querySelector('td:first-child').textContent;
    const venue = row.querySelector('td:nth-child(2)').textContent;
    const artist = row.querySelector('td:nth-child(3)').textContent;
    alert(`${date}, ${venue}, ${artist}`);
  });
});