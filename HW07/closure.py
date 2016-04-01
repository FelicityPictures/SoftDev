def inc(x):
    return x + 1

f = inc

#print f(10)


def h(x):
    return lambda y: x + y
#h(1)
#h(2)
#print h(1)(3)
#print h(2)(5)


def f(x):
    def g(y):
        return x + y
    return g
#print f(1)(1)

a=f(2)
b=h(1)
print a(2)
print b

def repeat(x):
    return lambda y: x * y

r1=repeat("hello")
r2=repeat("goodbye")

print repeat("cool")(3)
print r1(2)
print r2(2)
