from rest_framework import serializers
from .models import Moment, Profile, Prompt
from django.contrib.auth.models import User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class MomentSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Moment
        fields = "__all__"

class ProfileSerializer(serializers.HyperlinkedModelSerializer):
    moments = serializers.HyperlinkedRelatedField(view_name="moment-detail", many=True, read_only=True)
    
    class Meta:
        model = Profile
        fields = "__all__"

class PromptSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Prompt
        fields = "__all__"