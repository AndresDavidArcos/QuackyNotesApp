from rest_framework import generics
from .models import Etiquetas
from .serializers import EtiquetasSerializer

# Create your views here.
class EtiquetasList(generics.ListCreateAPIView):
     queryset = Etiquetas.objects.all()
     serializer_class = EtiquetasSerializer

    
class EtiquetasDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset = Etiquetas.objects.all()
     serializer_class = EtiquetasSerializer
    