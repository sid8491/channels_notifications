from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.index, name='notification'),
    path('submit/', views.assign_jobs, name='assign_jobs'),
]
