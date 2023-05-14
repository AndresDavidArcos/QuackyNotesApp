from django.urls import path
from .views import RegisterView, LoginView, ChangeData

urlpatterns = [
    path('register', RegisterView.as_view()),
    path('login', LoginView.as_view()),
    path('change_data', ChangeData.as_view())

]