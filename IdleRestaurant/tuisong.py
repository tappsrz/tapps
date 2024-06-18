import telebot
 
TOKEN = 'xxxx'
tb = telebot.TeleBot(TOKEN)
text = "I am the first telegram bot notification"
tb.send_message(111111, text)