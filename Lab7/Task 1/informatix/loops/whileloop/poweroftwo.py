n = int(input())
i = 0

while n >= 2 ** i:
    print(2 ** i, end=" ")
    i += 1