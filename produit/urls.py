# produit/urls.py
from django.urls import path
from . import views


urlpatterns = [
    path("", views.produit_list, name="produit_list"),
    path("<int:pk>/", views.produit_detail, name="produit_detail"),
]
