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
    },
    {
      "id": "200",
      "name": "ZX-01",
      "health": 80,
      "damage": 70,
      "armor": 40,
      "bot_class": "Assault",
      "catchphrase": "10101010101010101010101010101010",
      "avatar_url": "https://robohash.org/assaultbot.png?size=300x300&set=set1"
    },
    {
      "id": "201",
      "name": "RX-02",
      "health": 65,
      "damage": 85,
      "armor": 30,
      "bot_class": "Defender",
      "catchphrase": "11110000111100001111000011110000",
      "avatar_url": "https://robohash.org/defenderbot.png?size=300x300&set=set1"
    },
    {
      "id": "202",
      "name": "MX-03",
      "health": 90,
      "damage": 60,
      "armor": 50,
      "bot_class": "Medic",
      "catchphrase": "00001111000011110000111100001111",
      "avatar_url": "https://robohash.org/medicbot.png?size=300x300&set=set1"
    },
    {
      "id": "203",
      "name": "TX-04",
      "health": 70,
      "damage": 75,
      "armor": 35,
      "bot_class": "Support",
      "catchphrase": "10101010111100001111000011110000",
      "avatar_url": "https://robohash.org/supportbot.png?size=300x300&set=set1"
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
