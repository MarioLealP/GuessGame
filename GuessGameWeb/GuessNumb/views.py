from django.shortcuts import render
import random
# Create your views here.


def home(request):
    return render(request, "GuessNumb/home.html")


def about(request):
    return render(request, "GuessNumb/about.html")


def BasicGame(request):
    return render(request, "GuessNumb/GuessGame.html")


def MedGame(request):
    return render(request, "GuessNumb/GuessGameV1.1.html")


def AdvGame(request):
    context = {
        "rannum": random.randint(1, 100),
        "mynum": None,
        "guess": 0,
    }
    return render(request, "GuessNumb/GuessGameAdv.html", context)
