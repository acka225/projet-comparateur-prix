from django.shortcuts import render, get_object_or_404
from .models import Magasin

def magasins_list(request):
    magasins = Magasin.objects.all()
    return render(request, "magasin/magasin_list.html", {"magasins": magasins})

def magasin_detail(request, pk):
    magasin = get_object_or_404(Magasin, pk=pk)
    return render(request, "magasin/magasin_detail.html", {"magasin": magasin})
