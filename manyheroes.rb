require './hero_gen.rb'

fileNumber = 0

while fileNumber < 2  do  #Mouths

    #create random numbers for random codes here.
   
    #eyes = Random.rand(NumberofEyes)

	codes = [1, 1, 1]
	myhero = generate_hero( codes )
	myhero3x = myhero.zoom( 3 )
	myhero.save( "./HeroImages/hero-#{fileNumber}.png" )
	myhero3x.save("./HeroImages/hero-#{fileNumber}.x3.png")

    #The image CID will be added later when we upload it to IPFS.

    $heroMetaData["name"] = "My Hero Number: #{fileNumber}"
    $heroMetaData["description"] = "Description: A super hero"
	File.open("metaDataFiles/metadata-#{fileNumber}.json","w") do |f|
	f.write($heroMetaData.to_json)
	end
	fileNumber += 1
end
