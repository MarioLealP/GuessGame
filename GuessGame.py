import random
ranint = random.randint(1, 100)
mynum = None
guess = 0
print(ranint)
while mynum is not ranint:
    print("Introduza o numero:")
    try:
        mynum = input()
        mynum = int(mynum)
    except ValueError:
        print("Não foi introduzido um numero")
    else:
        if guess > 10:
            print("Não tem mais tentativas")
            break
        elif mynum < ranint:
            print("O numero introduzido é menor que o numero certo")
        elif mynum > ranint:
            print("O numero introduzido é maior que o numero certo")
        else:
            print("O numero esta certo")
    guess += 1
