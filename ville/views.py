from django.shortcuts import render
from .models import Ville
from django.shortcuts import render, get_object_or_404

def ville_list(request):
    villes = Ville.objects.all()
    return render(request, "ville/ville_list.html", {"villes": villes})

def ville_detail(request, pk):
    ville = get_object_or_404(Ville, pk=pk)
    return render(request, "ville/ville_detail.html", {"ville": ville})