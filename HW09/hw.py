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
#-----------------------------------------------------------#
import time

def track(x):
    t = time.time()
    def inner(*arg):
        return x.func_name + "(" +  x(*arg) + ")"
    runtime = time.time()-t
    return inner + "time: " + runtime

@track
def double(string):
    return string*2

test = double()
print test
