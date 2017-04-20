"""
views

Gives access to the Models
"""
from rest_framework import viewsets, status
from rest_framework_swagger.renderers import OpenAPIRenderer, SwaggerUIRenderer
from rest_framework.decorators import api_view, renderer_classes, detail_route
from rest_framework import response, schemas
from rest_framework.permissions import IsAuthenticated

from models import *

from serializers import *

__all__ = ["IngredientViewSet", "TagViewSet", "RecipeViewSet", "StepViewSet", "documentation_view"]

TAG_ID = "tag_id"

class IngredientViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Ingredient.objects.all()
    serializer_class = IngredientSerializer


class TagViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Tag.objects.all()
    serializer_class = TagSerializer


class RecipeViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

    """
    tag url for Recipe
    adds a tag to the Recipe
    """
    @detail_route(methods=['post'])
    def tag(self, request, pk):
        if request.data and request.data.has_key(TAG_ID):
            recipe, tag = None, None
            try:
                recipe = Recipe.objects.get(id=pk)
                tag = Tag.objects.get(id=request.data[TAG_ID])
            except:
                pass # one of them weren't found
            if tag and recipe:
                recipe.add_tag(tag)
                return response.Response(RecipeSerializer(recipe).data, status=status.HTTP_200_OK)
            else:
                return response.Response("recipe or tag not found", status=status.HTTP_400_BAD_REQUEST)
        else:
            return response.Response("recipe not found", status=status.HTTP_400_BAD_REQUEST)


class StepViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Step.objects.all()
    serializer_class = StepSerializer
    # TODO proper delet


@api_view()  # pragma: no cover
@renderer_classes([SwaggerUIRenderer, OpenAPIRenderer])
def documentation_view(request):
    generator = schemas.SchemaGenerator(title='Recipi API')
    return response.Response(generator.get_schema(request=request))
