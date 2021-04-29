

//categories
let athleticshorts, fancyskirt, flowerskirt, jeans, jeanshorts, leggings, sweatpants, whitejeans, whiteshorts;

let browntee, crewneck, fancyshirt, graphictee, hoodie, sporttank, sweater, tanktop, turtleneck;

let blackh, blonde, blondeombre, brunette, bun, funkyred, ginger, greenh, pinkh;

let blackboots, cowboyboots, flats, flipflops, nikes, rainboots, sandals;

let anklet, bracelet, choker, hoops, necklace, pearls; 
    
let blueback, dotsback, greenback, pinkback, purpleback, yellowback; 

let body;

//arrays
let pants = ['athletic shorts', 'fancy skirt', 'flower skirt', 'jeans', 'jean shorts', 'leggings', 'sweatpants', 'white jeans', 'white shorts'];

let shirts = ['brown tee', 'crewneck', 'fancy shirt', 'graphic tee', 'hoodie', 'sport tank', 'sweater', 'tank top', 'turtleneck'];

let hair = ['black', 'blonde', 'blonde ombre', 'brunette', 'bun', 'funky red', 'redhead', 'green', 'pink'];

let shoes = ['black boots', 'cowboy boots', 'flats', 'flipflops', 'nikes', 'rainboots', 'sandals'] ;

let accessories = ['anklet', 'bracelet', 'choker', 'hoops', 'necklace', 'pearls'];

let backgrounds = ['blue background', 'dotted background', 'green background', 'pink background', 'purple background', 'yellow background'];


let selectpants, selectshirts, selecthair, selectshoes, selectaccessories, selectbackgrounds;

let bodyx = 100;
let bodyy = 100;
let resize1 = 500;
let resize2 = 680;

let start = 0;
let end = 0;
let backx = 800;
let backy = 800;


function preload(){
  // body = createImg ("body.png", "swag");

  
  
  // boots.hide();
  
  blueback = createImg("blueback.png", 'swag');
  dotsback = createImg("dotsback.png", 'swag');
  greenback = createImg("greenback.png", 'swag');
  pinkback = createImg("pinkback.png", 'swag');
  purpleback = createImg("purpleback.png", 'swag');
  yellowback = createImg("yellowback.png", 'swag');

  body = createImg("goodbody.png", 'swag');
  
  athleticshorts = createImg("athleticshorts.png", 'swag');
  fancyskirt = createImg("fancyskirt.png", 'swag');
  flowerskirt = createImg("flowerskirt.png", 'swag');
  jeans = createImg("jeans.png", 'swag');
  jeanshorts = createImg("jeanshorts.png", 'swag'); 
  leggings = createImg("leggings.png", 'swag');
  sweatpants = createImg("sweatpants.png", 'swag');
  whitejeans = createImg("whitejeans.png", 'swag');
  whiteshorts = createImg("whiteshorts.png", 'swag');
  
  browntee = createImg("browntee.png", 'swag'); 
  crewneck = createImg("crewneck.png", 'swag');
  fancyshirt = createImg("fancyshirt.png", 'swag');
  graphictee = createImg("graphictee.png", 'swag'); 
  hoodie = createImg("hoodie.png", 'swag');
  sporttank = createImg("sporttank.png", 'swag');
  sweater = createImg("sweater.png", 'swag');
  tanktop = createImg("tanktop.png", 'swag');
  turtleneck = createImg("turtleneck.png", 'swag');
  
  blackh = createImg("black.png", 'swag');
  blonde = createImg("blonde.png", 'swag');
  blondeombre = createImg("blondeombre.png", 'swag');
  brunette = createImg("brunette.png", 'swag');
  bun = createImg("bun.png", 'swag');
  funkyred = createImg("funkyred.png", 'swag');
  ginger = createImg("ginger.png", 'swag');
  greenh = createImg("green.png", 'swag');
  pinkh = createImg("pink.png", 'swag');
  
  blackboots = createImg("blackboots.png", 'swag');
  cowboyboots = createImg("cowboyboots.png", 'swag');
  flats = createImg("flats.png", 'swag');
  flipflops = createImg("flipflops.png", 'swag');
  nikes = createImg("nikes.png", 'swag');
  rainboots = createImg("rainboots.png", 'swag');
  sandals = createImg("sandals.png", 'swag');
  
  anklet = createImg("anklet.png", 'swag');
  bracelet = createImg("bracelet.png", 'swag');
  choker = createImg("choker.png", 'swag');
  hoops = createImg("hoops.png", 'swag');
  necklace = createImg("necklace.png", 'swag');
  pearls = createImg("pearls.png", 'swag');
  
  
  
  
  
  body.show();
  body.position(bodyx, bodyy);
  body.size(resize1, resize2);
  
athleticshorts.hide();
fancyskirt.hide();
flowerskirt.hide();
jeans.hide();
jeanshorts.hide();
leggings.hide();
sweatpants.hide();
whitejeans.hide();
whiteshorts.hide();
  
browntee.hide();
crewneck.hide();
fancyshirt.hide();
graphictee.hide();
hoodie.hide();
sporttank.hide();
sweater.hide();
tanktop.hide();
turtleneck.hide();

blackh.hide();
blonde.hide();
blondeombre.hide();
brunette.hide();
bun.hide();
funkyred.hide();
ginger.hide();
greenh.hide();
pinkh.hide();
  
blackboots.hide();
cowboyboots.hide();
flats.hide();
flipflops.hide();
nikes.hide();
rainboots.hide();
sandals.hide();

anklet.hide();
bracelet.hide();
choker.hide();
hoops.hide();
necklace.hide();
pearls.hide();

blueback.hide();
dotsback.hide();
greenback.hide();
pinkback.hide();
purpleback.hide();
yellowback.hide();
  

  
  
}


function setup() {
  noCanvas();
  
  
  

  
//   radioshoes = createSelect();
  
//   for(let i = 0; i <feets.length; i++){
//     radioshoes.option(feets[i]);
//   }
//   textAlign(CENTER);
  

 
  
  selectshoes = createSelect();
  selectshoes.option()
  for(let i = 0; i <shoes.length; i++){
    selectshoes.option(shoes[i]);
  }
  textAlign(CENTER);
  
  selectshirts = createSelect();
  for(let i = 0; i <shirts.length; i++){
    selectshirts.option(shirts[i]);
  }
  textAlign(CENTER);
  
  selectpants = createSelect();
  for(let i = 0; i <pants.length; i++){
    selectpants.option(pants[i]);
  }
  textAlign(CENTER);
  
  selecthair = createSelect();
  for(let i = 0; i <hair.length; i++){
    selecthair.option(hair[i]);
  }
  textAlign(CENTER);
  
  selectaccessories = createSelect();
  for(let i = 0; i <accessories.length; i++){
    selectaccessories.option(accessories[i]);
  }
  textAlign(CENTER);
  
  selectbackgrounds = createSelect();
  for(let i = 0; i <backgrounds.length; i++){
    selectbackgrounds.option(backgrounds[i]);
  }
  textAlign(CENTER);
 
  
//end of setup  
}



function draw() {
  
  let shoeval = selectshoes.value();
  let hairval = selecthair.value();
  let shirtval = selectshirts.value();
  let pantsval = selectpants.value();
  let accessval = selectaccessories.value();
  let backval = selectbackgrounds.value();
  
  

  
//   if(shoeval == 'boots'){
    
//   boots.show();
//   boots.position(bodyx, bodyy)
//   boots.size(resize1, resize2)
//   } else{
//     boots.hide();
//   }
  
//   if(shoeval == 'shoes'){
    
//   shoes.show();
//   shoes.position(bodyx, bodyy)
//   shoes.size(resize1, resize2)
//   } else{
//     shoes.hide();
//   }
  







//shoe selections 
    if(shoeval == 'black boots'){
    
  blackboots.show();
  blackboots.position(bodyx, bodyy)
  blackboots.size(resize1, resize2)
  } else{
    blackboots.hide();
  }
  
  if(shoeval == 'cowboy boots'){
    
  cowboyboots.show();
  cowboyboots.position(bodyx, bodyy)
  cowboyboots.size(resize1, resize2)
  } else{
    cowboyboots.hide();
  }
  
  if(shoeval == 'flats'){
    
  flats.show();
  flats.position(bodyx, bodyy)
  flats.size(resize1, resize2)
  } else{
    flats.hide();
  }
  
  if(shoeval == 'flipflops'){
    
  flipflops.show();
  flipflops.position(bodyx, bodyy)
  flipflops.size(resize1, resize2)
  } else{
    flipflops.hide();
  }
  
  if(shoeval == 'nikes'){
    
  nikes.show();
  nikes.position(bodyx, bodyy)
  nikes.size(resize1, resize2)
  } else{
    nikes.hide();
  }
  
  if(shoeval == 'rainboots'){
    
  rainboots.show();
  rainboots.position(bodyx, bodyy)
  rainboots.size(resize1, resize2)
  } else{
    rainboots.hide();
  }
  
  if(shoeval == 'sandals'){
    
  sandals.show();
  sandals.position(bodyx, bodyy)
  sandals.size(resize1, resize2)
  } else{
    sandals.hide();
  }
  
//pants selections



if(pantsval == 'athletic shorts'){
    
  athleticshorts.show();
  athleticshorts.position(bodyx, bodyy)
  athleticshorts.size(resize1, resize2)
  } else{
    athleticshorts.hide();
  }
  
  if(pantsval == 'fancy skirt'){
    
  fancyskirt.show();
  fancyskirt.position(bodyx, bodyy)
  fancyskirt.size(resize1, resize2)
  } else{
    fancyskirt.hide();
  }
  
  if(pantsval == 'flower skirt'){
    
  flowerskirt.show();
  flowerskirt.position(bodyx, bodyy)
  flowerskirt.size(resize1, resize2)
  } else{
    flowerskirt.hide();
  }
  
  if(pantsval == 'jeans'){
    
  jeans.show();
  jeans.position(bodyx, bodyy)
  jeans.size(resize1, resize2)
  } else{
    jeans.hide();
  }
  
  if(pantsval == 'jean shorts'){
    
  jeanshorts.show();
  jeanshorts.position(bodyx, bodyy)
  jeanshorts.size(resize1, resize2)
  } else{
    jeanshorts.hide();
  }
  
  if(pantsval == 'leggings'){
    
  leggings.show();
  leggings.position(bodyx, bodyy)
  leggings.size(resize1, resize2)
  } else{
    leggings.hide();
  }
  
  if(pantsval == 'sweatpants'){
    
  sweatpants.show();
  sweatpants.position(bodyx, bodyy)
  sweatpants.size(resize1, resize2)
  } else{
    sweatpants.hide();
  }
  
  if(pantsval == 'white jeans'){
    
  whitejeans.show();
  whitejeans.position(bodyx, bodyy)
  whitejeans.size(resize1, resize2)
  } else{
    whitejeans.hide();
  }
  
  if(pantsval == 'white shorts'){
    
  whiteshorts.show();
  whiteshorts.position(bodyx, bodyy)
  whiteshorts.size(resize1, resize2)
  } else{
    whiteshorts.hide();
  }
  
//shirt selections









  
if(shirtval == 'brown tee'){
    
  browntee.show();
  browntee.position(bodyx, bodyy)
  browntee.size(resize1, resize2)
  } else{
    browntee.hide();
  }
  
  if(shirtval == 'crewneck'){
    
  crewneck.show();
  crewneck.position(bodyx, bodyy)
  crewneck.size(resize1, resize2)
  } else{
    crewneck.hide();
  }
  
  if(shirtval == 'fancy shirt'){
    
  fancyshirt.show();
  fancyshirt.position(bodyx, bodyy)
  fancyshirt.size(resize1, resize2)
  } else{
    fancyshirt.hide();
  }
  
  if(shirtval == 'graphic tee'){
    
  graphictee.show();
  graphictee.position(bodyx, bodyy)
  graphictee.size(resize1, resize2)
  } else{
    graphictee.hide();
  }
  
  if(shirtval == 'hoodie'){
    
  hoodie.show();
  hoodie.position(bodyx, bodyy)
  hoodie.size(resize1, resize2)
  } else{
    hoodie.hide();
  }
  
  if(shirtval == 'sport tank'){
    
  sporttank.show();
  sporttank.position(bodyx, bodyy)
  sporttank.size(resize1, resize2)
  } else{
    sporttank.hide();
  }
  
  if(shirtval == 'sweater'){
    
  sweater.show();
  sweater.position(bodyx, bodyy)
  sweater.size(resize1, resize2)
  } else{
    sweater.hide();
  }
  
  if(shirtval == 'tank top'){
    
  tanktop.show();
  tanktop.position(bodyx, bodyy)
  tanktop.size(resize1, resize2)
  } else{
    tanktop.hide();
  }
  
  if(shirtval == 'turtleneck'){
    
  turtleneck.show();
  turtleneck.position(bodyx, bodyy)
  turtleneck.size(resize1, resize2)
  } else{
    turtleneck.hide();
  }
  
  
//hair selections






  
if(hairval == 'black'){
    
  blackh.show();
  blackh.position(bodyx, bodyy)
  blackh.size(resize1, resize2)
  } else{
    blackh.hide();
  }
  
  if(hairval == 'blonde'){
    
  blonde.show();
  blonde.position(bodyx, bodyy)
  blonde.size(resize1, resize2)
  } else{
    blonde.hide();
  }
  
  if(hairval == 'blonde ombre'){
    
  blondeombre.show();
  blondeombre.position(bodyx, bodyy)
  blondeombre.size(resize1, resize2)
  } else{
    blondeombre.hide();
  }
  
  if(hairval == 'brunette'){
    
  brunette.show();
  brunette.position(bodyx, bodyy)
  brunette.size(resize1, resize2)
  } else{
    brunette.hide();
  }
  
  if(hairval == 'bun'){
    
  bun.show();
  bun.position(bodyx, bodyy)
  bun.size(resize1, resize2)
  } else{
    bun.hide();
  }
  
  if(hairval == 'funky red'){
    
  funkyred.show();
  funkyred.position(bodyx, bodyy)
  funkyred.size(resize1, resize2)
  } else{
    funkyred.hide();
  }
  
  if(hairval == 'redhead'){
    
  ginger.show();
  ginger.position(bodyx, bodyy)
  ginger.size(resize1, resize2)
  } else{
    ginger.hide();
  }
  
  if(hairval == 'green'){
    
  greenh.show();
  greenh.position(bodyx, bodyy)
  greenh.size(resize1, resize2)
  } else{
    greenh.hide();
  }
  
  if(hairval == 'pink'){
    
  pinkh.show();
  pinkh.position(bodyx, bodyy)
  pinkh.size(resize1, resize2)
  } else{
    pinkh.hide();
  }
  
  
//accessories selections
  







if(accessval == 'anklet'){
    
  anklet.show();
  anklet.position(bodyx, bodyy)
  anklet.size(resize1, resize2)
  } else{
    anklet.hide();
  }
  
  if(accessval == 'bracelet'){
    
  bracelet.show();
  bracelet.position(bodyx, bodyy)
  bracelet.size(resize1, resize2)
  } else{
    bracelet.hide();
  }
  
  if(accessval == 'choker'){
    
  choker.show();
  choker.position(bodyx, bodyy)
  choker.size(resize1, resize2)
  } else{
    choker.hide();
  }
  
  if(accessval == 'hoops'){
    
  hoops.show();
  hoops.position(bodyx, bodyy)
  hoops.size(resize1, resize2)
  } else{
    hoops.hide();
  }
  
  if(accessval == 'necklace'){
    
  necklace.show();
  necklace.position(bodyx, bodyy)
  necklace.size(resize1, resize2)
  } else{
    necklace.hide();
  }
  
  if(accessval == 'pearls'){
    
  pearls.show();
  pearls.position(bodyx, bodyy)
  pearls.size(resize1, resize2)
  } else{
    pearls.hide();
  }

  
//background selections

  
  
if(backval == 'blue background'){
    
  blueback.show();
  blueback.position(start, end)
  blueback.size(backx, backy)
  } else{
    blueback.hide();
  }
  
  if(backval == 'dotted background'){
    
  dotsback.show();
  dotsback.position(start, end)
  dotsback.size(backx, backy)
  } else{
    dotsback.hide();
  }
  
  if(backval == 'green background'){
    
  greenback.show();
  greenback.position(start, end)
  greenback.size(backx, backy)
  } else{
    greenback.hide();
  }
  
  if(backval == 'pink background'){
    
  pinkback.show();
  pinkback.position(start, end)
  pinkback.size(backx, backy)
  } else{
    pinkback.hide();
  }
  
  if(backval == 'purple background'){
    
  purpleback.show();
  purpleback.position(start, end)
  purpleback.size(backx, backy)
  } else{
    purpleback.hide();
  }
  
  if(backval == 'yellow background'){
    
  yellowback.show();
  yellowback.position(start, end)
  yellowback.size(backx, backy)
  } else{
    yellowback.hide();
  }
  
//end of draw
}