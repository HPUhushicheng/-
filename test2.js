const fs = require('fs');
const axios = require('axios');

const FILE_PATH = 'site.txt'; // 请替换为你的txt文件路径
const API_URL = 'https://ads.telegram.org/api?hash=4cfc54aea90efe0e5c';
const HEADERS = {
  'Accept': 'application/json, text/javascript, */*; q=0.01',
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
  // 这里可以添加其他必要的请求头
};

// 读取txt文件中的网址
fs.readFile(FILE_PATH, 'utf-8', async (err, data) => {
  if (err) {
    console.error('读取文件失败:', err);
    return;
  }

  const urls = data.split('\n').map(line => line.trim()).filter(line => line.length > 0);

  for (const url of urls) {
    const username = url.split('/').pop(); // 获取用户名
    const query = encodeURIComponent(`https://t.me/${username}`); // URL编码
    const postData = `query=${query}&field=channels&method=searchChannel`;

    try {
      const response = await axios.post(API_URL, postData, { headers: HEADERS });
      
      if (response.data.ok) {
        console.log('正常频道:', response.data.channel);
      } else {
        console.log('错误信息:', response.data.error);
      }
    } catch (error) {
      console.error('请求失败:', error.message);
    }

    // 延迟请求以防速率过快
    await new Promise(resolve => setTimeout(resolve, 2500)); // 2秒延迟
  }
});
