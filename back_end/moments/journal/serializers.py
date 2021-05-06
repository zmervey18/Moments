from rest_framework import serializers
from .models import Entry, Moment, Prompt
from django.contrib.auth import get_user_model

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    entries = serializers.HyperlinkedRelatedField(view_name='entry-detail', many=True, read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'user_photo', 'entries']

class EntrySerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Entry
        fields = ['pk', 'date', 'title', 'body', 'image', 'owner', 'prompt']

class MomentSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Moment
        fields = ['pk', 'date', 'description', 'image', 'owner']

class PromptSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Prompt
        fields = "__all__"