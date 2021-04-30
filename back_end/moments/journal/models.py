from django.db import models

# Create your models here.

class Prompt(models.Model):
    prompt = models.CharField(max_length=100)

    def __str__(self):
        return self.prompt