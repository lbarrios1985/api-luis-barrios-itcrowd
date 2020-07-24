from django.contrib.auth.models import User
from rest_framework import viewsets
from rest_framework import permissions
from movies.serializers import UserSerializer, PersonSerializer, MovieSerializer
from movies.models import Movie, Person
from rest_framework import permissions
from django.http import JsonResponse
from django.middleware.csrf import get_token

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class PersonViewSet(viewsets.ModelViewSet):
    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

def csrf(request):
    return JsonResponse({'csrfToken': get_token(request)})
    