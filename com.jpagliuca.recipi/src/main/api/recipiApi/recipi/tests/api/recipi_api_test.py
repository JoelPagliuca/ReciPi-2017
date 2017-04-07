from rest_framework.test import APITestCase

from recipiApi.recipi.models import Recipe

__all__ = ['RecipiApiTestCase']

"""
base class for all API test cases
"""
class RecipiApiTestCase(APITestCase):

    URL = '/api/'

    def setUp(self):

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
