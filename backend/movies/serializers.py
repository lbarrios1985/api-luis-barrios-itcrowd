from django.contrib.auth.models import User
from rest_framework import serializers
from movies.models import Movie, Person

class UserSerializer(serializers.ModelSerializer):
    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'password']

class PersonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ['id','first_name', 'last_name','alias', 'movies_as_actor',
                  'movies_as_director', 'movies_as_producer']


class MovieSerializer(serializers.ModelSerializer):
    roman_release_year = serializers.SerializerMethodField()

    def int_to_roman(self, year):
        ints = (1000, 900,  500, 400, 100,  90, 50,  40, 10,  9,   5,  4,   1)
        nums = ('M',  'CM', 'D', 'CD', 'C', 'XC',
                'L', 'XL', 'X', 'IX', 'V', 'IV', 'I')
        result = []
        for i in range(len(ints)):
            count = int(year / ints[i])
            result.append(nums[i] * count)
            year -= ints[i] * count
        return ''.join(result)

    def get_roman_release_year(self, obj):
        return "{}".format(self.int_to_roman(obj.release_year))

    class Meta:
        model = Movie
        fields = ['pk','title', 'release_year', 'roman_release_year',
            'actors', 'directors', 'producers']
