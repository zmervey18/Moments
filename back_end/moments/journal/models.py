from django.db import models
from django.contrib.auth.models import User
# Create your models here.

def moment_photo_upload(instance, filename):
    return f"user_{instance.owner.user.id}/moments/{filename}"

def profile_photo_upload(instance, filename):
    return f"user_{instance.user.id}/{filename}"



class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_photo = models.ImageField(upload_to=profile_photo_upload, default="defaults/profile-placeholder.jpg")
    
    def __str__(self):
        return self.user.username

class Prompt(models.Model):
    prompt = models.CharField(max_length=200)

    def __str__(self):
        return self.prompt

class Moment(models.Model):
    entry_date = models.DateField(auto_now_add=True)
    entry_title = models.CharField(max_length=100)
    moment_entry = models.TextField()
    moment_photo = models.ImageField(upload_to=moment_photo_upload, blank=True)
    owner = models.ForeignKey("Profile", on_delete=models.CASCADE, related_name="moments")
    prompt = models.ForeignKey("Prompt", on_delete=models.RESTRICT, related_name="moments", blank=True, null=True)

    def __str__(self):
        return f"({self.pk}) {self.owner.user.username} - {self.entry_title}"
