# Generated by Django 4.0.5 on 2022-07-02 01:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_room_password_alter_room_code'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='room',
            name='password',
        ),
    ]
