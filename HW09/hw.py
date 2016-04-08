import time

def tiempo(x):
    return lambda: time.time()

def fxName(x):
    return lambda: x.func_name

@tiempo
@fxName
def double():
    return str(91*2)

test = double()
print test
