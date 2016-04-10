import time

def tiempo(x):
    return lambda: time.time()

def fxName(x):
    return lambda: x.func_name

@tiempo
#tiempo would be applied but not fxName
@fxName
def double():
    return 22

test = double()
print test
