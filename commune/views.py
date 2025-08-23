
from django.shortcuts import render, get_object_or_404
from .models import Commune

def commune_list(request):
    communes = Commune.objects.all()
    return render(request, 'commune/commune_list.html', {'communes': communes})

def commune_detail(request, pk):
    commune = get_object_or_404(Commune, pk=pk)
    return render(request, 'commune/commune_detail.html', {'commune': commune})

# Create your views here.
