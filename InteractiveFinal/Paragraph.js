var myText
function preload() {
  //myText = loadStrings('data/text.txt');
}
var myText= "In the depths of the Amazon rainforest, where ancient whispers echo through the foliage and unseen energies dance in the air, the lizard people dwell, guardians of cosmic mysteries unbeknownst to the world above. Their society revolves around the sacred practice of astral projection, transcending physical boundaries to explore the spiritual depths of the universe. Among them is Kavi, a shaman whose mind teeters on the edge of madness, a conduit for the chaotic energies pulsating through the astral plane. Kavi's journey into the realms beyond began with a chance encounter in the swirling vortex of the astral desert. There, amidst shifting sands and celestial radiance, he communed with Jesus, not as a mere historical figure but as a cosmic entity embodying the essence of divine revelation. In this encounter, Kavi's consciousness fractured, his perceptions spiraling into a maelstrom of intergalactic wars fought over the destiny of galaxies, where cosmic battles raged amidst the void. As Kavi delved deeper into the mysteries of the astral realm, he stumbled upon whispers of a new force permeating the cosmic fabric - 5G. The American government, in its relentless pursuit of technological advancement, had unwittingly unleashed this potent energy, disrupting the delicate balance of the astral plane. Yet, amidst the chaos, Kavi unearthed the ancient secrets of the chakras, dormant energy centers within every living being. Through intense meditation and introspection, he harnessed their power, channeling it into his astral projections. Despite the temptations and trials that threatened to consume him, Kavi emerged as a revered figure among the lizard people, guiding them through the cosmic labyrinth of enlightenment and shaping the very fabric of reality with their arcane wisdom.";


function setup() {
  createCanvas(windowWidth, windowHeight);
  background (0, 255, 255);
  textSize (24);
  noStroke();
  textFont("Trebuchet MS");
  textAlign(CENTER);
  fill(0,0,0);
}


function draw() {
  background(0, 255, 255);
  textLeading(sin(frameCount*0.01)*50);
  textLeading(mouseY/5);
  text(myText, int(windowWidth/8), windowHeight/4, int(windowWidth/4*3), windowHeight);
  
}
