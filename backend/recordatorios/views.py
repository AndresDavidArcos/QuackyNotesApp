from rest_framework import generics
from .models import Recordatorios
from .serializers import RecordatoriosSerializer

# Create your views here.
class RecordatoriosList(generics.ListCreateAPIView):
     queryset = Recordatorios.objects.all()
     serializer_class = RecordatoriosSerializer
    
class RecordatoriosDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset = Recordatorios.objects.all()
     serializer_class = RecordatoriosSerializer
    