from django.urls import path
from .views import index,create,join

urlpatterns = [
    path("", index, name="index"),
    path("create",create,name="create"),
    path("join",join,name="join")
]