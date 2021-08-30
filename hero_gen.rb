require 'json'
require 'pixelart'

COMPONENTS = {
face: { types: ['', 'myface1'] },
mouth: {  types: ['', 'mymouth1'] },
eyes: { types: ['', 'myeyes1'] }
}

def generate_hero( codes )
  hero = Pixelart::Image.new( 32, 32 )
  $heroMetaData = {
      "name"=> "",
      "description" => "", 
      "image" => "",
      "face" => "",       ##Face 
      "mouth" => "",      ##Mouth
      "eyes" => ""       ##Eyes
      }
           
  COMPONENTS.each_with_index do |(key,part),i|
    code  = codes[i] 
    if code != 0                  
      attribute = part[:types][ code-1 ]
      path = "./components/#{key}/#{key}#{code}.png"
      part = Pixelart::Image.read( path ) 
      hero.compose!( part )
      $heroMetaData["#{key}"] = "#{key}#{code}"
    end
  end                            
  hero                 
end                  

