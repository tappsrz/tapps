// 初始化Telegram Web App
Telegram.WebApp.ready();

// 获取并显示用户ID和start参数
const userId = Telegram.WebApp.initDataUnsafe.user ? Telegram.WebApp.initDataUnsafe.user.id : 'N/A';
const startParam = Telegram.WebApp.initDataUnsafe.start_param || 'N/A';

// 更新页面内容
document.getElementById('user-id').textContent = userId;
document.getElementById('start-param').textContent = startParam;

// 分享按钮点击事件
document.getElementById('share-button').addEventListener('click', function() {
    Telegram.WebApp.openTelegramLink(`https://t.me/share/url?url=https://your-mini-app-url&text=Check+out+this+mini+app!`);
});

// 开发者工具 - 打印调试信息
const debugLog = document.getElementById('debug-log');
function logDebugInfo(message) {
    const time = new Date().toLocaleTimeString();
    debugLog.textContent += `[${time}] ${message}\n`;
}

logDebugInfo(`User ID: ${userId}`);
logDebugInfo(`Start Parameter: ${startParam}`);

// 显示Telegram Web App初始化数据
logDebugInfo(`initDataUnsafe: ${JSON.stringify(Telegram.WebApp.initDataUnsafe, null, 2)}`);
