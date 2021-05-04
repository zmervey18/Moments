from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    user_photo = models.ImageField(upload_to='profile_image', blank=True)
    
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
    moment_photo = models.ImageField(upload_to='moments')
    owner = models.ForeignKey("Profile", on_delete=models.CASCADE, related_name="moments")
    prompt = models.ForeignKey("Prompt", on_delete=models.DO_NOTHING, related_name="moments")
