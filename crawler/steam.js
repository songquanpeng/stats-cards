const axios = require('axios');
const { mobileConfig: axiosConfig } = require('../common/utils');

let steam_id = process.env['STEAM_ID'];
let api_key = process.env['STEAM_API_TOKEN']

// https://developer.valvesoftware.com/wiki/Steam_Web_API#GetUserStatsForGame_.28v0002.29
async function getSteamInfo() {
  let result = {
    name: 'username',
    last_logoff: 0, // The last time the user was online, in unix time.
    friends: 0,
    game_count: 0,
    recent_played_game: ''
  };
  try {
    let res = await axios.get(
      `https://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=${api_key}&steamid=${steam_id}&format=json`,
      axiosConfig
    );
    result.recent_played_game = res.data.response.total_count >0 ? res.data.response.games[0].name : "";
    res = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${api_key}&steamids=${steam_id}`,
      axiosConfig
    );
    result.name = res.data.response.players[0].personaname
    const date = new Date(res.data.response.players[0].lastlogoff * 1000).toLocaleString()
    result.last_logoff = date
    res = await axios.get(
      `https://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=${api_key}&steamid=${steam_id}&relationship=friend`,
      axiosConfig
    );
    result.friends = res.data.friendslist.friends.length
    res = await axios.get(
      `https://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${api_key}&steamid=${steam_id}&format=json`,
      axiosConfig
    );
    result.game_count = res.data.response.game_count
  } catch (e) {
    console.error(e);
  }
  return result;
}

module.exports = getSteamInfo;
