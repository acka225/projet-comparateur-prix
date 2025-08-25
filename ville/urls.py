
from django.urls import path
from . import views
urlpatterns = [
    path("", views.ville_list, name="ville_list"),
    path("<int:pk>/", views.ville_detail, name="ville_detail"),
]
