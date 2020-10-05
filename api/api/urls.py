
from . import views
from django.urls import path
from django.conf.urls import include

urlpatterns = [
   path('search/', views.search, name='search'),
   path('pi/', views.pi, name='pi'),
   
    
]