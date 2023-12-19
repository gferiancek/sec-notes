chicken = {
    "name": "Lady Gray",
    "breed": "Silkie",
    "total_egg_count": 12,
    "egg_chart": {
        "M": True,
        "T": True,
        "W": True,
        "TH": True,
        "F": True,
        "S": False,
        "SU": True,
    },
    "coop_mates": ["Butters", "Stevie", "Henry"],
}

for key in chicken.keys():
    print(f"Key: {key}")

for value in chicken.values():
    print(f"Value: {value}")

for item in chicken.items():
    print(f"Item: {item}")

for k, v in chicken.items():
    print(f"Key: {k}, Value: {v}")
