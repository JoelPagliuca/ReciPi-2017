from rest_framework import status
from rest_framework.test import APITestCase

from recipi_api_test import RecipiApiTestCase

from recipiApi.recipi.models import Recipe, Tag

class RecipeAPITests(RecipiApiTestCase):

    URL = RecipiApiTestCase.URL + 'recipes/'

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
        self.assertEqual(response.data[0]['tags'], [])
        self.assertEqual(response.data[0]['steps'], [])
    
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
    
    def test_add_tag(self):
        Tag.objects.create(**self.tag1)
        Recipe.objects.create(**self.recipe1)
        url = self.URL+'1/tag/'
        data = {'tag_id': '1'}
        response = self.client.post(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data['tags']), 1)
    
    def test_add_tag_bad(self):
        Recipe.objects.create(**self.recipe1)
        url = self.URL+'1/tag/'

        data = {'tag_id': '1'} # non existant tag
        response = self.client.post(url, data)
        self.assertFalse(status.is_success(response.status_code))

        data = {'not_tag_id': '1'} # bad request data
        response = self.client.post(url, data)
        self.assertFalse(status.is_success(response.status_code))
    
    def test_bad_difficulty(self):
        self.recipe1['difficulty'] = "N"
        response = self.client.post(self.URL, self.recipe1)
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Recipe.objects.count(), 0)
    