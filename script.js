// 画面が読み込まれたら、1秒（1000ms）ごとにdrawLuckyNumberを実行する
setInterval(drawLuckyNumber, 2500);

function drawLuckyNumber() {
    const holidays2026 = [
        "2026/1/1", "2026/1/12", "2026/2/11", "2026/2/23", "2026/3/20",
        "2026/4/29", "2026/5/3", "2026/5/4", "2026/5/5", "2026/5/6",
        "2026/7/20", "2026/8/11", "2026/9/21", "2026/9/22", "2026/9/23",
        "2026/10/12", "2026/11/3", "2026/11/23"
    ];

    const allWeekdays = [];
    const start = new Date(2026, 0, 1);
    const end = new Date(2026, 11, 31);

    for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) {
        const dayOfWeek = d.getDay();
        const dateStr = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`;
        if (dayOfWeek !== 0 && dayOfWeek !== 6 && !holidays2026.includes(dateStr)) {
            allWeekdays.push(new Date(d));
        }
    }

    // 日付を抽選
    const targetDate = allWeekdays[Math.floor(Math.random() * allWeekdays.length)];
    const m = targetDate.getMonth() + 1;
    const d = targetDate.getDate();
    const d10 = Math.floor(d / 10);
    const d1 = d % 10;

    // パターンを抽選
    const patterns = [
        m * d10 * d1, m + d10 + d1, m + d10 * d1, m * d10 + d1, d
    ];
    let finalNumber = patterns[Math.floor(Math.random() * patterns.length)];

    // 37番までの調整
    if (finalNumber > 37) finalNumber = (finalNumber % 37) + 1;
    if (finalNumber <= 0) finalNumber = 1;

    // 表示反映
    const numBox = document.getElementById('numberAlert');
    const dateBox = document.getElementById('dateAlert');
    
    document.getElementById('resultNumber').innerText = finalNumber;
    document.getElementById('resultDate').innerText = `${m}/${d}`;

    numBox.style.display = 'block';
    dateBox.style.display = 'block';
}
