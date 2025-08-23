from django.db import models
# commune/models.py
from django.db import models
from ville.models import Ville

class Commune(models.Model):
    nom = models.CharField(max_length=100, verbose_name="Nom de la commune")
    ville = models.ForeignKey(Ville, on_delete=models.CASCADE, related_name="communes")

    class Meta:
        verbose_name = "Commune"
        verbose_name_plural = "Communes"
        unique_together = ('nom', 'ville')  # éviter doublons
        ordering = ['nom']

    def __str__(self):
        return f"{self.nom} ({self.ville.nom})"


