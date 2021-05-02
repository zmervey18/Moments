from django.shortcuts import render
from rest_framework import viewsets, permissions

from .serializers import MomentSerializer, ProfileSerializer, PromptSerializer, UserSerializer
from .models import Moment, Profile, Prompt
from django.contrib.auth.models import User


# Create your views here.

class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    permission_classes = [
        permissions.AllowAny
    ]

class MomentViewSet(viewsets.ModelViewSet):
    queryset = Moment.objects.all()
    serializer_class = MomentSerializer

    permission_classes = [
        permissions.AllowAny
    ]
    
    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer

    permission_classes = [
        permissions.AllowAny
    ]

class PromptViewSet(viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer

    permission_classes = [
        permissions.AllowAny
    ]