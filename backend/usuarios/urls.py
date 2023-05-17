from django.urls import path
from .views import RegisterView, LoginView

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
   #path('notes/<int:pk>/', UserNotesView.as_view(), name='notes'),
]