from rest_framework import viewsets

from models import Ingredient, Tag

from serializers import IngredientSerializer, TagSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Ingredients to be viewed or edited
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer
