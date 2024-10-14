const axios = require('axios');

const data = new URLSearchParams();
data.append('query', 'https://t.me/huanqiu_xx');
data.append('field', 'channels');
data.append('method', 'searchChannel');

axios({
  method: 'post',
  url: 'https://ads.telegram.org/api?hash=4cfc54aea90efe0e5c',
  headers: {
    'accept': 'application/json, text/javascript, */*; q=0.01',
    'accept-language': 'zh-CN,zh;q=0.9',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    'cookie': 'stel_ssid=fc4536ee2ce158e53c_13167942688048228180; stel_dt=-480; stel_token=b37df83929a41f66d470b22e60352e2cb37df82fb37dfc5082da369b2750e31d392cd; stel_adowner=QKHiT7xLnR555gHQJMwOH1ATr-U2p7fYKxs4tv335-J_HO4LKko2wQalTfjtG92L',
    'origin': 'https://ads.telegram.org',
    'priority': 'u=1, i',
    'referer': 'https://ads.telegram.org/account/ad/new',
    'sec-ch-ua': '"Chromium";v="130", "Google Chrome";v="130", "Not?A_Brand";v="99"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Windows"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest'
  },
  data: data.toString()
})
.then(response => {
  console.log(response.data);
})
.catch(error => {
  console.error('Error:', error);
});
