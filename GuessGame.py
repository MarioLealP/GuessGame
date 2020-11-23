import random
ranint = random.randint(1, 100)
mynum = None
while mynum is not ranint:
    print("Introduza o numero:")
    try:
        mynum = input()
        mynum = int(mynum)
    except ValueError:
        print("Não foi introduzido um numero")
    else:
        if mynum > ranint:
            print("O numero introduzido é maior que o numero certo")
        elif mynum < ranint:
            print("O numero introduzido é menor que o numero certo")
        else:
            break
print("O numero esta certo")
