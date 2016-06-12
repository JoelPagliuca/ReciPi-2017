from __future__ import unicode_literals

from django.db import models

class Ingredient(models.Model):
    name = models.CharField(max_length=30)

class Tag(models.Model):
    name = models.CharField(max_length=30)

class Recipe(models.Model):
    DIFFICULTY_CHOICES = (
        ('E', 'Breezy'),
        ('M', 'Tricky'),
        ('H', 'Expert'),
    )
    name = models.CharField(max_length=30)
    description = models.CharField(max_length=150)
    image = models.CharField(max_length=30)
    difficulty = models.CharField(max_length=15, choices=DIFFICULTY_CHOICES)
    serves = models.IntegerField()
    time_prep = models.IntegerField()
    time_cook = models.IntegerField()
    time_other = models.IntegerField()
    tags = models.ManyToManyField(Tag)
