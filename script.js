
function calculate() {
    let voltage = parseFloat(document.getElementById('voltage').value);
    let rpm = parseFloat(document.getElementById('rpm').value);
    if (!voltage || !rpm) {
        document.getElementById('result').innerHTML = '<span class="en">Please enter valid values.</span><span class="zh">請輸入有效數值。</span>';
        return;
    }
    let power = (voltage * rpm * 0.01).toFixed(2); // example calc
    document.getElementById('result').innerHTML = '<span class="en">Estimated Power:</span><span class="zh">估算功率：</span> ' + power + ' W';
}

document.getElementById('langSelect').addEventListener('change', function() {
    let lang = this.value;
    let enEls = document.querySelectorAll('.en');
    let zhEls = document.querySelectorAll('.zh');
    enEls.forEach(e => e.style.display = lang === 'en' ? 'inline' : 'none');
    zhEls.forEach(e => e.style.display = lang === 'zh' ? 'inline' : 'none');
});
