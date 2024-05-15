from rest_framework import permissions, viewsets, response, status
from rest_framework.generics import (
    views, GenericAPIView,
    CreateAPIView, RetrieveUpdateDestroyAPIView
)
from rest_framework.exceptions import NotFound
from django.shortcuts import get_object_or_404
from users.models import Profile
from ..serializers.users_serializers import UserMeSerilaizer, ProfileSerializer
from ..permissions.user_permissions import IsOwnerOrReadOnly


class ProfileRUD(RetrieveUpdateDestroyAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (
        permissions.IsAuthenticated,
        IsOwnerOrReadOnly,
    )

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance:
            serializer = self.get_serializer(
                instance, data=request.data, partial=True)
            serializer.is_valid(raise_exception=True)

            self.perform_update(serializer)
            return response.Response(serializer.data)
        return NotFound("Profile does not exist for this user.")

    def destroy(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)

    def get_object(self):
        try:
            return self.request.user.profile
        except Profile.DoesNotExist:
            raise NotFound("Profile does not exist for this user.")


class ProfileCreateAPIView(CreateAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
    permission_classes = (permissions.IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        # Check if a Profile object already exists for the user
        profile_exists = Profile.objects.filter(user=request.user).exists()
        if profile_exists:
            # Profile object already exists, return an error response
            return response.Response(
                {"detail": "Profile already exists for this user."},
                status=status.HTTP_400_BAD_REQUEST
            )

        # Profile object does not exist, proceed with creating a new one
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return response.Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class UserMeAPI(GenericAPIView):
    permission_classes = (
        permissions.IsAuthenticated,
    )

    def get(self, request, *args, **kwargs):
        serializeView = UserMeSerilaizer(request.user)
        return response.Response(
            data=serializeView.data,
            status=status.HTTP_200_OK
        )
