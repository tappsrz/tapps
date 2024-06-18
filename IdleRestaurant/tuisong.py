import telebot
 
TOKEN = '7322520825:AAF_jIBVocTHXl-vEfr8Z9hccFcbOpLO4Tk'
tb = telebot.TeleBot(TOKEN)
text = "I am the first telegram bot notification"
tb.send_message(1633684952, text)