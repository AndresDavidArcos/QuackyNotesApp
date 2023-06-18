from rest_framework import serializers
from .models import Etiquetas


class EtiquetasSerializer(serializers.ModelSerializer):
    class Meta:
        model = Etiquetas
        fields = ['id','nombre']
