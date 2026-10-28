from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

User = get_user_model()

class RegistrationSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, trim_whitespace=True, min_length=8,)
    
    class Meta:
        model = User
        fields = [
            'id', 'first_name', 'last_name', 'email', 'password'
        ]
        read_only_fields = ['id']
    
    def validate_email(self, value):
        email = value.strip().lower()
        
        if User.objects.filter(email__iexact = email).exists():
            raise serializers.ValidationError('An account with this email already exists!')
        
        return email
    
    def validate_password(self, value):
        validate_password(value)
        return value
    
    def create(self, validated_data):
        password = validated_data.pop('password')
        
        return User.objects.create_user(
            email=validated_data.pop('email'),
            password=password,
            **validated_data,
        )

class EmailObtainTokenPairSerializer(TokenObtainPairSerializer):
    username_field = User.USERNAME_FIELD
    