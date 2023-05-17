from django.db import models
from django.contrib.auth.models import AbstractUser

class Usuarios(AbstractUser):
    id = models.PositiveIntegerField(primary_key=True, unique=True)
    nombre = models.CharField(max_length=64)
    apellidos = models.CharField(max_length=64, default='apellido')
    celular = models.CharField(max_length=16)
    username = models.EmailField(max_length=100, unique=True, default='defaultEmail@hotmail.com')
    fecha_registro = models.DateField(auto_now_add=True)
    password = models.CharField(max_length=128, default='my_default_password')
    REQUIRED_FIELDS = [] 

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['nombre', 'apellidos', 'celular', 'fechaNacimiento', 'password']
