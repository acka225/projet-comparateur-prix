# commune/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.commune_list, name='commune_list'),
    path('<int:pk>/', views.commune_detail, name='commune_detail'),
]
