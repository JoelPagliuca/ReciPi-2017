from django.contrib.auth.models import User

from rest_framework.test import APITestCase, APIClient

from recipiApi.recipi.models import Recipe

__all__ = ['RecipiApiTestCase']

"""
base class for all API test cases
"""
class RecipiApiTestCase(APITestCase):

    URL = '/api/'

    def setUp(self):

        self.client = APIClient()
        self.tag1 = {'name': 'test_tag'}
        self.recipe1 = {
            "name": 'test_recipe',
            "image": "string",
            "serves": 56,
            "difficulty": "E",
            "time_prep": 30,
            "time_cook": 25,
            "time_other": 5,
            "description": "a test recipe"
        }
        self.ingredient1 = {'name': 'test_ingredient'}
        self.step1 = {
            "description": "test_step",
            "recipe": 1,
            "number": 1,
            "amount": 5,
            "ingredient_pk": 1,
            "unit": "kg"
        }
        self.user = User.objects.create(username='Test')
        self.user.set_password('test1234')
        self.user.save()
        login = self.client.login(username='Test', password='test1234')
