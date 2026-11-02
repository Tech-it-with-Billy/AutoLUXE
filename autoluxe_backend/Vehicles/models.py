from django.db import models
import uuid
from django.conf import settings

# Create your models here.
class Vehicle(models.Model):
    vehicle_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    owner_id = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    registration_number = models.CharField(max_length=10, blank=False, null=False)
    make = models.CharField(max_length=50)
    model = models.CharField(max_length=50)
    year = models.CharField(max_length=10)
    body_type = models.CharField(max_length=50)
    color = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    transmition = models.CharField(max_length=50)
    fuel_type = models.CharField(max_length=50)
    engine_capacity = models.IntegerField()
    seating_capacity = models.IntegerField()
    country = models.CharField(max_length=50)
    city = models.CharField(max_length=50)
    daily_rate = models.IntegerField()
    status = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    reviewed_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f'{self.registration_number} - {self.status}'