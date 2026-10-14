from rest_framework import generics
from .serializers import RegistrationSerializer
from rest_framework.permissions import AllowAny

class RegistrationView(generics.CreateAPIView):
    serializer_class = RegistrationSerializer
    permission_classes = [AllowAny]