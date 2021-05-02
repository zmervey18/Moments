from django.shortcuts import render
from rest_framework import viewsets, permissions

from .serializers import MomentSerializer, PromptSerializer, UserSerializer
from .models import Moment, Prompt

from django.contrib.auth import get_user_model
User = get_user_model()

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


class PromptViewSet(viewsets.ModelViewSet):
    queryset = Prompt.objects.all()
    serializer_class = PromptSerializer

    permission_classes = [
        permissions.AllowAny
    ]