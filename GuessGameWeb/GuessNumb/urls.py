from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="game-home"),
    path('about/', views.about, name="game-about"),
    path('BasicGame/', views.BasicGame, name="Basic-Game"),
    path('MedGame/', views.MedGame, name="Med-Game"),
    path('AdvGame/', views.AdvGame, name="Adv-Game"),
]
