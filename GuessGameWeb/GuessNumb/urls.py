from django.urls import path
from . import views


urlpatterns = [
    path('', views.home, name="game-home"),
    path('About/', views.about, name="game-about"),
    path('LoginGame/', views.logingame, name="Login-Game"),
    path('MedGame/', views.MedGame, name="Med-Game"),
    path('AdvGame/', views.AdvGame, name="Adv-Game"),
    path('AdvGame/confirm', views.confirm, name="Adv-Game"),
    path('AdvGame/ResetGame', views.ResetGame),
    path("SpaceInv/", views.SpaceInv, name="SpaveInv"),
]
