from rest_framework import generics
from .serializers import RegistrationSerializer, EmailObtainTokenPairSerializer
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

class RegistrationView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]

class LoginView(TokenObtainPairView):
    serializer_class = EmailObtainTokenPairSerializer
    permission_classes = [AllowAny]

class TokenRefresh(TokenRefreshView):
    permission_classes = [AllowAny]