# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-12 11:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipi', '0004_auto_20160612_0654'),
    ]

    operations = [
        migrations.AddField(
            model_name='step',
            name='description',
            field=models.CharField(default='', max_length=256),
        ),
    ]
