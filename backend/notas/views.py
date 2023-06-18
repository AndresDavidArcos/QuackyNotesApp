from rest_framework import generics
from .models import Notas
from .serializers import NotasSerializer

# Create your views here.
class NotasList(generics.ListCreateAPIView):
     queryset = Notas.objects.all()
     serializer_class = NotasSerializer

    
class NotasDetail(generics.RetrieveUpdateDestroyAPIView):
     queryset = Notas.objects.all()
     serializer_class = NotasSerializer

     def get_queryset(self):
        user_id = self.kwargs['pk']
        queryset = Notas.objects.filter(id_usuario=user_id)
        return queryset
    