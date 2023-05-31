const axios = require('axios');

let config = {};

async function getMycardInfo(username) {
    let result = {
        name: "",
        arena_rank: 0,
        DP: 0,
        athletic_wl_ratio: 0,
        athletic_win: 0,
        athletic_lose: 0
    };

    try {
        result.name = username;
        username = encodeURI(username);
        let res = await axios.get(
            `https://sapi.moecube.com:444/ygopro/arena/user?username=${username}`,
            config
        );
        let userInfo = res.data;
        result.arena_rank = userInfo.arena_rank;
        result.DP = userInfo.pt;
        result.athletic_wl_ratio = userInfo.athletic_wl_ratio;
        result.athletic_win = userInfo.athletic_win;
        result.athletic_lose = userInfo.athletic_lose;

    } catch (e) {
        console.error(e);
    }
    return result;
}

module.exports = getMycardInfo;
