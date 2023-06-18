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

    
class NoteByUserView(generics.ListAPIView):
    serializer_class = NotasSerializer

    def get_queryset(self):
        id_usuario = self.kwargs['pk']
        queryset = Notas.objects.filter(id_usuario=id_usuario)
        return queryset