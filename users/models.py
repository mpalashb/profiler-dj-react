from django.db import models
from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    first_name = models.CharField(max_length=30, blank=True)
    last_name = models.CharField(max_length=30, blank=True)
    profile_pic = models.ImageField(upload_to="profile")

    @property
    def get_username(self):
        return self.user.username

    def __str__(self) -> str:
        return f"{self.user.username}"
