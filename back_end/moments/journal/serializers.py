from rest_framework import serializers
from .models import Moment, Prompt
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'user_photo']

class MomentSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Moment
        fields = "__all__"

class PromptSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Prompt
        fields = "__all__"