nums = []
UC_Letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
p = "myNoobPass1234"

def firstTry():
    for x in range(8):
        nums.append(x)
    print nums

def secondTry():
    for x in range(8):
        nums.append(x**2)
    print nums

def thirdTry():
    nums = [x for x in range(8)]
    print nums

def fourthTry():
    nums = [x*x for x in range(8)]
    print nums
    #print [0, 1, 4, 9, 16, 25, 36, 49]

def fifthTry():
    nums = [(x, x*x, x*x*x) for x in range(8)]
    print nums
    #prints [(0, 0, 0), (1, 1, 1), (2, 4, 8), (3, 9, 27), (4, 16, 64), (5, 25, 125), (6, 36, 216), (7, 49, 343)]

def sixthTry():
    nums = [x for x in p]
    print nums
    #prints ['m', 'y', 'N', 'o', 'o', 'b', 'P', 'a', 's', 's', '1', '2', '3', '4']

def seventhTry():
    nums = [x for x in "1234"]
    print nums
    #prints ['1', '2', '3', '4']

def eighthTry():
    nums = [x for x in p if x in UC_Letters]
    print nums
    #prints ['N', 'P']

def ninthTry():
    nums = [1 for x in p if x in UC_Letters]
    print nums
    #prints [1, 1]

def tenthTry():
    nums =  [ 1 if x in UC_Letters else 0 for x in p ]
    print nums
    #prints 


numbers = "1234567890"
symbols = ".?!&#,;:-_*"
def passwordCheck():
    nums = [1 if x in UC_Letters else 2 if x in numbers else 0 for x in password]
    if 1 in nums and 2 in nums and 0 in nums:
        print "yes"
    else:
        print "no"

def passwordStrength(password):
    nums = [1 if x in UC_Letters else 2 if x in numbers else 3 if x in symbols else 0 for x in password]
    #print nums
    if 1 in nums and 2 in nums and 0 in nums and 3 in nums:
        valid = True
    else:
        valid = False
    if valid:
        if len(nums)<10 or sum(nums)<10:
            print sum(nums)
        else:
            print sum(nums)/(len(nums)/10)

p = "Bunnies!3"
passwordStrength(p)
