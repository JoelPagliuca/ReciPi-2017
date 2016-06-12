from rest_framework import serializers

from models import *

__all__ = ['IngredientSerializer', 'TagSerializer', 'RecipeSerializer', 'StepSerializer']

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name',)

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name',)

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
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
        )

class StepSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Step
        fields = (
            'number',
            'recipe',
            'ingredient',
            'unit',
            'amount',
            'description',
        )
