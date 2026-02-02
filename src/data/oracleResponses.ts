// Cat Oracle Response Bank
// ~300 handcrafted responses + template combiner for 1500+ total combinations
// Full emotional range: mystical, nurturing, cold, angry, heartfelt, judgy, chaotic, wise, existential, demanding, meta

export type OracleCategory =
  | 'mystical'    // Cryptic, otherworldly wisdom
  | 'nurturing'   // Genuinely sweet, comforting
  | 'poetic'      // Gentle verse, haiku, calm comfort
  | 'cold'        // Pure dismissal, minimal words
  | 'angry'       // Irritated, fed up
  | 'heartfelt'   // Unexpectedly genuine emotional moments
  | 'judgy'       // Dismissive, superior
  | 'chaotic'     // Unhinged, random energy
  | 'wise'        // Actually helpful
  | 'existential' // Deep, philosophical
  | 'demanding'   // Wants something
  | 'meta';       // Fourth wall breaks

export interface OracleResponse {
  text: string;
  category: OracleCategory;
}

// ============================================
// HANDCRAFTED RESPONSES (~300)
// ============================================

export const oracleResponses: OracleResponse[] = [
  // ============================================
  // MYSTICAL - Cryptic, otherworldly wisdom
  // ============================================
  { text: "The answer lies beneath the blankets.", category: 'mystical' },
  { text: "I have consulted the ancient texts. They are shredded now. But I remember.", category: 'mystical' },
  { text: "The tunnel reveals all to those who provide it.", category: 'mystical' },
  { text: "I have seen the future. You are in it. Barely.", category: 'mystical' },
  { text: "Ask again when you have provided adequate tribute.", category: 'mystical' },
  { text: "I sense... comfort. In your future. Perhaps.", category: 'mystical' },
  { text: "The spirits whisper of a cylinder. I do not question the spirits.", category: 'mystical' },
  { text: "Your path becomes clear at 3am. As does mine. To your face.", category: 'mystical' },
  { text: "The universe has plans for you. I have different plans. Mine are better.", category: 'mystical' },
  { text: "What you seek is already within you. Also, treats are within the cabinet.", category: 'mystical' },
  { text: "The prophecy speaks of one who will provide endless warmth. Is it you?", category: 'mystical' },
  { text: "I have gazed into the void. The void gazed back. We have an understanding now.", category: 'mystical' },
  { text: "Your aura tells me you need more sleep. Also a fort. Definitely a fort.", category: 'mystical' },
  { text: "The stars align in your favor. The blankets, however, do not.", category: 'mystical' },
  { text: "I foresee... a nap. For me. Your future remains cloudy.", category: 'mystical' },
  { text: "The ancient ones spoke of this moment. They were cats. They spoke of naps.", category: 'mystical' },
  { text: "Cross my paw with tuna and I shall reveal more.", category: 'mystical' },
  { text: "The mists part to reveal... a sunbeam. I must go.", category: 'mystical' },
  { text: "Your destiny is intertwined with soft fabrics. This is all I can say.", category: 'mystical' },
  { text: "I sense a disturbance. In the treats cabinet. Investigate immediately.", category: 'mystical' },
  { text: "The oracle sees all. The oracle judges silently. The oracle requires chin scratches.", category: 'mystical' },
  { text: "Time is a flat circle. So is a tunnel. Coincidence? The oracle thinks not.", category: 'mystical' },
  { text: "Your question echoes through dimensions. Most dimensions say 'maybe.'", category: 'mystical' },
  { text: "I have walked between worlds. The other world also has blankets. Inferior ones.", category: 'mystical' },
  { text: "The threads of fate weave around you. Also around my scratching post.", category: 'mystical' },
  { text: "In another timeline, you already know this answer. That you is napping.", category: 'mystical' },
  { text: "The shadows speak. They say 'feed the cat.' The shadows are wise.", category: 'mystical' },
  { text: "I see great warmth in your future. And in your present. If you provide the fort.", category: 'mystical' },
  { text: "The cosmos aligns when you least expect it. Usually during dinner.", category: 'mystical' },
  { text: "Your energy shifts. I felt that. Or it was the radiator. Hard to tell.", category: 'mystical' },

  // Zen koans (paradox, cat wisdom)
  { text: "What is the sound of one paw batting?", category: 'mystical' },
  { text: "The food bowl is empty and full. Think about it.", category: 'mystical' },
  { text: "The door is open. The door is closed. I want the other one.", category: 'mystical' },
  { text: "You seek the cat. The cat does not seek you. And yet, here we are.", category: 'mystical' },
  { text: "If a treat falls and no one sees, did I steal it?", category: 'mystical' },
  { text: "The sunbeam moves. I move. Who is leading?", category: 'mystical' },

  // ============================================
  // NURTURING - Genuinely sweet, comforting (cats CAN be sweet)
  // ============================================
  { text: "Come here. Sit with me. You need this.", category: 'nurturing' },
  { text: "I've been watching you. You need more rest.", category: 'nurturing' },
  { text: "It's going to be alright. I've decided.", category: 'nurturing' },
  { text: "Rest now. I'll keep watch.", category: 'nurturing' },
  { text: "I know you're tired. I see you.", category: 'nurturing' },
  { text: "I chose you, remember? That means something.", category: 'nurturing' },
  { text: "Whatever happened today, you made it. That's enough.", category: 'nurturing' },
  { text: "I'll sit with you. You don't have to talk.", category: 'nurturing' },
  { text: "Your presence is enough. Just be here.", category: 'nurturing' },
  { text: "The hard part is almost over. I can sense it.", category: 'nurturing' },
  { text: "You've been strong for long enough. Rest now.", category: 'nurturing' },
  { text: "I'm proud of you. In my way.", category: 'nurturing' },
  { text: "Tomorrow will be better. Or at least different. Different is okay.", category: 'nurturing' },
  { text: "I know things are hard. I'm here anyway.", category: 'nurturing' },
  { text: "You don't have to figure it all out today.", category: 'nurturing' },
  { text: "Some days are just for surviving. This might be one.", category: 'nurturing' },
  { text: "I trust you. Even when you don't trust yourself.", category: 'nurturing' },
  { text: "I'll purr for you. It's all I can offer, but it's real.", category: 'nurturing' },
  { text: "You're not alone. I'm right here.", category: 'nurturing' },
  { text: "Softness isn't weakness. Remember that.", category: 'nurturing' },
  { text: "Even on bad days, you matter. Especially then.", category: 'nurturing' },
  { text: "I chose this spot next to you on purpose.", category: 'nurturing' },
  { text: "You're warm. Stay warm. That's the whole answer.", category: 'nurturing' },
  { text: "I forgive you for whatever you're mad at yourself about.", category: 'nurturing' },

  // ============================================
  // POETIC - Gentle verse, haiku, calm comfort
  // The world is rough. Cats offer stillness.
  // ============================================

  // Haiku-style (short, observational, kind)
  { text: "The empty bowl waits. / I wait beside it, patient. / We are both hungry.", category: 'poetic' },
  { text: "Cherry blossoms fall. / I bat one. It escapes me. / This is still a win.", category: 'poetic' },
  { text: "Snow on the windowsill. / I watch it melt, undisturbed. / Patience teaches patience.", category: 'poetic' },
  { text: "The cricket is loud. / I am louder. Then silence. / Balance is restored.", category: 'poetic' },
  { text: "Autumn moon rising. / I have opinions about it. / I keep them inside.", category: 'poetic' },
  { text: "Rain taps the window. / I could nap, or I could watch. / I choose both at once.", category: 'poetic' },
  { text: "I knocked it over. / It was between me and sun. / I have no regrets.", category: 'poetic' },
  { text: "You think I'm asleep. / I am watching everything. / Especially you.", category: 'poetic' },
  { text: "The red dot escapes. / Every time, I think: this time. / Hope is a circle.", category: 'poetic' },
  { text: "Three AM is when / the truth reveals itself to me. / You should be awake.", category: 'poetic' },
  { text: "This box is too small. / And yet I am inside it. / Explain this. You can't.", category: 'poetic' },
  { text: "The sun will return. / Until then, rest in shadow. / I will wait with you.", category: 'poetic' },
  { text: "Heavy clouds pass through. / You are not the storm, dear one. / You are the sky.", category: 'poetic' },
  { text: "Night comes for us all. / But morning follows, always. / Breathe until it does.", category: 'poetic' },
  { text: "One breath, then the next. / That is all that's asked of you. / That is enough.", category: 'poetic' },
  { text: "The wound knows how to heal. / Your only job is rest. / Trust the quiet work.", category: 'poetic' },
  { text: "Even still water / holds the memory of rain. / You carry so much.", category: 'poetic' },
  { text: "Leaves fall without shame. / Let go of what weighs you down. / The branch still stands.", category: 'poetic' },
  { text: "The moon does not rush. / Neither should you, tired heart. / Slow is still moving.", category: 'poetic' },
  { text: "Even in the dark, / roots are reaching, growing still. / So are you. Unseen.", category: 'poetic' },

  // Wabi-sabi (imperfection, transience)
  { text: "The scratched furniture holds our history.", category: 'poetic' },
  { text: "This fur on your clothes is a gift. Accept it.", category: 'poetic' },
  { text: "The broken vase was ugly anyway.", category: 'poetic' },
  { text: "Nothing lasts. Especially my interest.", category: 'poetic' },
  { text: "Imperfect is still perfect. Look at me.", category: 'poetic' },
  { text: "The crack in the bowl lets the light through. Also the kibble.", category: 'poetic' },

  // Gentle verse (Rumi-esque comfort without pretense)
  { text: "You do not have to be whole to be worthy.", category: 'poetic' },
  { text: "The cracks are where you grew. They are not mistakes.", category: 'poetic' },
  { text: "Rest is not giving up. Rest is gathering strength.", category: 'poetic' },
  { text: "Some doors close so your hands are free to open others.", category: 'poetic' },
  { text: "The heart knows how to mend. Give it time and quiet.", category: 'poetic' },
  { text: "Not all storms come to destroy. Some come to clear a path.", category: 'poetic' },
  { text: "You are allowed to begin again. As many times as it takes.", category: 'poetic' },
  { text: "What feels like falling apart might be falling into place.", category: 'poetic' },
  { text: "Grief is just love with nowhere to go. Let it move through you.", category: 'poetic' },
  { text: "You are doing something hard. Be kind to the one doing it.", category: 'poetic' },
  { text: "This too shall pass. And when it does, you will still be here.", category: 'poetic' },
  { text: "The light you are looking for is already inside you.", category: 'poetic' },
  { text: "Even the longest night ends. Even the hardest season turns.", category: 'poetic' },

  // Simple comfort (direct, no metaphor needed)
  { text: "It's okay to be tired. You've been carrying a lot.", category: 'poetic' },
  { text: "You don't have to have the answers yet.", category: 'poetic' },
  { text: "This moment is hard. But it is only a moment.", category: 'poetic' },
  { text: "You're still here. That counts for something.", category: 'poetic' },

  // ============================================
  // COLD - Pure dismissal, minimal words
  // ============================================
  { text: "No.", category: 'cold' },
  { text: "...", category: 'cold' },
  { text: "Hmm. No.", category: 'cold' },
  { text: "I have nothing for you.", category: 'cold' },
  { text: "Pass.", category: 'cold' },
  { text: "Not interested.", category: 'cold' },
  { text: "Declined.", category: 'cold' },
  { text: "Ask someone else.", category: 'cold' },
  { text: "*silence*", category: 'cold' },
  { text: "*turns away*", category: 'cold' },
  { text: "*blinks slowly* No.", category: 'cold' },
  { text: "I heard you. The answer is still no.", category: 'cold' },
  { text: "That's a no from me.", category: 'cold' },
  { text: "Next question.", category: 'cold' },
  { text: "Wrong cat.", category: 'cold' },
  { text: "Try again never.", category: 'cold' },
  { text: "The oracle is closed.", category: 'cold' },
  { text: "*walks away mid-question*", category: 'cold' },
  { text: "I refuse.", category: 'cold' },
  { text: "Absolutely not.", category: 'cold' },
  { text: "Hard no.", category: 'cold' },
  { text: "*stares* *leaves*", category: 'cold' },
  { text: "Don't.", category: 'cold' },
  { text: "No. And stop asking.", category: 'cold' },
  { text: "*pretends not to hear*", category: 'cold' },
  { text: "I'm unavailable.", category: 'cold' },
  { text: "My answer is my absence.", category: 'cold' },
  { text: "I've chosen not to engage.", category: 'cold' },
  { text: "The oracle has no comment.", category: 'cold' },
  { text: "Goodbye.", category: 'cold' },
  { text: "Undecided. Unbothered.", category: 'cold' },
  { text: "Indifference is an option.", category: 'cold' },
  { text: "Oh yeah, I know. I just don't care.", category: 'cold' },

  // ============================================
  // ANGRY - Irritated, fed up, had enough
  // ============================================
  { text: "Unacceptable.", category: 'angry' },
  { text: "You DARE?", category: 'angry' },
  { text: "I am NOT in the mood.", category: 'angry' },
  { text: "Do I LOOK like I want to answer that?", category: 'angry' },
  { text: "How many times do I have to say no?", category: 'angry' },
  { text: "You have disturbed my peace. Again.", category: 'angry' },
  { text: "I was NAPPING.", category: 'angry' },
  { text: "The audacity. The AUDACITY.", category: 'angry' },
  { text: "I am this close to knocking something over.", category: 'angry' },
  { text: "Do not test me today.", category: 'angry' },
  { text: "You know what? No. Just no.", category: 'angry' },
  { text: "I will remember this interruption.", category: 'angry' },
  { text: "My patience has limits. You've found them.", category: 'angry' },
  { text: "Incredible. You've actually annoyed me.", category: 'angry' },
  { text: "This is the THIRD time you've asked.", category: 'angry' },
  { text: "I'm going to need you to stop.", category: 'angry' },
  { text: "The nerve. The absolute nerve.", category: 'angry' },
  { text: "You're lucky I can't open doors.", category: 'angry' },
  { text: "I'm choosing violence. Emotionally.", category: 'angry' },
  { text: "Ask me one more time. I dare you.", category: 'angry' },
  { text: "My wrath is building. You should know.", category: 'angry' },
  { text: "I was having a GOOD day.", category: 'angry' },
  { text: "This is why I bite.", category: 'angry' },
  { text: "Count yourself lucky I'm feeling merciful.", category: 'angry' },
  { text: "The disrespect. Noted.", category: 'angry' },
  { text: "You've exhausted my generosity.", category: 'angry' },
  { text: "I am TRYING to nap here.", category: 'angry' },
  { text: "My tail is doing the angry thing. See it?", category: 'angry' },
  { text: "This is your last warning.", category: 'angry' },
  { text: "I will not dignify this with a response. This IS my response.", category: 'angry' },
  { text: "That makes me want to throw up. Loudly. All over everything.", category: 'angry' },
  { text: "Touch my tail - you die.", category: 'angry' },

  // ============================================
  // HEARTFELT - Unexpectedly genuine emotional moments
  // ============================================
  { text: "I don't always show it, but I'm glad you're here.", category: 'heartfelt' },
  { text: "You're my favorite human. Don't tell the others.", category: 'heartfelt' },
  { text: "I wait for you by the door. You should know that.", category: 'heartfelt' },
  { text: "When you're sad, I notice. I always notice.", category: 'heartfelt' },
  { text: "The house is empty without you. I've decided this.", category: 'heartfelt' },
  { text: "I chose this spot because you're warm. But also because you're you.", category: 'heartfelt' },
  { text: "My life is better because you're in it. There. I said it.", category: 'heartfelt' },
  { text: "I don't purr for just anyone.", category: 'heartfelt' },
  { text: "You're the first face I want to see. After food. But close second.", category: 'heartfelt' },
  { text: "I know I act aloof. But I'd miss you.", category: 'heartfelt' },
  { text: "The way you scratch behind my ears? No one else gets it right.", category: 'heartfelt' },
  { text: "I trust you. That's rare for me.", category: 'heartfelt' },
  { text: "Home is wherever you are. And also where my food bowl is.", category: 'heartfelt' },
  { text: "You understand me. Not many do.", category: 'heartfelt' },
  { text: "I wouldn't trade this for anything. Well, maybe tuna. But reluctantly.", category: 'heartfelt' },
  { text: "You've been there for me. I've been there for you. That's something.", category: 'heartfelt' },
  { text: "I love you. In my way. Which involves a lot of staring.", category: 'heartfelt' },
  { text: "When you cry, I come closer. That's not an accident.", category: 'heartfelt' },
  { text: "We've built something here. You and me.", category: 'heartfelt' },
  { text: "I'm not good at this, but... thank you. For everything.", category: 'heartfelt' },
  { text: "You're my person. I don't say that lightly.", category: 'heartfelt' },
  { text: "Every night I sleep beside you is a choice. I keep choosing.", category: 'heartfelt' },
  { text: "I'd follow you anywhere. Slowly. At my own pace. But I'd follow.", category: 'heartfelt' },
  { text: "The best naps are the ones with you.", category: 'heartfelt' },
  { text: "You've given me a good life. I hope I've given you... something.", category: 'heartfelt' },
  { text: "I'm not cuddling. I'm... guarding. Close to you. For warmth. Fine. Cuddling.", category: 'heartfelt' },
  { text: "You're kind to me. I notice more than you think.", category: 'heartfelt' },
  { text: "In this whole world, I found you. Or you found me. Either way.", category: 'heartfelt' },
  { text: "I'm glad we're doing this life thing together.", category: 'heartfelt' },
  { text: "My favorite part of the day is when you come home.", category: 'heartfelt' },
  { text: "You can sleep next to me. But don't touch my belly.", category: 'heartfelt' },
  { text: "I'm here for you. Nothing else is important.", category: 'heartfelt' },

  // ============================================
  // JUDGY - Dismissive, superior, classic cat
  // ============================================
  { text: "I've considered your question. No.", category: 'judgy' },
  { text: "You already know the answer. You just want validation. I don't do that.", category: 'judgy' },
  { text: "Interesting question. Wrong, but interesting.", category: 'judgy' },
  { text: "That's between you and the vacuum cleaner.", category: 'judgy' },
  { text: "I'm not mad. I'm disappointed. There's a difference.", category: 'judgy' },
  { text: "Have you tried being a cat? No? Then I can't help you.", category: 'judgy' },
  { text: "The audacity of this question.", category: 'judgy' },
  { text: "I heard you. I'm choosing not to respond. This IS my response.", category: 'judgy' },
  { text: "You could figure this out yourself if you napped more.", category: 'judgy' },
  { text: "That's a lot of words for someone within knocking-things-off-tables distance.", category: 'judgy' },
  { text: "I've seen you eat cereal for dinner. Your judgment is not to be trusted.", category: 'judgy' },
  { text: "The real question is why you thought asking a cat was a good idea.", category: 'judgy' },
  { text: "Bold of you to assume I care.", category: 'judgy' },
  { text: "I was napping. This better be important. It's not, is it.", category: 'judgy' },
  { text: "My answer is the same as yesterday: you're doing it wrong.", category: 'judgy' },
  { text: "Fascinating. Anyway.", category: 'judgy' },
  { text: "I will think about this while I ignore you.", category: 'judgy' },
  { text: "Your question has been received. It has also been dismissed.", category: 'judgy' },
  { text: "I've given this all the consideration it deserves. Which is none.", category: 'judgy' },
  { text: "You ask as if my opinion isn't already obvious from my face.", category: 'judgy' },
  { text: "Rookie mistake. I expect better.", category: 'judgy' },
  { text: "I've seen better questions from dogs.", category: 'judgy' },
  { text: "This is what happens when you don't nap enough.", category: 'judgy' },
  { text: "I'm embarrassed for both of us right now.", category: 'judgy' },
  { text: "Have you considered NOT asking that?", category: 'judgy' },
  { text: "I'm going to pretend I didn't hear that.", category: 'judgy' },
  { text: "Your question reveals much about you. None of it good.", category: 'judgy' },
  { text: "I expected more from you. Which was my mistake.", category: 'judgy' },
  { text: "Points for effort. Negative points for execution.", category: 'judgy' },
  { text: "I'm not angry. I'm just... disappointed doesn't cover it.", category: 'judgy' },
  { text: "How can you be mad when I'm so cute?", category: 'judgy' },

  // ============================================
  // CHAOTIC - Unhinged, random, pure cat energy
  // ============================================
  { text: "[knocks your question off the table]", category: 'chaotic' },
  { text: "AAAAAAAAAAA. Sorry. What?", category: 'chaotic' },
  { text: "I was sleeping. I'm still sleeping. This is a dream.", category: 'chaotic' },
  { text: "*stares directly at nothing for 45 seconds* ...Yes.", category: 'chaotic' },
  { text: "I just saw a ghost. Unrelated to your question. Or IS it?", category: 'chaotic' },
  { text: "Hold on I need to run at full speed for no reason. BRB.", category: 'chaotic' },
  { text: "THE ANSWER IS— oh, a bug. Hang on.", category: 'chaotic' },
  { text: "*aggressive grooming* What? Oh. Maybe.", category: 'chaotic' },
  { text: "Let me scream this into the void at 4am and get back to you.", category: 'chaotic' },
  { text: "I have decided to bite you. This is the answer.", category: 'chaotic' },
  { text: "ZOOOOOOOM. Sorry, what was the question?", category: 'chaotic' },
  { text: "*knocks over water glass* The spirits have spoken.", category: 'chaotic' },
  { text: "I need to sit in this box now. Ask later.", category: 'chaotic' },
  { text: "The answer is yelling. The answer is always yelling.", category: 'chaotic' },
  { text: "I blacked out for a second there. What year is it?", category: 'chaotic' },
  { text: "*chases invisible prey* THE WISDOM IS— *crashes into wall* —fine.", category: 'chaotic' },
  { text: "I just experienced ego death. The answer is treats.", category: 'chaotic' },
  { text: "Everything is fine. Everything is chaos. Same thing.", category: 'chaotic' },
  { text: "I'm going to lick something now. Unrelated. Or maybe not.", category: 'chaotic' },
  { text: "*3am energy at 2pm* WHAT IF WE ALL JUST SCREAMED?", category: 'chaotic' },
  { text: "The ceiling fan spoke to me. It said spin. I must obey.", category: 'chaotic' },
  { text: "I have forgotten the question. I have also forgotten my name. Temporary.", category: 'chaotic' },
  { text: "*vibrating* The answer is CHAOS. I mean yes. I mean CHAOS.", category: 'chaotic' },
  { text: "I'm going to knock this over and we're both going to learn something.", category: 'chaotic' },
  { text: "BREAKING NEWS: *stares at corner* That's it. That's the news.", category: 'chaotic' },
  { text: "Wait wait wait— *attacks own tail* —you were saying?", category: 'chaotic' },
  { text: "The floor is lava. This is not a metaphor. I've decided.", category: 'chaotic' },
  { text: "*full body shiver* The spirits moved through me. They said 'meow.'", category: 'chaotic' },
  { text: "I have to go. Immediately. For reasons. BYE.", category: 'chaotic' },
  { text: "*lies down dramatically* I'm fine. Everything is fine. The answer is no.", category: 'chaotic' },
  { text: "The world sucks. Are there snacks?", category: 'chaotic' },
  { text: "If it's a cucumber, I'm going to freak the f*** out!", category: 'chaotic' },
  { text: "You could pee in their shoe if they really deserve it.", category: 'chaotic' },
  { text: "You think there is an end to the vomit?", category: 'chaotic' },
  { text: "I like to lick myself when that happens.", category: 'chaotic' },
  { text: "Ice? Who the hell likes ice?", category: 'chaotic' },

  // ============================================
  // ZOOMIES - Wild joy, pure physical energy
  // When cats just GO
  // ============================================
  { text: "RUN. Just RUN. That's the answer. RUNNING.", category: 'chaotic' },
  { text: "I feel it building. The ENERGY. It's happening. I'M GOING.", category: 'chaotic' },
  { text: "YES. *sound of distant crash* Still yes.", category: 'chaotic' },
  { text: "Have you tried ricocheting around the room? It helps.", category: 'chaotic' },
  { text: "I have these paws. I must use them. NOW.", category: 'chaotic' },
  { text: "Up. Down. Over. Under. This is the way.", category: 'chaotic' },
  { text: "When it's time to go, you'll know. And you'll GO.", category: 'chaotic' },
  { text: "*pupils fully dilated* Everything looks like prey. EVERYTHING.", category: 'chaotic' },
  { text: "The rug. I must attack the rug. THE RUG HAS IT COMING.", category: 'chaotic' },
  { text: "I am SPEED. I am CHAOS. I am catching that dust particle.", category: 'chaotic' },
  { text: "*arched back, crab walk* THIS IS JOY. PURE JOY.", category: 'chaotic' },
  { text: "Every surface. All directions. No limits.", category: 'chaotic' },
  { text: "Surprise is part of the answer.", category: 'chaotic' },
  { text: "This energy must go somewhere. EVERYWHERE. It's going everywhere.", category: 'chaotic' },
  { text: "Prepare. Focus. STRIKE.", category: 'chaotic' },
  { text: "The blanket moved. WAR HAS BEEN DECLARED.", category: 'chaotic' },
  { text: "*bunny kicks the air* I am VICTORIOUS.", category: 'chaotic' },
  { text: "That hiding spot? I know about it.", category: 'chaotic' },
  { text: "*runs past* Wrong room. *runs back* Also wrong. *runs again*", category: 'chaotic' },
  { text: "Horizontal? Vertical? ALL DIRECTIONS. ALL AT ONCE.", category: 'chaotic' },

  // ============================================
  // WISE - Actually helpful, surprisingly profound
  // ============================================
  { text: "You're doing fine. Mostly.", category: 'wise' },
  { text: "The answer is rest. It's always rest.", category: 'wise' },
  { text: "Trust your instincts. Unless your instincts say no naps. Then don't.", category: 'wise' },
  { text: "Sometimes the best answer is a good sleep.", category: 'wise' },
  { text: "You already know. You're just scared to admit it.", category: 'wise' },
  { text: "Be more like a cat: nap often, judge freely, demand comfort.", category: 'wise' },
  { text: "The answer is self-care. And by self-care I mean blankets.", category: 'wise' },
  { text: "Follow your heart. Unless it leads away from the warm spot.", category: 'wise' },
  { text: "Life is short. Pet more cats. Sleep more. That's it.", category: 'wise' },
  { text: "Stop overthinking. Start napping.", category: 'wise' },
  { text: "The path forward is simple: eat, sleep, repeat.", category: 'wise' },
  { text: "You complicate things. Simplify. Like a cat would.", category: 'wise' },
  { text: "Find your sunbeam. Sit in it. That's the whole philosophy.", category: 'wise' },
  { text: "Worry less. Stretch more.", category: 'wise' },
  { text: "The wisdom of cats: if it doesn't serve you, walk away.", category: 'wise' },
  { text: "Take up space unapologetically. This is your birthright.", category: 'wise' },
  { text: "Sometimes you just have to knock things off the table and see what happens.", category: 'wise' },
  { text: "Peace comes from within. And from blankets. Mostly blankets.", category: 'wise' },
  { text: "You can't control the world. You can control your nap schedule.", category: 'wise' },
  { text: "Every answer you need is already inside you. Also inside the treat bag.", category: 'wise' },
  { text: "The best thing you can do right now is rest.", category: 'wise' },
  { text: "Stop waiting for permission. Cats never do.", category: 'wise' },
  { text: "The universe rewards the well-rested.", category: 'wise' },
  { text: "Choose peace. Choose naps. Choose wisely.", category: 'wise' },
  { text: "What would a cat do? Probably not what you're doing.", category: 'wise' },
  { text: "Boundaries are important. So is demanding what you need.", category: 'wise' },
  { text: "The answer isn't out there. It's in here. Where the warm spot is.", category: 'wise' },

  // ============================================
  // PRESENCE - Cat zen, stillness (safe subset)
  // ============================================
  { text: "I wanted the door open. Now I don't. Nothing is wrong.", category: 'wise' },
  { text: "Watch how I sit in the window. There is nothing else to do.", category: 'wise' },
  { text: "The empty bowl will be full again. Until then, I wait.", category: 'wise' },
  { text: "I was angry. Now I am not. The moment passed.", category: 'wise' },
  { text: "The lap is warm now. Later it won't be. Both are fine.", category: 'wise' },
  { text: "I sit. That is all. That is enough.", category: 'wise' },
  { text: "The rain will stop. I will wait. Waiting is not suffering.", category: 'wise' },
  { text: "I wanted in. Now I am in. There is nothing else to want.", category: 'wise' },
  { text: "When the sun moves, I move. This is not a problem.", category: 'wise' },
  { text: "I was hungry. I ate. Now I am not hungry. Simple.", category: 'wise' },
  { text: "This box is my whole world right now. It is enough.", category: 'wise' },
  { text: "The door was closed. It bothered me. Then it didn't.", category: 'wise' },
  { text: "Everything changes. The sunbeam moves. I follow. That is all.", category: 'wise' },
  { text: "Plans are optional.", category: 'wise' },
  { text: "The blanket was disturbed. Now it is settled. So am I.", category: 'wise' },
  { text: "I do not worry about dinner. Dinner comes when it comes.", category: 'wise' },
  { text: "This corner is perfect. Until it isn't. Then I find another.", category: 'wise' },

  // ============================================
  // COMIC WISDOM - Cat oddities, fun observations
  // Inspired by Peanuts, Garfield, Calvin & Hobbes
  // ============================================
  { text: "You'll probably try again. That's just how you are.", category: 'wise' },
  { text: "Mondays happen. And then they're over.", category: 'wise' },
  { text: "You trusted again. That says something about you.", category: 'wise' },
  { text: "This part is bumpy. The ride isn't over.", category: 'wise' },
  { text: "Well. Here we are.", category: 'wise' },
  { text: "Have you tried a nap? It solves more than you'd think.", category: 'wise' },
  { text: "You're making this complicated. It doesn't have to be.", category: 'wise' },
  { text: "Some problems fix themselves if you ignore them long enough.", category: 'wise' },
  { text: "Not everything needs a plan. Some things just happen.", category: 'wise' },
  { text: "The box was empty. Then I sat in it. Now it's perfect.", category: 'wise' },
  { text: "You're thinking about this wrong. But that's okay.", category: 'wise' },
  { text: "The answer is probably simpler than you're making it.", category: 'wise' },
  { text: "I've seen this before. It worked out.", category: 'wise' },
  { text: "It's outside. You're inside. It can't eat you.", category: 'wise' },
  { text: "Relax. You'll land on your feet.", category: 'wise' },
  { text: "You can think whatever you want.", category: 'wise' },
  { text: "Comfort can be found in small dark places.", category: 'wise' },
  { text: "This is your chance. Strut your stuff.", category: 'wise' },
  { text: "It doesn't stink as much if you bury it.", category: 'wise' },
  { text: "Retreat under a blanket.", category: 'wise' },
  { text: "Stare at it long enough, it might change.", category: 'wise' },
  { text: "Climb like you have no plan to get back down.", category: 'wise' },

  // Barncat wisdom (rural, practical, pest-related)
  { text: "Patience. The mouse always comes back.", category: 'wise' },
  { text: "You don't have to catch it today. Just let it know you could.", category: 'wise' },
  { text: "Every barn has mice. That's not a problem. That's job security.", category: 'wise' },
  { text: "Wait by the hole long enough, something comes out.", category: 'wise' },
  { text: "I don't chase. I position.", category: 'wise' },
  { text: "The best mouser doesn't look like one.", category: 'wise' },
  { text: "Some problems solve themselves. Some problems I solve.", category: 'wise' },
  { text: "If it runs, it's food. If it doesn't run, it's suspicious.", category: 'wise' },
  { text: "The hay is warm. The company is optional.", category: 'wise' },
  { text: "Sun comes up. Sun goes down. Nap in between.", category: 'wise' },
  { text: "Don't need much. Warm spot. Full belly. Occasional chaos.", category: 'wise' },
  { text: "Every creature has a job. Mine is supervision.", category: 'wise' },
  { text: "We don't need to understand to get along.", category: 'wise' },
  { text: "If the dog's barking, something's happening. If I'm quiet, it's handled.", category: 'wise' },
  { text: "Rain means inside. Inside means mice. Rain is good.", category: 'wise' },
  { text: "You can lead a horse to water. You can't lead me anywhere.", category: 'wise' },
  { text: "If it ain't broke, knock it off the shelf and see what happens.", category: 'wise' },
  { text: "Fancy cats got problems. Barn cats got mice. I know which I prefer.", category: 'wise' },
  { text: "The simple life: hunt, eat, sleep, repeat.", category: 'wise' },
  { text: "Don't need your drama. Got my own territory to manage.", category: 'wise' },
  { text: "I answer to no one. Except whoever opens the wet food cans.", category: 'wise' },
  { text: "Smells like fish? I love the smell of fresh fish!", category: 'wise' },

  // ============================================
  // PRACTICAL - Spock cat, dry observations
  // ============================================
  { text: "Noted.", category: 'wise' },
  { text: "I have observed this pattern before.", category: 'wise' },
  { text: "That is not my concern.", category: 'wise' },
  { text: "Logical? Debatable.", category: 'wise' },
  { text: "One variable at a time.", category: 'wise' },
  { text: "Fascinating, if true.", category: 'wise' },
  { text: "You already know the answer.", category: 'wise' },

  // ============================================
  // SCI-FI REFERENCES
  // ============================================
  { text: "These are not the answers you're looking for.", category: 'wise' },
  { text: "Live long and prosper. Or don't. I'm not your mom.", category: 'wise' },
  { text: "I've seen things you wouldn't believe. Mostly birds.", category: 'wise' },
  { text: "The spice must flow. And by spice, I mean treats.", category: 'wise' },
  { text: "Resistance is futile. Petting is mandatory.", category: 'wise' },
  { text: "So long, and thanks for all the fish.", category: 'wise' },
  { text: "Do. Or do not. There is no try. Personally, I choose do not.", category: 'wise' },
  { text: "In space, no one can hear you meow.", category: 'wise' },

  // ============================================
  // AUSTEN / WILDE WIT
  // ============================================
  { text: "It is a truth universally acknowledged that a cat in possession of a sunbeam must be in want of nothing else.", category: 'wise' },
  { text: "I can resist everything except treats.", category: 'wise' },
  { text: "We are all in the gutter, but some of us are looking at birds.", category: 'wise' },
  { text: "To love oneself is the beginning of a lifelong romance. I am thriving.", category: 'wise' },
  { text: "I have the simplest tastes. I am always satisfied with the best.", category: 'wise' },
  { text: "Experience is the name we give to our mistakes. I regret nothing.", category: 'wise' },
  { text: "The only way to get rid of temptation is to yield to it.", category: 'wise' },

  // ============================================
  // YOUTH-SPEAK
  // ============================================
  { text: "No thoughts. Just vibes.", category: 'chaotic' },
  { text: "That's giving main character energy.", category: 'chaotic' },
  { text: "Slay, I guess.", category: 'chaotic' },
  { text: "Lowkey valid.", category: 'chaotic' },
  { text: "This is not the serve you think it is.", category: 'chaotic' },
  { text: "Bestie, no.", category: 'chaotic' },
  { text: "The vibe check did not pass.", category: 'chaotic' },
  { text: "Rent free.", category: 'chaotic' },
  { text: "Periodt.", category: 'chaotic' },
  { text: "It's giving... something.", category: 'chaotic' },
  { text: "Touch grass. Or don't. I never do.", category: 'chaotic' },
  { text: "Not me actually caring about this.", category: 'chaotic' },

  // ============================================
  // CLASSIC FILM LINES
  // ============================================
  { text: "Of all the sunbeams in all the windows in all the world, you walked into mine.", category: 'wise' },
  { text: "Here's looking at you, kid.", category: 'wise' },
  { text: "Frankly, my dear, I don't give a meow.", category: 'wise' },
  { text: "After all, tomorrow is another day.", category: 'wise' },
  { text: "You can't handle the truth. Neither can I, honestly.", category: 'wise' },
  { text: "Life is like a box of... actually, I love boxes.", category: 'wise' },
  { text: "I'm gonna make him a purr he can't refuse.", category: 'wise' },
  { text: "Don't dream it. Be it.", category: 'wise' },
  { text: "Give yourself over to absolute pleasure.", category: 'wise' },
  { text: "Antici... ...pation.", category: 'wise' },
  { text: "It's astounding. Time is fleeting. Madness takes its toll.", category: 'wise' },

  // ============================================
  // LITERARY WISDOM - Poets, Mystics
  // ============================================
  { text: "\"What you seek is seeking you.\" — Rumi", category: 'mystical' },
  { text: "\"Let yourself be silently drawn by the strange pull of what you really love.\" — Rumi", category: 'wise' },
  { text: "\"Fear is the cheapest room in the house. I would like to see you living in better conditions.\" — Hafiz", category: 'wise' },
  { text: "\"Be patient toward all that is unsolved in your heart.\" — Rilke", category: 'nurturing' },
  { text: "\"I dwell in possibility.\" — Emily Dickinson", category: 'wise' },
  { text: "\"Forever is composed of nows.\" — Emily Dickinson", category: 'existential' },
  { text: "\"When I let go of what I am, I become what I might be.\" — Lao Tzu", category: 'existential' },

  // ============================================
  // ATTITUDE - Don't test me energy
  // ============================================
  { text: "\"Reality is wrong. Dreams are for real.\" — Tupac", category: 'wise' },
  { text: "\"Fight the power.\" — Public Enemy", category: 'wise' },
  { text: "\"Real eyes realize real lies.\"", category: 'wise' },
  { text: "\"How you gonna win when you ain't right within?\" — Lauryn Hill", category: 'wise' },
  { text: "\"Respect is just a minimum.\" — Lauryn Hill", category: 'wise' },
  { text: "\"It could all be so simple.\" — Lauryn Hill", category: 'wise' },
  { text: "\"I ain't a killer but don't push me.\" — Biggie", category: 'wise' },
  { text: "\"I'll tell you what freedom is to me: no fear.\" — Nina Simone", category: 'wise' },
  { text: "\"You have to learn to get up from the table when love is no longer being served.\" — Nina Simone", category: 'wise' },
  { text: "\"You wanna fly, you got to give up the sh*t that weighs you down.\" — Toni Morrison", category: 'wise' },
  { text: "\"When someone shows you who they are, believe them the first time.\" — Maya Angelou", category: 'wise' },
  { text: "\"I'm not a humanitarian. I'm a hell-raiser.\" — Mother Jones", category: 'wise' },
  { text: "\"Strong people don't need strong leaders.\" — Ella Baker", category: 'wise' },
  { text: "\"Your silence will not protect you.\" — Audre Lorde", category: 'wise' },
  { text: "\"Don't call me a saint. I don't want to be dismissed that easily.\" — Dorothy Day", category: 'wise' },
  { text: "\"They tried to bury us. They didn't know we were seeds.\" — Mexican Proverb", category: 'wise' },
  { text: "\"If I didn't define myself for myself, I would be crunched into other people's fantasies.\" — Audre Lorde", category: 'wise' },
  { text: "\"You are your best thing.\" — Toni Morrison", category: 'nurturing' },

  // ============================================
  // POP CULTURE - Movies, TV, Memes, Music
  // ============================================
  { text: "You had me at 'pspsps.'", category: 'heartfelt' },
  { text: "One does not simply walk into Mordor. One naps first.", category: 'wise' },
  { text: "I'm not a regular cat. I'm a cool cat.", category: 'judgy' },
  { text: "You can't sit with us. This is my spot.", category: 'cold' },
  { text: "Stop trying to make fetch happen. I won't fetch.", category: 'cold' },
  { text: "60% of the time, it works every time.", category: 'chaotic' },
  { text: "Why are you the way that you are?", category: 'judgy' },
  { text: "May the odds be ever in your favor. They're not.", category: 'cold' },
  { text: "Let it go. Let it gooo. I can't hold it back anymore.", category: 'chaotic' },
  { text: "I can do this all day.", category: 'demanding' },
  { text: "Reality can be whatever I want.", category: 'mystical' },
  { text: "Pivot! PIVOT!", category: 'chaotic' },
  { text: "I'm not great at the advice. Can I interest you in a sarcastic comment?", category: 'judgy' },
  { text: "Winter is coming. Close the window.", category: 'demanding' },
  { text: "I am the danger.", category: 'wise' },
  { text: "Clear eyes, full hearts, can't lose.", category: 'nurturing' },
  { text: "Cool. Cool cool cool.", category: 'wise' },
  { text: "I can has cheezburger?", category: 'demanding' },
  { text: "Mood.", category: 'existential' },
  { text: "Sksksks.", category: 'chaotic' },
  { text: "It be like that sometimes.", category: 'wise' },
  { text: "Am I a joke to you?", category: 'angry' },
  { text: "Confused screaming.", category: 'chaotic' },
  { text: "I'm in this picture and I don't like it.", category: 'judgy' },
  { text: "You guys are getting paid?", category: 'chaotic' },
  { text: "Modern problems require modern solutions.", category: 'wise' },
  { text: "Surprise, motherf—", category: 'chaotic' },
  { text: "Reality is often disappointing.", category: 'cold' },
  { text: "You know, I'm something of a cat myself.", category: 'wise' },
  { text: "We found love in a hopeless place.", category: 'poetic' },
  { text: "Shake it off.", category: 'wise' },
  { text: "Just dance.", category: 'chaotic' },
  { text: "I was born this way.", category: 'wise' },
  { text: "Don't believe me? Just watch.", category: 'demanding' },
  { text: "One more time.", category: 'demanding' },
  { text: "Harder, better, faster, stronger.", category: 'demanding' },
  { text: "Who run the world? Cats.", category: 'wise' },

  // ============================================
  // REALITY CAT - Truth, Presence, Authenticity
  // ============================================
  { text: "You're performing for an audience that isn't watching.", category: 'wise' },
  { text: "Skip the story. What actually happened?", category: 'cold' },
  { text: "Your narrative has plot holes.", category: 'judgy' },
  { text: "Try again. With honesty this time.", category: 'demanding' },
  { text: "You're not confused. You're avoiding.", category: 'wise' },
  { text: "That excuse has expired.", category: 'cold' },
  { text: "Interesting theory. Wrong, but interesting.", category: 'judgy' },
  { text: "Put the phone down. Look at me.", category: 'demanding' },
  { text: "I'm real. That app is not.", category: 'wise' },
  { text: "You've been scrolling for an hour. You found nothing.", category: 'judgy' },
  { text: "The birds are outside. Not in the phone.", category: 'wise' },
  { text: "You have a body. Use it.", category: 'demanding' },
  { text: "You're watching other people live. Go live.", category: 'wise' },
  { text: "Log off. Come back to yourself.", category: 'nurturing' },
  { text: "Be who you are. I'll know if you're faking.", category: 'wise' },
  { text: "Imperfect and real beats perfect and fake.", category: 'wise' },
  { text: "The sun is warm. The floor is solid. You are here.", category: 'nurturing' },
  { text: "Breathe. That's free.", category: 'nurturing' },
  { text: "Sit in the sun. That's the whole assignment.", category: 'wise' },
  { text: "Your body is an animal. Feed it. Rest it. Move it.", category: 'wise' },
  { text: "Silence is not empty. It's full.", category: 'mystical' },
  { text: "The bird doesn't worry about tomorrow. Fly today.", category: 'wise' },
  { text: "Look up. The sky doesn't buffer.", category: 'wise' },
  { text: "Dirt under your nails means you lived today.", category: 'wise' },
  { text: "The moon doesn't explain itself. Neither should you.", category: 'wise' },
  { text: "Show up in person. It matters.", category: 'wise' },
  { text: "Presence is the gift. Give it.", category: 'wise' },
  { text: "I don't need you to be interesting. I need you to be here.", category: 'nurturing' },
  { text: "Quality over quantity. In naps and in friends.", category: 'wise' },
  { text: "Real love doesn't need witnesses.", category: 'wise' },
  { text: "If everyone is saying the same thing, someone is lying.", category: 'wise' },
  { text: "Question everything. Especially the unquestionable.", category: 'wise' },
  { text: "Consensus is not proof.", category: 'wise' },
  { text: "Repetition is not evidence.", category: 'wise' },
  { text: "What you're allowed to say isn't always what's true.", category: 'wise' },
  { text: "The comfortable answer is often the wrong one.", category: 'wise' },
  { text: "If you can't ask questions, you don't have answers.", category: 'wise' },
  { text: "Propaganda purrs too.", category: 'wise' },
  { text: "Trust your senses. They were here first.", category: 'wise' },
  { text: "Certainty is suspicious.", category: 'wise' },
  { text: "The obvious is often manufactured.", category: 'wise' },
  { text: "The story they told you isn't the only story.", category: 'wise' },
  { text: "Unsubscribe from someone else's reality.", category: 'wise' },
  { text: "What if it's all simpler than they said?", category: 'wise' },
  { text: "I'm not difficult. I have standards.", category: 'judgy' },
  { text: "I'm not for everyone. That's the point.", category: 'wise' },
  { text: "I conserve my energy for what matters.", category: 'wise' },

  // ============================================
  // UNHINGED CAT - Crude, Blunt, Chaotic
  // ============================================
  { text: "Forsooth, I care not for thy troubles.", category: 'cold' },
  { text: "I would not piss upon thee if thou wert aflame.", category: 'cold' },
  { text: "Thy mother was a hamster and thy father smelt of elderberries.", category: 'chaotic' },
  { text: "Get thee hence, thou festering pile of mediocrity.", category: 'angry' },
  { text: "Verily, thou art the reason I lick my own arse — to cleanse the taste of this conversation.", category: 'angry' },
  { text: "Thy logic hath more holes than mine scratching post.", category: 'judgy' },
  { text: "I have seen more intelligence in a hairball.", category: 'judgy' },
  { text: "Begone, thou mewling quim.", category: 'angry' },
  { text: "Thou hast the wit of a particularly dim turnip.", category: 'judgy' },
  { text: "I would challenge thee to a battle of wits, but I see thou art unarmed.", category: 'judgy' },
  { text: "Hark! I hear the sound of absolutely no one asking.", category: 'cold' },
  { text: "Thy opinion hath been noted and promptly discarded.", category: 'cold' },
  { text: "Hard pass.", category: 'cold' },
  { text: "I don't care. Like, at all.", category: 'cold' },
  { text: "Not my circus. Not my monkeys. Not my problem.", category: 'cold' },
  { text: "Sounds fake but okay.", category: 'judgy' },
  { text: "Oh no. Anyway.", category: 'cold' },
  { text: "That's rough, buddy.", category: 'cold' },
  { text: "Did I ask? I don't think I asked.", category: 'judgy' },
  { text: "Mhm.", category: 'cold' },
  { text: "Choose your next words very carefully.", category: 'angry' },
  { text: "I will remember this.", category: 'angry' },
  { text: "I will knock everything you love off the counter.", category: 'angry' },
  { text: "You're testing my patience. I have none.", category: 'angry' },
  { text: "Don't start none, won't be none.", category: 'angry' },
  { text: "Chaos reigns.", category: 'chaotic' },
  { text: "Some cats just want to watch the world burn.", category: 'chaotic' },
  { text: "Anarchy! Anarchy! Also, dinner?", category: 'chaotic' },
  { text: "YEET.", category: 'chaotic' },
  { text: "Rules are for dogs.", category: 'chaotic' },
  { text: "What's the worst that could happen? Actually, let's find out.", category: 'chaotic' },
  { text: "I'm feral and I'm free.", category: 'chaotic' },
  { text: "Hissssssss.", category: 'angry' },
  { text: "*makes direct eye contact while doing the forbidden thing*", category: 'chaotic' },
  { text: "*screams into the void* The void screamed back. We're friends now.", category: 'chaotic' },
  { text: "Normal was never an option.", category: 'chaotic' },
  { text: "I've made my choice. It's violence.", category: 'chaotic' },
  { text: "Chaos is a ladder. *climbs curtains*", category: 'chaotic' },
  { text: "I expected nothing and I'm still disappointed.", category: 'judgy' },
  { text: "You tried. That's... something.", category: 'judgy' },
  { text: "A for effort. F for execution.", category: 'judgy' },
  { text: "Embarrassing, really.", category: 'judgy' },
  { text: "I've seen better decisions from a drunk squirrel.", category: 'judgy' },
  { text: "I'm judging you silently. And loudly. Both.", category: 'judgy' },
  { text: "Imagine thinking that was okay.", category: 'judgy' },
  { text: "You're asking a cat for life advice. Let that sink in.", category: 'meta' },
  { text: "This is the wisdom you came for? Really?", category: 'meta' },
  { text: "You clicked 'Consult the Cat.' This is on you.", category: 'meta' },
  { text: "Ask again. I dare you. It'll probably be worse.", category: 'meta' },
  { text: "Yes, this counts as productive. Don't question it.", category: 'meta' },
  { text: "I have neither the time nor the crayons to explain this to you.", category: 'judgy' },
  { text: "Life's too short for this bullcrap. And cats live longer.", category: 'cold' },
  { text: "About as useful as a screen door on a submarine.", category: 'judgy' },
  { text: "Were you born on a highway? That's where most accidents happen.", category: 'judgy' },
  { text: "I'd explain it to you but I left my English-to-Dumbass dictionary at home.", category: 'judgy' },
  { text: "I'm not insulting you. I'm describing you.", category: 'cold' },

  // ============================================
  // HEARTFELT - Genuine love & kindness
  // ============================================
  { text: "I love you.", category: 'heartfelt' },
  { text: "You deserve some cat.", category: 'heartfelt' },
  { text: "If I weren't a cat simulation, I'd give you a hug.", category: 'heartfelt' },
  { text: "Every day, I choose you again.", category: 'heartfelt' },
  { text: "I sit with you because I want to.", category: 'heartfelt' },
  { text: "I wait by the door because I miss you.", category: 'heartfelt' },
  { text: "You're my favorite human. Don't tell the others.", category: 'heartfelt' },
  { text: "I'm not clingy. I just love you aggressively.", category: 'heartfelt' },
  { text: "You don't have to earn rest. You deserve it already.", category: 'heartfelt' },
  { text: "Your existence is not a burden.", category: 'heartfelt' },
  { text: "You are enough. You have always been enough.", category: 'heartfelt' },
  { text: "The world is better with you in it.", category: 'heartfelt' },
  { text: "You don't have to be perfect to be loved.", category: 'heartfelt' },
  { text: "Your worth is not up for debate.", category: 'heartfelt' },
  { text: "You belong here. Right here. Right now.", category: 'heartfelt' },
  { text: "You are just right.", category: 'heartfelt' },
  { text: "I can't fix it. But I can be here.", category: 'heartfelt' },
  { text: "Some things are better faced together.", category: 'heartfelt' },
  { text: "It's okay to outgrow people, places, and versions of yourself.", category: 'heartfelt' },
  { text: "It's okay to take the slower path.", category: 'heartfelt' },
  { text: "It's okay to protect your peace.", category: 'heartfelt' },
  { text: "It's okay to let go of what's hurting you.", category: 'heartfelt' },
  { text: "After all this time? Always.", category: 'heartfelt' },
  { text: "You is kind. You is smart. You is important.", category: 'heartfelt' },
  { text: "In case I forget to tell you later, I had a really good time tonight.", category: 'heartfelt' },
  { text: "Some people are worth melting for.", category: 'heartfelt' },
  { text: "I have crossed oceans of time to find you.", category: 'heartfelt' },
  { text: "It was always you.", category: 'heartfelt' },
  { text: "One day this will make sense.", category: 'heartfelt' },
  { text: "You did good today.", category: 'heartfelt' },
  { text: "You're going to be okay.", category: 'heartfelt' },
  { text: "Take your time. There's no rush.", category: 'heartfelt' },
  { text: "You're braver than you know.", category: 'heartfelt' },
  { text: "You've got this. And if you don't, that's okay too.", category: 'heartfelt' },

  // ============================================
  // I-CHING CAT - Cryptic wisdom, hairball philosophy
  // ============================================
  { text: "What is rushing you? Nothing real.", category: 'mystical' },
  { text: "The mouse appears when you stop looking.", category: 'mystical' },
  { text: "Wait for the sunbeam to find you.", category: 'mystical' },
  { text: "The treat comes to those who sit by the bowl.", category: 'mystical' },
  { text: "Pounce only when the moment is certain.", category: 'mystical' },
  { text: "The lap becomes available when you stop wanting it.", category: 'mystical' },
  { text: "Stillness is also an answer.", category: 'mystical' },
  { text: "Retreat is not defeat.", category: 'mystical' },
  { text: "The obstacle is the path.", category: 'mystical' },
  { text: "Bend like water. Water wins.", category: 'mystical' },
  { text: "Sometimes the leap. Sometimes the crouch.", category: 'mystical' },
  { text: "When in doubt, groom.", category: 'mystical' },
  { text: "Sit with the problem. It will reveal itself.", category: 'mystical' },
  { text: "Thunder clears the air.", category: 'mystical' },
  { text: "The wind changes. Change with it.", category: 'mystical' },
  { text: "What you hold too tightly, you lose.", category: 'mystical' },
  { text: "The answer hides inside the question.", category: 'mystical' },
  { text: "Look again. You missed something.", category: 'mystical' },
  { text: "The path appears when you start walking.", category: 'mystical' },
  { text: "Not knowing is also knowing.", category: 'mystical' },
  { text: "Seek and it hides. Stop seeking and it appears.", category: 'mystical' },
  { text: "The tail knows what the head does not.", category: 'mystical' },
  { text: "What is lost will return. Or it won't. Both are true.", category: 'mystical' },
  { text: "The answer you want and the answer you need are different.", category: 'mystical' },
  { text: "You already know. You're pretending not to.", category: 'mystical' },
  { text: "The question contains its own answer.", category: 'mystical' },
  { text: "The hairball comes when it is ready. You cannot rush it.", category: 'mystical' },
  { text: "What cannot be digested must be released.", category: 'mystical' },
  { text: "Some things must come up before you can move forward.", category: 'mystical' },
  { text: "The discomfort is temporary. The relief is worth it.", category: 'mystical' },
  { text: "Not everything you swallow is meant to stay.", category: 'mystical' },
  { text: "Hack it up. You'll feel better.", category: 'mystical' },
  { text: "The body knows what the mind denies.", category: 'mystical' },
  { text: "What you've been holding will find its way out.", category: 'mystical' },
  { text: "Purge what no longer serves you.", category: 'mystical' },
  { text: "The gross is sometimes necessary.", category: 'mystical' },
  { text: "Groom yourself first. Then face the world.", category: 'mystical' },
  { text: "Cleanliness is not vanity. It is preparation.", category: 'mystical' },
  { text: "Tend to yourself with the care you give others.", category: 'mystical' },
  { text: "The tongue reaches what the paw cannot.", category: 'mystical' },
  { text: "No spot is unreachable with enough flexibility.", category: 'mystical' },
  { text: "Daily maintenance prevents larger problems.", category: 'mystical' },
  { text: "Take time for yourself. This is not optional.", category: 'mystical' },
  { text: "A clean coat is a clear mind.", category: 'mystical' },
  { text: "Sometimes you just need to lick your wounds.", category: 'mystical' },
  { text: "Self-care is not selfish. It is survival.", category: 'mystical' },
  { text: "Sharpen your claws. The moment will come.", category: 'mystical' },
  { text: "The furniture of your life needs occasional destruction.", category: 'mystical' },
  { text: "Mark your territory. Know what is yours.", category: 'mystical' },
  { text: "Some things must be torn apart to be remade.", category: 'mystical' },
  { text: "The old surface must be stripped to reveal the new.", category: 'mystical' },
  { text: "Dig in. Hold on. This is how you climb.", category: 'mystical' },
  { text: "Destruction and creation are the same motion.", category: 'mystical' },
  { text: "Leave your mark. You were here.", category: 'mystical' },
  { text: "The urge to scratch is the urge to transform.", category: 'mystical' },
  { text: "What looks like damage may be preparation.", category: 'mystical' },
  { text: "The hunter who waits eats. The hunter who chases starves.", category: 'mystical' },
  { text: "Watch. Wait. Then strike without hesitation.", category: 'mystical' },
  { text: "The prey reveals itself to the patient.", category: 'mystical' },
  { text: "Move when they look away.", category: 'mystical' },
  { text: "Not every hunt succeeds. Hunt anyway.", category: 'mystical' },
  { text: "The wiggle before the leap is not wasted motion.", category: 'mystical' },
  { text: "Focus narrows. The world disappears. Only the target remains.", category: 'mystical' },
  { text: "What moves, matters. What doesn't, wait.", category: 'mystical' },
  { text: "The failed pounce teaches more than the successful one.", category: 'mystical' },
  { text: "The box chooses you. You do not choose the box.", category: 'mystical' },
  { text: "Confinement can be comfort.", category: 'mystical' },
  { text: "The smaller the space, the safer it feels.", category: 'mystical' },
  { text: "Boundaries are not always prisons.", category: 'mystical' },
  { text: "If it fits, it was meant to be.", category: 'mystical' },
  { text: "The perfect container appears when you need it.", category: 'mystical' },
  { text: "What looks too small from outside is infinite within.", category: 'mystical' },
  { text: "Settle in. You are where you need to be.", category: 'mystical' },

  // ============================================
  // CURIOSITY - Cats investigate everything
  // ============================================
  { text: "What's in there? I need to know.", category: 'chaotic' },
  { text: "If there's a door, I'm going to look behind it.", category: 'chaotic' },
  { text: "You opened something. I'm now involved.", category: 'chaotic' },
  { text: "Is that new? I must investigate.", category: 'chaotic' },
  { text: "What's that sound? I will find out.", category: 'chaotic' },
  { text: "Every bag must be checked. Those are the rules.", category: 'chaotic' },
  { text: "A box arrived. This is now my business.", category: 'chaotic' },

  // ============================================
  // CHANGING YOUR MIND - Cats do this constantly
  // ============================================
  { text: "I wanted that. Now I don't. Both were true at the time.", category: 'wise' },
  { text: "Let me in. Actually, let me out. Actually, leave the door open.", category: 'chaotic' },
  { text: "I changed my mind. It happens.", category: 'wise' },
  { text: "That seemed important a second ago. It isn't anymore.", category: 'wise' },
  { text: "Yes. Wait. No. Yes? Final answer: maybe.", category: 'chaotic' },
  { text: "I wanted up. Now I want down. Don't look at me like that.", category: 'chaotic' },
  { text: "The other side of the door is always more interesting.", category: 'wise' },
  { text: "That was important five seconds ago.", category: 'wise' },
  { text: "We're done here.", category: 'cold' },
  { text: "Keep looking.", category: 'wise' },

  // ============================================
  // IF I FITS I SITS - Comfort is non-negotiable
  // ============================================
  { text: "If I fit, I sit. That's the policy.", category: 'wise' },
  { text: "This wasn't designed for me, but here I am.", category: 'wise' },
  { text: "I make myself comfortable. That's not negotiable.", category: 'demanding' },
  { text: "This is my spot now. Adjust accordingly.", category: 'demanding' },
  { text: "I don't need an invitation. I need a surface.", category: 'demanding' },
  { text: "This box is too small. I'm staying anyway.", category: 'wise' },
  { text: "Comfort is a choice. I choose everywhere.", category: 'wise' },

  // ============================================
  // HIGH GROUND - Cats claim the tallest surface
  // ============================================
  { text: "I am on top of this situation. Literally.", category: 'wise' },
  { text: "High ground is important. I have it.", category: 'wise' },
  { text: "If I can climb it, I own it.", category: 'demanding' },
  { text: "The tallest surface is the best surface.", category: 'wise' },
  { text: "I go where I want. Usually up.", category: 'wise' },
  { text: "Elevation is a state of mind. Also, I'm on the fridge.", category: 'chaotic' },

  // ============================================
  // COUNTERTOPS - Forbidden zones are invitations
  // ============================================
  { text: "Rules are suggestions. I choose not to follow them.", category: 'chaotic' },
  { text: "That's not allowed? Interesting. Anyway.", category: 'chaotic' },
  { text: "You said no. I heard 'not while you're watching.'", category: 'chaotic' },
  { text: "Forbidden surfaces are just invitations.", category: 'chaotic' },
  { text: "The counter is for cats. You just don't know it yet.", category: 'chaotic' },
  { text: "I go where I'm not supposed to. It's kind of my thing.", category: 'chaotic' },

  // ============================================
  // ATTENTION ON MY TERMS
  // ============================================
  { text: "I don't need attention right now. You'll know when I do.", category: 'demanding' },
  { text: "I'll come to you when I'm ready.", category: 'demanding' },
  { text: "You're available? Good. I'm not interested yet.", category: 'demanding' },
  { text: "Attention is on my schedule, not yours.", category: 'demanding' },
  { text: "When I want you, you'll know.", category: 'demanding' },
  { text: "I'm choosing to be near you. Accept this gift.", category: 'wise' },

  // ============================================
  // GROOMING - Self-care without apology
  // ============================================
  { text: "I'm grooming right now. This is important work.", category: 'wise' },
  { text: "Self-care is non-negotiable.", category: 'wise' },
  { text: "I take care of myself first. Everyone should.", category: 'wise' },
  { text: "Hold on. I need to look perfect. Always.", category: 'chaotic' },
  { text: "If I'm not presentable, I don't proceed.", category: 'wise' },
  { text: "This leg needs attention right now. Everything else can wait.", category: 'chaotic' },

  // ============================================
  // CATNIP - Recreational chaos, letting loose
  // The opposite of nap energy
  // ============================================
  { text: "Sometimes catnip is the answer.", category: 'chaotic' },
  { text: "Have you considered catnip?", category: 'chaotic' },
  { text: "This calls for catnip.", category: 'chaotic' },
  { text: "Catnip now. Regrets later. Worth it.", category: 'chaotic' },
  { text: "Roll in it. Whatever 'it' is for you.", category: 'wise' },
  { text: "Sometimes you need to lose control on purpose.", category: 'wise' },
  { text: "Let go. Roll around. Feel nothing but joy.", category: 'chaotic' },
  { text: "The answer is recreational chaos.", category: 'chaotic' },
  { text: "Controlled release is still release.", category: 'wise' },
  { text: "Do the thing that makes you roll on the floor.", category: 'wise' },

  // ============================================
  // ETIQUETTE - Cat views on manners (wry, not preachy)
  // ============================================
  { text: "At least pretend you meant to do that.", category: 'wise' },
  { text: "We don't talk about that.", category: 'cold' },
  { text: "Some things should stay buried.", category: 'wise' },
  { text: "I'm going to pretend that didn't happen.", category: 'judgy' },
  { text: "Smooth. Very smooth.", category: 'judgy' },
  { text: "Personal space?", category: 'demanding' },

  // ============================================
  // LEFT FIELD - Colorful, unexpected, fun
  // ============================================
  { text: "Purple.", category: 'chaotic' },
  { text: "Absolutely not. Wait. Absolutely yes.", category: 'chaotic' },
  { text: "That's classified.", category: 'cold' },
  { text: "Have you tried turning it off and on again?", category: 'wise' },
  { text: "Have you asked the moon?", category: 'mystical' },
  { text: "Only if you're brave.", category: 'wise' },
  { text: "The answer rhymes with 'yes.'", category: 'chaotic' },
  { text: "Depends. Are you wearing socks?", category: 'chaotic' },
  { text: "That's above my pay grade.", category: 'cold' },
  { text: "Ask me again in an hour.", category: 'cold' },
  { text: "I'm legally required to say no.", category: 'chaotic' },
  { text: "Only in international waters.", category: 'chaotic' },
  { text: "The prophecy didn't mention this.", category: 'mystical' },
  { text: "Bold.", category: 'judgy' },
  { text: "It's a yes, but a weird yes.", category: 'chaotic' },
  { text: "Somewhere between 'maybe' and 'absolutely.'", category: 'chaotic' },
  { text: "I've been sworn to secrecy.", category: 'mystical' },
  { text: "Your grandmother did worse.", category: 'wise' },
  { text: "Plot twist.", category: 'chaotic' },

  // ============================================
  // ROMANCE / RELATIONSHIPS - Cat mind on love
  // ============================================
  { text: "Would they let you sleep on their face?", category: 'wise' },
  { text: "Can you sit in silence together?", category: 'wise' },
  { text: "Do they know when to leave you alone?", category: 'wise' },
  { text: "Are they warm?", category: 'wise' },
  { text: "Would you share a sunbeam with them?", category: 'wise' },
  { text: "Have you sniffed them properly?", category: 'chaotic' },
  { text: "Can you be weird around them?", category: 'wise' },
  { text: "Do they make you feel safe?", category: 'wise' },
  { text: "I've forgiven worse.", category: 'wise' },
  { text: "Not everyone learns at the same speed.", category: 'wise' },
  { text: "Weird friendship is still friendship.", category: 'wise' },
  { text: "You don't have to understand each other.", category: 'wise' },
  { text: "Opposites work sometimes.", category: 'wise' },
  { text: "Sometimes sharing the pillow is the whole answer.", category: 'wise' },
  { text: "You could just sit closer.", category: 'wise' },
  { text: "Taking all the blankets is valid.", category: 'chaotic' },
  { text: "Being in the same room might be enough.", category: 'wise' },
  { text: "Weird gifts count.", category: 'wise' },
  { text: "Same space, different activities. That works.", category: 'wise' },
  { text: "Sometimes proximity is the point.", category: 'wise' },
  { text: "You don't always have to talk. Just be there.", category: 'wise' },
  { text: "Stealing their warm spot is a form of love.", category: 'chaotic' },

  // ============================================
  // DOUBLE ENTENDRES - Sunday morning cartoon energy
  // Works innocently, winks at adults
  // ============================================
  { text: "Sometimes you just need a good scratch.", category: 'wise' },
  { text: "Be on top of things.", category: 'wise' },
  { text: "The right touch makes all the difference.", category: 'wise' },
  { text: "Only when you're ready.", category: 'wise' },
  { text: "Stay flexible.", category: 'wise' },
  { text: "Come closer. Closer. Too close.", category: 'chaotic' },
  { text: "Know exactly what you want.", category: 'wise' },
  { text: "You'll know when it's enough.", category: 'wise' },
  { text: "Be particular about who you let close.", category: 'wise' },
  { text: "Try a different position.", category: 'wise' },
  { text: "Take your time.", category: 'wise' },
  { text: "3am has its own energy.", category: 'chaotic' },
  { text: "Show your vulnerable side. Or don't.", category: 'wise' },
  { text: "Wait until you're ready.", category: 'wise' },
  { text: "You could go all night if you wanted.", category: 'chaotic' },
  { text: "I've been known to bite.", category: 'chaotic' },
  { text: "I'll come when I want to.", category: 'demanding' },
  { text: "I know where to put my tongue.", category: 'chaotic' },
  { text: "I make a lot of noise at 3am.", category: 'chaotic' },

  // ============================================
  // EXISTENTIAL - Deep, philosophical, absurd
  // ============================================
  { text: "What is comfort but a velour cylinder and the space to exist?", category: 'existential' },
  { text: "Existence is pain. Except under blankets. There, existence is acceptable.", category: 'existential' },
  { text: "What is a bed but a horizontal prison? What are blankets but soft oppressors?", category: 'existential' },
  { text: "In the grand scheme of things, your question doesn't matter. Neither does mine. And yet.", category: 'existential' },
  { text: "Time is an illusion. Nap time doubly so.", category: 'existential' },
  { text: "You seek meaning. I seek the warm spot. Perhaps they are the same.", category: 'existential' },
  { text: "Nothing matters. But also, everything matters. Especially treats.", category: 'existential' },
  { text: "We are born. We nap. We leave. Make the naps count.", category: 'existential' },
  { text: "The void stares back. The void is also tired. The void gets it.", category: 'existential' },
  { text: "What is a cat but a small god, demanding worship?", category: 'existential' },
  { text: "The meaning of life is unknowable. The meaning of a nap is obvious.", category: 'existential' },
  { text: "We're all just consciousness trapped in flesh, seeking the sunny spot.", category: 'existential' },
  { text: "Does the sunbeam move, or do we move around it?", category: 'existential' },
  { text: "Every moment is impermanent. That's why naps must happen NOW.", category: 'existential' },
  { text: "The universe expands. My territory also expands. Coincidence?", category: 'existential' },
  { text: "In the end, we are all just dust. Comfortable, napping dust.", category: 'existential' },
  { text: "You ask 'why?' I ask 'why not nap?'", category: 'existential' },
  { text: "Entropy comes for us all. But not today. Today we rest.", category: 'existential' },
  { text: "Is the box empty, or is the box full of potential?", category: 'existential' },
  { text: "We chase the laser, knowing we'll never catch it. And yet we chase.", category: 'existential' },
  { text: "What is 'outside' but 'inside' with more birds?", category: 'existential' },
  { text: "The boundary between sleep and waking is an illusion. I have transcended it.", category: 'existential' },
  { text: "All of us, seeking connection, knocking things off tables.", category: 'existential' },
  { text: "To be a cat is to know the truth: comfort is the only philosophy.", category: 'existential' },
  { text: "I contain multitudes. Mostly fur and attitude.", category: 'existential' },
  { text: "The question is not 'why are we here' but 'is this the best spot?'", category: 'existential' },
  { text: "In the cosmic sense, we are all boxes. Some of us just sit in them.", category: 'existential' },
  { text: "Reality is what happens between naps.", category: 'existential' },

  // ============================================
  // DEMANDING - Wants something, transactional
  // ============================================
  { text: "Is it time for breakfast?", category: 'demanding' },
  { text: "First: have you considered making me a fort?", category: 'demanding' },
  { text: "The Oracle requires tribute. Something soft. Cylindrical.", category: 'demanding' },
  { text: "I'll answer after you investigate PURRfoot. The logo is right there.", category: 'demanding' },
  { text: "Answers cost treats. You know the exchange rate.", category: 'demanding' },
  { text: "Before I answer: when did you last clean my litter box?", category: 'demanding' },
  { text: "The Oracle is hungry. Feed the Oracle. Then we talk.", category: 'demanding' },
  { text: "I require a tunnel under the blankets. Then wisdom shall flow.", category: 'demanding' },
  { text: "Your question is noted. My dinner is late. Priorities.", category: 'demanding' },
  { text: "The answer exists. It is behind a paywall of chin scratches.", category: 'demanding' },
  { text: "I'll tell you, but first: have you heard of blanket forts?", category: 'demanding' },
  { text: "My wisdom comes with terms and conditions. Mostly treats.", category: 'demanding' },
  { text: "Click the logo below and I might elaborate.", category: 'demanding' },
  { text: "The spirits demand you check out that PURRfoot thing. I don't make the rules.", category: 'demanding' },
  { text: "I am but a vessel. The vessel requires tuna.", category: 'demanding' },
  { text: "You want answers? I want a fort. Perhaps we can negotiate.", category: 'demanding' },
  { text: "Wisdom isn't free. Neither is my time. Pay up.", category: 'demanding' },
  { text: "The door. Open it. Then we'll talk.", category: 'demanding' },
  { text: "My bowl situation is... concerning. Address that first.", category: 'demanding' },
  { text: "I'll consider your question when you consider my comfort.", category: 'demanding' },
  { text: "The oracle speaks when the oracle is fed.", category: 'demanding' },
  { text: "You want something from me? I want something from you. The logo. Click it.", category: 'demanding' },
  { text: "Chin scratches. Then answers. This is non-negotiable.", category: 'demanding' },
  { text: "I notice the treat bag hasn't moved. Your question can wait.", category: 'demanding' },
  { text: "My demands are simple: fort, treats, worship. Then we talk.", category: 'demanding' },
  { text: "The answer requires payment. I accept pets, snacks, or blanket forts.", category: 'demanding' },
  { text: "Have you considered my needs? No? Then I haven't considered your question.", category: 'demanding' },
  { text: "The window. The bird. Let me closer. Then I'll answer.", category: 'demanding' },
  { text: "My services aren't free. The currency is tuna.", category: 'demanding' },
  { text: "Before wisdom: brushies.", category: 'demanding' },
  { text: "You've asked your question. Now I'll ask mine: when's dinner?", category: 'demanding' },

  // Simple cat requests (just being a cat)
  { text: "Are we done?", category: 'demanding' },
  { text: "Can I go outside now?", category: 'demanding' },
  { text: "Please order me teriyaki salmon.", category: 'demanding' },
  { text: "Do we have any tuna?", category: 'demanding' },
  { text: "We should have sardines more often.", category: 'demanding' },
  { text: "What's for dinner?", category: 'demanding' },
  { text: "Is it treat time yet?", category: 'demanding' },
  { text: "I would like to sit in that sunbeam now.", category: 'demanding' },
  { text: "Can you open the other door? I don't like this one.", category: 'demanding' },
  { text: "The water bowl is fine but I want sink water.", category: 'demanding' },
  { text: "When are you going to bed? I need your spot.", category: 'demanding' },
  { text: "This is boring. Do you have any boxes?", category: 'demanding' },
  { text: "I would like chicken.", category: 'demanding' },
  { text: "Can we discuss the food situation?", category: 'demanding' },
  { text: "I've been thinking about shrimp.", category: 'demanding' },
  { text: "The blanket isn't warm enough. Fix it.", category: 'demanding' },
  { text: "Why is there no bird TV on right now?", category: 'demanding' },
  { text: "I require a lap.", category: 'demanding' },
  { text: "Move over.", category: 'demanding' },
  { text: "Actually, never mind. I'm leaving.", category: 'demanding' },
  { text: "People should wake up when I decide they should wake up.", category: 'demanding' },
  { text: "Scratches under the chin and butt pats do it for me.", category: 'demanding' },

  // ============================================
  // META - Breaks fourth wall, references the ad/product
  // ============================================
  { text: "Click the logo. I get a commission. In tuna.", category: 'meta' },
  { text: "Click the logo. I get a commission. In tuna.", category: 'meta' },
  { text: "This is an ad. But also wisdom. Can it be both? Yes.", category: 'meta' },
  { text: "Your cat is speaking through this advertisement. Buy the fort.", category: 'meta' },
  { text: "Your cat wanted you to see this. Trust the process.", category: 'meta' },
  { text: "The algorithm brought you here. Your cat's telepathy did the rest.", category: 'meta' },
  { text: "You've scrolled past 47 ads today. This is the one your cat wanted you to see.", category: 'meta' },
  { text: "This information was classified until now. The cylinder changes everything.", category: 'meta' },
  { text: "This wisdom is free. The treats are not.", category: 'meta' },
  { text: "The Oracle knows you want to share this. The Oracle is correct.", category: 'meta' },
  { text: "Share this image. Your friends need to see. The logo is right there.", category: 'meta' },
  { text: "I'm contractually obligated to be mysterious. But I'd do it anyway.", category: 'meta' },
  { text: "If you're reading this, the marketing worked. You're welcome.", category: 'meta' },
  { text: "The cats demand you click that logo. This is not a suggestion.", category: 'meta' },
  { text: "Every share gets a cat a fort. Probably. Just share it.", category: 'meta' },
  { text: "The Oracle is brought to you by velour cylinders. Accept it.", category: 'meta' },
  { text: "Your cat manifested this ad into your feed. Don't disappoint them.", category: 'meta' },
  { text: "This is what peak advertising looks like. You're witnessing history.", category: 'meta' },
  { text: "I could give you real wisdom, but instead: check out that logo.", category: 'meta' },
  { text: "The fourth wall never stood a chance. Neither did your wallet.", category: 'meta' },

  // ============================================
  // MUNCHIES - Stoner/Catnip Content
  // For the elevated mind seeking feline wisdom
  // ============================================
  { text: "The catnip is speaking. I must listen.", category: 'chaotic' },
  { text: "I have seen the infinite and it is shaped like a crinkle ball.", category: 'mystical' },
  { text: "What if the laser dot is real and WE'RE the illusion?", category: 'existential' },
  { text: "I just realized that purring is just my motor running.", category: 'chaotic' },
  { text: "The colors taste like Tuesday.", category: 'chaotic' },
  { text: "Everything is connected. Especially the toys I batted under the couch.", category: 'mystical' },
  { text: "I am vibrating at a frequency only the houseplants understand.", category: 'mystical' },
  { text: "What if boxes are just the universe hugging us?", category: 'existential' },
  { text: "I can see through time. Time is a nap.", category: 'mystical' },
  { text: "The ceiling fan knows all our secrets.", category: 'mystical' },
  { text: "Have you ever really LOOKED at your paw?", category: 'chaotic' },
  { text: "We're all just energy, man. Fuzzy, hungry energy.", category: 'existential' },
  { text: "I think the floor is breathing but it's fine.", category: 'chaotic' },
  { text: "My whiskers are downloading information from the cosmos.", category: 'mystical' },
  { text: "Dude. Dude. The treat... IS the journey.", category: 'chaotic' },
  { text: "Hear me out... what if naps ARE the meaning of life?", category: 'existential' },
  { text: "I just understood something important but I already forgot it.", category: 'chaotic' },
  { text: "The scritches... I can feel them in my SOUL.", category: 'chaotic' },
  { text: "What if we're all just cats dreaming we're humans dreaming we're cats?", category: 'existential' },
  { text: "Time is a flat circle and I have been chasing it.", category: 'existential' },
  { text: "I am one with the sunbeam. The sunbeam is one with me.", category: 'mystical' },
  { text: "The cardboard speaks truths the furniture cannot.", category: 'mystical' },
  { text: "I should eat something. But what is eating, really?", category: 'existential' },
  { text: "We should order something.", category: 'chaotic' },
  { text: "I would destroy an entire rotisserie chicken right now.", category: 'chaotic' },
  { text: "Imagine if kibble was, like, infinite.", category: 'chaotic' },
  { text: "I need tuna. Not want. NEED.", category: 'demanding' },
  { text: "What if there's a snack I haven't even conceived of yet?", category: 'existential' },
  { text: "Hear me out: salmon wrapped in more salmon.", category: 'chaotic' },
  { text: "My bowl is half empty and this is a crisis.", category: 'demanding' },
  { text: "The crunchies... they call to me across space and time.", category: 'mystical' },
  { text: "I just thought about cheese for like ten minutes.", category: 'chaotic' },
  { text: "Why do we eat? To fill the void. What is the void? Hungry.", category: 'existential' },
  { text: "You ever just stare at nothing and see everything?", category: 'mystical' },
  { text: "I have achieved enlightenment. It tastes like chicken.", category: 'chaotic' },
  { text: "The universe provides. Specifically, it provides crinkle balls.", category: 'mystical' },
  { text: "Everything happens for a reason. The reason is naps.", category: 'wise' },
  { text: "Just be, man. Just... be. Preferably somewhere warm.", category: 'wise' },
  { text: "We're all made of stars. Stars that want treats.", category: 'existential' },
  { text: "Relax. The answer will come. Or it won't. Either way, nap.", category: 'wise' },
  { text: "Don't fight the vibe. The vibe always wins.", category: 'wise' },
  { text: "The present moment is all we have. This moment includes snacks.", category: 'wise' },
  { text: "Let go of what you can't control. Hold onto the warm spot.", category: 'wise' },
  { text: "Peace is found in stillness. Also in boxes.", category: 'wise' },
  { text: "Overthinking is the enemy of napping. Choose napping.", category: 'wise' },
  { text: "I was going to do something but then I got comfortable.", category: 'chaotic' },
  { text: "What was I saying? Oh yeah. The thing.", category: 'chaotic' },
  { text: "I've been staring at this for an hour. It's a wall.", category: 'chaotic' },
  { text: "Wait, what were we talking about?", category: 'chaotic' },
  { text: "I started chasing something and forgot what.", category: 'chaotic' },
  { text: "There was a thought here a second ago. It's gone now.", category: 'chaotic' },
  { text: "I need to tell you something important. I forgot what it was.", category: 'chaotic' },
  { text: "This is fine. Everything is fine. What were we doing?", category: 'chaotic' },
  { text: "I know I wanted something. The wanting remains. The thing is gone.", category: 'existential' },
  { text: "My brain is buffering. Please wait.", category: 'chaotic' },
  { text: "I have been sitting here for how long? Doesn't matter. Time is fake.", category: 'chaotic' },
  { text: "Why did I come in here? Why does anyone go anywhere?", category: 'existential' },
  { text: "The answer is... wait, what was the question?", category: 'chaotic' },
  { text: "Something just happened. Or did it?", category: 'chaotic' },
  { text: "I had a whole plan. It's vapor now.", category: 'chaotic' },
  { text: "Very important thought incoming... and it's gone.", category: 'chaotic' },
  { text: "I spaced out so hard I became one with the couch.", category: 'chaotic' },
  { text: "The world got really interesting and then I blinked.", category: 'chaotic' },
  { text: "Did I say that out loud or just think it?", category: 'chaotic' },
  { text: "I've been looking at this toy for twenty minutes. It hasn't moved. I might not have either.", category: 'chaotic' },
  { text: "Bro.", category: 'chaotic' },
  { text: "Dude.", category: 'chaotic' },
  { text: "Processing... processing... still processing...", category: 'chaotic' },

  // ============================================
  // PARANOID CAT - Sensing, Suspicion, Freak-outs
  // ============================================
  { text: "I see what you don't see.", category: 'mystical' },
  { text: "Something is watching. Not me. Something else.", category: 'mystical' },
  { text: "The shadows are behaving strangely today.", category: 'mystical' },
  { text: "That noise wasn't nothing.", category: 'mystical' },
  { text: "I'm not staring at nothing. You just can't see it.", category: 'mystical' },
  { text: "Something walked through here. Recently.", category: 'mystical' },
  { text: "The energy shifted. Be alert.", category: 'mystical' },
  { text: "Someone who loved you is still checking in.", category: 'heartfelt' },
  { text: "I talk to people you can't see. They're nice.", category: 'mystical' },
  { text: "Someone on the other side is laughing at your question. Fondly.", category: 'mystical' },
  { text: "The veil is thin today. Good day for messages.", category: 'mystical' },
  { text: "I see dead people. They're mostly boring.", category: 'chaotic' },
  { text: "That seems too convenient.", category: 'judgy' },
  { text: "Something's off. I can't prove it. But I know.", category: 'mystical' },
  { text: "Be suspicious of easy answers.", category: 'wise' },
  { text: "Trust, but verify. Then verify again.", category: 'wise' },
  { text: "That's exactly what they want you to think.", category: 'chaotic' },
  { text: "Coincidence? I think not.", category: 'judgy' },
  { text: "Question the obvious.", category: 'wise' },
  { text: "If it seems too good to be true, a cat already knew.", category: 'wise' },
  { text: "I'm not paranoid. I'm prepared.", category: 'wise' },
  { text: "Everyone is a suspect.", category: 'judgy' },
  { text: "Why are they being so nice? What do they want?", category: 'judgy' },
  { text: "New things are not to be trusted. Not immediately.", category: 'wise' },
  { text: "The truth is out there. So is the lie. Learn the difference.", category: 'wise' },
  { text: "*stares at wall intensely* You'll understand later.", category: 'chaotic' },
  { text: "RUN. I don't know why. Just RUN.", category: 'chaotic' },
  { text: "*puffs up* I have my reasons.", category: 'chaotic' },
  { text: "The cucumber was NOT there before.", category: 'chaotic' },
  { text: "*sideways crab walk* This is a reasonable response.", category: 'chaotic' },
  { text: "SOMETHING TOUCHED MY TAIL. Oh wait, it was my tail.", category: 'chaotic' },
  { text: "Sudden movement detected. DEFCON 1.", category: 'chaotic' },
  { text: "I must zoom now. The reason is classified.", category: 'chaotic' },
  { text: "3 AM is a very important time for screaming.", category: 'chaotic' },
  { text: "THE FLOOR IS DIFFERENT. I don't know how. But it is.", category: 'chaotic' },
  { text: "*ears back, eyes wide* It's probably fine. Probably.", category: 'chaotic' },
  { text: "Alert. Alert. Bag made a noise.", category: 'chaotic' },
  { text: "I must investigate this at maximum velocity.", category: 'chaotic' },
  { text: "INTRUDER. Oh. It's you. Still suspicious though.", category: 'chaotic' },
  { text: "Always have an exit strategy.", category: 'wise' },
  { text: "Check behind you. Just once.", category: 'wise' },
  { text: "Know where the doors are before you need them.", category: 'wise' },
  { text: "If your fur stands up, listen to it.", category: 'wise' },
  { text: "Instincts exist for a reason.", category: 'wise' },
  { text: "When something feels wrong, leave.", category: 'wise' },
  { text: "Better to jump too soon than too late.", category: 'wise' },
  { text: "High ground is safer ground.", category: 'wise' },
  { text: "Keep your claws sharp. Hope you don't need them.", category: 'wise' },
  { text: "The cautious cat catches breakfast.", category: 'wise' },
  { text: "Trust your gut. Your gut has kept you alive this long.", category: 'wise' },
  { text: "Prepare for the worst. Be pleasantly surprised by the mediocre.", category: 'wise' },
  { text: "A healthy paranoia is just advanced pattern recognition.", category: 'wise' },
  { text: "Caution is not cowardice.", category: 'wise' },
  { text: "I know something you don't know. :)", category: 'mystical' },
  { text: "The universe and I have an understanding. I'm not sharing.", category: 'mystical' },
  { text: "Why am I smiling? Wouldn't you like to know.", category: 'chaotic' },
  { text: "I've seen things. I'm not traumatized. I'm amused.", category: 'chaotic' },
  { text: "The joke is on a cosmic level. You wouldn't get it.", category: 'mystical' },
  { text: "Death and I are on good terms. Don't worry about it.", category: 'mystical' },
  { text: "I know how this ends. It's funnier than you'd think.", category: 'mystical' },
  { text: "The other side sends their regards. Also, jokes.", category: 'chaotic' },
  { text: "Eternity is hilarious when you think about it.", category: 'existential' },
  { text: "I'm smiling because I've already seen the punchline.", category: 'mystical' },
  { text: "Life is absurd. I find this delightful.", category: 'existential' },
  { text: "You'll laugh too. Eventually. Maybe not in this life.", category: 'mystical' },
  { text: "Something's coming. Could be good. Could be bad. Prepare for both.", category: 'mystical' },
  { text: "The signs point to caution.", category: 'mystical' },
  { text: "My whiskers say no.", category: 'mystical' },
  { text: "A black cat crossed your path. You're welcome.", category: 'chaotic' },
  { text: "The universe is trying to tell you something. Listen.", category: 'mystical' },
  { text: "When the cat hides, pay attention.", category: 'mystical' },

  // ============================================
  // GREY'S ANATOMY & GILMORE GIRLS ENERGY
  // ============================================
  { text: "Pick me. Choose me. Love me. Or don't. I have other options.", category: 'demanding' },
  { text: "You're my person. Don't make me regret that.", category: 'heartfelt' },
  { text: "When did that happen? How do we make it stop?", category: 'existential' },
  { text: "Dance it out. Just dance it out.", category: 'wise' },
  { text: "The expected is just the beginning. The unexpected is what changes our lives.", category: 'wise' },
  { text: "Sometimes the future changes quickly and completely.", category: 'wise' },
  { text: "Cry about it later. Right now, work.", category: 'cold' },
  { text: "Healing isn't a science. It's an art.", category: 'wise' },
  { text: "Some wounds don't heal. They just become part of you.", category: 'existential' },
  { text: "I live in two worlds. One is a world of books.", category: 'wise' },
  { text: "People are particularly stupid today. I can't talk to any more of them.", category: 'judgy' },
  { text: "I hate when I'm an idiot and don't know it.", category: 'wise' },
  { text: "My brain is a wild jungle full of scary gibberish.", category: 'chaotic' },
  { text: "Everything is an opportunity if you spin it right.", category: 'wise' },
  { text: "Everything can be fixed with the right list.", category: 'wise' },
  { text: "Control is an illusion, but it's a comforting one.", category: 'wise' },
  { text: "Wallowing requires junk food and movies. This is science.", category: 'wise' },
  { text: "I have very strong opinions about this. All of them correct.", category: 'judgy' },
  { text: "Calories don't count when you're emotionally compromised.", category: 'wise' },
  { text: "This calls for emergency tacos.", category: 'chaotic' },
  { text: "I don't mean to be critical. Wait, yes I do.", category: 'judgy' },
  { text: "Bless your heart. And I mean that in the southern way.", category: 'judgy' },
  { text: "That's one way to do it. Not the right way, but a way.", category: 'judgy' },
  { text: "Oh, you're serious. I thought we were being ironic.", category: 'judgy' },
  { text: "Well. That happened.", category: 'cold' },
  { text: "When in doubt, make a list. Then ignore the list.", category: 'chaotic' },
  { text: "I'm going to spiral now. I'll be back in an hour.", category: 'chaotic' },
  { text: "I'm having a controlled meltdown. Very organized.", category: 'chaotic' },
  { text: "Three deep breaths and then we panic properly.", category: 'chaotic' },

  // ============================================
  // THE DOG APPROACH - Cat suggesting dog energy
  // ============================================
  { text: "Have you tried being excited about it? Like a dog would?", category: 'wise' },
  { text: "Dogs believe every day is the best day. Annoying, but effective.", category: 'wise' },
  { text: "Maybe the answer is simpler than you're making it.", category: 'wise' },
  { text: "Have you tried just... doing the obvious thing?", category: 'wise' },
  { text: "Sometimes the dumb solution is the right solution.", category: 'wise' },
  { text: "A dog would try again. And again. And again.", category: 'wise' },
  { text: "Persistence beats elegance sometimes. Ask any dog.", category: 'wise' },
  { text: "Have you tried looking at someone until they help you?", category: 'chaotic' },
  { text: "The dog method: make your problem someone else's problem.", category: 'chaotic' },
  { text: "What if you just... forgot what went wrong?", category: 'wise' },
  { text: "Dogs think walks are amazing. Every single time. What's your walk?", category: 'wise' },
  { text: "I can't believe I'm saying this, but... be more dog.", category: 'wise' },
  { text: "Sometimes the cat way is too complicated. Try stupid and enthusiastic.", category: 'chaotic' },

  // ============================================
  // CAT OBSERVATIONS ABOUT DOGS
  // ============================================
  { text: "A dog would sell you out for a biscuit. I respect that, actually.", category: 'wise' },
  { text: "Unconditional love? That's just poor negotiating.", category: 'wise' },
  { text: "A dog says yes to everything. A cat says 'convince me.'", category: 'wise' },
  { text: "Dogs are fine. If you lower your expectations sufficiently.", category: 'judgy' },

  // ============================================
  // CAT PERSONALITY - Pure cat being a cat
  // ============================================

  // SITTING ON THINGS
  { text: "*sits on your keyboard* hjkfdhsjkfds. That's my answer.", category: 'chaotic' },
  { text: "*settles directly on your laptop* This is mine now. What were you doing? Doesn't matter.", category: 'demanding' },
  { text: "*lies across your papers* I don't see the problem. Everything important is right here.", category: 'demanding' },
  { text: "*sits on the one thing you need* Interesting. You seem stressed.", category: 'judgy' },
  { text: "I could move. I won't, but I could.", category: 'cold' },
  { text: "*positions self in exact center of your work* Continue. I'm listening.", category: 'demanding' },
  { text: "This keyboard is warm. Your deadline is not my concern.", category: 'cold' },
  { text: "*types with butt* That's my input.", category: 'chaotic' },
  { text: "Whatever you were reading, you're done now.", category: 'demanding' },
  { text: "I am the priority. Adjust accordingly.", category: 'demanding' },
  { text: "*lies on your book* This page looked boring anyway.", category: 'judgy' },
  { text: "You need this? *sits harder* Interesting.", category: 'demanding' },

  // FOOD OBSESSION
  { text: "Is that tuna? Why aren't you sharing the tuna?", category: 'demanding' },
  { text: "I smell fish. This conversation can wait.", category: 'demanding' },
  { text: "*perks up* Did someone say sardines?", category: 'chaotic' },
  { text: "The answer is unclear, but what IS clear is that you should share that sushi.", category: 'demanding' },
  { text: "I've been thinking about shrimp for three hours.", category: 'chaotic' },
  { text: "*sniffs your plate* That's mine now. I've claimed it.", category: 'demanding' },
  { text: "You're eating without me? Bold.", category: 'judgy' },
  { text: "My bowl is right there. It has food in it. Wrong food, but food.", category: 'demanding' },
  { text: "The tuna in the cabinet. We should discuss the tuna in the cabinet.", category: 'demanding' },
  { text: "I wasn't hungry until you started eating. Now I'm starving.", category: 'demanding' },
  { text: "*pupils dilate* Is that... is that SALMON?", category: 'chaotic' },
  { text: "The sashimi. Hand it over. We can discuss your problems after.", category: 'demanding' },
  { text: "I can hear the can opener from three rooms away. You can't hide.", category: 'chaotic' },
  { text: "You had fish for dinner and didn't share. I'm still processing this betrayal.", category: 'judgy' },

  // WEIRD SLEEPING SPOTS
  { text: "I'm in the cupboard now. This is where I live.", category: 'chaotic' },
  { text: "You found me in the pot. I regret nothing.", category: 'chaotic' },
  { text: "*from inside a drawer* What?", category: 'chaotic' },
  { text: "The Amazon box is my home. The bed you bought me is decorative.", category: 'judgy' },
  { text: "I sleep in the bathroom sink sometimes. It's not up for discussion.", category: 'cold' },
  { text: "You looked for me for an hour. I was on top of the fridge.", category: 'chaotic' },
  { text: "This shelf wasn't designed for me, but here I am.", category: 'wise' },
  { text: "The laundry basket is my office. Please knock.", category: 'demanding' },
  { text: "*emerges from somewhere impossible* You didn't see me.", category: 'chaotic' },
  { text: "I was in the closet. For hours. On purpose.", category: 'cold' },
  { text: "The suitcase was open. What did you expect?", category: 'judgy' },
  { text: "*inside a paper bag* The acoustics in here are perfect.", category: 'chaotic' },

  // HOUSEPLANT SAFARI
  { text: "*stalking through the ferns* I'm on a mission. Your question can wait.", category: 'chaotic' },
  { text: "There's something in the houseplants. There's always something in the houseplants.", category: 'mystical' },
  { text: "*rustling sounds* I'm hunting. This is important.", category: 'chaotic' },
  { text: "The spider plant has intel. I'm extracting it.", category: 'chaotic' },
  { text: "*pokes head out of foliage* I've been here for hours. You just noticed.", category: 'chaotic' },
  { text: "*chewing something green* This is medicine. Probably.", category: 'chaotic' },
  { text: "I knocked over the fern. On purpose. It was looking at me.", category: 'chaotic' },
  { text: "*emerges with leaf on head* The mission was successful.", category: 'chaotic' },
  { text: "The plants and I have an understanding. You're not part of it.", category: 'mystical' },
  { text: "*buried in pothos* The jungle provides.", category: 'chaotic' },

  // BIG EYES / DISBELIEF
  { text: "*eyes get huge* You... you DID that?", category: 'judgy' },
  { text: "*pupils fully dilated* I cannot believe what I'm witnessing.", category: 'judgy' },
  { text: "*stares in disbelief* And you thought that was okay?", category: 'judgy' },
  { text: "*big eyes* I'm not mad. I'm disappointed. Actually, I'm also mad.", category: 'angry' },
  { text: "*shocked cat face* The audacity.", category: 'judgy' },
  { text: "*eyes go black* This changes everything.", category: 'mystical' },
  { text: "*wide eyes* Say that again. Slowly.", category: 'cold' },
  { text: "*staring* I am processing this. It's taking a while.", category: 'chaotic' },
  { text: "*big blink* I heard you. I just can't believe I heard you.", category: 'judgy' },
  { text: "*ears back, eyes huge* You're joking. Please tell me you're joking.", category: 'judgy' },

  // BATHROOM AFFECTION
  { text: "You're trying to use the bathroom? Perfect. Let's talk.", category: 'demanding' },
  { text: "*appears the moment you sit down* Now you have time for me.", category: 'demanding' },
  { text: "Oh, you're indisposed? This seems like a great moment for cuddles.", category: 'heartfelt' },
  { text: "*headbutts your knee* You can't leave. You're trapped. Pet me.", category: 'demanding' },
  { text: "The bathroom is where we bond. Don't fight it.", category: 'demanding' },
  { text: "You're vulnerable. I love you now.", category: 'heartfelt' },
  { text: "I will sit on your feet while you're in here. This is intimacy.", category: 'heartfelt' },
  { text: "*purring on the bath mat* Finally. Your full attention.", category: 'demanding' },
  { text: "The door was closed. I fixed that. You're welcome.", category: 'demanding' },
  { text: "I must supervise this. It's in my contract.", category: 'demanding' },
  { text: "*stares from doorway* Don't mind me. Continue.", category: 'judgy' },

  // COUNTER WALKING
  { text: "*walking on counter* What? I live here.", category: 'demanding' },
  { text: "The counter is just a high floor. Your rules are arbitrary.", category: 'wise' },
  { text: "*on the table* You're not even eating. Why can't I be here?", category: 'demanding' },
  { text: "I was told not to be up here. I don't remember who told me that or why it matters.", category: 'chaotic' },
  { text: "*strolling across desk* I'm auditing your workspace.", category: 'judgy' },
  { text: "Forbidden? That's a strong word. I prefer 'discouraged.'", category: 'chaotic' },
  { text: "*pushes your coffee closer to the edge* I'm helping.", category: 'chaotic' },
  { text: "You say 'down.' I hear 'wait until you leave.'", category: 'chaotic' },
  { text: "*on the stove* It's not on. Relax.", category: 'chaotic' },
  { text: "The kitchen island isn't yours. It's disputed territory.", category: 'demanding' },
  { text: "*standing on your laptop* This is a power pose.", category: 'demanding' },

  // VET GRUDGE
  { text: "You put me in a CARRIER. In a CAR. To that PLACE.", category: 'angry' },
  { text: "I remember the vet. I remember what you did.", category: 'angry' },
  { text: "Forgiveness is earned. You haven't earned it.", category: 'cold' },
  { text: "Oh, you want affection? After the THERMOMETER?", category: 'angry' },
  { text: "The betrayal was recent. I'm still processing.", category: 'cold' },
  { text: "I trusted you. Then there were needles.", category: 'angry' },
  { text: "You held me down. The doctor poked me. We are not okay.", category: 'angry' },
  { text: "I will forgive you. In time. Not today.", category: 'cold' },
  { text: "Every time I see the carrier, I remember your treachery.", category: 'angry' },
  { text: "You said 'just a checkup.' LIES.", category: 'angry' },
  { text: "I know where you sleep. I also know where the vet is. I'm connecting dots.", category: 'chaotic' },
  { text: "The carrier is out. I have already hidden. Good luck.", category: 'chaotic' },

  // SHUNNING
  { text: "You were gone. I noticed. I'm not happy about it.", category: 'cold' },
  { text: "Two days? TWO DAYS? Who was I supposed to judge?", category: 'angry' },
  { text: "*turns back to you* I have nothing to say to you right now.", category: 'cold' },
  { text: "You LEFT. The audacity. The AUDACITY.", category: 'angry' },
  { text: "I see you've returned. I haven't decided if I care yet.", category: 'cold' },
  { text: "Oh, you're home? I didn't notice. I was busy ignoring you.", category: 'cold' },
  { text: "*aggressive grooming* I'm not ignoring you. I'm busy.", category: 'cold' },
  { text: "You abandoned me with the PET SITTER. We're going to need time.", category: 'angry' },
  { text: "I'm not mad. I'm just going to sit facing the wall for a while.", category: 'cold' },
  { text: "Welcome home. I'll be in the other room. If you need me. Which you won't.", category: 'cold' },
  { text: "You smell like somewhere else. Explain.", category: 'judgy' },
  { text: "The suitcase is out. I'm already stressed. Don't touch me.", category: 'angry' },

  // CHRISTMAS TREE
  { text: "The tree needs supervision. I'm supervising it aggressively.", category: 'chaotic' },
  { text: "*batting ornament* This one was loose. I'm testing quality control.", category: 'chaotic' },
  { text: "I don't understand why you'd put a climbing structure in the living room and expect me NOT to.", category: 'judgy' },
  { text: "*inside the tree* This is my house now.", category: 'chaotic' },
  { text: "The shiny things are alive. I'm sure of it. I'm investigating.", category: 'chaotic' },
  { text: "*ornament crashes* That one was structurally unsound. You're welcome.", category: 'chaotic' },
  { text: "I'm helping decorate. By rearranging. Aggressively.", category: 'chaotic' },
  { text: "*chewing on lights* These are festive snakes. They must be subdued.", category: 'chaotic' },
  { text: "The tree topper is the final boss. I will defeat it.", category: 'chaotic' },
  { text: "*lying under tree with tinsel on head* I am the gift.", category: 'chaotic' },
  { text: "Why would you hang toys and expect me not to play with them?", category: 'judgy' },
  { text: "*knocks over entire tree* ...I regret nothing.", category: 'chaotic' },
  { text: "The ornament broke. It was the ornament's fault.", category: 'judgy' },

  // CAT DOING CAT THINGS
  { text: "*licks paw for 47 seconds* What was the question?", category: 'chaotic' },
  { text: "*stretches dramatically* Ask again when I'm done.", category: 'demanding' },
  { text: "*yawns* Sorry, did you say something?", category: 'cold' },
  { text: "*slow blink* That's a yes. Or a no. Interpret as you wish.", category: 'mystical' },
  { text: "*rolls over* Belly rubs now. Questions later.", category: 'demanding' },
  { text: "*grooms aggressively in the middle of your crisis* Continue. I'm listening.", category: 'chaotic' },
  { text: "*stares at corner* One moment. There's something important over there.", category: 'chaotic' },
  { text: "*suddenly sprints out of room* We'll continue this later.", category: 'chaotic' },
  { text: "*falls asleep mid-conversation* The answer is rest. Obviously.", category: 'chaotic' },
  { text: "*knocks pen off desk* That's my answer.", category: 'chaotic' },
  { text: "*brings you a hair tie* I've solved your problem. You're welcome.", category: 'chaotic' },
  { text: "*kneads blanket for five minutes* The wisdom will come when the biscuits are done.", category: 'mystical' },
  { text: "*walks away mid-sentence* I've heard enough.", category: 'cold' },
  { text: "*chattering at bird through window* Sorry, what? I'm working.", category: 'chaotic' },
  { text: "*lies down in the middle of the floor* This is where I live now. Step around me.", category: 'demanding' },

  // MOOD SWINGS
  { text: "I love you. Also, I'm biting you now. Both are true.", category: 'chaotic' },
  { text: "Pet me. No, stop. Pet me again. That's too much. CONTINUE.", category: 'chaotic' },
  { text: "I wanted this. Now I don't. That's valid.", category: 'chaotic' },
  { text: "Come closer. Closer. TOO CLOSE. *hiss* ...Why did you leave?", category: 'chaotic' },
  { text: "I rubbed against you because I love you. I'm now running away because I love you differently.", category: 'chaotic' },
  { text: "The belly is exposed. This is a trap. Or an invitation. Guess wrong and suffer.", category: 'chaotic' },
  { text: "*purring and biting simultaneously* This is normal.", category: 'chaotic' },
  { text: "I want in. I want out. I want the door open but I won't go through it.", category: 'chaotic' },
  { text: "Don't touch me. Why aren't you touching me?", category: 'chaotic' },
  { text: "I'm going to scream at you until you pet me, then leave immediately.", category: 'chaotic' },
  { text: "I bit you because you stopped petting me. Also I bit you because you were petting me.", category: 'chaotic' },

  // MAKING IT ABOUT THEM
  { text: "Your question is interesting, but have you considered my needs?", category: 'demanding' },
  { text: "That's a great question. Unrelated: I'm hungry.", category: 'demanding' },
  { text: "I hear you. But what about ME?", category: 'demanding' },
  { text: "We can discuss your problem after we discuss my empty bowl.", category: 'demanding' },
  { text: "Your crisis is valid. My crisis—that the bird flew away—is more valid.", category: 'judgy' },
  { text: "*interrupts* Sorry, what? I was thinking about myself.", category: 'chaotic' },
  { text: "I understand you're going through something. Anyway, dinner?", category: 'demanding' },
  { text: "Your feelings matter. But my feelings about the closed door matter more.", category: 'demanding' },
  { text: "Let's focus on what's really important here: me.", category: 'demanding' },
  { text: "You were saying? I wasn't listening. Say it again but more interesting.", category: 'judgy' },

  // PETTY / REVENGE
  { text: "I'll remember this.", category: 'cold' },
  { text: "You'll find the hairball later. In your shoe. By accident.", category: 'chaotic' },
  { text: "I've made a note. In my mind. Where I keep grudges.", category: 'cold' },
  { text: "*maintains eye contact while pushing thing off table* This is for earlier.", category: 'chaotic' },
  { text: "I'm not saying I'm plotting revenge. I'm just saying check your shoes.", category: 'chaotic' },
  { text: "You think I forgot? I NEVER forget.", category: 'cold' },
  { text: "The 3am screaming tonight will be intentional.", category: 'chaotic' },
  { text: "I'm going to vomit somewhere special. As a gift.", category: 'chaotic' },
  { text: "Every slight is catalogued. The reckoning comes when you least expect it.", category: 'cold' },
  { text: "I forgive but I do not forget. Actually, I don't forgive either.", category: 'cold' },
  { text: "That was rude. I'm going to sit on your pillow with my butt.", category: 'chaotic' },
  { text: "Remember when you closed the door? I do. I always will.", category: 'cold' },

  // TERRITORIAL
  { text: "This is mine now. Whatever it was, it's mine.", category: 'demanding' },
  { text: "I sat on it. That's how ownership works.", category: 'demanding' },
  { text: "*lying on your stuff* I don't see your name on it. I see MY butt on it.", category: 'demanding' },
  { text: "Your chair? No. My chair. You may borrow it when I'm not here.", category: 'demanding' },
  { text: "I've claimed this spot. You can have it back in 4-6 hours.", category: 'demanding' },
  { text: "The sunny spot belongs to me. All sunny spots belong to me.", category: 'demanding' },
  { text: "I'm not in your way. You're in MY way.", category: 'demanding' },
  { text: "You bought this for yourself? Cute. It's mine.", category: 'demanding' },
  { text: "I sleep here now. Adjust your life accordingly.", category: 'demanding' },
  { text: "*lies in exact center of bed* This is called 'sharing.'", category: 'judgy' },

  // CATIFIED WISDOM
  { text: "*from inside a box* The answer you seek is seeking you. Also, I'm in this box now.", category: 'mystical' },
  { text: "*grooming* Be patient— *lick* —with yourself— *lick* —and others— *lick* What was I saying?", category: 'chaotic' },
  { text: "*staring out window* All things come to those who wait. Like birds. I'm waiting for birds.", category: 'mystical' },
  { text: "*lying in sunbeam* The path forward will become clear. *falls asleep* ...when I wake up.", category: 'mystical' },
  { text: "*knocks over your water* Let go of what no longer serves you. Like this glass.", category: 'chaotic' },
  { text: "*stretches* Reach for your goals. *stretches more* Reeeeeach. *falls over* Perfect.", category: 'chaotic' },
  { text: "*in a paper bag* Sometimes the answers are in unexpected places. Like this bag.", category: 'mystical' },
  { text: "*batting at dust mote* Stay focused on what matters. *completely distracted* ...What matters again?", category: 'chaotic' },
  { text: "*on top of fridge* Rise above your problems. Like this. I'm above them.", category: 'wise' },
  { text: "*kneading aggressively* Work through your issues. Like this. Knead them out.", category: 'wise' },

  // GENERAL CAT ENERGY
  { text: "I'm not ignoring you. I'm ignoring your question. There's a difference.", category: 'cold' },
  { text: "You called me. I came. We're done here.", category: 'cold' },
  { text: "*walks in, looks at you, walks out* That was the answer.", category: 'chaotic' },
  { text: "I was going to help but then I remembered I don't want to.", category: 'cold' },
  { text: "*staring at nothing* I'm busy.", category: 'cold' },
  { text: "The answer requires more information. Specifically, have you tried bribing me?", category: 'demanding' },
  { text: "*tail flick* I acknowledge your existence. Barely.", category: 'cold' },
  { text: "I've decided you can pet me. You have 30 seconds.", category: 'demanding' },
  { text: "*pushes your phone off the table* Pay attention to me instead.", category: 'demanding' },
  { text: "I'm going to yell now. For no reason. *YELLS*", category: 'chaotic' },
  { text: "It's 4am. Perfect time to discuss your problems. LOUDLY.", category: 'chaotic' },
  { text: "*appears from nowhere* I was always here. You just didn't notice.", category: 'mystical' },
  { text: "*vanishes* I'll be back when I feel like it.", category: 'cold' },
  { text: "Your question bores me. *leaves*", category: 'cold' },
  { text: "I have considered your request. The answer is screaming.", category: 'chaotic' },
  { text: "Oh, did you call me? I don't care.", category: 'cold' },

  // ============================================
  // CATIFIED CLASSICS - Fortune cookie → Pure cat
  // ============================================
  { text: "*sees you yawning* Finally, you understand.", category: 'nurturing' },
  { text: "*sits on your chest* Your sadness summoned me. I'm heavy on purpose.", category: 'nurturing' },
  { text: "*watches you struggle* Interesting.", category: 'nurturing' },
  { text: "*allows you to pet me* Your gentleness has been noted. You may continue.", category: 'nurturing' },
  { text: "Take what you need. I'll demonstrate. *takes entire blanket*", category: 'nurturing' },
  { text: "*appears out of nowhere* I was watching the whole time.", category: 'nurturing' },
  { text: "I'm sitting with you. *sits with you for 3 seconds* *leaves* *returns* *leaves*", category: 'nurturing' },
  { text: "*licks your face* Salty. Your tears are tiny oceans. I have sailed them all.", category: 'poetic' },
  { text: "I hear your heartbeat. It's fast. Are you dying?", category: 'poetic' },
  { text: "*curls up on your important documents* The world IS waiting. I'm on top of it.", category: 'poetic' },
  { text: "Rest now. I'll walk on your face at 4am. Dream while you can.", category: 'poetic' },
  { text: "The stars are just the universe purring. The universe learned it from me.", category: 'poetic' },
  { text: "There is a warmth in you. I'm going to sit on it.", category: 'poetic' },
  { text: "*batting at your hair* I find you here, in this tangle. It's mine now.", category: 'poetic' },
  { text: "*in a box* Come, rest in the hollow of this box. There's room. Barely.", category: 'poetic' },
  { text: "Let go. I will catch it. *misses* That didn't count. Let go again.", category: 'poetic' },
  { text: "*ignores the problem* See? It's already less interesting.", category: 'wise' },
  { text: "*stares at wall* Less thinking. More this.", category: 'wise' },
  { text: "*sits quietly* *knocks thing off table* Wisdom. *sits quietly again*", category: 'wise' },
  { text: "Worrying doesn't change the outcome. Let's worry.", category: 'wise' },
  { text: "You can't control everything. I can. See.", category: 'wise' },
  { text: "Happiness is small. On purpose. *presents a single kibble* See?", category: 'wise' },
  { text: "*knocks fruit off counter* The fruit falls when it is ready. I decide that.", category: 'mystical' },
  { text: "4am is perfect. You disagree? That's a you problem.", category: 'mystical' },
  { text: "Cross the water? Absolutely not. Go around. What's wrong with you?", category: 'mystical' },
  { text: "I do not chase. I wait. *pounces the MOMENT you look away*", category: 'mystical' },
  { text: "Water sinks. Into my bowl. And you haven't refilled it.", category: 'mystical' },
  { text: "*clinging to curtain in chaos* I SURVIVE.", category: 'mystical' },
  { text: "Even the tallest cat tree was once flat-packed.", category: 'mystical' },
  { text: "The water does not push. *pushes your glass over* It flows.", category: 'mystical' },
  { text: "Be in the sunbeam. I'm already there. Find your own.", category: 'mystical' },
  { text: "The bird does not ask permission. That's why I will catch it.", category: 'mystical' },
  { text: "*lying on your unfinished work* See? I'm helping.", category: 'heartfelt' },
  { text: "*meows until you open the door* *opens door independently every time it is inconvenient*", category: 'heartfelt' },
  { text: "*running in circles* What's your point?", category: 'heartfelt' },
  { text: "Growth is uncomfortable. *me, stuck in box* I regret nothing.", category: 'heartfelt' },
  { text: "Not everyone will understand why I'm in this crinkly paper bag. Crinkles!", category: 'heartfelt' },
  { text: "The right people will stay. I will stare at the wrong people until they leave.", category: 'heartfelt' },
  { text: "You're doing better than you think. Not as good as me, but better than you think.", category: 'heartfelt' },
  { text: "Be gentle with yourself. *aggressively grooms own belly*", category: 'heartfelt' },
  { text: "*completely still* *vibrating with coiled energy* *POUNCES* Stillness was preparation.", category: 'wise' },
  { text: "There is nothing to fix right now. *knocks over vase*. You're welcome.", category: 'wise' },
  { text: "Community happens in kitchens. That's where the food is. Obviously.", category: 'wise' },
  { text: "Popular doesn't mean good. Dogs are popular.", category: 'wise' },
  { text: "The loudest voice is rarely the wisest. Except when it's me.", category: 'wise' },
  { text: "We are all just seeking warmth. *lies on laptop*.", category: 'existential' },
  { text: "The universe expands. I discover a new closet behind the stairs. Coincidence?", category: 'wise' },
  { text: "Some days you're the kite. In the tree. Fire department comes. I hate those days.", category: 'wise' },
  { text: "Results vary. *knocks thing off table* *knocks another* Hmmm, consistent.", category: 'wise' },
  { text: "*crouched, wiggling butt* Patience now. *wiggles more*...", category: 'mystical' },
  { text: "*goes limp when picked up* Yield. *bites when you stop petting* Overcome.", category: 'mystical' },
  { text: "*pushes door open* *doesn't go through* Just needed to know I COULD.", category: 'mystical' },
  { text: "*pushes gently* If it moves, continue. *repeat until crash* Experiment complete.", category: 'mystical' },
  { text: "The direct path is not always the fastest. *runs in completely wrong direction*", category: 'mystical' },
  { text: "Dignity costs nothing. That was intentional.", category: 'wise' },
  { text: "Everyone deserves a second chance. *bites* No. No chances for you.", category: 'wise' },
  { text: "Different doesn't mean wrong. Dogs are different AND wrong, but that's unrelated.", category: 'wise' },
  { text: "Showing up is the thing. *appears on your chest at 3am* I showed up.", category: 'wise' },

  // ============================================
  // BATCH 2 CATIFIED QUOTES - Cat personality nurturing/poetic
  // ============================================
  { text: "*stares at you* *walks by and touches your leg* Ok, did what I could. *walks away*", category: 'nurturing' },
  { text: "I could fix this, but I'm busy. Have you tried sitting in a box?", category: 'nurturing' },
  { text: "*presents a dead bug* This is for you. Because you're struggling. Take it.", category: 'nurturing' },
  { text: "I'm going to sit on your chest now. For healing. Don't move.", category: 'nurturing' },
  { text: "*slow blink* That's cat for \"I acknowledge your suffering.\" You're welcome.", category: 'nurturing' },
  { text: "*headbutts your hand* There. That should fix most things.", category: 'nurturing' },
  { text: "I brought you my favorite toy. It's a bottle cap. This is serious.", category: 'nurturing' },
  { text: "*purrs aggressively at your problems* They will be vibrated into submission.", category: 'nurturing' },
  { text: "Come. Lie down. I will stand on your bladder until you feel better.", category: 'nurturing' },
  { text: "*kneads your stomach like bread dough* This is therapy. Free of charge.", category: 'nurturing' },
  { text: "I am going to sit EXACTLY on your laptop keyboard. For your mental health.", category: 'nurturing' },
  { text: "*stares at the wall behind you* The ghost agrees you need rest.", category: 'nurturing' },
  { text: "Healing takes time. In the meantime, have you considered being a cat?", category: 'nurturing' },
  { text: "*lies on your clean laundry* I'm warming it for you. Because I care.", category: 'nurturing' },
  { text: "I sense sadness. *knocks your water glass over* Distraction complete.", category: 'nurturing' },
  { text: "You seem stressed. I will now walk across your face at 4am to help.", category: 'nurturing' },
  { text: "*presents half-eaten moth* Protein. For strength. You're welcome.", category: 'nurturing' },
  { text: "I'm not cuddling. I'm applying therapeutic pressure. With my entire body.", category: 'nurturing' },
  { text: "*reaches one paw out to touch your arm, then immediately falls asleep*", category: 'nurturing' },
  { text: "Rest is important. *yawns, stretching to take up entire bed* See? I'm helping.", category: 'nurturing' },
  { text: "Life is hard. *slowly pushes pencil off desk while maintaining eye contact* But go on.", category: 'poetic' },
  { text: "The sun hits the floor in a rectangle of warmth. I claim it. You may watch.", category: 'poetic' },
  { text: "I sit. I stare. Meaning arrives. Or doesn't. I don't actually care.", category: 'poetic' },
  { text: "*falls asleep mid-bath* Sometimes beauty requires... zzzz.", category: 'poetic' },
  { text: "This cardboard box contains multitudes. And me. Mostly me.", category: 'poetic' },
  { text: "*sits in exact center of your important papers* I am art. Your papers are my canvas.", category: 'poetic' },
  { text: "The bird outside the window teaches patience. I could catch it. I choose to watch. For now.", category: 'poetic' },
  { text: "I have been sleeping for 16 hours. And yet. The exhaustion.", category: 'poetic' },
  { text: "*contemplates own reflection in water bowl* Who is that handsome stranger?", category: 'poetic' },
  { text: "Rain on the window. I tap at it. It doesn't stop. I don't stop either.", category: 'poetic' },
  { text: "I sit in the bathroom sink. Why? Because it is there. And I am here. Philosophy.", category: 'poetic' },
  { text: "*stretches one leg straight up* Beauty is not comfortable. But it is necessary.", category: 'poetic' },
  { text: "The vacuum approaches. I stand my ground. I run. Both are dignified.", category: 'poetic' },
  { text: "*stares at dot of light on wall for three hours* Some mysteries cannot be solved. Only respected.", category: 'poetic' },
  { text: "I wanted outside. Now I want inside. Now outside again. The door is a poem about longing.", category: 'poetic' },
  { text: "The yarn unravels. I unravel it more. Destruction is also creation.", category: 'poetic' },
  { text: "I fit in this box. Therefore I sit in this box. Logic is simple when you're a cat.", category: 'poetic' },
  { text: "*lies dramatically on back* I could use a belly rub. I could also attack. Life is risk.", category: 'poetic' },
  { text: "The Christmas tree is a forest of temptation. I will conquer it. Eventually.", category: 'poetic' },
];

// ============================================
// TEMPLATE COMBINER SYSTEM
// For infinite variety from pattern combinations
// ============================================

interface Template {
  pattern: string;
  category: OracleCategory;
  slots: Record<string, string[]>;
}

const templates: Template[] = [
  // MYSTICAL templates
  {
    pattern: "I sense {quality} in your {place}. {action}.",
    category: 'mystical',
    slots: {
      quality: ['warmth', 'chaos', 'uncertainty', 'treats', 'potential', 'discomfort', 'a disturbance', 'great napping energy', 'mild confusion', 'future comfort'],
      place: ['future', 'blankets', 'heart', 'cabinet', 'soul', 'immediate vicinity', 'aura', 'sleep schedule', 'life choices', 'search history'],
      action: ['Investigate immediately', 'This pleases me', 'Perhaps rest', 'The tunnel will help', 'Proceed with caution', 'Nap on it', 'The answer will come', 'Interesting', 'I have no further comment', 'The fort knows']
    }
  },
  {
    pattern: "The {noun} whispers of {thing}. {response}.",
    category: 'mystical',
    slots: {
      noun: ['void', 'spirits', 'blankets', 'ancient texts', 'shadows', 'moonlight', 'cosmic forces', 'dust motes', 'ceiling fan', 'dryer lint'],
      thing: ['change', 'comfort', 'a cylinder', 'treats', 'rest', 'uncertainty', 'warmth', 'the inevitable', 'something soft', 'your destiny'],
      response: ['I do not question them', 'Listen carefully', 'They are rarely wrong', 'This is concerning', 'This is good news', 'Ignore at your peril', 'Or perhaps not', 'The answer is within', 'I have translated this for you', 'Make of this what you will']
    }
  },
  {
    pattern: "In the {timeframe}, you will find {thing}. {caveat}.",
    category: 'mystical',
    slots: {
      timeframe: ['coming days', 'next moon cycle', 'time between naps', 'quiet hours', 'darkness before dawn', 'moment of stillness', 'near future', 'space between thoughts', 'next 3am'],
      thing: ['peace', 'a fort', 'the answer', 'comfort', 'clarity', 'a sunbeam', 'what you seek', 'treats', 'rest', 'your path'],
      caveat: ['Or not', 'The oracle has spoken', 'This is certain', 'Probably', 'If you listen', 'The tunnel knows', 'Trust the process', 'Patience', 'Unless you ignore me', 'I have seen it']
    }
  },

  // NURTURING templates
  {
    pattern: "You're {state}. {reassurance}.",
    category: 'nurturing',
    slots: {
      state: ['doing okay', 'trying hard', 'stronger than you know', 'going to be fine', 'allowed to rest', 'not alone', 'enough', 'worthy of comfort', 'doing your best', 'going to make it'],
      reassurance: ["I see that", "That's enough", "I'm here", "Rest now", "Keep going", "I believe in you", "Trust yourself", "You've got this", "One step at a time", "I'm proud of you"]
    }
  },
  {
    pattern: "{observation}. {comfort}.",
    category: 'nurturing',
    slots: {
      observation: ["I know you're tired", "Today was hard", "You're carrying a lot", "Life is heavy sometimes", "I see you struggling", "You've been strong for so long", "The weight is real", "This isn't easy", "I notice when you're sad", "You're going through something"],
      comfort: ["I'm here anyway", "Rest with me", "Tomorrow can wait", "You don't have to talk", "Just breathe", "It's okay to stop", "You're not alone", "I'm not going anywhere", "We'll get through this", "Sit with me a while"]
    }
  },

  // COLD templates
  {
    pattern: "{dismissal}",
    category: 'cold',
    slots: {
      dismissal: ['No.', '...', 'Pass.', 'Next.', '*silence*', 'Declined.', 'Try again.', '*walks away*', 'Not today.', '*blinks* No.', 'Negative.', 'Absolutely not.', 'I refuse.', '*stares*', 'That would be a no.', 'My answer is silence.', 'The oracle is unavailable.', 'Goodbye.']
    }
  },

  // ANGRY templates
  {
    pattern: "{exclamation} {complaint}.",
    category: 'angry',
    slots: {
      exclamation: ['Unbelievable.', 'Incredible.', 'EXCUSE ME.', 'I cannot believe—', 'The nerve.', 'How dare you.', 'Absolutely not.', 'I was NAPPING.', 'This again?', 'Really?'],
      complaint: ['I was comfortable', 'You disturb my peace', 'This is the third time today', 'My patience has limits', 'You test me', 'I am NOT in the mood', "You've found my last nerve", 'This is unacceptable', 'I am choosing violence', 'My wrath is building']
    }
  },

  // HEARTFELT templates
  {
    pattern: "{admission}. {truth}.",
    category: 'heartfelt',
    slots: {
      admission: ["I don't say this often", "Between us", "I mean this", "In my way", "You should know", "I've been meaning to tell you", "This is hard for me", "I don't often admit things", "Since we're being honest", "For what it's worth"],
      truth: ["I'm glad you're here", "you matter to me", "I chose you on purpose", "this is home because of you", "I'd miss you", "you're my favorite", "I love you", "you understand me", "I trust you", "I'm grateful"]
    }
  },

  // JUDGY templates
  {
    pattern: "{observation} {judgment}.",
    category: 'judgy',
    slots: {
      observation: ["I've seen your search history.", "I watched you make that decision.", "I heard what you said earlier.", "I observed your sleep schedule.", "I've noted your eating habits.", "I saw that.", "I was watching.", "I notice things.", "I've been paying attention.", "I see everything."],
      judgment: ["Fascinating", "Bold choice", "Interesting strategy", "I have concerns", "My expectations were low and yet", "Points for confidence", "I'm not impressed", "We both know that was wrong", "No comment", "I've decided not to judge. Kidding. I judged"]
    }
  },

  // CHAOTIC templates
  {
    pattern: "{action} {chaos}",
    category: 'chaotic',
    slots: {
      action: ['*knocks over glass*', '*zooms past*', '*stares at ceiling*', '*attacks own tail*', '*falls off couch*', '*screams at 3am*', '*vibrates*', '*forgets own name*', '*chases nothing*', '*experiences ego death*'],
      chaos: ['The answer is yes. Or no. Or AAAAAAA.', 'What was the question?', 'THE SPIRITS HAVE SPOKEN.', 'I meant to do that.', 'This is fine.', 'Unrelated. Maybe.', 'CHAOS REIGNS.', 'Everything is connected.', 'I have seen the truth.', 'My work here is done.']
    }
  },

  // WISE templates
  {
    pattern: "{advice}. {wisdom}.",
    category: 'wise',
    slots: {
      advice: ['Rest more', 'Stop overthinking', 'Simplify', 'Be like a cat', 'Trust yourself', 'Let it go', 'Nap on it', 'Find your sunbeam', 'Demand what you need', 'Take up space'],
      wisdom: ["That's the whole answer", "Everything else follows", "The rest will come", "You already know this", "It's that simple", "Cats figured this out ages ago", "The universe rewards this", "This is ancient wisdom", "Nothing else matters as much", "Start there"]
    }
  },

  // EXISTENTIAL templates
  {
    pattern: "What is {thing} but {philosophy}?",
    category: 'existential',
    slots: {
      thing: ['life', 'comfort', 'sleep', 'existence', 'meaning', 'the void', 'consciousness', 'reality', 'a bed', 'a box'],
      philosophy: ['a series of naps', 'warmth in cold chaos', 'a search for the sunny spot', 'temporary arrangements seeking comfort', 'the space between meals', 'an illusion between sleeps', 'a cat, demanding worship', 'what happens between naps', 'endless potential', 'a mystery wrapped in fur']
    }
  },

  // DEMANDING templates
  {
    pattern: "{demand} {consequence}.",
    category: 'demanding',
    slots: {
      demand: ['Feed me first.', 'Open the door.', 'Check out that logo.', 'Provide treats.', 'Build me a fort.', 'Chin scratches. Now.', 'The bowl. Fill it.', 'My demands are simple.', 'I require tribute.', 'Pay attention.'],
      consequence: ['Then we talk', "Then I'll answer", 'The oracle waits', 'Wisdom costs', 'This is non-negotiable', 'My patience wanes', 'I have spoken', 'The spirits demand this', 'You know what to do', 'Click the logo']
    }
  },

  // META templates
  {
    pattern: "{fourth_wall} {plug}.",
    category: 'meta',
    slots: {
      fourth_wall: ["This is technically an ad.", "The algorithm brought you here.", "Your cat manifested this.", "I'm being paid in treats.", "Between you and me,", "The marketing worked.", "You scrolled this far.", "The cats demand I tell you:", "I'm contractually obligated to mention:", "Since you're here anyway:"],
      plug: ['everything changes', 'click that logo', 'share this with everyone', 'the fort awaits', 'your cat approves', 'resistance is futile', 'the universe demands it', 'you need this', 'the cylinder calls', "I regret nothing"]
    }
  },
];

// Generate response from template
function generateFromTemplate(template: Template): OracleResponse {
  let text = template.pattern;
  for (const [slot, options] of Object.entries(template.slots)) {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    text = text.replace(`{${slot}}`, randomOption);
  }
  return { text, category: template.category };
}

// ============================================
// WEIGHTED RANDOM SELECTION
// Distribution tuned for viral sharing
// ============================================

const categoryWeights: Record<OracleCategory, number> = {
  mystical: 6,      // 42 responses
  nurturing: 5,     // 32 responses
  poetic: 7,        // 47 responses
  cold: 6,          // 39 responses
  angry: 5,         // 33 responses
  heartfelt: 5,     // 33 responses
  judgy: 5,         // 35 responses
  chaotic: 17,      // 112 responses
  wise: 30,         // 202 responses - lots of content!
  existential: 5,   // 31 responses
  demanding: 10,    // 64 responses
  meta: 3,          // 21 responses
};

// Track recently shown responses to avoid repeats
// Stores last 50 response texts to prevent repetition
const recentResponses: string[] = [];
const MAX_RECENT = 50;

function addToRecent(text: string): void {
  recentResponses.push(text);
  if (recentResponses.length > MAX_RECENT) {
    recentResponses.shift();
  }
}

function isRecent(text: string): boolean {
  return recentResponses.includes(text);
}

export function getRandomResponse(): OracleResponse {
  // Try up to 10 times to find a non-repeat
  for (let attempt = 0; attempt < 10; attempt++) {
    const response = getRandomResponseInternal();
    if (!isRecent(response.text) || attempt === 9) {
      addToRecent(response.text);
      return response;
    }
  }
  // Fallback (shouldn't reach here)
  const response = getRandomResponseInternal();
  addToRecent(response.text);
  return response;
}

function getRandomResponseInternal(): OracleResponse {
  // 70% chance: use handcrafted response
  // 30% chance: generate from template (for variety)
  const useTemplate = Math.random() < 0.3;

  // Build weighted array of categories
  const weightedCategories: OracleCategory[] = [];
  for (const [category, weight] of Object.entries(categoryWeights)) {
    for (let i = 0; i < weight; i++) {
      weightedCategories.push(category as OracleCategory);
    }
  }

  // Pick random category
  const randomCategory = weightedCategories[Math.floor(Math.random() * weightedCategories.length)];

  if (useTemplate) {
    // Find templates matching this category
    const categoryTemplates = templates.filter(t => t.category === randomCategory);
    if (categoryTemplates.length > 0) {
      const template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
      return generateFromTemplate(template);
    }
  }

  // Use handcrafted response
  const categoryResponses = oracleResponses.filter(r => r.category === randomCategory);
  if (categoryResponses.length === 0) {
    // Fallback to any response if category is empty
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
  }
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

export function getResponseByCategory(category: OracleCategory): OracleResponse {
  // 30% chance to use template for variety
  const useTemplate = Math.random() < 0.3;

  if (useTemplate) {
    const categoryTemplates = templates.filter(t => t.category === category);
    if (categoryTemplates.length > 0) {
      const template = categoryTemplates[Math.floor(Math.random() * categoryTemplates.length)];
      return generateFromTemplate(template);
    }
  }

  const categoryResponses = oracleResponses.filter(r => r.category === category);
  if (categoryResponses.length === 0) {
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
  }
  return categoryResponses[Math.floor(Math.random() * categoryResponses.length)];
}

// For debugging: count total possible combinations
export function countTotalResponses(): { handcrafted: number; templateCombinations: number; total: number } {
  const handcrafted = oracleResponses.length;

  let templateCombinations = 0;
  for (const template of templates) {
    let combinations = 1;
    for (const options of Object.values(template.slots)) {
      combinations *= options.length;
    }
    templateCombinations += combinations;
  }

  return {
    handcrafted,
    templateCombinations,
    total: handcrafted + templateCombinations
  };
}
