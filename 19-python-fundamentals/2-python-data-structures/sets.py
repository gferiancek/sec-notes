lemon = {"sour", "yellow", "fruit", "bumpy"}
banana = {"fruit", "smooth", "sweet", "yellow"}
orange = ['fruit', 'bumpy', 'orange', 'sweet']

# banana.union(lemon)
all_features = lemon | banana | {"fruit", "green", "tart"}

# banana.intersect(lemon)
common_features = banana & lemon

not_in_lemon = lemon - banana

not_common = lemon ^ banana

# Loops
for adj in lemon ^ set(orange):
    print(adj)