import React, { useEffect } from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '../styles/globals.css';
import { FaArrowRight } from "react-icons/fa6";
import { TbPointFilled } from 'react-icons/tb';
import { SlArrowDown } from 'react-icons/sl';

const Story = () => {

  useEffect(() => {
    const handleScroll = () => {
      const img = document.getElementById('tegoImage');
      const overlay = document.getElementById('overlay');

      if (img && overlay) {
        const offset = window.pageYOffset;
        const opacity = Math.max(1 - offset / 300, 0);
        img.style.opacity = `${opacity}`;
        overlay.style.opacity = `${opacity}`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToContent = () => {
    const content = document.getElementById('mainContent');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header />
      <div className="relative h-screen fixed inset-0 z-10 flex flex-col items-center justify-center text-white bg-gradient-to-t from-gray-000 to-transparent">
        <div id="tegoImage" className="fixed inset-0 z-0">
          <Image
            src="/images/tego-full.png"
            alt="Tego"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
        <div id="overlay" className="fixed inset-0 mt-80 flex flex-col items-center justify-end text-white bg-gradient-to-t from-black to-transparent">
          <h1 className="text-6xl font-bold">READY FOR AN</h1>
          <h1 className="text-6xl font-bold text-gold mb-10" >ADVENTURE</h1>
          <button
            onClick={scrollToContent}
            className="px-8 py-4 bg-transparent text-gold"
          >
            <span>
              <SlArrowDown style={{height: '80px', width: '80px' }}/>
            </span>
          </button>
        </div>
      </div>
      <div id="mainContent" className="pt-60 bg-gray-000">
        <div className='flex justify-center mb-4'>
          <Image
            src="/images/seta.svg"
            alt="seta"
            width={40}
            height={40}
          />
        </div>
        <div className='w-full max-w-3xl p-12 mb-12 mx-auto text-white leading-relaxed text-justify'>
          <p className='mb-4'>Tybolt looked around. It had to be here somewhere. He flipped through the countless maps in his hands. The drawings and inscription were old and difficult to read, even for a mage like him. He glanced back at the large bare mountain. „This had to be the one, but where was it? Where was the cave they were looking for?“ He went through his papers again muttering and cussing. </p>
          <p className='mb-8'>The men behind him began to feel uneasy. They didn’t want to be here, here on the other side of the world on the edge of some desert. To make matters worse, they didn’t even know what their task was, other than to carry this large and unnecessarily heavy box. They could swear something was moving in there. On the other hand, the pay was relatively good and the alternatives worse. It was wartime, after all.</p>
          <p className='mb-8'>We’re going that way, “ Tybolt shouted, trudging onwards. The others hesitated, noticing the uncertainty in the mage’s voice. They lifted the big crate they brought onto a sled and began to pull. The rocky mountain side made it a difficult and dangerous endeavor.</p>
          <p className='mb-8'>After a while, the mage heard what he was hoping for. Singing! A crystal clear, high pitched melody that followed a beautiful tune like he had never heard before. They were close. This wasn’t any ordinary mountain in the northwest of Shurima. This was the home of mystical creatures. A species of highly intelligent beings, perhaps even smarter than humans. “At least they’re not destroying the world over magical runes” he thought to himself. The Brackern, as these creatures were called by the few who knew of their existence, were hibernating, buried deep down in a hidden valley waiting out the war. Right now, their song was soft and slow, but to those mages like Tybolt who could hear it, the sound was clear as a crystal, beguiling and beautiful, drowning out the noise around him. With the song in his ears, he felt his energy returning. Every step he took felt lighter. Determined he began to climb the barren mountainside. His companions, unaware of what had changed, tried to keep up with the mage.</p>
          <p className='mb-8'>Tybolt only stopped when a large cave opened up in front of them. They had reached their destination.</p>
          <p className='mb-8'>Open the crate,“ he whispered to his companions, still entranced by the beauty of the music, „we are at the right spot!“ The crate door fell open with a loud crack, interrupting the beautiful melody and pulling the mage back into reality. They had a mission to accomplish.</p>
          <p className='mb-4'>The monster in the crate pressed itself against the back wall, eyes wide open and nostrils flared. The men grabbed the chain the creature was tied down with and after several tries and with the combined strength of the entire group, they managed to pull the being out of his crate and deep into the cave.</p>
          <p className='mb-12'>Chain it down. We need to protect what lives beyond this cave and this monster will help us do so“, Tybolt exclaimed, turning towards his companions. „It’s small now but it will grow into a big creature. It will be large and strong, and this cave will be its home.”</p>
          <p className='mb-12 text-gold font-bold text-2xl'>-------------------</p>
          <p className='mb-4'>Hello my friends, it’s time, wake up!“</p>
          <p className='mb-4'>The big creature's face hovered over the tiny ledge on the side of the cave trying to catch a glimpse. As quietly as possible he shifted his body to get a better look, which was not an easy feat considering his massive size and the rather small cave. Every time his backplates scratched against one of the stalactites he flinched.</p>
          <p className='mb-4'>„It’s almost night, and Tego is waiting“ he whispered. </p>
          <p className='mb-4'>Slowly something began to move. </p>
          <p className='mb-4'>He held his hand under the ledge as a little ramp.</p>
          <p className='mb-4'>„Come on my friends, we need to go“</p>
          <p className='mb-4'>One by one, little fireflies climbed onto his hand.</p>
          <p className='mb-4'>Still tired, they stretched and shook off the dust. </p>
          <p className='mb-4'>Tego followed the scene closely, trying hard to hold his breath to not disturb them. </p>
          <p className='mb-4'>When he couldn’t hold it any longer and finally exhaled, the stream of air lifted his little friends up and they began to float in front of him.</p>
          <p className='mb-4'>One after another, they started to glow. At first a faint purple glimmer, but soon bright and strong. Like little fairies they danced around in the air, thanking him for waking them.</p>
          <p className='mb-8'>Tego couldn’t take his eyes off them.</p>
          <p className='mb-8'>But his work was not yet finished. He grabbed his beloved Lantern, a purple crystal held by the roots of a plant that grew around it and started walking. Followed by his dancing firefly friends. Slowly, he led his small entourage through the cave. Tego had to set a slow pace, to make sure his friends could keep up with him and he also wanted to greet the other creatures in the cave. He couldn’t do that if he was in a hurry. That would not be polite.</p>
          <p className='mb-8'>Tego knew the cave and its inhabitants, even if they were few, like the back of his hand. He spent countless hours exploring the cave system. No crack, no puddle, no stone was a stranger to him. They all had names, and if not, he would give them one.</p>
          <p className='mb-4'>As they passed through a small opening in the tunnel, Tego stopped to greet the bats preparing for their nightly hunt by the underground lake. They had moved in not too long ago, but he was happy to share his home with them. This cavern was big enough for many creatures, but for the longest time nothing even dared to approach the cave and Tego was very lonely.</p>
          <p className='mb-4'>Once a herd of mountain goats sought shelter in the cave from a heavy thunderstorm. They were freezing and hungry, so Tego wanted to help them, but as soon as he emerged with some big leaves from his leaf storage place they ran away. He never knew why</p>
          <p className='mb-4'>Maybe they were overwhelmed by his generosity, or maybe they didn’t like the way he decorated the entrance, which was a bit primitive to be fair, but he tried his best.</p>
          <p className='mb-8'>The bats weren’t too eager to live with him at first either, probably because of his loud chewing, but Tego was working on that, and eventually he was able to win them over with some food and a nice sleeping branch that he put up just for them.</p>
          <p className='mb-4'>At the end of the small opening the path split into five different directions, but without hesitation, Tego took the fourth and continued his journey. He hummed a little tune leading his small entourage through the tunnels. The fireflies followed him and danced to his melody. </p>
          <p className='mb-4'>This is the place where I met you for the first time! “</p>
          <p className='mb-4'>He pointed to his left, where a small river crossed the path.  </p>
          <p className='mb-4'>Tego would never forget his 2743rd expedition through the caves. It was by far his best.</p>
          <p className='mb-4'>He had discovered a small opening in the back of the cavern and even though he wasn’t built for it, he just knew he had to see where the opening led. Carefully he removed one stone after another until the hole was big enough to squeeze through. To anybody else, it might have looked like an ordinary path only leading to even more rocks, but Tego knew from experience, that every path could lead to new friends and beautiful finds. As he made his way down, he saw something he had never seen before. Little purple glowing dots flying around, painting the most beautiful patterns in the air. At first, he was scared, but soon they became best friends, and he showed them everything the cave had to offer. His sleeping place near the entrance, his favorite big stone by the river (his favorite small stone was somewhere else), the best lake for swimming and most importantly his storage room with all his greatest finds.</p>
          <p className='mb-8'>The fireflies liked the crystal lantern the most, which was understandable, because it was really pretty, and they often danced around it. And they loved exploring even more than Tego did. And they were brave. While he had been on many expeditions before, he never went down the deepest tunnels. They were dark and scary. But his friends encouraged him, and they led the way. And soon even the darkest tunnel was illuminated by the light of the fireflies and all their secrets were revealed.</p>
          <p className='mb-8'>“Here we are”</p>
          <p className='mb-4'>With a satisfied look on his face, Tego sat down at the cave entrance and watched the fireflies buzzing out into the night. The landscape was bathed in dark blue, only lit by the stars scattered across the clear sky. And now his friends added their light. Next to them the sparce plant life began sprouting in the most beautiful shapes, responding to the fireflies with their own luminous patterns and ornaments.</p>
          <p className='mb-8'>The rodents left their burrows, the beetles their hiding places and the birds their nests and soon a whole pallet of sounds began filling the mountainside with the most beautiful melodies.</p>
          <p className='mb-8'>Tego had seen this spectacle countless times but was still amazed by the beauty of the things beyond his cave, but sadly this was the one place where he would not follow them.</p>
          <p className='mb-4'>Tego was afraid. Immediately after the fireflies left his side, he felt it. It wasn’t the same feeling he usually had in his home, his comfortable cave. It was different. He felt alone when he saw the vast landscapes before him. He felt left out. Like he wasn’t supposed to be part of this world.</p>
          <p className='mb-4'>He had never left his cave for as long as he could remember. Yes, it was lonely in there too from time to time, but he was never alone. He knew everything and everyone and didn’t need to be afraid, but out there was a strange world. Beautiful, with the fireflies around, but strange and dark without them. He didn’t know the plants that grew there, he didn’t know what creatures lived there and he didn’t know where the paths would lead him.</p>
          <p className='mb-8'>And he heard things about the creatures outside. Bad things. They weren’t as nice and friendly as the creatures in his cave. And not nearly as polite. They rarely came close to his cave, but so far, they had left him alone, probably because of his snoring,</p>
          <p className='mb-8'>Tego didn’t want to think of these things anymore and decided to watch his friends again. They were dancing around in the moonlight, enjoying themselves. He started humming his little tune again. He didn’t know where he knew it from, but he liked it. It was soothing to him, and he didn’t feel so alone anymore.</p>
          <p className='mb-4'>Suddenly the fireflies came back to him, one after another, and started dancing around him to the rhythm of his tune. And attracted by the light, small animals began to join them at the cave entrance. Slowly and cautiously, they looked at Tego, who smiled and began introducing himself to them.</p>
          <p className='mb-4'>Now he too was part of the beautiful spectacle he got to watch every night and like the plants and the stars around him, intricate patterns began to glow on his backplates, making him shine in the most beautiful ways.</p>
          <p className='mb-4'>The things that looked so dangerous to him didn’t seem so alien anymore. He couldn’t see every path and he didn’t know where they would lead him, but Tego knew that every path could lead to new friends and beautiful finds.</p>
          <p className='mb-8'>He was still afraid, but the firefly filled his heart with courage. Wherever Tego would go, he would be safe as long as his friends were beside him. This was where his home was. Tego wanted to make new friends! He wanted to see the world!</p>
          <p className='mb-12'>So, he took the first step...</p>
        </div>
        <div className='flex justify-center mb-20'>
          <a href="/story" target="_blank" rel="noopener noreferrer">
           <button className="px-8 py-4 border-gold border-2 bg-transparent text-gold">
            <span style={{ display: 'flex', alignItems: 'center' }}> READ TEGO'S BIO
              <TbPointFilled style={{ marginLeft: '10px' }} />
              <FaArrowRight style={{ marginLeft: '2px' }} />
            </span>
           </button>
          </a>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Story;