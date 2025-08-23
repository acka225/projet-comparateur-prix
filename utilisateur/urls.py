# utilisateur/urls.py
from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.utilisateur_list, name='utilisateur_list'),
    path('<int:pk>/', views.utilisateur_detail, name='utilisateur_detail'),

    # Authentification Django intégrée
    path('login/', auth_views.LoginView.as_view(template_name='utilisateur/login.html'), name='login'),
    path('logout/', auth_views.LogoutView.as_view(), name='logout'),
    path('password_change/', auth_views.PasswordChangeView.as_view(template_name='utilisateur/password_change.html'), name='password_change'),
]
