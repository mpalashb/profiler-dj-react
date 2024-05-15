from django.urls import path
from .views import (
    UserHomePage,
    UserDashboard,
    LoginViewClass,
    UserCreationView,
)
from django.contrib.auth.views import LogoutView

app_name = "users"

urlpatterns = [
    path('auth/logout', LogoutView.as_view(), name="user-logout"),
    path('user/register', UserCreationView.as_view(), name="user-register"),
    path('auth/login', LoginViewClass.as_view(), name="user-login"),
]

urlpatterns += [
    path('', UserHomePage.as_view(), name="user-home"),
    path('dashboard', UserDashboard.as_view(), name="user-dashboard"),
    path('dashboard/<path:extra>/', UserDashboard.as_view(), name="user-dashboard"),
]
