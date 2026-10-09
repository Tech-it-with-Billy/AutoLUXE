from django.db import models
from django.contrib.auth.models import AbstractUser

ROLE_CHOICES = (
    ('admin', 'Admin'),
    ('customer', 'Customer'),
    ('fleetowner', 'Fleet Owner'),
)
    
    
class User(AbstractUser):
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')


