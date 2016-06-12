from rest_framework import serializers

from models import Ingredient, Tag, Recipe, Step

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name',)

class TagSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Tag
        fields = ('name',)

class RecipeSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Recipe
        fields = (
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
        )
