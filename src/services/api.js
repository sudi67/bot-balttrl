const db = {
  "bots": [
    {
      "id": "109",
      "name": "hjk-40",
      "health": 75,
      "damage": 84,
      "armor": 31,
      "bot_class": "Witch",
      "catchphrase": "11010100110000100001110001100000010111101000001100",
      "avatar_url": "https://robohash.org/quirationerem.png?size=300x300&set=set1"
    },
    {
      "id": "111",
      "name": "ya-81",
      "health": 56,
      "damage": 22,
      "armor": 92,
      "bot_class": "Defender",
      "catchphrase": "100000011001011111110100110001010101100111001100",
      "avatar_url": "https://robohash.org/similiquereprehenderitet.png?size=300x300&set=set1"
    }
  ],
  "army": []
};

let mockBots = db.bots;
let mockArmy = db.army;

export const fetchBots = async () => {
  return mockBots;
};

export const fetchArmy = async () => {
  return mockArmy;
};

export const deleteBot = async (botId) => {
  const botIndex = mockBots.findIndex(bot => bot.id === botId);
  if (botIndex !== -1) {
    mockBots.splice(botIndex, 1);
  }
  mockArmy = mockArmy.filter(bot => bot.id !== botId);
  return true;
};

export const addBotToArmy = async (bot) => {
  if (mockArmy.some(b => b.id === bot.id)) {
    throw new Error("Bot already in army");
  }
  mockArmy.push(bot);
  return bot;
};

export const removeBotFromArmy = async (botId) => {
  mockArmy = mockArmy.filter(bot => bot.id !== botId);
  return true;
};
