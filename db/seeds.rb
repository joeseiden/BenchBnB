# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  username: "guest",
  password: "password"
)

Bench.create!(
description: "lucasfilm, much star war",
lat: 37.800224,
lng: -122.448630
)

Bench.create!(
description: "much app, many academy",
lat: 37.791739,
lng: -122.393111
)

Bench.create!(
description: "these arts are so fine",
lat: 37.801665,
lng: -122.447788
)
