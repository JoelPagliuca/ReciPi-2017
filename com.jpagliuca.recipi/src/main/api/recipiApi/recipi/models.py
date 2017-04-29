from __future__ import unicode_literals

import uuid

from django.db import models

__all__ = ['Ingredient', 'Tag', 'Recipe', 'Step']

class Ingredient(models.Model):
    name = models.CharField(max_length=32)

    def __str__(self):
        return self.name

class Tag(models.Model):
    name = models.CharField(max_length=32)
    def __str__(self):
        return self.name

def randomize_filename(instance, filename):
    """
    give each image a uuid filename
    :type filename: str
    :rtype: str
    """
    # get the extension
    extension = filename.split('.')[-1]
    new_filename = uuid.uuid4()
    return "{}.{}".format(new_filename, extension)

class Recipe(models.Model):
    DIFFICULTY_CHOICES = (
        ('E', 'Breezy'),
        ('M', 'Tricky'),
        ('H', 'Expert'),
    )
    name = models.CharField(max_length=32)
    description = models.CharField(max_length=256)
    image = models.ImageField(upload_to=randomize_filename, blank=True, null=True)
    difficulty = models.CharField(max_length=8, choices=DIFFICULTY_CHOICES)
    serves = models.IntegerField(default=2)
    time_prep = models.IntegerField(default=0)
    time_cook = models.IntegerField(default=0)
    time_other = models.IntegerField(default=0)
    tags = models.ManyToManyField(Tag)

    def add_tag(self, tag):
        self.tags.add(tag)

    def __str__(self):
        return self.name

class Step(models.Model):
    number = models.IntegerField()
    recipe = models.ForeignKey(Recipe, related_name="steps")
    ingredient_pk = models.ForeignKey(Ingredient)
    unit = models.CharField(max_length=16)
    amount = models.IntegerField()
    description = models.CharField(max_length=256, default="")

    class Meta:
        unique_together = (('number', 'recipe'),)
