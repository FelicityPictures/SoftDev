import time

def inWhatTime(x):
    t = time.time()
    return lambda *arg: str(x(*arg)) + "\n" + "Time to run is: " + str(time.time() - t)

memo={}
@inWhatTime
def memoize(n):
    if n not in memo:
        memo[n] = fib(n)
    return memo[n]

def fib(n):
    if n == 0:
        return 0
    elif n==1:
        return 1
    else:
        return fib(n-1) + fib(n-2)

print "fib(6): " + str(memoize(6))
print "fib(2): " + str(memoize(2))
print "fib(2): " + str(memoize(2))
print "fib(2): " + str(memoize(3))
