from helpers import get_rand_year, get_rand_month

def make_person(name, fav_color):
    return {
        'name': name,
        'fav_color': fav_color,
        'birth_year': get_rand_year(),
        'birth_month': get_rand_month()
    }