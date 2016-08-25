from rest_framework import serializers

from models import *

__all__ = ['IngredientSerializer', 'TagSerializer', 'TimeSerializer','RecipeSerializer', 'StepSerializer']

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('id', 'name',)

class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = ('id', 'name',)

class TimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Time
        fields = (
            'prep',
            'cook',
            'other',
        )

class StepSerializer(serializers.ModelSerializer):
    ingredient = IngredientSerializer()

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

class RecipeSerializer(serializers.ModelSerializer):
    tags = TagSerializer(many=True)
    steps = StepSerializer(many=True)
    time = TimeSerializer()

    class Meta:
        model = Recipe
        fields = (
            'id',
            'name',
            'description',
            'image',
            'difficulty',
            'serves',
            'time',
            'tags',
            'steps',
        )

    def create(self, validated_data):
        """
        this needed its own create method to allow us to make a time data as well as the recipe
        :param validated_data: dict
        :return:
        """
        time_data = validated_data.pop('time')
        validated_data.pop('tags')
        validated_data.pop('steps')
        time_obj = Time.objects.create(**time_data)
        recipe = Recipe.objects.create(time=time_obj, **validated_data)
        return recipe
