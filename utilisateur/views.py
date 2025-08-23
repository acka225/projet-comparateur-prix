from django.shortcuts import render, get_object_or_404
from .models import Utilisateur

def utilisateur_list(request):
    utilisateurs = Utilisateur.objects.all()
    return render(request, 'utilisateur/utilisateur_list.html', {'utilisateurs': utilisateurs})

def utilisateur_detail(request, pk):
    utilisateur = get_object_or_404(Utilisateur, pk=pk)
    return render(request, 'utilisateur/utilisateur_detail.html', {'utilisateur': utilisateur})
