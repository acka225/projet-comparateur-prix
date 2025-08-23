# utilisateur/models.py
from django.contrib.auth.models import AbstractUser
from django.db import models
from ville.models import Ville

class Utilisateur(AbstractUser):
    telephone = models.CharField(max_length=20, blank=True, null=True)
    ville = models.ForeignKey(Ville, on_delete=models.SET_NULL, blank=True, null=True)

    class Meta:
        verbose_name = "Utilisateur"
        verbose_name_plural = "Utilisateurs"

    def __str__(self):
        return self.username
