from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    path('villes/', include('ville.urls')),
    path('communes/', include('commune.urls')),
    path('magasins/', include('magasin.urls')),
    path('produits/', include('produit.urls')),
    path('utilisateurs/', include('utilisateur.urls')),

]