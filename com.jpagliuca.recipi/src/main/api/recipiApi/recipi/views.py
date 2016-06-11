from rest_framework import viewsets

from models import Ingredient

from serializers import IngredientSerializer

class IngredientViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Ingredients to be viewed or edited
    """
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer
