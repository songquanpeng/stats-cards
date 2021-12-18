const axios = require('axios');
const FormData = require('form-data');
const processObject = require('../common/netease_music');


async function getNeteaseMusicInfo(id) {
  let result = {
    name: 'id',
    description: '',
    follower_count: 0,
    answer_count: 0,
    voteup_count: 0,
    thanked_count: 0,
    question_count: 0,
    articles_count: 0
  };
  try {
    let data = {
      csrf_token: '',
      limit: '1000',
      offset: '0',
      total: 'true',
      type: '0',
      uid: id
    };
    let processData = processObject(data);
    let formData = new FormData();
    formData.append('params', processData.params);
    formData.append('encSecKey', processData.encSecKey);
    let res = await axios({
      method: 'post',
      url: 'https://music.163.com/weapi/v1/play/record?csrf_token=',
      data: formData,
      headers: {
        'accept': '*/*',
        'accept-language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7',
        'cache-control': 'no-cache',
        'content-type': 'application/x-www-form-urlencoded',
        'nm-gcore-status': '1',
        'pragma': 'no-cache',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="96", "Google Chrome";v="96"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Windows"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        "cookie": "_ntes_nuid=60cf195bd40aa7ef5c29980a1f9cba9d; _iuqxldmzr_=32; NMTID=00OQgc4WDXUkwOtPU_1jQ8C-9wOvKIAAAF3Q6XZEw; WM_TID=ZJTYsRRA0VJBQVERFFZ7JDhIWOFQkvGL; ntes_kaola_ad=1; JSESSIONID-WYYY=0io1w5FWucCqUrDdsjrXhMEajrf82GzxoBCKWd%5C%2B9ZvENkukm%5CmwR16%2FNmfjPHTqI9UBVt4cFTNdnSVl1FhYu99DoVvPcTFO%2B3cx93%2FPpqSlKdE8O%2B6gpnOnPe6cpvyR5Y0%2BgFoolw97%5CrDXO%2BVgmThjwYdxfwVtn8SGUV%2BuXxYK73n%2F%3A1639839510760; _ntes_nnid=60cf195bd40aa7ef5c29980a1f9cba9d,1639837710822; WEVNSM=1.0.0; WNMCID=zudfxk.1639837711791.01.0; WM_NI=4H1NMYEGTDvWYHzy8D41IUklJUt%2BSZU6RkC3D07auGMy2aXmGl%2BeThJXrHS%2BdniIBWWmy89UrsAkbfHCjA%2FRLP6P0ChJtrOPQVWUBiPgVSpB6sGUdELUau1Oi1GvqaA2YUs%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6ee87b579bcbeba8ae443859a8bb7c14e979f9fbbaa65b38ca2d0fb41b08eaa8eb72af0fea7c3b92af898ffafd05387999ca5f55d9b98b69abb50f8ef87b6ea688a8bbcccd25297ea9e8cc23988f0f982f84d8fa7fe82db6785b4e586d7648a88bea9d221a8b2a7aac15d95b3b7d9bc5fb2ad8f8ce16e8c9da6a2ae5a9090fab1b349ac96bc93ce5c938a99b6c16394b99ab4f34af6ad89b6e74f908baf96b445abef8997f46b83ee97b6f237e2a3",
        'Referer': 'https://music.163.com/user/home?id=506085251',
        'Referrer-Policy': 'strict-origin-when-cross-origin'
      }
    });
    console.log(res.data);
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getNeteaseMusicInfo;
