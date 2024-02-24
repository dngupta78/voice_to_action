import re
import random
class RuleBot:
    negative_responses = {'no','nope','no chance','sorry','wrong','nah'}
    exit_commands = {'quit','exit','bye','goodbye','later'}
    random_questions = {
        'Why are you here?',"What is your name","What fruit can I have today?","How are you feeling today","Is there anything pain?"
        ,"Are u okay?","At what did you had lunch?"}
    def __init__(self):
       self.aliennable= {'describe_your_intent' :r' .*\s*your intent.*',
                           'answer_why_intent':r'why\sare.*',
                           'about_the_hospital':r' .*\s*hospital.*'}
       
    def greet(self):
        self.name = input("what is your name?\n")
        will_help = input(
            f'Hi {self.name},I am bot.Will you help me learn more about your day?\n')
        if will_help in self.negative_responses:
           print("okay,have a nice day!")
        return
        self.chat()
 
    def make_exit(self,reply):
         for command in self.exit_commands:
             if reply == command:
                print("okay,have a nice day!")
                return True
    def chat(self):
          reply=input(random.choice(self.random_questions)).lower()
          while not self.make_exit(reply):
            reply=input(self.match_reply(reply))
 
    def match_reply(self,reply):
        for key,value in self.aliennable.items():
            intent=key
            regex_pattern = value
            found_match=re.match(regex_pattern,reply)
            if found_match and intent == 'describe_your_intent':
               return self.describe_your_intent()
            elif found_match and intent == 'answer_why_intent':
               return self.answer_why_intent()
            elif  found_match and intent == 'about_the_hospital':
               return self.about_the_hospital()
            if not found_match:
                return self.no_match_intent()
           
    def describe_your_intent(self):
        responses = ("My intent is to take care of yourself and your health.\n",
                     "I will be helping you in this.\n")
        return random.choices(responses)
    def answer_why_intent(self):
        responses = ("I am here to collect the data and recommend the tips.\n",
                     "I came to talk to you.\n","I heard the food which the management will provide is good.\n")
        return random.choices(responses)
    def about_the_hospital(self):
        responses = ("I heard this hospital will provide you the best mdeical treatment.\n",
                     "This hospital consists of the best doctors in the country for particular specializations.\n",
                     "The management is very helpful in this hospital.\n")
        return random.choices(responses)
    def no_match_intent(self):
        response = ("Please tell me more.\n",
                    "Tell me more.\n",
                    "I see please elaborate.\n",
                    "Interesting,Can you tell me more.\n",
                    "How do you think I feel when you say that.\n")                
        return random.choices(response)
   
AlienBot = RuleBot()
AlienBot.greet()
# Python code to store the above conversation in mydatabase collection in mongo database
import pymongo
from pymongo import MongoClient
client = MongoClient('localhost', 27017)
db = client.mydatabase
collection = db.mycollection
# Insert the above conversation in mydatabase collection in mongo database
collection.insert_one({'conversation': AlienBot.greet()})
collection.insert_one({'conversation': AlienBot.chat()})
collection.insert_one({'conversation': AlienBot.make_exit(reply)})
collection.insert_one({'conversation': AlienBot.match_reply(reply)})
collection.insert_one({'conversation': AlienBot.describe_your_intent()})
collection.insert_one({'conversation': AlienBot.answer_why_intent()})
collection.insert_one({'conversation': AlienBot.about_the_hospital()})
collection.insert_one({'conversation': AlienBot.no_match_intent()})