def union(a,b):
    return [a[i]
    for i in range(0,len(a))
    ] + [b[i]
         for i in range(0,len(b))
         if b[i] not in a
        ]

f = [2,3,7,5]
g = [6,3,1]
print union(f,g)

def intersection(a,b):
    return [a[i]
    for i in range(0,len(a))
    if a[i] in b
    ]

print intersection(f,g)

def difference(a,b):
    return [a[i]
    for i in range(0,len(a))
    if a[i] not in b
    ]
print difference(g,g)
