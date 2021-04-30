from django.contrib import admin
from .models import Prompt, Profile, Moment
# Register your models here.

admin.site.register(Prompt)
admin.site.register(Profile)
admin.site.register(Moment)