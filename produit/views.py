from django.shortcuts import render, get_object_or_404
from .models import Produit

def produit_list(request):
    produits = Produit.objects.all()
    return render(request, "produit/produit_list.html", {"produits": produits})

def produit_detail(request, pk):
    produit = get_object_or_404(Produit, pk=pk)
    return render(request, "produit/produit_detail.html", {"produit": produit})
