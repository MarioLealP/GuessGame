from django.db import models

# Create your models here.

class Guess(models.Model):
    GuessInput = models.CharField(max_length=5)