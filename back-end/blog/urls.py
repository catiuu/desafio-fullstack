from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import ArticleViewSet, RegisterView


router = DefaultRouter()
router.register(r'articles', ArticleViewSet)


urlpatterns = router.urls + [
    path('register/', RegisterView.as_view(), name='register'),
]
