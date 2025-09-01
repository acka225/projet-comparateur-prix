# magasin/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path("", views.magasins_list, name="magasin_list"),
    path("<int:pk>/", views.magasin_detail, name="magasin_detail"),
]
