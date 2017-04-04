from rest_framework import status
from rest_framework.test import APITestCase

from ..models import Ingredient

class IngredientAPITests(APITestCase):
    
    URL = '/api/ingredients/'

    def test_create(self):
        data = {'name': 'test_ingredient'}
        response = self.client.post(self.URL, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Ingredient.objects.count(), 1)
        self.assertEqual(Ingredient.objects.get(id=1).name, 'test_ingredient')
    
    def test_read(self):
        Ingredient.objects.create(name="test_ingredient")
        url = self.URL+'1'
        response = self.client.get(self.URL)
        self.assertTrue(status.is_success(response.status_code))
        self.assertEqual(response.data[0]['name'], 'test_ingredient')
    
    def test_update(self):
        Ingredient.objects.create(name="test_ingredient")
        url = self.URL+'1/'
        data = {'name': 'test_ingredient'}
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Ingredient.objects.get().name, 'test_ingredient')
