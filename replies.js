
const noClient = (ctx) => {
    ctx.reply('Отсутствуют данные о клиенте.\n👉 Прикрепите фото InBody и в качестве подписи используйте имя и фамилию клиента.');
};

const noPhoto = (ctx) => {
    ctx.reply('Отсутствует фото InBody. Прикрепите фото и в качестве подписи используйте имя и фамилию клиента.');
};

module.exports = { noClient, noPhoto };
