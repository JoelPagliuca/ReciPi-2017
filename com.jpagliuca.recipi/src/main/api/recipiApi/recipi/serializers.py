from rest_framework import serializers

from models import *

__all__ = ['IngredientSerializer', 'TagSerializer','RecipeSerializer', 'StepSerializer']

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name',)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name',)

class StepSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer(source='ingredient_pk', read_only=True)

    class Meta:
        model = Step
        fields = (
            'number',
            'recipe',
            'ingredient',
            'ingredient_pk',
            'unit',
            'amount',
            'description',
        )
        extra_kwargs = {
            'ingredient_pk': {'write_only': True}
        }

class RecipeSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True, read_only=True)
    steps = StepSerializer(many=True, read_only=True)
    image = serializers.ImageField(use_url=False)

    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'description',
            'image',
            'difficulty',
            'serves',
            'time_prep',
            'time_cook',
            'time_other',
            'tags',
            'steps',
        )
