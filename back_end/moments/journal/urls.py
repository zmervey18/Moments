from django.urls import path

from rest_framework import routers
from .views import MomentViewSet, ProfileViewSet, PromptViewSet, UserViewSet

router = routers.DefaultRouter()
router.register(r'moment', MomentViewSet, basename="moment")
router.register(r'profile', ProfileViewSet, basename="profile")
router.register(r'prompt', PromptViewSet, basename="prompt")
router.register(r'user', UserViewSet, basename="user")

urlpatterns = router.urls