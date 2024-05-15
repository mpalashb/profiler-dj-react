from django.contrib.auth.forms import AuthenticationForm, UserCreationForm
from django import forms


class RegisterFormOver(UserCreationForm):
    email = forms.EmailField(label="Email")  # Add email field

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['email'].widget.attrs['placeholder'] = 'Email'

        # Add form-control class to all fields
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'

        # Reorder fields
        # new_order = ['email'] + [k for k in self.fields.keys() if k != 'email'] #getting first
        # new_order = [k for k in self.fields.keys() if k != 'email'] + ['email'] #getting last
        # self.fields = {k: self.fields[k] for k in new_order}

        # Reorder bellow of username fields
        fields_order = list(self.fields.keys())
        username_index = fields_order.index('username')
        new_order = fields_order[:username_index+1] + \
            ['email'] + fields_order[username_index+1:]
        self.fields = {k: self.fields[k] for k in new_order}

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']  # Set email field
        if commit:
            user.save()
        return user


class LoginFormOver(AuthenticationForm):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Add form-control class to all fields
        for field_name, field in self.fields.items():
            field.widget.attrs['class'] = 'form-control'
