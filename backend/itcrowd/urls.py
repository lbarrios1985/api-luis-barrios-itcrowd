from django.contrib import admin
from django.urls import include, path
from django.conf.urls import url
from rest_framework import routers
from movies import views
from rest_framework.authtoken import views as authviews

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'aliases', views.AliasViewSet)
router.register(r'person', views.PersonViewSet)
router.register(r'movie', views.MovieViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('admin/', admin.site.urls),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('csrf/', views.csrf),
]

urlpatterns += [
    url(r'^api-token-auth/', authviews.obtain_auth_token),
]
