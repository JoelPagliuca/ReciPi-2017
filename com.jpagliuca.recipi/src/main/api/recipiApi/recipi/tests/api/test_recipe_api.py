from rest_framework import status
from rest_framework.test import APITestCase

from recipiApi.recipi.models import Recipe

class RecipeAPITests(APITestCase):
    
    URL = '/api/recipes/'

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

    def test_create(self):
        response = self.client.post(self.URL, self.recipe1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Recipe.objects.count(), 1)
        self.assertEqual(Recipe.objects.get(id=1).name, self.recipe1['name'])
    
    def test_read(self):
        Recipe.objects.create(**self.recipe1)
        url = self.URL+'1'
        response = self.client.get(self.URL)
        self.assertTrue(status.is_success(response.status_code))
        self.assertEqual(response.data[0]['name'], self.recipe1['name'])
        self.assertEqual(response.data[0]['difficulty'], self.recipe1['difficulty'])
    
    def test_update(self):
        Recipe.objects.create(**self.recipe1)
        url = self.URL+'1/'
        data = self.recipe1
        data['name'] = 'test_update'
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Recipe.objects.get().name, 'test_update')
    
    def test_delete(self):
        Recipe.objects.create(**self.recipe1)
        url = self.URL+'1/'
        response = self.client.delete(url)
        self.assertTrue(status.is_success(response.status_code)) # 204
        self.assertEqual(len(Recipe.objects.all()), 0)
    
    def test_bad_difficulty(self):
        self.recipe1['difficulty'] = "N"
        response = self.client.post(self.URL, self.recipe1)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Recipe.objects.count(), 0)
