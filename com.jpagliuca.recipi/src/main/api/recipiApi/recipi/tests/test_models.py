from django.test import TestCase

from ..models import Recipe, Tag

class RecipeTestCase(TestCase):

    def setUp(self):
        self.recipe_data = {
            'name': 'recipe-test',
            'description': 'description',
            'image': 'needs-to-be-data',
            'difficulty': 'E',
            'serves': 1,
            'time_prep': 2,
            'time_cook': 3,
            'time_other': 4
        }
        Recipe.objects.create(**self.recipe_data)
    
    def test_create(self):
        recipe = Recipe.objects.get(name=self.recipe_data['name'])
        self.assertEqual(recipe.name, self.recipe_data['name'])
        self.assertEqual(recipe.description, self.recipe_data['description'])
        self.assertEqual(len(recipe.tags.all()), 0)
        self.assertEqual(len(recipe.steps.all()), 0)
    
    def test_add_tag(self):
        recipe = Recipe.objects.get(name=self.recipe_data['name'])
        Tag.objects.create(name='test')
        tag = Tag.objects.get(name='test')
        recipe.add_tag(tag)
        recipe = Recipe.objects.get(name=self.recipe_data['name'])
        self.assertEqual(len(recipe.tags.all()), 1)
