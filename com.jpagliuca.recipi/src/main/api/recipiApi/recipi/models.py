from __future__ import unicode_literals

from django.db import models

__all__ = ['Ingredient', 'Tag', 'Recipe', 'Step', 'Time']

class Ingredient(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Time(models.Model):
    prep = models.IntegerField(default=0)
    cook = models.IntegerField(default=0)
    other = models.IntegerField(default=0)

class Recipe(models.Model):
    DIFFICULTY_CHOICES = (
        ('F', 'Foetus'),
        ('E', 'Breezy'),
        ('M', 'Tricky'),
        ('H', 'Expert'),
    )
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=256)
    image = models.CharField(max_length=32)
    difficulty = models.CharField(max_length=8, choices=DIFFICULTY_CHOICES)
    serves = models.IntegerField()
    time = models.ForeignKey(Time, default=1)
    tags = models.ManyToManyField(Tag)

    def __str__(self):
        return self.name

class Step(models.Model):
    number = models.IntegerField()
    recipe = models.ForeignKey(Recipe, related_name="steps")
    ingredient = models.ForeignKey(Ingredient)
    unit = models.CharField(max_length=16)
    amount = models.IntegerField()
    description = models.CharField(max_length=256, default="")

    class Meta:
        unique_together = (('number', 'recipe'),)
