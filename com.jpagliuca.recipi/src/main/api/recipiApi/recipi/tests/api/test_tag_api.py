from rest_framework import status
from rest_framework.test import APITestCase

from recipi_api_test import RecipiApiTestCase

from recipiApi.recipi.models import Tag

class TagAPITests(RecipiApiTestCase):
    
    URL = RecipiApiTestCase.URL + 'tags/'

    def test_create(self):
        data = {'name': 'test_tag'}
        response = self.client.post(self.URL, data)
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Tag.objects.count(), 1)
        self.assertEqual(Tag.objects.get(id=1).name, 'test_tag')
    
    def test_read(self):
        Tag.objects.create(name="test_tag")
        url = self.URL+'1'
        response = self.client.get(self.URL)
        self.assertTrue(status.is_success(response.status_code))
        self.assertEqual(response.data[0]['name'], 'test_tag')
    
    def test_update(self):
        Tag.objects.create(name="test_tag")
        url = self.URL+'1/'
        data = {'name': 'test_tag'}
        response = self.client.put(url, data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Tag.objects.get().name, 'test_tag')
    
    def test_delete(self):
        Tag.objects.create(name="test_tag")
        url = self.URL+'1/'
        response = self.client.delete(url)
        self.assertTrue(status.is_success(response.status_code)) # 204
        self.assertEqual(len(Tag.objects.all()), 0)
