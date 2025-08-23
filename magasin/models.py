from django.db import models
# magasin/models.py
from django.db import models
from commune.models import Commune

class Magasin(models.Model):
    nom = models.CharField(max_length=150, verbose_name="Nom du magasin")
    adresse = models.CharField(max_length=255, blank=True, null=True, verbose_name="Adresse")
    telephone = models.CharField(max_length=20, blank=True, null=True, verbose_name="Téléphone")
    commune = models.ForeignKey(Commune, on_delete=models.CASCADE, related_name="magasins")

    class Meta:
        verbose_name = "Magasin"
        verbose_name_plural = "Magasins"
        ordering = ['nom']

    def __str__(self):
        return f"{self.nom} - {self.commune.nom}"


