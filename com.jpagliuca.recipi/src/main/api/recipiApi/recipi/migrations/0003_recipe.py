# -*- coding: utf-8 -*-
# Generated by Django 1.9.7 on 2016-06-12 03:58
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('recipi', '0002_tag'),
    ]

    operations = [
        migrations.CreateModel(
            name='Recipe',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=30)),
                ('description', models.CharField(max_length=150)),
                ('image', models.CharField(max_length=30)),
                ('difficulty', models.CharField(choices=[('E', 'Breezy'), ('M', 'Tricky'), ('H', 'Expert')], max_length=15)),
                ('serves', models.IntegerField()),
                ('time_prep', models.IntegerField()),
                ('time_cook', models.IntegerField()),
                ('time_other', models.IntegerField()),
                ('tags', models.ManyToManyField(to='recipi.Tag')),
            ],
        ),
    ]
