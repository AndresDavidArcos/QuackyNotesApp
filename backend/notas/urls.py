from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from .views import *

urlpatterns = [
    path('notas', NotasList.as_view()),
    path('notas/<int:pk>', NotasDetail.as_view()),
    path('notas/user/<int:pk>', NoteByUserView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
