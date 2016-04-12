"""
def make_bold(fn):
    return lambda : "<b>" + fn() + "</b>"

def make_italic(fn):
    return lambda : "<i>" + fn() + "</i>"

@make_bold
@make_italic
def hello():
    return "hello world"

helloHTML = hello()

print helloHTML
"""
#-----------------------------------------------------------#
import time

def inWhatTime(x):
    t = time.time()
    return lambda *arg: x(*arg) + "\n" + "Time to run is: " + str(time.time() - t)

def whatIsThisFunction(x):
    return lambda *arg: x.func_name  + str(arg) + " yields " + x(*arg)

@inWhatTime
@whatIsThisFunction
def double(string):
    return string*2

test = double("meow")
print test
