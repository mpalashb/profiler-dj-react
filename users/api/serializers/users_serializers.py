from rest_framework import serializers
from django.contrib.auth.models import User
from users.models import Profile


class UserMeSerilaizer(serializers.ModelSerializer):
    date_joined = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = (
            "pk",
            "username",
            "email",
            "date_joined",
        )

    def get_date_joined(self, obj):
        # Format the date_joined field
        return obj.date_joined.strftime("%Y-%m-%d")
        # return obj.date_joined.strftime("%Y-%m-%d %H:%M:%S")


class ProfileSerializer(serializers.ModelSerializer):

    get_username = serializers.ReadOnlyField()
    user = UserMeSerilaizer(read_only=True)

    class Meta:
        model = Profile
        fields = "__all__"
