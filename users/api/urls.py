from django.urls import path
from .views.users_api_views import (
    UserMeAPI, ProfileCreateAPIView,
    ProfileRUD,
)


urlpatterns = [
    path('api/auth/me/', UserMeAPI.as_view()),
]

urlpatterns += [
    path('api/profile/create/', ProfileCreateAPIView.as_view()),
    path('api/profile/', ProfileRUD.as_view()),
]
