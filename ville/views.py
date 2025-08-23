from django.shortcuts import render
from django.shortcuts import render, get_object_or_404
from .models import Ville

def ville_list(request):
    villes = Ville.objects.all()
    return render(request, 'ville/ville_list.html', {'villes': villes})

def ville_detail(request, pk):
    ville = get_object_or_404(Ville, pk=pk)
    return render(request, 'ville/ville_detail.html', {'ville': ville})



