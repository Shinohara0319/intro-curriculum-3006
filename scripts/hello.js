'use strict';
module.exports = (robot) => {
  robot.hear(/hello>/i, (msg) => {
    const username = msg.message.user.name;
    msg.send('Hello, ' + username);
  });
  robot.hear(/lot>/i, (mes) => {
    const username = mes.message.user.name;
    const lots = ['大吉', '吉', '中吉', '末吉', '凶'];
    const lot = lots[Math.floor(Math.random() * lots.length)];
    mes.send(lot + ',' + username);
  });
};

