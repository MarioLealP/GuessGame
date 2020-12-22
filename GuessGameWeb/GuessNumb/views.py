from django.shortcuts import render
import random
# Create your views here.

rannum = random.randint(1, 100)
mynum = None,
guess = 0,
context = {}
context['guess'] = 0

def home(request):
    return render(request, "GuessNumb/home.html")


def about(request):
    return render(request, "GuessNumb/about.html")


def BasicGame(request):
    return render(request, "GuessNumb/GuessGame.html")


def MedGame(request):
    return render(request, "GuessNumb/GuessGameV1.1.html")

def confirm(request):
    global guess 
    global mynum 
    global context

    

    mynum = int(request.GET['InpNumb'])

    guess = guess + 1

    if guess > 9:
        result = "Out of attempts!"

    elif mynum > rannum:
        result = "Input number is bigger then the secret number!"
    elif mynum < rannum:
        result = "Input number is smaller then the secret number!"
    else:
        result = "You got the right number!"


    context['result'] = result
    context['guess'] = guess

    return render(request, "GuessNumb/GuessGameAdv.html", context)

def AdvGame(request):
    global rannum
    global context
    


    context['RandNumb'] = rannum
    
    return render(request, "GuessNumb/GuessGameAdv.html", context)


def ResetGame(request):
    global context
    global rannum
    global guess
    guess = 0
    context['guess'] = 0
    context['result'] = ""
    rannum = random.randint(1, 100)
    

    context['RandNumb'] = rannum
    return render(request, "GuessNumb/GuessGameAdv.html", context)
