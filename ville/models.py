from django.db import models
# ville/models.py
from django.db import models

class Ville(models.Model):
    nom = models.CharField(max_length=100, unique=True, verbose_name="Nom de la ville")
    pays = models.CharField(max_length=100, default="Côte d'Ivoire", verbose_name="Pays")

    class Meta:
        verbose_name = "Ville"
        verbose_name_plural = "Villes"
        ordering = ['nom']

    def __str__(self):
        return f"{self.nom} ({self.pays})"

# Create your models here.
