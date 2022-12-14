const mobileConfig = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.104 Mobile Safari/537.36',
  },
};
const desktopConfig = {
  headers: {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.101 Safari/537.36',
  },
};

const processData = (data) => {
  for (let attr in data) {
    if (typeof data[attr] === 'number') {
      let num = data[attr];
      let numStr = num;
      if (num >= 1000000) {
        numStr = (num / 1000000).toFixed(1).toString();
        if (numStr.endsWith('.0')) {
          numStr = numStr.slice(0, -2);
        }
        numStr += 'M';
      } else if (num >= 10000) {
        numStr = (num / 1000).toFixed(1).toString();
        if (numStr.endsWith('.0')) {
          numStr = numStr.slice(0, -2);
        }
        numStr += 'k';
      }
      data[attr] = numStr;
    }
  }
};

const isEndsWithASCII = (str) => {
  if (str.length === 0) return false;
  return str.charCodeAt(str.length - 1) <= 127;
};

module.exports = {
  mobileConfig,
  desktopConfig,
  processData,
  isEndsWithASCII,
};
