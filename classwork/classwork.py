def inc(x):
    return x+1

def dec(x):
    return x-1

f=inc
#print f(5)
flist=[inc,dec]
#print flist[0](5)

def makeAdder(n):
    def inner(x):
        return x+n
    return inner

add3 = makeAdder(3)
add5 = makeAdder(5)
#print add3(10)
#print add5(10)

def makeCounter():
    count=[0]
    def inc():
        count[0]=count[0]+1
    def dec():
        count[0]=count[0]-1
    def reset():
        count[0]=0
    def get():
        return count[0]
    return {'inc':inc, 'dec':dec, 'reset':reset, 'get':get}

#print makeCounter()
c1 = makeCounter()
c2 = makeCounter()

c1['inc']()
c1['inc']()
c1['inc']()
#print c1['get']()

c2['inc']()
#print c2['get']()

c1['reset']()
#print c1['get']()

import random
def getName():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)
#print getName()

def dble(f):
    name=f()
    return name*2

#print dble(getName)

getName = dble(getName)
#print getName

def doubler(f):
    def inner():
        name=f()
        return name+name
    return inner

@doubler
def getName():
    names = ['tom', 'sue', 'harry', 'lisa', 'sarah', 'horatio']
    return random.choice(names)
print getName
