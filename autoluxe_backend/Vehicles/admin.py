from django.contrib import admin
from .models import Vehicle

# Register your models here.
@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ('vehicle_id', 'owner_id', 'registration_number', 'make', 'model', 'year', 'country', 'city', 'daily_rate', 'status')
    list_filter = ('status', 'owner_id', 'make', 'model')