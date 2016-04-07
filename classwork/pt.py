import math
def pt(n):
    t = []
    for a in range (1,n):
        for b in range (a+1, n):
            for c in range (b+1, n):
                if (math.pow(a,2) + math.pow(b,2)) == math.pow(c,2):
                    t.append([a,b,c])
    return t


print pt(5)
print pt(6)
print pt(20)

def pt2(n):
    return [(a,b,c)
        for a in range (1,n)
        for b in range (1, n)
        for c in range (1, n)
        if (math.pow(a,2) + math.pow(b,2)) == math.pow(c,2)
    ]

print pt2(6)
