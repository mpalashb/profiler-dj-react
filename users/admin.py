from django.contrib import admin
from users.models import Profile


@admin.register(Profile)
class UserAdmin(admin.ModelAdmin):
    list_display = ("get_username", "first_name", "last_name")
