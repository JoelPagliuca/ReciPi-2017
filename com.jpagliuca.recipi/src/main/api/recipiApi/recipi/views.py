from rest_framework import viewsets

from models import Ingredient, Tag, Recipe

from serializers import IngredientSerializer, TagSerializer, RecipeSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Ingredients to be viewed or edited
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer

class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
