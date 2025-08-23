from django.db import models

# produit/models.py
from django.db import models
from magasin.models import Magasin

class Produit(models.Model):
    nom = models.CharField(max_length=150, verbose_name="Nom du produit")
    marque = models.CharField(max_length=100, blank=True, null=True, verbose_name="Marque")
    categorie = models.CharField(max_length=100, blank=True, null=True, verbose_name="Catégorie")

    class Meta:
        verbose_name = "Produit"
        verbose_name_plural = "Produits"
        ordering = ['nom']

    def __str__(self):
        return self.nom


class PrixProduit(models.Model):
    produit = models.ForeignKey(Produit, on_delete=models.CASCADE, related_name="prix")
    magasin = models.ForeignKey(Magasin, on_delete=models.CASCADE, related_name="prix_produits")
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    date = models.DateTimeField(auto_now_add=True)

    class Meta:
        verbose_name = "Prix du produit"
        verbose_name_plural = "Prix des produits"
        unique_together = ("produit", "magasin")

    def __str__(self):
        return f"{self.produit.nom} - {self.magasin.nom} : {self.prix} FCFA"

