require './hero_gen.rb'

fileNumber = 0

while fileNumber < 2  do  

	codes = [1, 1, 1]
	myhero = generate_hero( codes )
	myhero3x = myhero.zoom( 3 )
	myhero.save( "./HeroImages/hero-#{fileNumber}.png" )
	myhero3x.save("./HeroImages/hero-#{fileNumber}.x3.png")

    $heroMetaData["name"] = "My Hero Number: #{fileNumber}"
    $heroMetaData["description"] = "Description: A super hero"
	File.open("metaDataFiles/hero-metadata-#{fileNumber}.json","w") do |f|
	f.write($heroMetaData.to_json)
	end
	fileNumber += 1
end
