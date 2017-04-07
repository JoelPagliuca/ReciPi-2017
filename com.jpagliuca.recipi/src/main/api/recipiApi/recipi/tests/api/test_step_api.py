from rest_framework import status
from rest_framework.test import APITestCase

from recipi_api_test import RecipiApiTestCase

from recipiApi.recipi.models import Step, Ingredient, Recipe

class StepAPITests(RecipiApiTestCase):
    
    URL = RecipiApiTestCase.URL + 'steps/'

    def setUp(self):
        RecipiApiTestCase.setUp(self)
        Recipe.objects.create(**self.recipe1)
        Ingredient.objects.create(**self.ingredient1)

    def test_create(self):
        response = self.client.post(self.URL, self.step1)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Step.objects.count(), 1)
        self.assertEqual(Step.objects.get(id=1).description, self.step1['description'])
        
    # def test_update(self):
    #     Step.objects.create(**self.step1)
    #     url = self.URL+'1/'
    #     data = self.step1
    #     data['description'] = 'test_update'
    #     response = self.client.put(url, data)
    #     self.assertEqual(response.status_code, status.HTTP_200_OK)
    #     self.assertEqual(Step.objects.get().description, 'test_update')
    
    # def test_delete(self):
    #     Step.objects.create(**self.step1)
    #     url = self.URL+'1/'
    #     response = self.client.delete(url)
    #     self.assertTrue(status.is_success(response.status_code)) # 204
    #     self.assertEqual(len(Step.objects.all()), 0)
