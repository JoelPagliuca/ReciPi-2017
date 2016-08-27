"""
views

Gives access to the Models
"""
from rest_framework import viewsets
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer
from rest_framework.decorators import api_view, renderer_classes
from rest_framework import response, schemas

from models import *

from serializers import *

__all__ = ["IngredientViewSet", "TagViewSet", "RecipeViewSet", "StepViewSet", "documentation_view"]


class IngredientViewSet(viewsets.ModelViewSet):
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer


class StepViewSet(viewsets.ModelViewSet):
    queryset = Step.objects.all()
    serializer_class = StepSerializer


@api_view()
@renderer_classes([SwaggerUIRenderer, OpenAPIRenderer])
def documentation_view(request):
    generator = schemas.SchemaGenerator(title='Recipi API')
    return response.Response(generator.get_schema(request=request))
