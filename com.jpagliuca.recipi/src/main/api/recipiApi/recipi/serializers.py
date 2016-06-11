from rest_framework import serializers

from models import Ingredient

class IngredientSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Ingredient
        fields = ('name',)
