const Discord = require('discord.js')
const bot = new Discord.Client()

bot.on('message', message => {
    if (message.content === '*invite') {
      message.reply('***invite moi dans ton serv ;P***  https://discord.com/oauth2/authorize?client_id=781558713139200021&scope=bot&permissions=2147483647')
    }
  })

  bot.on('message', message => {
    if (message.content === '*liste') {
      message.reply('LES COMMANDES : *info *duck *avatar *invite *serv AUTRE : Salut / Ca va et toi / Tu fait quoi / Jtm le bot / NARUTO ! / Hack moi stp / Hack moi /')
    }
  })

  bot.on('message', message => {
    if (message.content === '*info') {
  message.reply (' *** 乙乇ㄚㄒㄖ乂 _ 匚ㄖ爪爪ㄩ几丨ㄒㄚ j ai été crée le 26/11/2020 :P par ZeyKuu_#0001 ***')

    }
  })

  bot.on('message', message => {
    if (message.content === 'Salut') {
    message.react('✌🏻');
    message.reply('Saluuut ! ;P')
    message.reply('Ca va ??? :P')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Oui et toi') {
      message.reply('Oue trkl mon frère :P')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Tu fait quoi') {
      message.reply('Moi... Je Hack juste ton compte :P')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Jtm le bot') {
      message.reply('t habite ou ?? :P')
    }
  })

  bot.on('message', message => {
    if (message.content === 'NARUTO !') {
      message.reply('SASUKE !!!!!')
    }
  }) 

  bot.on('message', message => {
    if (message.content === 'Hack moi stp') {
      message.reply('ok ... ton mot de passe ces eergrtTREez5ezfzeYTR58z4******* :P')
    }
  })

  bot.on('message', message => {
    if (message.content === 'Hack moi') {
      message.reply('ok Maiiis le stp apres le hack moi :P ')
    }
  })    

  bot.on('message', message => {
    if (message.content === '*duck') {
      message.reply(':V')
    }
  })    

//AVATAR VVVVVVVVVV

bot.on('message', message => {
    if (message.content === '*avatar') {
  message.reply(message.author.displayAvatarURL());
    }
  })

bot.on('message', msg => {
    if (msg.content === '*serv') {
  msg.reply('***VIEN DANS LE SERV !!!***https://discord.gg/TB9cchbfNR')
    }
  })

//MODERATION VVVVVVVVVVV

  bot.on('read  y', function () {
  console.log("Je suis connecté !!!!")
})

bot.login('NzgxNTU4NzEzMTM5MjAwMDIx.X7_ZRQ.BAPygFVZ63IjrnQydqLISQjigeg')
