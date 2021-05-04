from django.db import models
# from django.contrib.auth.models import User
from django.contrib.auth import get_user_model

# Create your models here.

User = get_user_model()

def moment_photo_upload(instance, filename):
    return f"user_{instance.owner.id}/moments/{filename}"


class Prompt(models.Model):
    prompt = models.CharField(max_length=200)

    def __str__(self):
        return self.prompt

class Moment(models.Model):
    entry_date = models.DateField(auto_now_add=True)
    entry_title = models.CharField(max_length=100)
    moment_entry = models.TextField()
    moment_photo = models.ImageField(upload_to=moment_photo_upload, blank=True)
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name="moments")
    prompt = models.ForeignKey("Prompt", on_delete=models.RESTRICT, related_name="moments", blank=True, null=True)

    def __str__(self):
        return f"({self.pk}) {self.owner.username} - {self.entry_title}"
