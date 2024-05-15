from django.http import HttpRequest, HttpResponse
from django.shortcuts import render
from django.views import View
from django.urls import reverse_lazy
from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views.generic import TemplateView, CreateView
from .forms import LoginFormOver, RegisterFormOver


class UserCreationView(CreateView):
    form_class = RegisterFormOver
    template_name = "register.html"
    success_url = reverse_lazy("users:user-login")

    def post(self, request, *args, **kwargs):
        return super().post(request, *args, **kwargs)


class LoginViewClass(LoginView):
    form_class = LoginFormOver
    template_name = "login.html"
    success_url = reverse_lazy("users:user-dashboard")


class UserHomePage(View):
    def get(self, request, *args, **kwargs):
        return render(request, template_name="user_home.html")


class UserDashboard(LoginRequiredMixin, TemplateView):
    template_name = "dashboard.html"
    login_url = "users:user-login"
