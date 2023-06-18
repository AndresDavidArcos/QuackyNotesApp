from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import Recordatorios

class RecordatoriosSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, style={'input_type': 'password'})

    class Meta:
        model = Recordatorios
        fields = ['id', 'titulo', 'fecha_inicio', 'fecha_finalizacion', 'fecha_creacion', 'estado', 'id_notas']
        extra_kwargs = {
            'fecha_creacion': {'read_only': True}
        }