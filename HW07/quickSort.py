import random

l = [1829,23,4,100,2,7,3]

def quickSort(list):
    if len(list)==1 or len(list)==0:
        return list
    else:
        pivot = random.randint(0,len(list)-1)
        a = [list[i]
            for i in range(0,len(list))
            if list[i]<=list[pivot]
        ]
        b = [list[i]
            for i in range(0,len(list))
            if list[i]>list[pivot]
        ]
        c = quickSort(a) + quickSort(b)
        return c

print quickSort(l)
