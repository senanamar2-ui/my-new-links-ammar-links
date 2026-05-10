document.getElementById('fileInput').addEventListener('change', function() {
    let statusText = document.getElementById('status-text');
    let fill = document.getElementById('progress-fill');
    
    statusText.innerText = "جاري تحليل التناقضات الإحصائية...";
    
    let width = 0;
    let interval = setInterval(() => {
        if (width >= 100) {
            clearInterval(interval);
            statusText.innerText = "✅ اكتملت المعالجة: عكس الصحيح صحيح.";
        } else {
            width++;
            fill.style.width = width + '%';
        }
    }, 20);
});
