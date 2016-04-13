import time

def timed(x):
    t = time.time()
    return lambda *arg: str(x(*arg)) + "\n" + "Time to run is: " + str(time.time() - t)

def named(x):
    return lambda *arg: x.func_name  + str(arg) + " yields " + str(x(*arg))

@timed
@named
def authenticate(fn,ln):
    if fn == "Felicity" and ln == "Ng":
        return True
    else:
        return False
