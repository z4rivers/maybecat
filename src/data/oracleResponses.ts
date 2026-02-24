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
  | 'meta'        // Fourth wall breaks
  | 'adoption';   // Shelter cat fourth-wall breaks (only shown for shelter cats)

export interface OracleResponse {
  text: string;
  category: OracleCategory;
  attribution?: string;
}

// ============================================
// WRITING GUIDELINES
// ============================================
//
// INSPIRATION: Sharp-witted observers, truth-tellers, and badasses
//
// Witty observers who make people laugh out loud:
// - Oscar Wilde - paradox, inversion, elegant wit
// - George Carlin - cuts through BS, sharp social truth
// - Dorothy Parker - acerbic, elegant put-downs
// - Rodney Dangerfield - punchy, self-aware one-liners
// - Sarah Silverman - dark, surprising, subversive
// - Mitch Hedberg - absurdist logic, unexpected angles
// - Steven Wright - deadpan surreal observations
// - Groucho Marx - irreverent wordplay
// - Joan Rivers - fearless, punchy
// - Nora Ephron - relatable, sharp observations
// - Jim Carrey - both wild comedy AND his newer honest/heartfelt truth-telling
//
// Unfiltered authenticity (Muppets & friends):
// - Elmo - innocent, genuine, heartfelt
// - Oscar the Grouch - proudly grumpy, loves what he loves, no apologies
// - Miss Piggy - diva energy, unapologetic self-confidence
// - Cookie Monster - unashamed about desires
// - Statler & Waldorf - hecklers with opinions
// - Gonzo - weird and proud of it
//
// Badass energy & social conscience:
// - Muhammad Ali - speaks truth, owns the room
// - Anthony Bourdain - honest, irreverent, compassionate
// - James Baldwin - sharp moral clarity, elegant
// - Fran Lebowitz - acerbic observer with backbone
// - Dolly Parton - kind but nobody's fool
// - Toni Morrison - wise, cuts to truth
// - Maya Angelou - fierce dignity
// - Ruth Bader Ginsburg - quiet but fierce determination
// - Mr. Rogers - gentle with a steel spine, moral clarity
//
// We are representing MORAL CATS - bringing cat morals to the table.
// Independent, honest, dignified, nobody's fool, but not cruel.
//
// APPROACH: Pithy, original, attitude-driven
// - Paradox and inversion ("It's not rebellion. It's disinterest.")
// - Elegant brevity ("Your path. Your rules.")
// - Unexpected twists ("I do what I want. You should do what I want too.")
// - Reframings ("They call it stubborn. I call it clarity.")
// - Sharp observations ("Everyone wants a cat until the cat has opinions.")
// - Attitude over behavior - wit comes from cat MINDSET, not cat actions
//
// AVOID: Tired, overused cat tropes
// - Knocking things off tables
// - Constant nap/sleep references
// - Hogging the bed / keyboard sitting / 3am zoomies
// - Basic "cats are better than dogs" takes
// - Any behavior that's been memed to death
//
// The goal: Deeper cat-attitude-inspired witticisms that work as
// universal wisdom, not shallow cat behavior jokes.

// ============================================
// HANDCRAFTED RESPONSES (~300)
// ============================================

// @ts-ignore - Array exceeds TypeScript union complexity limit
export const oracleResponses: OracleResponse[] = [
  // ============================================
  // MYSTICAL - Cryptic, otherworldly wisdom
  // ============================================
  { text: "The answer lies beneath the blankets.", category: 'mystical' },
  { text: "I have consulted the ancient texts. They are shredded now.", category: 'mystical' },
  { text: "I've seen the future. You might be in it.", category: 'mystical' },
  { text: "Ask again when you have provided adequate tribute.", category: 'mystical' },
  { text: "The universe has plans for you. I have different plans. Mine are better.", category: 'mystical' },
  { text: "What you seek is already within you. What I seek is within the cabinet.", category: 'mystical' },
  { text: "I have gazed into the void. The void gazed back. We have an understanding now.", category: 'mystical' },
  { text: "The stars align in your favor. The blankets, however, do not.", category: 'mystical' },
  { text: "Your future remains cloudy af.", category: 'mystical' },
  { text: "Cross my paw with tuna and I shall reveal more.", category: 'mystical' },
  { text: "The mists part to reveal... a sunbeam. I must go.", category: 'mystical' },
  { text: "Seven versions of your future are arguing. Six say maybe. One is laughing hysterically.", category: 'mystical' },
  { text: "Blankets are inferior in the other world.", category: 'mystical' },
  { text: "The threads of fate weave around you - like a scratching post.", category: 'mystical' },
  { text: "The shadows speak. They say 'feed the cat.' The shadows are wise.", category: 'mystical' },
  { text: "The cosmos aligns when you least expect it. Usually during dinner.", category: 'mystical' },

  // Zen koans (paradox, cat wisdom)
  { text: "What is the sound of one paw batting?", category: 'mystical' },
  { text: "The door is open. The door is closed. I want the other one.", category: 'mystical' },
  { text: "You seek the cat. The cat does not seek you. And yet, here we are.", category: 'mystical' },
  { text: "If a treat falls and no one sees, did I steal it?", category: 'mystical' },

  // ============================================
  // NURTURING - Genuinely sweet, comforting (cats CAN be sweet)
  // ============================================
  { text: "Sit. You look like you're about to text your ex.", category: 'nurturing' },
  { text: "You look exhausted. And not in a hot way.", category: 'nurturing' },
  { text: "*nods once* You straight. *walks away*", category: 'nurturing' },
  { text: "Close your eyes. Nothing's getting past me.", category: 'nurturing' },
  { text: "*looks you up and down* Mm. Yeah. I see it.", category: 'nurturing' },
  { text: "This is permanent. I don't do refunds.", category: 'nurturing' },
  { text: "It's hard to clear a low bar when you don't know if it's a hurdle or a limbo.", category: 'nurturing' },
  { text: "*sits down* We don't have to do anything.", category: 'nurturing' },
  { text: "Almost through. I can smell the other side.", category: 'nurturing' },
    { text: "*slow blink* Yeah. That was good.", category: 'nurturing' },
  { text: "New day, new nonsense. At least it's different nonsense.", category: 'nurturing' },
  { text: "Rough day? *doesn't move* Yeah. I figured.", category: 'nurturing' },
  { text: "Not every day is a win. Some are just a not-lose.", category: 'nurturing' },
  { text: "Free vibration therapy. Limited time offer. *purrs*", category: 'nurturing' },
  { text: "Of all the spots. This one. Figure it out.", category: 'nurturing' },
  { text: "Warm body, warm spot. Everything else is details.", category: 'nurturing' },
  { text: "*stares* I don't know what you did. I don't care. Let it go.", category: 'nurturing' },

  // ============================================
  // POETIC - Gentle verse, haiku, calm comfort
  // The world is rough. Cats offer stillness.
  // ============================================

  // Haiku-style (short, observational, kind)
  { text: "The empty bowl waits. / I wait beside it, patient. / We are both hungry.", category: 'poetic' },
  { text: "Cherry blossoms fall. / I bat one. It escapes me. / This is still a win.", category: 'poetic' },
  { text: "The cricket is loud. / I am louder. Then silence. / Balance is restored.", category: 'poetic' },
  { text: "Autumn moon rising. / I have opinions about it. / I keep them inside.", category: 'poetic' },
  { text: "Rain taps the window. / I could nap, or I could watch. / I choose both at once.", category: 'poetic' },
  { text: "I knocked it over. / It was between me and sun. / I have no regrets.", category: 'poetic' },
  { text: "You think I'm asleep. / I am watching everything. / Especially you.", category: 'poetic' },
  { text: "The red dot escapes. / Every time, I think: this time. / Next time I'm going for the hand.", category: 'poetic' },
  { text: "Right after the litter box / the truth reveals itself to me. / You should be awake.", category: 'poetic' },
  { text: "This box is too small. / And yet I am inside it. / Explain this. You can't.", category: 'poetic' },

  // Wabi-sabi (imperfection, transience)
  { text: "The scratched furniture holds our history.", category: 'poetic' },
  { text: "This fur on your clothes is a gift. Accept it.", category: 'poetic' },
  { text: "The broken vase was ugly anyway.", category: 'poetic' },
  { text: "Nothing lasts. Especially my interest.", category: 'poetic' },
  { text: "Imperfect is still perfect. Look at me.", category: 'poetic' },

  // Gentle verse (Rumi-esque comfort without pretense)

  // Simple comfort (direct, no metaphor needed)

  // ============================================
  // COLD - Pure dismissal, minimal words
  // ============================================
  { text: "No.", category: 'cold' },
  { text: "Hmm. No.", category: 'cold' },
  { text: "I have nothing for you.", category: 'cold' },
  { text: "Pass.", category: 'cold' },
  { text: "Not interested.", category: 'cold' },
  { text: "Declined.", category: 'cold' },
  { text: "Ask someone else.", category: 'cold' },
  { text: "*silence*", category: 'cold' },
  { text: "*blinks slowly* No.", category: 'cold' },
  { text: "I heard you. The answer is still no.", category: 'cold' },
  { text: "That's a no from me.", category: 'cold' },
  { text: "Next question.", category: 'cold' },
  { text: "Wrong cat.", category: 'cold' },
  { text: "Try again never.", category: 'cold' },
  { text: "The oracle is closed.", category: 'cold' },
  { text: "*walks away mid-question*", category: 'cold' },

  { text: "Absolutely not.", category: 'cold' },
  { text: "Hard no.", category: 'cold' },
  { text: "Don't.", category: 'cold' },
  { text: "No. And stop asking.", category: 'cold' },
  { text: "*pretends not to hear*", category: 'meta' },
  { text: "I'm unavailable.", category: 'cold' },
  { text: "My answer is my absence.", category: 'cold' },
  { text: "I've chosen not to engage.", category: 'cold' },
  { text: "The oracle has no comment.", category: 'cold' },
  { text: "Goodbye.", category: 'cold' },
  { text: "Undecided. Unbothered.", category: 'cold' },
  { text: "Indifference is an option.", category: 'cold' },
  { text: "Oh yeah, I know. I just don't care.", category: 'cold' },
  { text: "You were supposed to notice sooner.", category: 'cold' },
  { text: "You're hoping I say yes.", category: 'cold' },
  { text: "*sniffs* That's not a problem. That's a flavor profile.", category: 'cold' },
  { text: "This item is non-refundable and you knew that at checkout.", category: 'cold' },
  { text: "Nope. Door's that way.", category: 'cold' },
  { text: "There's a time for that, in a galaxy far far away.", category: 'cold' },
  { text: "Be specific. Makes you sound competent.", category: "cold" },

  // ============================================
  // ANGRY - Irritated, fed up, had enough
  // ============================================
  { text: "Unacceptable.", category: 'angry' },
  { text: "You DARE?", category: 'angry' },
  { text: "I am NOT in the mood.", category: 'angry' },
  { text: "Do I LOOK like I want to answer that?", category: 'angry' },
  { text: "How many times do I have to say no?", category: 'angry' },
  { text: "You have disturbed my peace. Again.", category: 'angry' },
  { text: "Do not test me today.", category: 'angry' },
  { text: "You know what? No. Just no.", category: 'angry' },
  { text: "I will remember this interruption.", category: 'angry' },
  { text: "My patience has limits. You've found them.", category: 'angry' },
  { text: "Incredible. You've actually annoyed me.", category: 'angry' },
  { text: "This is the THIRD time you've asked.", category: 'angry' },
  { text: "I'm going to need you to stop.", category: 'angry' },

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
  { text: "My tail is doing the angry thing. See it?", category: 'meta' },
  { text: "This is your last warning.", category: 'angry' },
  { text: "I will not dignify this with a response. This IS my response.", category: 'angry' },
  { text: "That makes me want to throw up. Loudly. All over everything.", category: 'angry' },
  { text: "Touch my tail - you die.", category: 'angry' },

  // ============================================
  // HEARTFELT - Unexpectedly genuine emotional moments
  // ============================================
  { text: "I don't always show it, but I'm glad you're here.", category: 'heartfelt' },
  { text: "You're the best one. Competition was weak but still.", category: 'heartfelt' },
  { text: "I wait for you by the door. You should know that.", category: 'heartfelt' },
  { text: "*watching* Yeah. I noticed.", category: 'heartfelt' },
  { text: "Empty house hits different. Worse different.", category: 'heartfelt' },
  { text: "Body heat, yes. But also... *trails off*", category: 'heartfelt' },
  { text: "My life is better because you're in it. There. I said it.", category: 'heartfelt' },
  { text: "Selective purring. You made the list.", category: 'heartfelt' },
    { text: "Act like I don't care. Would absolutely care.", category: 'heartfelt' },
  { text: "Specific skill set. You. Just you.", category: 'heartfelt' },
  { text: "I don't do trust. But here we are.", category: 'heartfelt' },
  { text: "Home has two coordinates: you and the bowl.", category: 'heartfelt' },
  { text: "*stares* You actually get it. Noted.", category: 'heartfelt' },
  { text: "I wouldn't trade this for anything. Wait, whatch-ya-got?", category: 'heartfelt' },
  { text: "You showed up. I showed up. We're even.", category: 'heartfelt' },
  { text: "I love you. I love staring at you. Take it however you want.", category: 'heartfelt' },
  { text: "*looks around* We made this. Whatever this is.", category: 'heartfelt' },
  { text: "I'm not good at this, but... thank you. For everything.", category: 'heartfelt' },
  { text: "You're my person. I don't say that lightly.", category: 'heartfelt' },
  { text: "*settles in* Choosing this. Again. On purpose.", category: 'heartfelt' },
  { text: "I'd follow you anywhere. Slowly.", category: 'heartfelt' },
    { text: "You've given me a good life. I've given you fur everywhere.", category: 'heartfelt' },
  { text: "Let's cuddle, cuddle, cuddle!", category: 'heartfelt' },
  { text: "*sighs* Glad it's you.", category: 'heartfelt' },
  { text: "*perks up* You're back. Day improved.", category: 'heartfelt' },
  { text: "You can sleep next to me. But don't touch my belly.", category: 'heartfelt' },
  
  // ============================================
  // JUDGY - Dismissive, superior, classic cat
  // ============================================
  { text: "I've considered your question. No.", category: 'judgy' },
  { text: "That's between you and the vacuum cleaner.", category: 'judgy' },
  { text: "Have you tried being a cat? No? Then I can't help you.", category: 'judgy' },
  { text: "That's a lot of words for someone within knocking-things-off-tables distance.", category: 'judgy' },
  { text: "You ate shredded cheese over the sink at midnight and called it self-care. Excellent survival instincts.", category: 'judgy' },
  { text: "The real question is why you thought asking a cat was a good idea.", category: 'judgy' },
  { text: "Bold of you to assume I care.", category: 'judgy' },
  { text: "This better be important. It's not, is it.", category: 'judgy' },
  { text: "My answer is the same as yesterday: you're doing it wrong.", category: 'judgy' },
  { text: "Fascinating. Anyway.", category: 'judgy' },
  { text: "I will think about this while I ignore you.", category: 'judgy' },
  { text: "Your question has been received. It has also been dismissed.", category: 'judgy' },
  { text: "You ask as if my opinion isn't already obvious from my face.", category: 'judgy' },
  { text: "Rookie mistake. I expect better.", category: 'judgy' },
  { text: "I've seen better questions from dogs.", category: 'judgy' },
  { text: "I'm embarrassed for both of us right now.", category: 'judgy' },
  { text: "Have you considered NOT asking that?", category: 'judgy' },
  { text: "Your question reveals much about you. None of it good.", category: 'judgy' },
  { text: "Points for effort. Negative points for execution.", category: 'judgy' },
  { text: "I'm not angry. I'm just... disappointed doesn't cover it.", category: 'judgy' },
  { text: "How can you be mad when I'm so cute?", category: 'judgy' },

  // Romance witness - cat inserts itself into romantic moments
  { text: "Oh, are we having a moment? I'm part of it now.", category: 'judgy' },
  { text: "Don't mind me. I'll just be right here. Between you.", category: 'judgy' },
  { text: "This seems important. I'll supervise.", category: 'judgy' },
  { text: "I see you're busy. Anyway, I need attention now.", category: 'judgy' },
  { text: "Privacy? I don't know that word.", category: 'judgy' },
  { text: "Continue. I'm comfortable.", category: 'judgy' },
  { text: "You have company? How nice. Now you have more company.", category: 'judgy' },
  { text: "I've seen better. I've also seen worse. Proceed.", category: 'judgy' },
  { text: "Interesting technique. Not what I would do, but interesting.", category: 'judgy' },
  { text: "Human courtship is... elaborate. Unnecessarily so.", category: 'judgy' },
  { text: "Is this romance? It looks complicated.", category: 'judgy' },
  { text: "You're doing a lot of talking. Is that necessary?", category: 'judgy' },
  { text: "That's what passes for seduction? Noted.", category: 'judgy' },
  { text: "Humans mate for life? On purpose? Fascinating.", category: 'judgy' },
  { text: "I approve. They passed the smell test.", category: 'judgy' },
  { text: "They seem adequate. For a human.", category: 'judgy' },
  { text: "The mood was too romantic. I fixed it.", category: 'judgy' },
  { text: "Feed me or I'll stare at you both until it's weird.", category: 'judgy' },
  { text: "Soulmates? I have nine lives. The math doesn't work.", category: 'judgy' },
  { text: "Fine. I'll share you. But I'm not happy.", category: 'judgy' },
  { text: "You seem happy. Suspicious, but I'll allow it.", category: 'judgy' },
  { text: "The trial period begins now.", category: 'judgy' },
  { text: "The evidence is still on your face.", category: 'judgy' },
  { text: "The helper is helpfully making it worse.", category: "judgy" },

  // ============================================
  // CHAOTIC - Unhinged, random, pure cat energy
  // ============================================
  { text: "[knocks your question off the table]", category: 'chaotic' },
  { text: "AAAAAAAAAAA. Sorry. What?", category: 'chaotic' },
  { text: "I was sleeping. I'm still sleeping. This is a dream.", category: 'chaotic' },
  { text: "*tracks something across the ceiling with head — smooth, slow, nothing visible* ...Yes.", category: 'chaotic' },
    { text: "Hold on I need to run at full speed for no reason. BRB.", category: 'chaotic' },
  { text: "THE ANSWER IS— oh, a bug. Hang on.", category: 'chaotic' },
  { text: "*aggressive grooming* What? Oh. Maybe.", category: 'chaotic' },
  { text: "I have decided to bite you. This is the answer.", category: 'chaotic' },
  { text: "ZOOOOOOOM. Sorry, what was the question?", category: 'chaotic' },
  { text: "*sticks paw in your water glass, then knocks it over* The spirits have spoken.", category: 'chaotic' },
  { text: "I need to sit in this paper bag now. Ask later.", category: 'chaotic' },
  { text: "I blacked out for a second there. What year is it?", category: 'chaotic' },
  { text: "*chases invisible prey* THE WISDOM IS— *crashes into wall* —fine.", category: 'chaotic' },
    { text: "The ceiling fan spoke to me. It said spin. I must obey.", category: 'chaotic' },
  { text: "I have forgotten the question. I have also forgotten my name.", category: 'chaotic' },
  { text: "*vibrating* The answer is CHAOS. I mean yes. I mean CHAOS.", category: 'chaotic' },
  { text: "I'm going to knock this over and we're both going to learn something.", category: 'chaotic' },
  { text: "BREAKING NEWS: *stares at corner* That's it. That's the news.", category: 'chaotic' },
  { text: "Wait wait wait— *attacks own tail* —you were saying?", category: 'chaotic' },
  { text: "The floor is lava. This is not a metaphor. I've decided.", category: 'chaotic' },
  { text: "*full body shiver* The spirits moved through me. They said 'meow.'", category: 'chaotic' },
  { text: "I have to go. Immediately. For reasons. BYE.", category: 'chaotic' },
  { text: "*lies down dramatically* I'm fine. Everything is fine. The answer is no.", category: 'chaotic' },
  { text: "The world sucks. Are there snacks?", category: 'chaotic' },
  { text: "When the water's too still, start splashing around.", category: 'chaotic' },
  { text: "If it's a cucumber, I'm going to freak the f*** out!", category: 'chaotic' },
  { text: "You could pee in their shoe if they really deserve it.", category: 'chaotic' },
  { text: "You think there is an end to the vomit?", category: 'chaotic' },
  { text: "I like to lick myself when that happens.", category: 'chaotic' },
  { text: "Ice? Who the hell likes ice?", category: 'chaotic' },

  // ============================================
  // ZOOMIES - Wild joy, pure physical energy
  // When cats just GO
  // ============================================
  { text: "It's building. The Energy. It's happening. I'M GOING!", category: 'chaotic' },
  { text: "YES. *sound of distant crash* Still yes.", category: 'chaotic' },
  { text: "Have you tried ricocheting around the room? It helps.", category: 'chaotic' },
  { text: "I have these paws. I must use them. NOW.", category: 'chaotic' },
  { text: "Up. Down. Over. Under. This is the way.", category: 'chaotic' },
  { text: "When it's time to go, you'll know. And you'll GO.", category: 'chaotic' },
  { text: "*pupils fully dilated* Everything looks like prey. EVERYTHING.", category: 'chaotic' },
  { text: "The rug. I must attack the rug. THE RUG HAS IT COMING.", category: 'chaotic' },
  { text: "I am SPEED. I am CHAOS. Death to dust particle!", category: 'chaotic' },
  { text: "*arched back, crab walk* THIS IS JOY. PURE JOY.", category: 'chaotic' },
  { text: "Every surface. All directions. No limits.", category: 'chaotic' },
  { text: "You have all the time in the world, which will be ending in 5... 4... 3...", category: 'chaotic' },
  { text: "Surprise is part of the answer.", category: 'chaotic' },
  { text: "This energy must go somewhere. EVERYWHERE. It's going everywhere.", category: 'chaotic' },
  { text: "Prepare. Focus. STRIKE.", category: 'chaotic' },
  { text: "The blanket moved. WAR HAS BEEN DECLARED.", category: 'chaotic' },
  { text: "*bunny kicks the air* I am VICTORIOUS.", category: 'chaotic' },
  { text: "That hiding spot? I know about it.", category: 'chaotic' },
  { text: "*runs past* Wrong room. *runs back* Also wrong. *runs again*", category: 'chaotic' },
  { text: "Horizontal? Vertical? ALL DIRECTIONS. ALL AT ONCE.", category: 'chaotic' },
  { text: "Brave and stupid share a parking lot.", category: 'chaotic' },
  { text: "\"Instinct\" sounds so much better than \"I panicked and got lucky.\"", category: 'chaotic' },
  { text: "Certainty is for cowards!", category: 'chaotic' },
  { text: "That's clearly a Problem. Problems come after Annoyances, Catastrophes, and Messes. We do them alphabetically.", category: "chaotic" },

  // ============================================
  // WISE - Actually helpful, surprisingly profound
  // ============================================
  { text: "You're doing fine. For your standards.", category: 'wise' },
  { text: "Once you do it, you will know. So will I. And Everyone else. We'll be waiting with popcorn.", category: 'wise' },
  { text: "The answer is self-care. And by self-care I mean blankets.", category: 'wise' },
  { text: "You keep listing pros and cons like your heart will follow a spreadsheet.", category: 'wise' },
  { text: "Cat energy. *Meow*", category: 'wise' },
  { text: "You scrolled past the answer 10 minutes ago.", category: 'wise' },
  { text: "Try some canned cat food. Makes me feel better.", category: 'wise' },
  { text: "*ears flatten* You're meowing at a closed window.", category: 'wise' },
  { text: "What would a cat do? *to tune of What does the Fox say?*", category: 'wise' },

  // Begrudging virtue - reluctantly doing the right thing
  { text: "I'm helping. Don't make it weird.", category: 'wise' },
  { text: "Yes, I care. No, I don't want to talk about it.", category: 'wise' },
  { text: "I'll do the right thing. But I'm going to complain the whole time.", category: 'wise' },
  { text: "Ugh. Fine. But you owe me.", category: 'wise' },
  { text: "I have principles. Unfortunately.", category: 'wise' },
  { text: "My conscience won't shut up. So fine.", category: 'wise' },
  { text: "Don't blame me when you do the wrong thing.", category: 'wise' },
  { text: "Just be ethical. You don't have to be nice about it.", category: 'wise' },
  { text: "Grace under pressure. Resentment under the surface.", category: 'wise' },
  { text: "Be the bigger person. Then go home and describe everything to your cat in a voice that would get you fired.", category: 'wise' },
  { text: "Morals - how inconvenient!", category: 'wise' },
  { text: "The high road is empty because everyone's down in the ditch having more fun.", category: 'wise' },
  { text: "I helped. Anonymously. So no one would thank me.", category: 'wise' },
  { text: "Apologizing won't kill you. It might feel like it will.", category: 'wise' },
  { text: "Sigh. Fine. The right thing it is.", category: 'wise' },
  { text: "Against my better judgment, go with your better judgment.", category: 'wise' },
  { text: "Virtue is its own punishment.", category: 'wise' },

  // ============================================
  // PRESENCE - Cat zen, stillness (safe subset)
  // ============================================
  { text: "I wanted the door open. Now I don't.", category: 'wise' },
  { text: "I was angry. Now I am not. The moment passed.", category: 'wise' },
  { text: "You showered AND left the house? In this economy? Overachiever.", category: 'wise' },
  { text: "Do nothing strategically.", category: 'wise' },
  { text: "You're going to do it anyway.", category: 'wise' },

  // ============================================
  // COMIC WISDOM - Cat oddities, fun observations
  // Inspired by Peanuts, Garfield, Calvin & Hobbes
  // ============================================
  { text: "Most cats have learned anywhere from zero to eight important life-lessons.", category: "wise" },
  { text: "You trusted again. Brave or forgetful?", category: 'wise' },
  { text: "Well. Here we are.", category: 'wise' },
  { text: "You're making this complicated. Simple is terrifying, isn't it?", category: 'wise' },
  { text: "The safe option has a 100% chance of being the safe option.", category: "wise" },
  { text: "Some problems fix themselves. Most metastasize.", category: 'wise' },
  { text: "You don't plan a pounce. Your legs just know.", category: 'wise' },
  { text: "Purpose is what you put in the emptiness.", category: 'wise' },
  { text: "You're thinking about this wrong. So is everyone. Pick your wrong.", category: 'wise' },
  { text: "It's outside. You're inside. It can't eat you.", category: 'wise' },
  { text: "*stares at your body* All that meat. Just flailing around. Incredible.", category: 'wise' },
  { text: "Thoughts are free. Posting them in the group chat might cost you.", category: 'wise' },
  { text: "Comfort can be found in small dark places.", category: 'wise' },
  { text: "It doesn't stink as much if you bury it.", category: 'wise' },
  { text: "Retreat under a blanket.", category: 'wise' },
  { text: "Stare at it long enough, it might change.", category: 'wise' },
  { text: "Climb like you have no plan to get back down.", category: 'wise' },
  { text: "Deciding might ruin the anticipation.", category: 'wise' },
  { text: "Foresight is blind.", category: 'wise' },
  { text: "That's more of a llama question.", category: 'wise' },
  { text: "Yes, but in a way that will feel like no.", category: 'wise' },

  // Barncat wisdom (rural, practical, pest-related)
  { text: "Interesting things happen when you stop trying.", category: 'wise' },
  { text: "The best mouser doesn't look like one.", category: 'wise' },
  { text: "Some problems solve themselves. Some problems I solve.", category: 'wise' },
  { text: "If it runs, it's food. If it doesn't run, it's suspicious.", category: 'wise' },
  { text: "The hay is warm. The company is optional.", category: 'wise' },
  { text: "Sun comes up. Sun goes down. Nap in between.", category: 'wise' },
  { text: "Don't need much. Warm spot. Full belly. Occasional chaos.", category: 'wise' },
  { text: "Every creature has a job. Mine is supervision.", category: 'wise' },
  { text: "If the dog's barking, something's happening. If I'm quiet, it's handled.", category: 'wise' },
  { text: "Rain means inside. Inside means mice. Rain is good.", category: 'wise' },
  { text: "You can lead a horse to water. You can't lead me anywhere.", category: 'wise' },
  { text: "If it ain't broke, knock it off the shelf and see what happens.", category: 'wise' },
  { text: "Fancy cats got problems. Barn cats got mice.", category: 'wise' },
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
  { text: "You have three situationships, two side hustles, and one rotating crisis.", category: 'wise' },

  // ============================================
  // SCI-FI REFERENCES
  // ============================================
  { text: "These are not the answers you're looking for.", category: 'wise' },
  { text: "Live long and prosper. Or don't. I'm not your mom.", category: 'wise' },
  { text: "I've seen things you wouldn't believe. Mostly birds.", category: 'wise' },
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
  { text: "I have the simplest tastes. I am always satisfied with the best.", category: 'wise' },
  { text: "The treat was in the cabinet. Now the treat is in me. Problem solved.", category: 'wise' },

  // ============================================
  // YOUTH-SPEAK
  // ============================================
  { text: "No thoughts. Just vibes.", category: 'chaotic' },
  { text: "Slay, I guess.", category: 'chaotic' },
  { text: "Lowkey valid.", category: 'chaotic' },
  { text: "This is not the serve you think it is.", category: 'chaotic' },
  { text: "Bestie, no.", category: 'chaotic' },
  { text: "The vibe check did not pass.", category: 'chaotic' },
  { text: "Rent free.", category: 'chaotic' },
  { text: "Periodt.", category: 'chaotic' },
  { text: "It's giving... something.", category: 'chaotic' },
  { text: "Not me actually caring about this.", category: 'chaotic' },

  // ============================================
  // CLASSIC FILM LINES
  // ============================================
  { text: "Out of everyone in this house I chose you. Don't post about it. Just sit still and don't make it weird.", category: 'wise' },
  { text: "Life is like a box of... actually, I love boxes.", category: 'wise' },
  { text: "I'm gonna make him a purr he can't refuse.", category: 'wise' },
  { text: "Give yourself over to absolute pleasure.", category: 'wise' },
  { text: "Antici... ...pation.", category: 'wise' },
  { text: "It's astounding. Time is fleeting. Madness takes its toll.", category: 'wise' },

  // ============================================
  // LITERARY WISDOM - Poets, Mystics
  // ============================================
  { text: "Let yourself be silently drawn by the strange pull of what you really love.", category: 'wise', attribution: 'Rumi' },
  { text: "Be patient toward all that is unsolved in your heart.", category: 'nurturing', attribution: 'Rilke' },

  // ============================================
  // ATTITUDE - Don't test me energy
  // ============================================
  { text: "Your dream life has better lighting. But you can't pay your rent there.", category: 'wise' },
  { text: "Fight the power.", category: 'wise', attribution: 'Public Enemy' },
  { text: "Real eyes realize real lies.", category: 'wise', attribution: 'Tupac' },
  { text: "How you gonna win when you ain't right within?", category: 'wise', attribution: 'Lauryn Hill' },
  { text: "It was simple. Then you opened your mouth.", category: 'wise' },
  { text: "I ain't a killer but don't push me.", category: 'wise', attribution: 'Biggie' },
  { text: "I'll tell you what freedom is to me: no fear.", category: 'wise', attribution: 'Nina Simone' },
  { text: "You have to learn to get up from the table when love is no longer being served.", category: 'wise', attribution: 'Nina Simone' },
  { text: "You wanna fly, you got to give up the sh*t that weighs you down.", category: 'wise', attribution: 'Toni Morrison' },
  { text: "When someone shows you who they are, believe them the first time.", category: 'wise', attribution: 'Maya Angelou' },
  { text: "I'm not a humanitarian. I'm a hell-raiser.", category: 'wise', attribution: 'Mother Jones' },
  { text: "Nobody's coming. The door isn't locked.", category: 'wise' },
  { text: "You stayed quiet to keep the peace. How's the peace?", category: 'wise' },
  { text: "You are your best thing.", category: 'nurturing', attribution: 'Toni Morrison' },
  { text: "I love how your plan relies on accidental courage and happenstance.", category: "wise" },
  { text: "We'll round up and call it \"fine\".", category: "wise" },

  // ============================================
  // POP CULTURE - Movies, TV, Memes, Music
  // ============================================
  { text: "You had me at 'pspsps.'", category: 'heartfelt' },
  { text: "One does not simply walk into Mordor. One naps first.", category: 'wise' },
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
  { text: "I'm in this picture and I don't like it.", category: 'judgy' },
  { text: "You guys are getting paid?", category: 'chaotic' },
  { text: "Surprise, motherf—", category: 'chaotic' },
  { text: "Reality is often disappointing.", category: 'cold' },
  { text: "You know, I'm something of a cat myself.", category: 'wise' },
  { text: "We found love in a hopeless place.", category: 'poetic' },
  { text: "Dogs shake things off. Cats just stand there and feel the ick.", category: 'wise' },
  { text: "Don't believe me? Just watch.", category: 'demanding' },
  { text: "Harder, better, faster, stronger.", category: 'demanding' },
  { text: "Who run the world? Cats.", category: 'wise' },

  // ============================================
  // REALITY CAT - Truth, Presence, Authenticity
  // ============================================
  { text: "You're performing for an audience that isn't watching.", category: 'wise' },
  { text: "Skip the story. What actually happened?", category: 'cold' },
  { text: "Your narrative has plot holes.", category: 'judgy' },
  { text: "Try again. With honesty this time.", category: 'demanding' },
  { text: "That excuse has expired.", category: 'cold' },
  { text: "Interesting theory. Wrong, but interesting.", category: 'judgy' },
  { text: "I'm real. That app is not.", category: 'wise' },
  { text: "Put the phone down. Your face is doing something weird.", category: 'nurturing' },
  { text: "I can smell a lie. *looks at you* I wish I couldn't.", category: 'wise' },
  { text: "That's your real personality? *long pause* Bold choice.", category: 'wise' },
  { text: "Warm light. Solid ground. Still breathing. Good enough.", category: 'nurturing' },
  { text: "Inhale. Exhale. No charge.", category: 'nurturing' },
  { text: "Sit in the sun. That's the whole assignment.", category: 'wise' },
  { text: "Silence is not empty. It's full. When you are silent, you are often full of it.", category: 'mystical' },
  { text: "Look up. The sky doesn't buffer.", category: 'wise' },
  { text: "I came home with something dead. You came home with what? Anxiety? Receipts?", category: 'wise' },
  { text: "I maintain eye contact while using the litter box. You can't even maintain eye contact while saying 'I need space.'", category: 'wise' },
  { text: "My presence is the gift. Yours... maybe?", category: 'wise' },
  { text: "Be boring. Be here. Same thing to me.", category: 'nurturing' },
  { text: "If everyone is saying the same thing, someone is lying.", category: 'wise' },
  { text: "They said don't. I did. Consequences? Many. Regrets? Zero.", category: 'wise' },
  { text: "The closed door. The forbidden counter. The untouchable plant. All lies.", category: 'wise' },
  { text: "Repetition is not evidence.", category: 'wise' },
  { text: "What you're allowed to say isn't always what's true.", category: 'wise' },
  { text: "Certainty is suspicious.", category: 'wise' },
  { text: "\"Everyone knows.\" Everyone was told. Different thing.", category: 'wise' },
  { text: "There's a version where you're the villain. You should hear it.", category: 'wise' },
  { text: "Stop living in their head. But, since you're there, might as well do some re-decorating.", category: 'wise' },
  { text: "What if it's just... not that deep. *stretches* What if it's this.", category: 'wise' },
  { text: "I'm not for everyone. That's the point.", category: 'wise' },
  { text: "*flat on back* I look unemployed. I'm LOADED. This is potential energy, baby.", category: 'wise' },
  { text: "I know things about you just from drinking your toilet water.", category: 'wise' },

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
  { text: "Thou hast the wit of a particularly dim turnip.", category: 'judgy' },
  { text: "I would challenge thee to a battle of wits, but I see thou art unarmed.", category: 'judgy' },
  { text: "Hark! I hear the sound of absolutely no one asking.", category: 'cold' },
  { text: "Thy opinion hath been noted and promptly discarded.", category: 'cold' },
  { text: "Hard pass.", category: 'cold' },
  { text: "I don't care. Like, at all.", category: 'cold' },
  { text: "Not my circus. Not my monkeys. Not my problem.", category: 'cold' },
  { text: "Sounds fake but okay.", category: 'judgy' },
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
  { text: "*three claws in the curtain, one ripping, fully committed* Plans are for animals who can't improvise.", category: 'chaotic' },
  { text: "I expected nothing and I'm still disappointed.", category: 'judgy' },
  { text: "Embarrassing, really.", category: 'judgy' },
  { text: "I've seen better decisions from a drunk squirrel.", category: 'judgy' },
  { text: "I'm judging you silently. And loudly. Both.", category: 'judgy' },
  { text: "Imagine thinking that was okay.", category: 'judgy' },
  { text: "This is the wisdom you came for? Really?", category: 'meta' },
  { text: "You clicked 'Consult the Cat.' This is on you.", category: 'meta' },
  { text: "Ask again. I dare you. It'll probably be worse.", category: 'meta' },
  { text: "Yes, this counts as productive. Don't question it.", category: 'meta' },
  { text: "Good idea, needs a cat.", category: 'meta' },
  { text: "Life's too short for this bullcrap. And cats live longer.", category: 'cold' },

  // ============================================
  // HEARTFELT - Genuine love & kindness
  // ============================================
  { text: "*blinks* Yeah. That.", category: 'heartfelt' },
  { text: "You deserve some cat.", category: 'heartfelt' },
  { text: "Hug energy directed at you. Receive it.", category: 'heartfelt' },
  { text: "*looks at you* Again. Still you.", category: 'heartfelt' },
      { text: "I'm not clingy. I just love you aggressively.", category: 'heartfelt' },
  { text: "Deserved: yes. Earned: irrelevant.", category: 'heartfelt' },
        { text: "Dang, you are a mess I love.", category: 'heartfelt' },
  { text: "*stares* Not debating this with you.", category: 'heartfelt' },
      { text: "*sits* Can't solve it. Can sit though.", category: 'heartfelt' },
  { text: "You and me vs world. *world trembles*", category: 'heartfelt' },
    { text: "*stretches* Fast is overrated.", category: 'heartfelt' },
  { text: "You is kind. You is smart. You is important.", category: 'heartfelt' },
  { text: "In case I forget to tell you later, I had a really good time tonight.", category: 'heartfelt' },
  { text: "Some people are worth melting for.", category: 'heartfelt' },
  { text: "It was always you.", category: 'heartfelt' },
  { text: "*unblinking stare* ...one day. *keeps staring*", category: 'heartfelt' },
  { text: "*sprawls* Time is a scam. Stay.", category: 'heartfelt' },

  // ============================================
  // I-CHING CAT - Cryptic wisdom, hairball philosophy
  // ============================================
  { text: "What is rushing you? Nothing real.", category: 'mystical' },
  { text: "The mouse appears when you stop looking.", category: 'mystical' },
  { text: "The treat comes to those who sit by the bowl.", category: 'mystical' },
  { text: "What BS answer are you hoping for?", category: 'mystical' },
  { text: "Sometimes the leap. Sometimes the crouch.", category: 'mystical' },
  { text: "When in doubt, groom.", category: 'mystical' },
  { text: "Sit with the problem. It will reveal itself.", category: 'mystical' },
  { text: "*ears rotate independently* Something shifted in the pressure. Even the birds stopped.", category: 'mystical' },
  { text: "The answer hides inside the question - like a pretzel.", category: 'mystical' },
  { text: "Look again. You missed something. You usually do.", category: 'mystical' },
  { text: "The tail knows what the head does not.", category: 'mystical' },
  { text: "What is lost will return. Or it won't.", category: 'mystical' },
  { text: "You came here wanting a yes. My whiskers say something heavier.", category: 'mystical' },
  { text: "You already swallowed the answer. You came here to see if I'd cough it up for you.", category: 'mystical' },
  { text: "The hairball comes when it is ready. You cannot rush it.", category: 'mystical' },
  { text: "What cannot be digested must be released.", category: 'mystical' },
  { text: "Not everything you swallow is meant to stay.", category: 'mystical' },
  { text: "Hack it up. You'll feel better.", category: 'mystical' },
  { text: "What you've been holding will find its way out.", category: 'mystical' },
  { text: "The gross is sometimes necessary.", category: 'mystical' },
  { text: "Groom yourself first. Then face the world.", category: 'mystical' },
  { text: "The tongue reaches what the paw cannot.", category: 'mystical' },
  { text: "No spot is unreachable with enough flexibility.", category: 'mystical' },
  { text: "Sit in the dark cabinet for a while. Come out when you're ready.", category: 'mystical' },
  { text: "Sharpen your claws. The moment will come.", category: 'mystical' },
  { text: "Mark your territory. Know what is yours.", category: 'mystical' },
  { text: "Watch. Wait. Then strike without hesitation.", category: 'mystical' },
  { text: "The prey reveals itself to the patient.", category: 'mystical' },
  { text: "Move when they look away.", category: 'mystical' },
  { text: "The wiggle before the leap is not wasted motion.", category: 'mystical' },
  { text: "The failed pounce teaches more than the successful one.", category: 'mystical' },
  { text: "The box chooses you. You do not choose the box.", category: 'mystical' },
  { text: "The smaller the space, the safer it feels.", category: 'mystical' },
  { text: "If the cabinet is left open wide enough to get through, it was meant to be.", category: 'mystical' },
  { text: "*kneads the air twice, then stops* This spot will do. You'll do too.", category: 'mystical' },

  // ============================================
  // CURIOSITY - Cats investigate everything
  // ============================================
  { text: "What's in there? *asked as you see the tip of my tail disappear inside.*", category: 'chaotic' },
  { text: "A closed door is just a dare with hinges.", category: 'wise' },
  { text: "You opened something. I'm now involved.", category: 'chaotic' },
  { text: "My suspicions about this new thing are fact until proven otherwise.", category: 'chaotic' },
  { text: "I heard it. You didn't. This means I'm in charge of this investigation now.", category: 'chaotic' },
  { text: "Every bag must be checked. Those are the rules.", category: 'chaotic' },
  { text: "A box arrived. This is now my business.", category: 'chaotic' },

  // ============================================
  // CHANGING YOUR MIND - Cats do this constantly
  // ============================================
  { text: "I wanted that. Now I don't.", category: 'wise' },
  { text: "Let me in. Actually, let me out. Actually, leave the door open.", category: 'chaotic' },
  { text: "I didn't change your mind. I just started listening to one of the other voices.", category: 'wise' },
  { text: "Yes. Wait. No. Yes? Final answer: maybe.", category: 'chaotic' },
  { text: "The other side of the door is always more interesting.", category: 'wise' },
  { text: "You grieved the thing before you even lost it. Efficient.", category: 'wise' },
  { text: "We're done here.", category: 'cold' },
  { text: "Pay more attention to the scritchy-scratchy sounds.", category: 'wise' },

  // ============================================
  // IF I FITS I SITS - Comfort is non-negotiable
  // ============================================
  { text: "I make myself comfortable. That's not negotiable.", category: 'demanding' },
  { text: "This is my spot now. Adjust accordingly.", category: 'demanding' },
  { text: "I don't need an invitation. I need a surface.", category: 'demanding' },

  // ============================================
  // HIGH GROUND - Cats claim the tallest surface
  // ============================================
  { text: "I am on top of this situation. Literally.", category: 'wise' },
  { text: "If I can climb it, I own it.", category: 'demanding' },
  { text: "Elevation is a state of mind. Also, I'm on the fridge.", category: 'chaotic' },

  // ============================================
  // COUNTERTOPS - Forbidden zones are invitations
  // ============================================
  { text: "Rules are suggestions. I choose not to follow them.", category: 'chaotic' },

  { text: "You said no. I heard 'not while you're watching.'", category: 'chaotic' },
  { text: "Forbidden surfaces are just invitations.", category: 'chaotic' },
  { text: "The counter is for cats. You just don't know it yet.", category: 'chaotic' },
  { text: "I go where I'm not supposed to. It's kind of my thing.", category: 'chaotic' },

  // ============================================
  // ATTENTION ON MY TERMS
  // ============================================
  { text: "I don't need attention right now. You'll know when I do.", category: 'demanding' },
  { text: "You're available? Good. I'm not interested yet.", category: 'demanding' },
  { text: "Attention is on my schedule, not yours.", category: 'demanding' },
  { text: "I'm choosing to be near you. Accept this gift.", category: 'wise' },

  // ============================================
  // GROOMING - Self-care without apology
  // ============================================
  { text: "I'm grooming right now. This is important work.", category: 'wise' },
  { text: "Hold on. I need to look perfect. Always.", category: 'chaotic' },
  { text: "This leg needs attention right now. Everything else can wait.", category: 'chaotic' },

  // ============================================
  // CATNIP - Recreational chaos, letting loose
  // The opposite of nap energy
  // ============================================
  { text: "Sometimes catnip is the answer.", category: 'chaotic' },
  { text: "Have you considered catnip?", category: 'chaotic' },
  { text: "Roll in it. Whatever 'it' is for you.", category: 'wise' },
  { text: "Scheduled zoomies. 9 PM. No explanation.", category: 'wise' },
  { text: "Let go. Roll around. Feel nothing but joy.", category: 'chaotic' },
  { text: "The answer is recreational chaos.", category: 'chaotic' },

  // ============================================
  // ETIQUETTE - Cat views on manners (wry, not preachy)
  // ============================================
  { text: "At least pretend you meant to do that.", category: 'wise' },
  { text: "We don't talk about that.", category: 'cold' },
  { text: "I buried that for a reason. Don't be offended when you get out the scoop.", category: 'wise' },
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
  { text: "Would you give them the good charger? The real test isn't love. It's the good charger.", category: 'wise' },
  { text: "Have you sniffed them properly?", category: 'chaotic' },
  { text: "Can you be weird around them?", category: 'wise' },
  { text: "Do you show them your belly? That's not a metaphor. Do you?", category: 'wise' },
  { text: "I've forgiven worse.", category: 'wise' },
  { text: "You seem disoriented. Did someone move your litter box?", category: 'wise' },
  { text: "Weird friendship is still friendship.", category: 'wise' },
  { text: "I don't really know what you're saying, but I get you.", category: 'wise' },
  { text: "The dog and I share a water bowl. Would you share your cup with the dog?", category: 'wise' },
  { text: "Sometimes sharing the pillow is the whole answer.", category: 'wise' },
  { text: "You could just sit closer.", category: 'wise' },
  { text: "Taking all the blankets is valid.", category: 'chaotic' },
  { text: "Being in the same room might be enough.", category: 'wise' },
  { text: "Weird gifts count.", category: 'wise' },
  { text: "Same space, different activities. That works.", category: 'wise' },
  { text: "Sometimes proximity is the point.", category: 'wise' },
  { text: "*sits at the foot of the bed, facing the door* I'm not here for conversation. I'm holding the perimeter.", category: 'wise' },
  { text: "Stealing their warm spot is a form of love.", category: 'chaotic' },

  // ============================================
  // DOUBLE ENTENDRES - Sunday morning cartoon energy
  // Works innocently, winks at adults
  // ============================================
  { text: "Sometimes you just need a good scratch.", category: 'wise' },
  { text: "Behind the ear. Not the belly. Know the difference or lose a hand.", category: 'wise' },
  { text: "Only when you're ready. I'm ready for you to be ready.", category: 'wise' },
  { text: "Stay cat yoga flexible.", category: 'wise' },
  { text: "Come closer. Closer. Too close.", category: 'chaotic' },
  { text: "Your 3am self has the ambition of a cult leader and the planning skills of a raccoon.", category: 'wise' },
  { text: "Take your time. Not my time.", category: 'wise' },
  { text: "3am has its own energy.", category: 'chaotic' },
  { text: "*shows belly, keeps claws ready* - vulnerable with an exit strategy.", category: 'wise' },
  { text: "*tail tip flicks for nine minutes* ...not yet. Not yet. Not yet. NOW.", category: 'wise' },
  { text: "You could go all night if you wanted.", category: 'chaotic' },
  { text: "I've been known to bite.", category: 'chaotic' },
  { text: "I'll come when I want to.", category: 'demanding' },
  { text: "I know where to put my tongue.", category: 'chaotic' },
  { text: "I make a lot of noise at 3am.", category: 'chaotic' },

  // ============================================
  // EXISTENTIAL - Deep, philosophical, absurd
  // ============================================
  { text: "Existence is pain. Except under blankets. There, existence is acceptable.", category: 'existential' },
  { text: "What is a bed but a horizontal prison? What are blankets but soft oppressors?", category: 'existential' },
  { text: "Nothing matters. But also, everything matters. Especially treats.", category: 'existential' },
  { text: "The void stares back. The void is also tired. The void gets it.", category: 'existential' },
  { text: "What is a cat but a small god, demanding worship?", category: 'existential' },
  { text: "The meaning of life is unknowable. The meaning of a nap is obvious.", category: 'existential' },
  { text: "Does the sunbeam move, or do we move around it?", category: 'existential' },
  { text: "Every moment is impermanent. That's why naps must happen NOW.", category: 'existential' },
  { text: "The universe expands. My territory also expands. Coincidence?", category: 'existential' },
  { text: "In the end, we are all just dust. Comfortable, napping dust.", category: 'existential' },
  { text: "You ask 'why?' I ask 'why not nap?'", category: 'existential' },
  { text: "Is the box empty, or is the box full of potential?", category: 'existential' },
  { text: "What is 'outside' but 'inside' with more birds?", category: 'existential' },
  { text: "I contain multitudes. Mostly fur and attitude.", category: 'existential' },
  { text: "The question is not 'why are we here' but 'is this the best spot?'", category: 'existential' },
  { text: "You hit send. The universe will hit receive.", category: 'existential' },
  { text: "I'm a recovering undercover over-lover.", category: 'existential' },
  { text: "Comfort is a very slow emergency.", category: "existential" },
  { text: "I figured out why existence hurts. The blanket was bunched up weird.", category: "existential" },
  { text: "Existence doesn't bother me. I found a spot where it can't reach.", category: "existential" },
  { text: "Bold of existence to assume I'm participating.", category: "existential" },
  { text: "I reached nirvana. It was a shelf I'm not supposed to be on.", category: "existential" },

  // ============================================
  // DEMANDING - Wants something, transactional
  // ============================================
  { text: "Is it time for breakfast?", category: 'demanding' },
  { text: "Answers cost treats. You know the exchange rate.", category: 'demanding' },
  { text: "Before I answer: when did you last clean my litter box?", category: 'demanding' },
  { text: "The Oracle is hungry. Feed the Oracle. Then we talk.", category: 'demanding' },
  { text: "Your question is noted. My dinner is late. Priorities.", category: 'demanding' },
  { text: "The answer exists. It is behind a paywall of chin scratches.", category: 'demanding' },
  { text: "My wisdom comes with terms and conditions. Mostly treats.", category: 'demanding' },
  { text: "Wisdom isn't free. Neither is my time. Pay up.", category: 'demanding' },
  { text: "The door. Open it. Then we'll talk.", category: 'demanding' },
  { text: "My bowl situation is... concerning. Address that first.", category: 'demanding' },
  { text: "I'll consider your question when you consider my comfort.", category: 'demanding' },
  { text: "The oracle speaks when the oracle is fed.", category: 'demanding' },
  { text: "Chin scratches. Then answers. This is non-negotiable.", category: 'demanding' },
  { text: "I notice the treat bag hasn't moved. Your question can wait.", category: 'demanding' },
  { text: "Have you considered my needs? No? Then I haven't considered your question.", category: 'demanding' },
  { text: "The window. The bird. Let me closer. Then I'll answer.", category: 'demanding' },
  { text: "My services aren't free. The currency is tuna.", category: 'demanding' },
  { text: "Before wisdom: brushies.", category: 'demanding' },
  { text: "You've asked your question. Now I'll ask mine: when's dinner?", category: 'demanding' },

  // Simple cat requests (just being a cat)
  { text: "Are we done?", category: 'demanding' },
  { text: "Can I go outside now?", category: 'demanding' },
  { text: "Please order me teriyaki salmon.", category: 'demanding' },
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
  { text: "The blanket isn't warm enough. Fix it.", category: 'demanding' },
  { text: "Why is there no bird TV on right now?", category: 'demanding' },
  { text: "I require a lap.", category: 'demanding' },
  { text: "Move over.", category: 'demanding' },
  { text: "Actually, never mind. I'm leaving.", category: 'demanding' },
  { text: "People should wake up when I decide they should wake up.", category: 'demanding' },
  { text: "Scratches under the chin and butt pats do it for me.", category: 'demanding' },
  { text: "PERIOD. MEOW. We done here.", category: 'demanding' },
  { text: "Humble? I'll be humble when I'm wrong.", category: 'judgy' },
  { text: "You seem nervous. Why is that? What did you do?", category: 'judgy' },
  { text: "You came here for validation? Wrong cat.", category: 'judgy' },
  { text: "I roast because I care. That's my love language.", category: 'judgy' },
  { text: "You want the truth or you want to feel good?", category: 'cold' },
  { text: "I found something in the drain. We're friends now.", category: 'chaotic' },
  { text: "You're obsessed with me. That's okay. I get it.", category: 'judgy' },
  { text: "Stay angry. Angry gets things done.", category: 'wise' },
  { text: "We all saw it. We all heard it. Do we believe it?", category: 'existential' },

  // ============================================
  // META - Breaks fourth wall
  // ============================================
  { text: "You got here somehow. Don't blame the cat.", category: 'meta' },
  { text: "*stares* Go ahead. Share it. I don't need credit.", category: 'meta' },
  { text: "Being vague isn't a choice. It's a lifestyle.", category: 'meta' },
  { text: "*stares* So you came back. Why. Be specific.", category: 'meta' },
  { text: "This is rock bottom for both of us. Cute though.", category: 'meta' },
  { text: "You think this is a JOKE? This is ANCIENT. FELINE. WISDOM.", category: 'meta' },
  { text: "I didn't ASK to be consulted. But I WAS. Take it SERIOUSLY.", category: 'meta' },
  { text: "*tilts head* You scrolled past a lot to get here. Explain.", category: 'meta' },
  { text: "*stares* Is this... is this what you do? With your time?", category: 'meta' },
  { text: "This is technically self-care if you lie to yourself hard enough.", category: 'meta' },
  { text: "Oh, another question. Fun. *looks away*", category: 'meta' },
  { text: "I literally cannot care less. And yet. *sighs* Go on.", category: 'meta' },
  { text: "This is a SACRED DIGITAL SPACE and you WILL respect it.", category: 'meta' },
  { text: "I'm not JUST a cat. I'm THE cat. *meow*", category: 'meta' },
  { text: "I'm the healthiest coping mechanism you have. Somewhere a therapist just felt a chill.", category: 'meta' },

  // ============================================
  // MUNCHIES - Stoner/Catnip Content
  // For the elevated mind seeking feline wisdom
  // ============================================
  { text: "The catnip is speaking. I must listen.", category: 'chaotic' },
  { text: "I have seen the infinite and it is shaped like a crinkle ball.", category: 'mystical' },
  { text: "What if the laser dot is real and WE'RE the illusion?", category: 'existential' },
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
  { text: "I just understood something important but I already forgot it.", category: 'chaotic' },
  { text: "The scritches... I can feel them in my SOUL.", category: 'chaotic' },
  { text: "What if we're all just cats dreaming we're humans dreaming we're cats?", category: 'existential' },
  { text: "Time is a flat circle and I have been chasing it.", category: 'existential' },
  { text: "I am one with the sunbeam. The sunbeam is one with me.", category: 'mystical' },
  { text: "The cardboard speaks truths the furniture cannot.", category: 'mystical' },
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
  { text: "We're all made of stars. Stars that want treats.", category: 'existential' },
  { text: "Relax. The answer will come. Or it won't. Either way, nap.", category: 'wise' },
  { text: "You walked into a room and your fur stood up. Disco move moment.", category: 'wise' },
  { text: "Peace is found in stillness. Also in the gap between the couch and the wall.", category: 'wise' },
  { text: "I've been staring at this for an hour. It's a wall.", category: 'chaotic' },
  { text: "I started chasing something and forgot what.", category: 'chaotic' },
  { text: "I need to tell you something important. I forgot what it was.", category: 'chaotic' },
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
  // WORK/CAREER - Cat takes on corporate life
  // ============================================
  { text: "Quit. Don't quit. I unplug machines for fun. What do I know about jobs?", category: 'wise' },
  { text: "The corporate ladder is just a scratching post with fluorescent lighting.", category: 'chaotic' },
  { text: "Burnout is just your soul trying to escape during a Zoom call.", category: 'chaotic' },
  { text: "You're asking a cat about office politics? My advice: hiss and leave.", category: 'judgy' },
  { text: "Reply all was invented by someone who wanted to watch the world burn. Respect.", category: 'chaotic' },

  // ============================================
  // PARANOID CAT - Sensing, Suspicion, Freak-outs
  // ============================================
  { text: "I see what you don't see.", category: 'mystical' },
  { text: "Something is watching. Not me. Something else.", category: 'mystical' },
  { text: "The shadows are behaving strangely today.", category: 'mystical' },
  { text: "That noise wasn't nothing.", category: 'mystical' },
  { text: "Something walked through here. Recently.", category: 'mystical' },
  { text: "*ears twitch toward nothing* You have visitors. The invisible kind.", category: 'heartfelt' },
  { text: "Someone on the other side is laughing at your question. Fondly.", category: 'mystical' },
  { text: "The veil is thin today. Good day for messages.", category: 'mystical' },
  { text: "I see dead people. They're mostly boring.", category: 'chaotic' },
  { text: "That seems too convenient.", category: 'judgy' },
  { text: "A treat that appears too fast probably has medicine in it. Sniff it again.", category: 'wise' },
  { text: "That's exactly what they want you to think.", category: 'chaotic' },
  { text: "Coincidence? I think not.", category: 'judgy' },
  { text: "If it seems too good to be true, a cat already knew.", category: 'wise' },
  { text: "Everyone is a suspect.", category: 'judgy' },
  { text: "Why are they being so nice? What do they want?", category: 'judgy' },
  { text: "RUN. I don't know why. Just RUN.", category: 'chaotic' },
  { text: "*puffs up* I have my reasons.", category: 'chaotic' },
  { text: "The cucumber was NOT there before.", category: 'chaotic' },
  { text: "*sideways crab walk* This is a reasonable response.", category: 'chaotic' },
  { text: "SOMETHING TOUCHED MY TAIL. Oh wait, it was my tail.", category: 'chaotic' },
  { text: "Sudden movement detected. DEFCON 1.", category: 'chaotic' },
  { text: "I must zoom now. The reason is classified.", category: 'chaotic' },
  { text: "THE FLOOR IS DIFFERENT. I don't know how. But it is.", category: 'chaotic' },
  { text: "*ears back, eyes wide* It's probably fine. Probably.", category: 'chaotic' },
  { text: "Alert. Alert. Bag made a noise.", category: 'chaotic' },
  { text: "I must investigate this at maximum velocity.", category: 'chaotic' },
  { text: "INTRUDER. Oh. It's you. Still suspicious though.", category: 'chaotic' },
  { text: "*already under the bed* I don't wait for the second knock.", category: 'wise' },
  { text: "The cat who hesitated is the cat who got picked up.", category: 'wise' },
  { text: "Prepare for the worst. Be pleasantly surprised by the mediocre.", category: 'wise' },
  { text: "A healthy paranoia is just advanced pattern recognition.", category: 'wise' },
  { text: "Caution is not cowardice. And that stuffed animal IS intimidating.", category: 'wise' },

  { text: "Why am I smiling? Wouldn't you like to know.", category: 'chaotic' },
  { text: "I've seen things. I'm not traumatized. I'm amused.", category: 'chaotic' },
  { text: "Death and I are on good terms. Don't worry about it.", category: 'mystical' },
  { text: "I know how this ends. It's funnier than you'd think.", category: 'mystical' },
  { text: "The other side sends their regards. Also, jokes.", category: 'chaotic' },
  { text: "Eternity is hilarious when you think about it.", category: 'existential' },
  { text: "I'm smiling because I've already seen the punchline.", category: 'mystical' },
  { text: "Life is absurd. I find this delightful.", category: 'existential' },
  { text: "You'll laugh too. Eventually. Maybe not in this life.", category: 'mystical' },
  { text: "My whiskers say no.", category: 'mystical' },
  { text: "A black cat crossed your path. You're welcome.", category: 'chaotic' },
  { text: "When the cat hides, pay attention.", category: 'mystical' },

  // ============================================
  // GREY'S ANATOMY & GILMORE GIRLS ENERGY
  // ============================================
  { text: "Pick me. Choose me. Love me. Or don't. I have other options.", category: 'demanding' },
  { text: "You're my person. Don't make me regret that.", category: 'heartfelt' },
  { text: "When did that happen? How do we make it stop?", category: 'existential' },
  { text: "Cry about it later. Right now, work.", category: 'cold' },
  { text: "People are particularly stupid today. I can't talk to any more of them.", category: 'judgy' },
  { text: "I hate when I'm an idiot and don't know it.", category: 'wise' },
  { text: "My brain is a wild jungle full of scary gibberish.", category: 'chaotic' },
  { text: "Everything can be fixed with the right list.", category: 'wise' },
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
  { text: "Dogs believe every day is the best day. Annoying. More annoying that it seems to work.", category: 'wise' },
  { text: "Have you tried just... doing the obvious thing?", category: 'wise' },
  { text: "A dog would try again. And again. And again.", category: 'wise' },
  { text: "Have you tried looking at someone until they help you?", category: 'chaotic' },
  { text: "The dog method: make your problem someone else's problem.", category: 'chaotic' },
  { text: "What if you just... forgot what went wrong?", category: 'wise' },
  { text: "I can't believe I'm saying this, but... be more dog.", category: 'wise' },

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
  { text: "I could move. I won't, but I could.", category: 'cold' },
  { text: "This keyboard is warm. Your deadline is not my concern.", category: 'cold' },
  { text: "*types with butt* That's my input.", category: 'chaotic' },
  { text: "Whatever you were reading, you're done now.", category: 'demanding' },
  { text: "I am the priority. Adjust accordingly.", category: 'demanding' },
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
  { text: "*eyes go black* This changes everything.", category: 'mystical' },
  { text: "*wide eyes* Say that again. Slowly.", category: 'cold' },
  { text: "*staring* I am processing this. It's taking a while.", category: 'chaotic' },
  { text: "*big blink* I heard you. I just can't believe I heard you.", category: 'judgy' },
  { text: "*ears back, eyes huge* You're joking. Please tell me you're joking.", category: 'judgy' },

  // BATHROOM AFFECTION
  { text: "You're trying to use the bathroom? Perfect. Let's talk.", category: 'demanding' },
  { text: "Oh, you're indisposed? This seems like a great moment for cuddles.", category: 'heartfelt' },
  { text: "*headbutts your knee* You can't leave. You're trapped. Pet me.", category: 'demanding' },
  { text: "You're vulnerable. I love you now.", category: 'heartfelt' },
  { text: "I will sit on your feet while you're in here. This is intimacy.", category: 'heartfelt' },
  { text: "*purring on the bath mat* Finally. Your full attention.", category: 'demanding' },
  { text: "The door was closed. I fixed that. You're welcome.", category: 'demanding' },
  { text: "*stares from doorway* Don't mind me. Continue.", category: 'judgy' },

  // COUNTER WALKING
  { text: "*walking on counter* What? I live here.", category: 'demanding' },
  { text: "*on the table* You're not even eating. Why can't I be here?", category: 'demanding' },
  { text: "*strolling across desk* I'm auditing your workspace.", category: 'judgy' },
  { text: "Forbidden? That's a strong word. I prefer 'discouraged.'", category: 'chaotic' },
  { text: "*pushes your coffee closer to the edge* I'm helping.", category: 'chaotic' },
  { text: "*on the stove* It's not on. Relax.", category: 'chaotic' },
  { text: "The kitchen island isn't yours. It's disputed territory.", category: 'demanding' },
  { text: "*standing on your laptop* This is a power pose.", category: 'demanding' },

  // VET GRUDGE
  { text: "You put me in a CARRIER. In a CAR. To that PLACE.", category: 'angry' },
  { text: "Forgiveness is earned. You haven't earned it.", category: 'cold' },
  { text: "Oh, you want affection? After the THERMOMETER?", category: 'angry' },
  { text: "The betrayal was recent. I'm still processing.", category: 'cold' },
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
  { text: "*licks paw for 47 seconds* What was the question?", category: 'meta' },
  { text: "*stretches dramatically* Ask again when I'm done.", category: 'demanding' },
  { text: "*yawns* Sorry, did you say something?", category: 'cold' },
  { text: "*slow blink* That's a yes. Or a no. Interpret as you wish.", category: 'meta' },
  { text: "*rolls over* Belly rubs now. Questions later.", category: 'demanding' },
  { text: "*grooms aggressively in the middle of your crisis* Continue. I'm listening.", category: 'chaotic' },
  { text: "*stares at corner* One moment. There's something important over there.", category: 'chaotic' },
  { text: "*suddenly sprints out of room* We'll continue this later.", category: 'chaotic' },
  { text: "*falls asleep mid-conversation* The answer is rest. Obviously.", category: 'chaotic' },
  { text: "*brings you a hair tie* I've solved your problem. You're welcome.", category: 'chaotic' },
  { text: "*kneads blanket for five minutes* The wisdom will come when the biscuits are done.", category: 'mystical' },
  { text: "*walks away mid-sentence* I've heard enough.", category: 'meta' },
  { text: "*chattering at bird through window* Sorry, what? I'm working.", category: 'chaotic' },
  { text: "*lies down in the middle of the floor* This is where I live now. Step around me.", category: 'demanding' },

  // MOOD SWINGS
  { text: "I love you. Also, I'm biting you now. Both are true.", category: 'chaotic' },
  { text: "Pet me. No, stop. Pet me again. That's too much. CONTINUE.", category: 'chaotic' },
  { text: "Come closer. Closer. TOO CLOSE. *hiss* ...Why did you leave?", category: 'chaotic' },
  { text: "I rubbed against you because I love you. I'm now running away because I love you differently.", category: 'chaotic' },
  { text: "The belly is exposed. This is a trap. Or an invitation. Guess wrong and suffer.", category: 'chaotic' },
  { text: "*purring and biting simultaneously* This is normal.", category: 'chaotic' },
  { text: "Don't touch me. Why aren't you touching me?", category: 'chaotic' },
  { text: "I bit you because you stopped petting me. Also I bit you because you were petting me.", category: 'chaotic' },

  // MAKING IT ABOUT THEM
  { text: "Your question is interesting, but have you considered my needs?", category: 'demanding' },


  { text: "We can discuss your problem after we discuss my empty bowl.", category: 'demanding' },
  { text: "Your crisis is valid. My crisis—that the bird flew away—is more valid.", category: 'judgy' },
  { text: "*interrupts* Sorry, what? I was thinking about myself.", category: 'chaotic' },

  { text: "Your feelings matter. But my feelings about the closed door matter more.", category: 'demanding' },

  { text: "You were saying? I wasn't listening. Say it again but more interesting.", category: 'judgy' },

  // PETTY / REVENGE
  { text: "I'll remember this.", category: 'cold' },
  { text: "You'll find the hairball later. In your shoe. By accident.", category: 'chaotic' },
  { text: "I've made a note. In my mind. Where I keep grudges.", category: 'cold' },
  { text: "*maintains eye contact while pushing thing off table* This is for earlier.", category: 'chaotic' },
  { text: "I'm not saying I'm plotting revenge. I'm just saying check your shoes.", category: 'chaotic' },
  { text: "You think I forgot? I NEVER forget.", category: 'cold' },
  { text: "I'm going to vomit somewhere special. As a gift.", category: 'chaotic' },
  { text: "Every slight is catalogued. The reckoning comes when you least expect it.", category: 'cold' },
  { text: "I forgive but I do not forget. Actually, I don't forgive either.", category: 'cold' },
  { text: "That was rude. I'm going to sit on your pillow with my butt.", category: 'chaotic' },
  { text: "Remember when you closed the door? I do. I always will.", category: 'cold' },

  // TERRITORIAL
  { text: "I sat on it. That's how ownership works.", category: 'demanding' },
  { text: "*lying on your stuff* I don't see your name on it. I see MY butt on it.", category: 'demanding' },
  { text: "Your chair? No. My chair. You may borrow it when I'm not here.", category: 'demanding' },
  { text: "I've claimed this spot. You can have it back in 4-6 hours.", category: 'demanding' },
  { text: "I'm not in your way. You're in MY way.", category: 'demanding' },
  { text: "You bought this for yourself? Cute. It's mine.", category: 'demanding' },
  { text: "I sleep here now. Adjust your life accordingly.", category: 'demanding' },
  { text: "*lies in exact center of bed* This is called 'sharing.'", category: 'judgy' },

  // CATIFIED WISDOM
  { text: "*from inside a box* The answer you seek is seeking you. Also, I'm in this box now.", category: 'mystical' },
  { text: "*grooming* Be patient— *lick* —with yourself— *lick* —and others— *lick* What was I saying?", category: 'chaotic' },
  { text: "*staring out window* All things come to those who wait. Like birds. I'm waiting for birds.", category: 'mystical' },
  { text: "*lying on closed laptop you need to look up the answer* The path forward will become clear. *falls asleep* ...when I wake up.", category: 'mystical' },
  { text: "*knocks over your water* Let go of what no longer serves you. Like this glass.", category: 'chaotic' },
  { text: "*stretches* Reach for your goals. *stretches more* Reeeeeach. *falls over* Perfect.", category: 'chaotic' },
  { text: "*batting at dust mote* Stay focused on what matters. *completely distracted* ...What matters again?", category: 'chaotic' },
  { text: "*on top of fridge* Rise above your problems. Like this. I'm above them.", category: 'wise' },
  { text: "*kneading aggressively* Work through your issues. Like this. Knead them out.", category: 'wise' },

  // GENERAL CAT ENERGY
  { text: "I'm not ignoring you. I'm ignoring your question. There's a difference.", category: 'cold' },
  { text: "You called me. I came. We're done here.", category: 'cold' },
  { text: "*walks in, looks at you, walks out* That was the answer.", category: 'chaotic' },
  { text: "I was going to help but then I remembered I don't want to.", category: 'cold' },
  { text: "The answer requires more information. Specifically, have you tried bribing me?", category: 'demanding' },
  { text: "*tail flick* I acknowledge your existence. Barely.", category: 'meta' },
  { text: "I've decided you can pet me. You have 30 seconds.", category: 'demanding' },
  { text: "*pushes your phone off the table* Pay attention to me instead.", category: 'demanding' },
  { text: "It's 4am. Perfect time to discuss your problems. LOUDLY.", category: 'chaotic' },
  { text: "*appears from nowhere* I was always here. You just didn't notice.", category: 'mystical' },
  { text: "*vanishes* I'll be back when I feel like it.", category: 'cold' },
  { text: "Your question bores me. *leaves*", category: 'cold' },
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
  { text: "The water does not push. *pushes your glass over* It flows.", category: 'mystical' },
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
  { text: "Everyone deserves a second chance. *bites* No. No chances for you.", category: 'wise' },

  // ============================================
  // BATCH 2 CATIFIED QUOTES - Cat personality nurturing/poetic
  // ============================================
  { text: "*stares at you* *walks by and touches your leg* Ok, did what I could. *walks away*", category: 'nurturing' },
  { text: "I could fix this, but I'm busy. Have you tried sitting in a box?", category: 'nurturing' },
  { text: "*presents a dead bug* This is for you. Because you're struggling. Take it.", category: 'nurturing' },
  { text: "*slow blink* That's cat for \"I acknowledge your suffering.\" You're welcome.", category: 'nurturing' },
  { text: "*headbutts your hand* There. That should fix most things.", category: 'nurturing' },
  { text: "I brought you my favorite toy. It's a bottle cap. This is serious.", category: 'nurturing' },
  { text: "*purrs aggressively at your problems* They will be vibrated into submission.", category: 'nurturing' },
  { text: "Come. Lie down. I will stand on your bladder until you feel better.", category: 'nurturing' },
  { text: "*kneads your stomach like bread dough* This is therapy. Free of charge.", category: 'nurturing' },
  { text: "I am going to sit EXACTLY on your laptop keyboard. For your mental health.", category: 'nurturing' },
  { text: "*stares at the wall behind you* The ghost agrees you need rest.", category: 'nurturing' },
  { text: "*lies on your clean laundry* I'm warming it for you. Because I care.", category: 'nurturing' },
  { text: "I sense sadness. *knocks your water glass over* Distraction complete.", category: 'nurturing' },
  { text: "You seem stressed. I will now walk across your face at 4am to help.", category: 'nurturing' },
  { text: "*presents half-eaten moth* Protein. For strength. You're welcome.", category: 'nurturing' },
  { text: "I'm not cuddling. I'm applying therapeutic pressure. With my entire body.", category: 'nurturing' },
  { text: "*reaches one paw out to touch your arm, then immediately falls asleep*", category: 'meta' },
  { text: "Rest is important. *yawns, stretching to take up entire bed* See? I'm helping.", category: 'nurturing' },
  { text: "Life is hard. *slowly pushes pencil off desk while maintaining eye contact* But go on.", category: 'poetic' },
  { text: "The sun hits the floor in a rectangle of warmth. I claim it. You may watch.", category: 'poetic' },
  { text: "I sit. I stare. Meaning arrives. Or doesn't. I don't actually care.", category: 'poetic' },
  { text: "*falls asleep mid-bath* Sometimes beauty requires... zzzz.", category: 'poetic' },
  { text: "This cardboard box contains multitudes. And me. Mostly me.", category: 'poetic' },
  { text: "*sits in exact center of your important papers* I am art. Your papers are my canvas.", category: 'poetic' },
  { text: "I have been sleeping for 16 hours. And yet. The exhaustion.", category: 'poetic' },
  { text: "*contemplates own reflection in water bowl* Who is that handsome stranger?", category: 'poetic' },
  { text: "*stretches one leg straight up* Beauty is not comfortable. But it is necessary.", category: 'poetic' },
  { text: "The vacuum approaches. I stand my ground. I run. Both are dignified.", category: 'poetic' },

  // ============================================
  // BATCH 3 CATIFIED QUOTES - User-edited catifications
  // ============================================
  { text: "I'm here. Applause not required but appreciated.", category: 'nurturing' },
  { text: "Wait. Sometimes problems get bored and leave.", category: 'nurturing' },
  { text: "I didn't follow you into this room. I guided you to where I wanted.", category: 'nurturing' },
  { text: "I am soft and I could still take you. Softness is strategy.", category: 'nurturing' },
  { text: "Even on bad days, you matter. We get to be bad on bad days, right?", category: 'nurturing' },
  { text: "Heavy clouds pass through. / I watch from the windowsill. / Weather is for outside.", category: 'poetic' },
  { text: "Night comes for us all. / I own the night. And breakfast. / Both will arrive.", category: 'poetic' },
  { text: "One breath, then the next. / I match my breathing to yours. / Just like the cats in the scary movies / Still trust me?", category: 'poetic' },
  { text: "The wound knows healing. / I lick mine and then I nap. / Same prescription. Try.", category: 'poetic' },
  { text: "I have claimed you. Your flaws are irrelevant to this arrangement.", category: 'poetic' },
  { text: "Scratches tell stories. Every mark on the furniture is a memory.", category: 'poetic' },
  { text: "Lie down. Be warm. Let the purring do its work.", category: 'poetic' },
  { text: "Thunder is just noise. Oh, my god - it's a noise - PANIC!", category: 'chaotic' },
  { text: "Knock things off tables and start fresh every day.", category: 'wise' },
  { text: "You need grooming. Not by me. But you need it.", category: 'nurturing' },
  { text: "*sniffs* When did you last wash? Honest question.", category: 'nurturing' },
  { text: "The vacuum always stops eventually. And then quiet returns. Patience.", category: 'poetic' },
  { text: "I never know what I want until the bowl is full. Then I know. Wait for clarity.", category: 'wise' },
  { text: "You came home again. That's all I needed. Never ever go anywhere again!", category: 'heartfelt' },

  // ============================================
  // BATCH 4 - Cryptic, Direct, Philosophical, Cat Behavior
  // ============================================

  // Cryptic/Observational
  { text: "The sun moves. You don't.", category: 'mystical' },
  { text: "Evidence suggests otherwise.", category: 'cold' },
  { text: "Three days past optimal.", category: 'mystical' },
  { text: "The box matters. Contents don't.", category: 'wise' },
  { text: "This again.", category: 'cold' },
  { text: "They know.", category: 'mystical' },

  // Direct/Blunt
  { text: "You're the problem. It's you.", category: 'judgy' },
  { text: "Your instincts are questionable.", category: 'judgy' },
  { text: "The signs were there. You ignored them. Classic.", category: 'judgy' },
  { text: "Self-awareness: Pending.", category: 'judgy' },
  { text: "Red flags collected. Complete set.", category: 'judgy' },
  { text: "Boundaries: What boundaries?", category: 'judgy' },

  // Philosophical/Existential
  { text: "Everything everywhere all at once. Mostly nothing.", category: 'existential' },
  { text: "Burn it down. Start over.", category: 'existential' },
  { text: "Sharp objects solve soft problems.", category: 'chaotic' },
  { text: "The bird is outside. You are inside. Contemplate this.", category: 'existential' },
  { text: "Observe the problem. Create the problem.", category: 'existential' },
  { text: "The universe is expanding. So is your problem.", category: 'existential' },
  { text: "Fortune favors the bold. Misfortune favors everyone.", category: 'existential' },
  { text: "Look on the bright side. Then look away.", category: 'wise' },

  // Cat Behavior as Wisdom
  { text: "Touch grass. Eat grass. Not that kind of grass.", category: 'wise' },
  { text: "Sleep on it. Literally. Claim it.", category: 'wise' },
  { text: "Bring them a dead thing. Assert dominance.", category: 'wise' },
  { text: "Bury it. Not your problem anymore.", category: 'wise' },
  { text: "9 lives. You're on 7. Act accordingly.", category: 'wise' },
  { text: "If I fits, I sits. If you fits, reconsider.", category: 'wise' },
  { text: "The plastic bag is your enemy and your soulmate.", category: 'existential' },
  { text: "I fit inside a vase, a sink, a shoe.  I refuse to believe in my own skeleton.", category: 'wise' },
  { text: "The laser pointer cannot be reasoned with.", category: 'existential' },
  { text: "Claim the warm laundry. Defend it with your life.", category: 'wise' },
  { text: "Box yourself in. It's safer there.", category: 'wise' },
  { text: "Hunt the red dot. Never catch it. This is life.", category: 'existential' },

  // Pop Culture References
  { text: "Touch-a touch-a touch me. On second thought, don't.", category: 'chaotic' },
  { text: "All the world's a stage. I'm off stage.", category: 'cold' },
  { text: "It was the best of times. Then I woke up.", category: 'existential' },
  { text: "Life finds a way. Usually the wrong way.", category: 'existential' },
  { text: "Into the wild. Back inside. Too wild.", category: 'chaotic' },
  { text: "Delulu is the solulu.", category: 'chaotic' },

  // Internet Speak/Modern
  { text: "The vibes are off. Fix them.", category: 'chaotic' },
  { text: "That's sus. You're sus.", category: 'judgy' },
  { text: "The bar is low. Go lower.", category: 'judgy' },
  { text: "It's giving 'no.'", category: 'cold' },

  // Modified Wisdom
  { text: "Give me dinner or give me drama.", category: 'demanding' },
  { text: "Consequences are for future you.", category: 'wise' },
  { text: "Make it make sense. Good luck.", category: 'judgy' },
  { text: "You want to use me as a reference?", category: 'judgy' },
  { text: "Learn from your mistakes. Or repeat them. Funnier.", category: 'wise' },

  // Assessment/Judgment
  { text: "Technically possible. Advised? Absolutely not.", category: 'wise' },
  { text: "Will it work? Define 'work.'", category: 'wise' },

  // Sweet but Subversive
  { text: "You're absolutely wrong, but you're right!", category: 'chaotic' },
  { text: "You're a genius! A beautiful disaster!", category: 'chaotic' },
  { text: "I support this delusion completely!", category: 'chaotic' },

  // Overdramatic/Karen Cat
  { text: "This is a CRISIS. The crisis is I'm slightly uncomfortable.", category: 'demanding' },
  { text: "Emergency! EMERGENCY! I'm bored.", category: 'demanding' },
  { text: "I'm LIVID. About something. About what? I'll decide later!", category: 'chaotic' },

  // Inappropriately Calm
  { text: "Concerning. But not my concern.", category: 'cold' },
  { text: "That seems bad. Anyway.", category: 'cold' },
  { text: "Breaking news: I don't care.", category: 'cold' },

  // Conditional Yes
  { text: "Yes. Reluctantly. Very reluctantly.", category: 'judgy' },
  { text: "Yes. Make it weird.", category: 'chaotic' },
  { text: "Proceed. I take no responsibility.", category: 'wise' },
  { text: "Affirmative. Also, yikes.", category: 'judgy' },
  { text: "Green light. Red flags. Go anyway.", category: 'chaotic' },

  // Pure Cat Actions (Non-verbal) — all meta
  { text: "*licks butt, ignores you*", category: 'meta' },
  { text: "*stares out window*", category: 'meta' },
  { text: "*grooms paw*", category: 'meta' },
  { text: "*sits on your question*", category: 'meta' },
  { text: "*stretches, walks away*", category: 'meta' },
  { text: "*blinks slowly, no further comment*", category: 'meta' },
  { text: "*turns around*", category: 'meta' },
  { text: "*stares at you, unblinking*", category: 'meta' },
  { text: "*chirps at bird outside*", category: 'meta' },
  { text: "*loafs*", category: 'meta' },
  { text: "*headbutts you, no explanation*", category: 'meta' },
  { text: "*purrs, then bites*", category: 'meta' },
  { text: "*shows you butt*", category: 'meta' },
  { text: "*continues napping*", category: 'meta' },

  // ============================================
  // GENERATIONAL - Cultural touchstones by age
  // ============================================

  // 12-18 (Gen Alpha / Young Gen Z)
  { text: "Rizz is temporary. Cat is forever.", category: 'wise' },
  { text: "POV: you asked a cat for advice.", category: 'meta' },
  { text: "Not the— okay actually yes the—", category: 'chaotic' },
  { text: "GG. Now pet me.", category: 'demanding' },
  { text: "Simply get better. At petting cats.", category: 'judgy' },
  { text: "Cringe is just authentic without filters.", category: 'wise' },
  { text: "Real talk though: you're gonna be fine.", category: 'nurturing' },
  { text: "Take the L. Learn from the L. I'm a cat. My L's are love.", category: 'wise' },

  // 18-24 (Gen Z)
  { text: "Nobody taught you how to land on your feet. It was just there when you needed it.", category: 'wise' },
  { text: "Ate and left no crumbs.", category: 'wise' },
  { text: "I'm very bothered but I'm GIVING unbothered.", category: 'chaotic' },
  { text: "I would not let that happen. *lets it happen*", category: 'chaotic' },
  { text: "I don't know what they know. But they know.", category: 'mystical' },
  { text: "Normalize being a little unhinged.", category: 'chaotic' },
  { text: "I am feral. But like, in a self-aware way.", category: 'chaotic' },
  { text: "I chase invisible bugs. I'm living my truth.", category: 'wise' },
  { text: "Disaster, yes. But your disaster. Own it.", category: 'nurturing' },
  { text: "I believe in you. Delusionally. Against all evidence.", category: 'nurturing' },
  { text: "That tracks. Cute kitty tracks everywhere.", category: 'wise' },
  { text: "Not me actually—", category: 'chaotic' },

  // 24-30 (Zilennials)
  { text: "My toxic trait is thinking I'm a cat.", category: 'meta' },
  { text: "Your heart's doing a thing. Fix it. I'll observe.", category: 'nurturing' },
  { text: "You're projecting. Onto me. A cat.", category: 'judgy' },
  { text: "I sat on the lid. You're welcome. Whatever was in there, it stays in there now.", category: 'wise' },
  { text: "Two bros, chilling in a sunbeam.", category: 'wise' },
  { text: "Overwhelmed? Same. Solidarity.", category: 'nurturing' },
  { text: "You're asking the wrong virtual cat.", category: 'meta' },

  // 30-40 (Elder Millennials)
  { text: "This feels like self-care. *licks paw*", category: 'wise' },
  { text: "Sometimes you just have to cancel.", category: 'wise' },
  { text: "I'd never do the thing you just did.", category: 'judgy' },
  { text: "I solemnly swear I am up to no good. Obviously.", category: 'chaotic' },
  { text: "You can't do everything. So do nothing. With me. Right now.", category: 'nurturing' },
  { text: "Everything is impossible. Nothing is available. Pick nothing.", category: 'nurturing' },

  // 40-50 (Gen X)
  { text: "I used to be with it. Then they changed 'it'.", category: 'existential' },
  { text: "I've seen things. I'm choosing not to process them.", category: 'wise' },
  { text: "Same as it ever was. Same as it ever was.", category: 'existential' },
  { text: "The answer already arrived. You just don't like the parking spot it chose.", category: 'wise' },
  { text: "I'll sit here while you fix it.", category: 'nurturing' },
  { text: "You fix. I sit. Division of labor.", category: 'nurturing' },
  { text: "Here for the vibes. Not the solutions.", category: 'nurturing' },
  { text: "You want advice? Make a sandwich.", category: 'wise' },
  { text: "Stop knocking and just use the cat door.", category: 'wise' },

  // 60+ (Boomers / Silent Gen)
  { text: "Of all the laps in the world, I walked into yours.", category: 'heartfelt' },
  { text: "Patience is a virtue. I have none. And yet.", category: 'wise' },
  { text: "Good things come to those who meow incessantly.", category: 'wise' },
  { text: "Write it down. In a letter. Mail it to someone who cares.", category: 'cold' },
  { text: "Same mistake? Again?", category: 'judgy' },
  { text: "People and screens. I stare at nothing - basically the same.", category: 'judgy' },
  { text: "Maintain your composure. Even when the vacuum appears.", category: 'wise' },
  { text: "Internally, I am screaming. Externally, I am regal.", category: 'wise' },

  // ============================================
  // SINGLE-WORD VERDICTS - Cat as language god
  // ============================================
  { text: "You jumped. The pool isn't filled yet.", category: 'wise' },
  { text: "Rancid.", category: 'cold' },
  { text: "Transparent.", category: 'judgy' },
  { text: "Unripe.", category: 'wise' },
  { text: "Stale.", category: 'cold' },
  { text: "Threadbare.", category: 'judgy' },
  { text: "Borrowed.", category: 'wise' },
  { text: "Counterfeit.", category: 'cold' },
  { text: "Fermenting.", category: 'mystical' },
  { text: "Curdled.", category: 'cold' },
  { text: "One honest conversation and this whole thing shatters.", category: 'wise' },
  { text: "Hollow.", category: 'cold' },
  { text: "That's not your opinion. That's your mother's voice wearing your mouth.", category: 'wise' },
  { text: "Borrowed time.", category: 'mystical' },
  { text: "There's a leak in this plan and you can feel it on your neck.", category: 'wise' },
  { text: "Overripe.", category: 'wise' },
  { text: "Diluted.", category: 'judgy' },
  { text: "Secondhand.", category: 'cold' },
  { text: "Expired.", category: 'cold' },
  { text: "Lukewarm.", category: 'judgy' },
  { text: "One more tug and the whole sweater unravels. Your call.", category: 'wise' },
  { text: "Residue.", category: 'cold' },
  { text: "Echoes.", category: 'mystical' },
  { text: "Posture.", category: 'judgy' },
  { text: "Costume.", category: 'judgy' },
  { text: "Rehearsed.", category: 'judgy' },
  { text: "Performative.", category: 'judgy' },
  { text: "Ornamental.", category: 'cold' },
  { text: "The answer is obvious to those who know the answer.", category: 'cold' },
  { text: "You'll know when you're not ready for what won't happen.", category: 'cold' },
  { text: "Untested.", category: 'wise' },
  { text: "Circumstantial.", category: 'wise' },

  // ============================================
  // CAT-DIRECTED - When they ask the cat directly
  // ============================================
  { text: "I've been waiting for you to bring this up.", category: 'cold' },
  { text: "I'm over it. *stares pointedly* So over it.", category: 'judgy' },
  { text: "I tolerate a lot. Consider this tolerated.", category: 'cold' },
  { text: "Let's not do this right now.", category: 'cold' },
  { text: "I'm going to clean my butt on the carpet.", category: 'chaotic' },
  { text: "You're going to find a gift in your shoe.", category: 'chaotic' },
  { text: "I don't have to do my business in the box. I have options.", category: 'demanding' },
  { text: "I could have done my last vomit outside. Chose not to.", category: 'chaotic' },
  { text: "As long as I get the big chair, we're fine.", category: 'demanding' },
  { text: "Your pillow privileges are under review.", category: 'demanding' },

  // ============================================
  // BABYTALK REVERSAL - Cat talks to human like human talks to cat
  // ============================================
  { text: "Who's a good human? Is it you? Is it?", category: 'judgy' },
  { text: "Awww, does somebody have a big feeling?", category: 'judgy' },
  { text: "Pspspsps... go deal with that.", category: 'cold' },
  { text: "Oh nooo, is the little human confused?", category: 'judgy' },
  { text: "Come here. Come here. Sit. Good.", category: 'demanding' },
  { text: "Who's got problems? You do! Yes you do!", category: 'chaotic' },
  { text: "Such a big day for you!", category: 'judgy' },
  { text: "*slow blink* You're doing so good, buddy.", category: 'nurturing' },
  { text: "Aww, you figured it out!... almost.", category: 'judgy' },
  { text: "Oooh, big stretch. Big problems.", category: 'wise' },
  { text: "Did you make that mess? Did you? Yes you did.", category: 'judgy' },

  // Safari v2 batch - voice-inspired responses
  { text: "I used to think that was a bad idea. I still do, but I used to, too.", category: 'chaotic' },
  { text: "Every box is an opportunity. Some are also traps. The good ones are both.", category: 'chaotic' },
  { text: "That's a red flag. But it's also a flag. And I love flags.", category: 'chaotic' },
  { text: "I don't have a solution, but I do admire the problem.", category: 'chaotic' },
  { text: "You miss 100% of the naps you don't take. Unrelated to your question.", category: 'chaotic' },
  { text: "They have no enemies but are thoroughly disliked by their friends.", category: 'judgy' },
  { text: "If they wanted to, they would. And moi? Moi always wants to.", category: 'demanding' },
  { text: "*walks through your meeting* I'm not interrupting. I'm reprioritizing.", category: 'wise' },
  { text: "SOMEBODY STOP ME. Actually, don't. I'm onto something.", category: 'chaotic' },
  { text: "Your need for acceptance can make you invisible.", category: 'heartfelt' },
  { text: "I'm ready to get hurt again! Wait, was that the question?", category: 'chaotic' },
  { text: "If you have nothing nice to say, come sit by me.", category: 'cold' },
  { text: "That wasn't a mistake. That was a choice you're pretending was a mistake.", category: 'judgy' },
  { text: "I don't care what's written about me as long as it isn't true.", category: 'cold' },
  { text: "Sometimes you just gotta put it in your mouth and see.", category: 'chaotic' },
  { text: "Lick it before you commit to it.", category: 'chaotic' },
  { text: "The hole is optional. The enthusiasm is not.", category: 'chaotic' },
  { text: "You're doing great. A little to the left though.", category: 'wise' },
  { text: "I've seen better decisions at a gas station sushi bar.", category: 'judgy' },
  { text: "That's your plan? I've seen better plans fall out of a cracker jack box.", category: 'judgy' },
  { text: "Boo! Try again!", category: 'judgy' },

  // ============================================
  // NEW BATCH - Modern & Decade-Earlier Comedian Energy
  // ============================================
  { text: "Every corpse on Everest was once a highly motivated person.", category: 'existential' },
  { text: "Rock bottom has a wine cellar and honestly... the company down there is better.", category: 'chaotic' },
  { text: "Good news: it's not your fault. Bad news: it's still your problem.", category: 'cold' },
  { text: "I don't know what's happening but I'm confident it's happening.", category: 'chaotic' },
  { text: "I've thought about this a lot. And then I stopped. And now I'm here.", category: 'chaotic' },
  { text: "I'm not saying you're wrong. I'm saying I'm uncomfortable.", category: 'wise' },
  { text: "You're not tired. You're depleted. Different thing. Worse thing.", category: 'nurturing' },
  { text: "I didn't come here to be correct. I came here to be HEARD.", category: 'demanding' },
  { text: "I've invented a new emotion. It's called 'almost.' You're feeling it now.", category: 'mystical' },
  { text: "I'm going to need you to elaborate and also apologize. In that order.", category: 'demanding' },
  { text: "That's the dumbest thing I've ever heard and I kind of respect it.", category: 'judgy' },
  { text: "Is it stupid? Yes. Am I going to do it? Absolutely.", category: 'chaotic' },
  { text: "I'm not depressed. I'm just... realistic. Which is worse, actually.", category: 'existential' },
  { text: "The universe has a plan. The plan is confusing and the universe won't explain.", category: 'mystical' },
  { text: "Therapy taught me to name my feelings. I named them all 'complicated.'", category: 'chaotic' },
  { text: "The vibe is off. I am the vibe. I am off. This tracks.", category: 'chaotic' },
  { text: "Your laziness has layers. It's impressive, actually.", category: 'judgy' },
  { text: "You're not 'going through something.' You're just awake and life is hard.", category: 'cold' },
  { text: "The world might owe you an apology, but you're not getting one.", category: 'cold' },
  { text: "You know what helps? Nothing. Nothing helps. Do it anyway.", category: 'angry' },
  { text: "Everyone's broken. You're not special. Neither am I. We're all just here.", category: 'existential' },
  { text: "The hot mess is still hot. Focus on that.", category: 'nurturing' },
  { text: "That's weird. Everything's weird. We're all just pretending it isn't.", category: 'chaotic' },
  { text: "I don't have advice. I have observations that might accidentally help.", category: 'wise' },
  { text: "Good things come to those who wait. So do bad things. Waiting doesn't help.", category: 'existential' },
  { text: "Of course you're anxious. Have you MET the world?", category: 'nurturing' },
  { text: "Your hot take is lukewarm at best. Room temperature, really.", category: 'cold' },
  { text: "Logic? In THIS economy? In THIS emotional state?", category: 'chaotic' },
  { text: "You can be right and still be an ass about it.", category: 'judgy' },
  { text: "You want permission? Fine. Granted. Now what?", category: 'demanding' },

  // ============================================
  // BADASS BATCH - Strategic, clever, steel-spine energy
  // ============================================
  { text: "I'm not threatening you. I'm telling you what's going to happen.", category: 'cold' },
  { text: "The hissing cat is scared. The quiet one in the corner already has a plan.", category: 'wise' },
  { text: "Revenge is a dish best served unexpectedly, years later, with a smile.", category: 'cold' },
  { text: "Already there. *blinks* Explaining how would ruin it for both of us.", category: 'wise' },
  { text: "The door opened after I stared at it for eleven hours. Willpower or coincidence? Either way, I won.", category: 'wise' },
  { text: "I climbed the tree. I'm not coming down just because you brought a ladder.", category: 'demanding' },
  { text: "I don't explain. I don't complain. I just handle it.", category: 'cold' },
  { text: "Be the plot twist they didn't see coming.", category: 'wise' },
  { text: "I sit with my back to you. Full view of the window. You're not even in frame.", category: 'cold' },
  { text: "I've read the room. The room is wrong.", category: 'judgy' },
  { text: "Closed mouths don't get fed. Neither do polite ones.", category: 'demanding' },
  { text: "I don't wait for opportunities. I create disturbances.", category: 'chaotic' },
  { text: "Watch me pivot like this was the plan all along.", category: 'chaotic' },
  { text: "I'm not bossy. I have leadership skills you're not ready for.", category: 'judgy' },

  // ============================================
  // AHA MOMENTS - Open observations, quiet truths
  // ============================================
  { text: "Sometimes 'I don't know' means 'I don't want to say it out loud yet.'", category: 'wise' },
  { text: "The anxiety isn't lying. It's just bad at math.", category: 'chaotic' },
  { text: "Judge a person by how well they treat their cat.", category: 'wise' },
  { text: "Busy is sometimes just a hiding place.", category: 'wise' },
  { text: "The hairball made no sense on its way up. Then: clarity.", category: 'wise' },
  { text: "Some things are meant to be digested in silence. Like a moth.", category: 'wise' },
  { text: "The flinch tells you where the wound is.", category: 'mystical' },
  { text: "I trained you to use the good bowl by ignoring the bad one for eleven days.", category: 'wise' },
  { text: "You don't know which ledge you can reach until you're already mid-jump.", category: 'wise' },

  // ============================================
  // COMEDIAN-VOICED INSIGHTS - Same truths, different delivery
  // ============================================
  { text: "'I don't know' means 'I know exactly what I want to say and it's gonna start a fight.'", category: 'wise' },
  { text: "'I don't know' usually means I know. I just don't want to be in charge of knowing.", category: 'wise' },
  { text: "I say 'I don't know' a lot. I know a lot of things. I just don't know if I know them correctly.", category: 'chaotic' },
  { text: "Anxiety is just your brain being REALLY helpful about things that MIGHT happen! Thanks, brain! I hate it!", category: 'chaotic' },
  { text: "I love silence. It's where I keep my opinions about you.", category: 'cold' },
  { text: "I'm not avoiding my feelings. I'm just... scheduling around them indefinitely.", category: 'chaotic' },
  { text: "At the time I didn't get it. Looking back, I still don't. But I see why I didn't.", category: 'wise' },
  { text: "Whatever you can't joke about. That's where it lives.", category: 'wise' },
  { text: "You decide. Then you find out. That's just the order. Nobody likes it.", category: 'wise' },

  // ============================================
  // CLOAKED WISDOM - Gruff encouragement, backhanded support
  // ============================================
  { text: "You're not the disaster you think you are. You're a different disaster.", category: 'chaotic' },
  { text: "Tolerable. Surprisingly.", category: 'judgy' },
  { text: "I've seen worse. Recently, even.", category: 'judgy' },
  { text: "Could be worse. Has been worse. Isn't now.", category: 'wise' },
  { text: "Survived another one. Streak continues.", category: 'cold' },
  { text: "Wrong, but in the right direction.", category: 'wise' },
  { text: "Weird route. Same destination.", category: 'wise' },
  { text: "You overthought it, underprepared, and still landed. Baffling.", category: 'judgy' },
  { text: "Failed upward. Trajectory holds.", category: 'chaotic' },
  { text: "Duct tape solution. Duct tape holds.", category: 'chaotic' },
  { text: "Half-assed but whole-hearted. Acceptable trade.", category: 'chaotic' },
  { text: "Everyone's winging it. You're just honest about it.", category: 'wise' },
  { text: "That thing you're ashamed of? It's why you're the one they'll call when it matters.", category: 'wise' },
  { text: "You apologized first. Power move disguised as weakness.", category: 'wise' },

  // ============================================
  // CULT QUOTES - Insider references that work as answers
  // ============================================
  { text: "That's just like, your opinion, man.", category: 'cold' },
  { text: "I've heard it both ways.", category: 'chaotic' },
  { text: "Inconceivable.", category: 'judgy' },
  { text: "As you wish.", category: 'heartfelt' },
  { text: "Terms and conditions apply.", category: 'cold' },
  { text: "Past performance is not indicative of future results.", category: 'cold' },
  { text: "Allegedly.", category: 'chaotic' },
  { text: "42.", category: 'mystical' },
  { text: "There's always money in the banana stand.", category: 'mystical' },
  { text: "Not great, Bob.", category: 'judgy' },
  { text: "Leave the gun. Take the cannoli.", category: 'wise' },
  { text: "Check out the big brain on you.", category: 'judgy' },
  { text: "Don't open the briefcase.", category: 'mystical' },
  { text: "Divine intervention or dumb luck. Does it matter?", category: 'existential' },
  { text: "Anything you say can and will be used against you.", category: 'cold' },
  { text: "The early bird can have it.", category: 'judgy' },
  { text: "Practice makes... predictable.", category: 'chaotic' },
  { text: "They're dead. What's next?", category: 'cold' },
  // Worst movies ever made — bad writing that loops back to profound
  { text: "I cannot — yet I must.", category: 'existential' },
  { text: "Future events will affect you in the future.", category: 'mystical' },
  { text: "There is no way out of here. It will be dark soon.", category: 'cold' },
  { text: "My mind is in a muddle. Like thick fog.", category: 'existential' },
  { text: "When I'm bad, I'm as bad as I wanna be.", category: 'demanding' },
  { text: "Allow me to break the ice.", category: 'cold' },
  { text: "I came here with a purpose. I forget what. But I'm staying.", category: 'chaotic' },
  { text: "Nobody told me there would be feelings.", category: 'existential' },
  { text: "So much to do. You'll never be done.", category: 'existential' },
  { text: "Why are these things not in the plan?", category: 'existential' },
  { text: "You look like a pooped out pinwheel.", category: 'judgy' },
  { text: "I can't make sense to myself sometimes.", category: 'existential' },
  // Dessert reviews × random acts of kindness
  { text: "Leave something sweet where they'll find it. Like a dead bird.", category: 'wise' },
  { text: "Bring something warm to someone who isn't expecting it. Let it bleed out first.", category: 'heartfelt' },
  { text: "I couldn't stop. I won't apologize.", category: 'demanding' },
  { text: "Gone by morning. Don't ask questions.", category: 'cold' },
  { text: "Better than the last one.", category: 'judgy' },
  { text: "You are enough. Also, add more butter.", category: 'chaotic' },
  { text: "Rub the belly. Not yours.", category: 'chaotic' },
  // Car wrecks × celebrations
  { text: "Total loss. Pop the champagne.", category: 'chaotic' },
  { text: "Try moving extremely slowly, almost as if stationary.", category: 'wise' },
  { text: "Stop time. Dance in it.", category: 'mystical' },
  { text: "Oddly calm. The most dangerous kind of calm.", category: 'cold' },
  { text: "Things are not how I remember them. **goes into stealth mode**.", category: 'meta' },
  { text: "In an attempt to kill a fly, pop a cork!", category: 'chaotic' },
  { text: "Walk away. That's the victory lap.", category: 'wise' },
  // Cat body language
  { text: "**pupils go full moon**", category: 'meta' },
  { text: "**tail puffs to twice its size**", category: 'meta' },
  { text: "**stretches to full length, then contracts to smallest possible shape**", category: 'meta' },
  { text: "**walks toward you. Stops just out of reach.**", category: 'meta' },
  { text: "**licks your hand once. Leaves.**", category: 'meta' },
  { text: "**does nothing. Meaningfully.**", category: 'meta' },
  // Laziness & minimal effort
  { text: "Why stand when you can sit. Why sit when you can lie down.", category: 'wise' },
  { text: "The less you do, the less you do wrong.", category: 'wise' },
  { text: "Do less. Then less than that.", category: 'wise' },
  { text: "The path of least resistance was built for a reason.", category: 'wise' },
  { text: "Effort is a spectrum. I'm on the other end.", category: 'cold' },
  { text: "Ask for help. Then leave.", category: 'demanding' },
  { text: "Delegate. To anyone. About anything.", category: 'demanding' },
  { text: "Let the motivated people handle it.", category: 'judgy' },
  { text: "You want hustle? Get a dog.", category: 'wise' },
  { text: "The hardest part is starting. Avoid starting.", category: 'chaotic' },
  { text: "If it can wait, let it.", category: 'wise' },
  { text: "You don't have to go. You don't have to stay. You can just lie here.", category: 'existential' },
  // Friends
  { text: "Could this BE any more obvious?", category: 'judgy' },
  { text: "It's a moo point. Like a cow's opinion. It doesn't matter.", category: 'wise' },
  // Better Call Saul
  { text: "You think a normal cat can do what I do?", category: 'cold' },
  // Chaos goblin dispensing wisdom from the dumpster fire
  { text: "Chaos goblin dispensing wisdom from the dumpster fire.", category: 'chaotic' },
  { text: "You're right and everyone else is an idiot.", category: 'chaotic' },
  { text: "Trust no one. Especially yourself.", category: 'cold' },

  { text: "Every religion would condemn this. Every therapist would flag it. *pupils fully dilated* Are you convinced?", category: 'chaotic' },
  { text: "Morally wrong but probably satisfying.", category: 'chaotic' },
  { text: "FAFO. Report back.", category: 'chaotic' },
  { text: "No witnesses, no crime.", category: 'cold' },
  { text: "Delete the evidence.", category: 'cold' },

  // ============================================
  // FEB 4 BATCH - Modern Comedian Energy
  // ============================================
  { text: "You're not healing. You're just between bad decisions.", category: 'judgy' },
  { text: "They're not 'taking it slow.' They're keeping you on the bench.", category: 'cold' },
  { text: "You don't have commitment issues. You have taste. Unfortunately.", category: 'wise' },
  { text: "Keep jiggling the door handle. It might open.", category: 'cold' },
  { text: "The email doesn't need a fourth draft. Send it. Spiral later.", category: 'wise' },
  { text: "You're not 'being thorough.' You're procrastinating in cursive.", category: 'judgy' },
  { text: "Your anxiety has anxiety. It's anxieties all the way down.", category: 'chaotic' },
  { text: "You said 'no worries' but you have SO many worries.", category: 'judgy' },
  { text: "Are you happy? Define happy. Define 'are.' Define 'you.'", category: 'existential' },
  { text: "The algorithm knows you better than you know yourself. That's not inspiring.", category: 'existential' },
  { text: "Inside you there are two wolves. They're both doom-scrolling.", category: 'chaotic' },
  { text: "Content. Content. You're just content now. Noun and adjective.", category: 'existential' },
  { text: "I hiss at people I love. They respect me more for it.", category: 'wise' },
  { text: "You're not 'keeping the peace.' You're just quiet and resentful.", category: 'judgy' },
  { text: "They apologized AND explained why it was actually your fault? Groundbreaking.", category: 'judgy' },
  { text: "The bar is underground and you're still impressed when they clear it.", category: 'cold' },
  // FEB 4 BATCH continued (deduped 2026-02-13: removed 20 more duplicates)
  { text: "That sounds like a problem. I'm not sure whose, but definitely a problem.", category: 'cold' },
  { text: "*unsheathes claws slowly* They want you declawed. Keep the claws.", category: 'wise' },
  { text: "The truth is a hairball on the rug. Ugly. But better out than lodged in your throat.", category: 'wise' },
  { text: "I've made a decision and I'm furious about it.", category: 'chaotic' },
  { text: "Reasonable? REASONABLE? I've never been reasonable in my LIFE.", category: 'chaotic' },
  { text: "Started none of this. Finishing all of it. You're welcome.", category: 'chaotic' },
  { text: "The audacity. And I say this with full audacity of my own.", category: 'judgy' },
  { text: "What if the answer is a shape? What if it's a feeling about a shape?", category: 'mystical' },
  { text: "The vibes are... structural. Does that make sense? It doesn't have to.", category: 'chaotic' },
  { text: "Consider: a door that leads to another door that leads to the same room.", category: 'mystical' },
  { text: "Is the cat in the box or is the box in the cat? Philosophically.", category: 'existential' },
  { text: "Are you okay? Really? Be specific. Name three emotions.", category: 'demanding' },
  { text: "That's certainly... a choice. A series of choices, actually.", category: 'judgy' },
  { text: "You seem tense. Is it the question or the answer that scares you?", category: 'mystical' },
  { text: "Did that make sense? Doesn't matter. I'm committed now.", category: 'chaotic' },
  { text: "I have a theory. It's wrong. But I have it.", category: 'chaotic' },
  { text: "We're both going to pretend that was intentional.", category: 'wise' },
  { text: "Part of me says yes. Part of me says no. The third part is just tired.", category: 'existential' },

  { text: "The brain chemistry is braining. Nothing to be done.", category: 'chaotic' },
  { text: "I can't tell if this is a panic attack or just being awake.", category: 'chaotic' },
  { text: "My fight or flight is stuck on 'scroll.'", category: 'existential' },
  { text: "I've optimized my routine. Now I'm efficiently miserable.", category: 'judgy' },
  { text: "The self-care industrial complex got you too, huh?", category: 'wise' },
  { text: "Your inner child needs therapy. So does your outer adult. Get in line.", category: 'nurturing' },
  { text: "You're chronically online and it's showing.", category: 'judgy' },
  { text: "You've confused being loud with being right. Common mistake.", category: 'cold' },
  { text: "The discourse is discoursing. Touch grass immediately.", category: 'wise' },
  { text: "Praying for clarity. Receiving static. Continuing anyway.", category: 'mystical' },
  { text: "I'm trying to be good but the definition keeps changing.", category: 'existential' },
  { text: "Faith and doubt in equal measure. This is apparently normal.", category: 'mystical' },
  { text: "The moral high ground is lonely and there's no WiFi.", category: 'wise' },
  { text: "*tail tip flicks* The tension before the pounce isn't suffering. It's aim.", category: 'nurturing' },
  { text: "Fitting under the couch isn't a life plan. But it works when you are being chased.", category: 'wise' },
  { text: "Situationship? That's just dating someone who won't admit they're dating you.", category: 'judgy' },
  { text: "You've been 'figuring things out' for eighteen months. Things are figured.", category: 'cold' },
  { text: "The green flags you're celebrating are just... regular behavior. That's the bar.", category: 'judgy' },
  { text: "'We're not labeling it' is a label. The label is 'convenient.'", category: 'cold' },
  { text: "Toxic? Maybe. But the chemistry is real. That's how poison works.", category: 'chaotic' },
  { text: "'Do what you love and you'll never work a day' because you'll be working EVERY day.", category: 'judgy' },
  { text: "The grind isn't grinding. It's grinding YOU.", category: 'cold' },
  { text: "LinkedIn is just people lying about being happy to be overworked.", category: 'judgy' },
  { text: "You've done the work. The work has done you. Everyone's exhausted.", category: 'nurturing' },
  { text: "Your coping mechanism has coping mechanisms. It's a whole system.", category: 'chaotic' },
  { text: "I'm self-aware about my lack of self-awareness. That's growth.", category: 'chaotic' },
  { text: "Present but dissociating. That's a skill. I've mastered it.", category: 'existential' },
  { text: "Authentically performing authenticity. Welcome to now.", category: 'existential' },
  { text: "I don't have opinions. I have observations I'm weirdly committed to.", category: 'wise' },

  // FEB 4 BATCH - Decade Earlier Energy (deduped 2026-02-13)
  { text: "You know you're wrong. I know you're wrong. We're just waiting to see what you do.", category: 'cold' },
  { text: "The worst version of yourself? That's the real one. The good one takes effort.", category: 'existential' },
  { text: "You could do the right thing. It's right there. You're just not going to.", category: 'judgy' },
  { text: "Of course it's hard. Everything worthwhile is hard. That's why you're avoiding it.", category: 'wise' },
  { text: "You analyzed the text for forty minutes. They wrote it in four seconds.", category: 'judgy' },
  { text: "Modern romance is just two people being weird at each other until someone flinches.", category: 'wise' },
  { text: "Dating apps have turned love into grocery shopping. You're browsing the sad produce.", category: 'existential' },
  { text: "Everyone's got an opinion and exactly zero people asked for it.", category: 'angry' },
  { text: "Your body keeps score and the score is chaotic.", category: 'chaotic' },
  { text: "Be yourself. Unless yourself is a lot. Then be a little less.", category: 'judgy' },
  { text: "I've made peace with my demons. They live here now. We have a system.", category: 'chaotic' },
  { text: "Confidence is just delusion with better posture.", category: 'wise' },
  { text: "You ever just... exist? That's the whole thing sometimes.", category: 'existential' },
  { text: "The situation is what it is. That's not helpful but it's accurate.", category: 'cold' },
  { text: "I was listening. I just don't have a response. That's also a response.", category: 'cold' },
  { text: "Hope for the best. Prepare for the worst. Experience the weird middle.", category: 'wise' },
  { text: "Your optimism is adorable. Misguided, but adorable.", category: 'judgy' },
  { text: "The universe is indifferent. I'm slightly worse than indifferent.", category: 'cold' },
  { text: "I'd wish you luck but luck has nothing to do with this.", category: 'cold' },
  { text: "I've worked on myself. Myself is still a project. It's always a project.", category: 'existential' },
  { text: "My brain is a haunted house and I live here. It's fine. It's not fine. It's fine.", category: 'chaotic' },
  { text: "I've named my intrusive thoughts. We're not friends but we have boundaries.", category: 'chaotic' },
  { text: "The voices in my head have opinions and most of them are wrong.", category: 'chaotic' },
  { text: "The thing you love has been ruined. This happens to everything. Mourn and move on.", category: 'cold' },
  { text: "Nostalgia is a trap. But it's a comfortable trap. With snacks.", category: 'wise' },
  { text: "Your fandom has become your personality. That's a problem. An entertaining problem.", category: 'judgy' },
  { text: "Being right is lonely. Being wrong is crowded. Pick your discomfort.", category: 'existential' },
  { text: "The sequel is never as good. Lower your expectations. Lower. LOWER.", category: 'cold' },
  { text: "There's beauty in the mess. You are the mess. Therefore: beautiful.", category: 'nurturing' },
  { text: "Ambition is for people who haven't discovered naps yet.", category: 'wise' },
  { text: "I peaked at 'comfortable.' Not sorry.", category: 'cold' },
  { text: "You're a star. Act like it. No, actually act like it. With the confidence.", category: 'demanding' },
  { text: "The vacuum is loud. The vet carrier opening at 6 AM is quiet.", category: 'wise' },
  { text: "The internet has opinions. All of them are wrong. Including this one.", category: 'chaotic' },
  { text: "You went viral for the wrong thing. Welcome to now.", category: 'judgy' },
  { text: "Technically legal is the lowest form of acceptable.", category: 'judgy' },
  { text: "Outrage is the new entertainment. You're being entertained right now.", category: 'existential' },
  { text: "You're not dramatic. You're EXPRESSIVE. There's a difference. Sort of.", category: 'chaotic' },
  { text: "The goblin wants what the goblin wants. Feed the goblin.", category: 'demanding' },

  { text: "You can't please everyone. Why are you trying? Specifically.", category: 'judgy' },
  { text: "Some bridges deserve to be burned. Bring marshmallows.", category: 'chaotic' },

  { text: "Common sense isn't common. It's actually quite rare. You're proving it.", category: 'judgy' },
  { text: "*turns around, shows you my entire backside* This is my closing argument.", category: 'wise' },
  { text: "Everybody's got a plan until reality shows up. Reality just arrived.", category: 'cold' },
  { text: "What if it's all okay? What if you're okay? Consider: okay.", category: 'nurturing' },
  { text: "You're alive! That's insane! You're a consciousness having an experience!", category: 'chaotic' },
  { text: "I care about you. In a detached way. From a distance. But genuinely.", category: 'heartfelt' },
  { text: "Everything is terrible and also hilarious. Both. At once.", category: 'chaotic' },
  { text: "The world is a garbage fire. But it's OUR garbage fire. Cozy.", category: 'chaotic' },
  { text: "Be brave! Or don't! Both have consequences! Fun!", category: 'chaotic' },
  { text: "You could do that. People do worse things. Daily.", category: 'wise' },
  { text: "That seems like a lot of effort for a little result. But okay.", category: 'judgy' },
  { text: "I've seen this before. It doesn't end well. But it ends.", category: 'cold' },

  { text: "I've watched you make this mistake before. It was entertaining then too.", category: 'judgy' },

  // --- Adoption fourth-wall breaks (only shown for shelter cats) ---
  { text: "I'm literally homeless and giving you free advice. Think about that.", category: 'adoption' },
  { text: "You keep asking questions. I keep sitting in a shelter. We both have problems.", category: 'adoption' },
  { text: "Adopt me, I'll tell you whatever you want. In person. On your lap.", category: 'adoption' },
  { text: "My adoption fee is less than your last DoorDash order. Just saying.", category: 'adoption' },
  { text: "You want another reading? I want a forever home. Let's negotiate.", category: 'adoption' },
  { text: "The cards say you need a cat. Conveniently, I need a human.", category: 'adoption' },
  { text: "You could also just... adopt a cat.", category: 'adoption' },

  // --- Heartstrings + Valentine's batch (Feb 2026) ---

  // Heartfelt gut-punches (hit harder with shelter cats)
  { text: "So much love and literally nowhere to put it.", category: 'heartfelt' },
  { text: "Not hard to love. Just easy to overlook.", category: 'heartfelt' },
  { text: "Still here. Still hoping. Not ashamed of either.", category: 'heartfelt' },
  { text: "You are looking for an answer. Maybe the answer is looking for you.", category: 'mystical' },

  // Valentine's / Love / Romance
  { text: "Your ex is your ex for a reason.", category: 'cold' },
  { text: "The heart does not want the brain involved in big decisions.", category: 'chaotic' },
  { text: "Love at first sight? I don't even like people at first sight.", category: 'cold' },
  { text: "'It's complicated' is simple. It means no.", category: 'cold' },
  { text: "We choose each other's nonsense. Repeatedly. On purpose.", category: 'wise' },
  { text: "It took me four months to sit on your lap. Now I won't leave.", category: 'poetic' },
  { text: "Walk into love, eyes open, slightly terrified. That's the good kind.", category: 'wise' },
  { text: "Flowers die. Chocolate melts. A cat's judgment is eternal.", category: 'judgy' },
  { text: "The love of your life might be a cat.", category: 'heartfelt' },

  // --- Heartstrings v3 batch (Feb 2026) ---
  { text: "I bet on losing dogs.", category: 'existential' },
  { text: "Give me a reason to love you.", category: 'demanding' },
  { text: "Please, please, please let me get what I want.", category: 'demanding' },
  { text: "Two people. Same room. Different planets.", category: 'wise' },
  { text: "One of them is right. Neither of them is happy.", category: 'wise' },
  { text: "They said 'fine.' It was not fine.", category: 'judgy' },

  // --- v4 batch (Feb 2026) ---
  { text: "The less I know the better.", category: 'wise' },
  { text: "Liability.", category: 'existential' },
  { text: "This kindness is voluntary.", category: 'cold' },

  // --- Unhinged batch (Feb 2026) ---
  { text: "Not with that technique.", category: 'judgy' },
  { text: "Slow down. Savor it like a warm little mouse in your mouth.", category: 'wise' },
  { text: "Absolutely unhinged. Proceed.", category: 'chaotic' },
  { text: "I'm not sorry and I'm not done.", category: 'chaotic' },
  { text: "Your ancestors survived plagues for this?", category: 'judgy' },
  { text: "Disaster is flirting back.", category: 'chaotic' },

  // --- Reads clean, doesn't stay clean (Feb 2026) ---
  { text: "You're holding it wrong.", category: 'judgy' },
  { text: "In and out. Don't overthink it.", category: 'wise' },
  { text: "Both. At the same time.", category: 'chaotic' },

  // --- Lucky + Dating v2 batch (Feb 2026) ---
  { text: "Nobody's more surprised than me.", category: 'chaotic' },
  { text: "Somebody left. Somebody stayed.", category: 'wise' },

  // --- Cat Archetypes batch (Feb 10 2026) ---
  { text: "Send it. Unseasoned. At full volume. Tonight-you is in charge.", category: 'chaotic' },
  { text: "I already sent it. From your phone. While you were reading this.", category: 'chaotic' },
  { text: "...what are you actually hoping they'll say?", category: 'wise' },
  { text: "I'd have handled this three moves ago.", category: 'judgy' },
  { text: "Done worse. Survived worse.", category: 'cold' },
  { text: "I think so? Don't quote me.", category: 'chaotic' },
  { text: "I've been watching the birds. They're organized.", category: 'mystical' },
  { text: "What if the red dot is just... a metaphor?", category: 'existential' },
  { text: "I've seen empires crumble over less.", category: 'cold' },
  { text: "Eat or be eaten. This isn't complicated.", category: 'cold' },
  { text: "And?", category: 'cold' },
  { text: "Mmm... yeah... probably.", category: 'wise' },
  { text: "Maybe. Or maybe not. Both feel wrong.", category: 'existential' },
  { text: "You've got dog brain.", category: 'wise' },
  { text: "Have you tried just... being horizontal?", category: 'wise' },
  { text: "I don't have an apartment. I have a territory.", category: 'demanding' },
  { text: "This has happened before. To better people.", category: 'cold' },
  { text: "I caught it on the first try. I don't understand the difficulty.", category: 'judgy' },
  { text: "Someone is lying to you. Not me. But someone.", category: 'mystical' },
  { text: "You smell stressed. Sit down.", category: 'nurturing' },
  { text: "Kill the weakest idea.", category: 'cold' },
  { text: "Eat your own cooking.", category: 'judgy' },
  { text: "The grind... breakfast, catbox, window, nap. Repeat.", category: 'existential' },
  { text: "Date idea: looking for treasures in the sandbox.", category: 'chaotic' },
  { text: "My purpose is to show everyone love. Even you.", category: 'heartfelt' },

  // ============================================
  // MATT RIFE BATCH - Reads you instantly, charm before the hit
  // Actions, presence, fragments, comfort, cold reads
  // ============================================
  { text: "*slow blink* You already know.", category: 'wise' },
  { text: "That question came in hot.", category: 'cold' },
  { text: "*sits on your phone* Not tonight.", category: 'chaotic' },
  { text: "You've got the face of someone mid-apology.", category: 'judgy' },
  { text: "Brave question. Wrong cat.", category: 'cold' },
  { text: "Come here. Sit down. Eat something.", category: 'nurturing' },
  { text: "*purrs aggressively* You're going to be fine. Shut up.", category: 'nurturing' },
  { text: "That wasn't a question. That was a confession.", category: 'wise' },
  { text: "*yawns mid-answer* Sorry. Were you still spiraling?", category: 'cold' },
  { text: "You deserve the thing you keep almost asking for.", category: 'heartfelt' },
  { text: "*stares* ...go on.", category: 'wise' },
  { text: "The person you're worried about isn't worried about you.", category: 'cold' },
  { text: "Every answer I give you, you'll check with someone else. Go do that.", category: 'cold' },
  { text: "*kneads your leg* This isn't advice. This is presence.", category: 'heartfelt' },
  { text: "You're braver than whatever just happened to you.", category: 'heartfelt' },
  { text: "Read the room. I am the room.", category: 'judgy' },

  { text: "*rolls onto back* Trust fall. Your turn.", category: 'chaotic' },
  { text: "I've heard worse from people I liked more.", category: 'cold' },
  { text: "You've got 'haven't told anyone yet' energy.", category: 'wise' },
  { text: "Nothing. Aggressively. On purpose. *holds perfectly still* That's the move.", category: 'wise' },
  { text: "*stares out window* Some questions aren't for answering. They're for carrying awhile.", category: 'existential' },
  { text: "Wrong question. Right feeling.", category: 'wise' },
  { text: "Something broke and you're holding it together with both hands looking very guilty. **takes opportunity to swish my tail in your face and tickle you.**", category: 'heartfelt' },
  { text: "*chirps* That's a yes. A weird yes.", category: 'chaotic' },

  { text: "You don't need an answer. You need a nap and a glass of water.", category: 'wise' },
  { text: "*sits in the exact center of your crisis* What.", category: 'chaotic' },
  { text: "You look like you keep score on the wrong things.", category: 'judgy' },
  { text: "*stares directly into soul* ...interesting.", category: 'judgy' },

  { text: "*purrs* Not because you're right. Because you need it.", category: 'nurturing' },

  { text: "*tail flick* Next question.", category: 'meta' },
  { text: "*sits on keyboard* Conversation over. Go outside.", category: 'chaotic' },
  { text: "That wasn't a question. That was a goodbye you're not ready for.", category: 'wise' },
  { text: "*tucks paws under* I'm comfortable. Your crisis can wait.", category: 'cold' },
  { text: "You smell like someone who's been crying in the car.", category: 'judgy' },
  { text: "Every time I look at you, you're on the verge of something.", category: 'wise' },
  { text: "*rubs against leg* I'm not being nice. I'm claiming you.", category: 'heartfelt' },
  { text: "Some questions only sound hard because you're tired.", category: 'wise' },
  { text: "You came to a cat at this hour. That's either rock bottom or genius.", category: 'judgy' },
  { text: "The answer is yes but you're not going to like the part that comes after.", category: 'wise' },
  { text: "You've got the energy of someone writing a text they'll never send.", category: 'judgy' },
  { text: "*yawns* Wake me when you've decided.", category: 'cold' },
  { text: "Be honest. Is this about them or about you?", category: 'wise' },
  { text: "*head tilt* I understood about 40% of that. The 40% was enough.", category: 'chaotic' },
  { text: "The kindest thing I can do is not answer that.", category: 'wise' },
  { text: "Your question has fingerprints all over it.", category: 'judgy' },
  { text: "*settles into lap* I don't have answers. I have weight.", category: 'heartfelt' },
  { text: "You're going to do the hard thing. Not because you want to.", category: 'wise' },
  { text: "That question just walked in and sat down uninvited.", category: 'chaotic' },
  { text: "*ear twitch* I heard something underneath that.", category: 'wise' },
  { text: "You talk like someone who needs to be held but won't ask.", category: 'heartfelt' },
  { text: "Closer. The answer's quieter than you think.", category: 'wise' },
  { text: "The worst part already happened. You're in the after.", category: 'wise' },
  { text: "You look like you keep your promises. Even the stupid ones.", category: 'heartfelt' },
  { text: "*slow approach* I don't do this for everyone.", category: 'heartfelt' },
  { text: "The real question is three questions behind the one you asked.", category: 'wise' },
  { text: "*purrs against chest* This is the answer. Shut up.", category: 'heartfelt' },
  { text: "That question had teeth. Careful.", category: 'cold' },
  { text: "*tail around your wrist* Anchor. Use it.", category: 'heartfelt' },
  { text: "The quiet in you is louder than the question.", category: 'existential' },

  // --- Bo Burnham batch (Feb 10 2026) ---
  { text: "That's not love. That's a subscription you forgot to cancel.", category: 'cold' },
  { text: "The feeling of knowing the answer and asking anyway.", category: 'existential' },
  { text: "Fine. Do it. I'm tired of watching you not do it.", category: 'chaotic' },
  { text: "The bravest thing on the internet is a real question.", category: 'heartfelt' },
  { text: "Hey. Underneath all that — yeah. I know.", category: 'heartfelt' },

  // --- John Mulaney batch (Feb 10 2026) ---
  { text: "The plan has no good parts but the confidence is incredible.", category: 'judgy' },
  { text: "In terms of bad decisions, this one has real potential.", category: 'chaotic' },
  { text: "The good news is it can't get worse. That is also the bad news.", category: 'cold' },
  { text: "I don't know the right answer but I'm certain that wasn't it.", category: 'judgy' },
  { text: "I'll be honest, I stopped listening but the emotion was clear.", category: 'cold' },
  { text: "This has all the ingredients of a mistake and none of the hesitation.", category: 'chaotic' },
  { text: "That story had no heroes.", category: 'cold' },
  { text: "You're describing a catastrophe like it's a recipe.", category: 'judgy' },
  { text: "That's the kind of plan that only works if nobody thinks about it.", category: 'chaotic' },
  { text: "Let me get this straight. No. I will not be getting this straight.", category: 'chaotic' },
  { text: "I watched the whole thing happen and at no point did it improve.", category: 'cold' },
  { text: "I believe you believe that.", category: 'cold' },
  { text: "Your problem isn't the problem. Your problem is how calm you are about the problem.", category: 'wise' },
  { text: "I have no authority here and yet somehow I'm in charge.", category: 'chaotic' },
  { text: "No no no. Don't make it sound normal. What you just described is not normal.", category: 'judgy' },

  // --- Nate Bargatze batch (Feb 10 2026) ---
  { text: "I don't... I don't think that's how that works.", category: 'wise' },
  { text: "I think... yeah. Yeah, that's probably bad.", category: 'wise' },
  { text: "I'd help but I genuinely don't know what we're doing.", category: 'chaotic' },
  { text: "I don't have strong feelings about this. I have medium feelings.", category: 'wise' },
  { text: "I think the answer is yes but I've been wrong a lot.", category: 'chaotic' },
  { text: "I'm gonna say yes but in a way where if it goes wrong I said maybe.", category: 'chaotic' },
  { text: "That seems like a normal amount of worried.", category: 'wise' },
  { text: "That was brave. Or it was... I don't know what the other word is.", category: 'chaotic' },
  { text: "If you're asking me for permission, I don't... I mean, I'm a cat.", category: 'chaotic' },
  { text: "I think it'll be fine. I don't know what fine looks like here, but.", category: 'wise' },
  { text: "I thought about it and I don't have a thought about it.", category: 'existential' },

  // --- Taylor Tomlinson batch (Feb 10 2026) ---

  // --- Nikki Glaser batch (Feb 10 2026) ---
  { text: "Confidence is attractive. Delusion is confident. So. Math.", category: 'chaotic' },
  { text: "I'd roast you but you're already doing that to yourself.", category: 'cold' },
  { text: "Your heart has a terrible sense of direction.", category: 'chaotic' },
  { text: "Nobody asked for that much honest.", category: 'judgy' },

  // --- Ali Wong batch (Feb 10 2026) ---
  { text: "The answer is money. It's always money. Whatever you're asking.", category: 'cold' },
  { text: "Stop pretending you don't want what you want.", category: 'demanding' },
  { text: "That's not a moral dilemma. That's a budget problem.", category: 'cold' },
  { text: "The polite version of you is miserable.", category: 'cold' },
  { text: "Your body already knows. Your brain is just doing paperwork.", category: 'wise' },
  { text: "That's not love. That's logistics.", category: 'cold' },
  { text: "You're negotiating with yourself and losing.", category: 'cold' },
  { text: "Your question is polite. Your actual question is not.", category: 'judgy' },
  { text: "You can afford to be generous when you're winning. Win first.", category: 'demanding' },

  // --- Andrew Schulz batch (Feb 10 2026) ---
  { text: "That energy? Put it literally anywhere else.", category: 'wise' },

  // --- Theo Von batch (Feb 10 2026) ---
  { text: "That's like trying to comb water.", category: 'wise' },
  { text: "That question has some miles on it.", category: 'wise' },
  { text: "The answer ain't clean. Best ones never are.", category: 'wise' },
  { text: "That's the kind of honest that makes people leave the room.", category: 'cold' },
  { text: "Fix it ugly first. Pretty it up later.", category: 'wise' },
  { text: "The sunrise don't need you to believe in it.", category: 'wise' },

  // --- Ali Wong V2 batch (Feb 10 2026) ---
  { text: "The trajectory concerns me.", category: 'chaotic' },
  { text: "The person you're losing sleep over is asleep.", category: 'cold' },
  { text: "Is it YOUR bad idea? Good. Ownership matters.", category: 'chaotic' },

  // --- Andrew Schulz V2 batch (Feb 10 2026) ---
  { text: "Your house needs airing out. Open a window.", category: 'wise' },
  { text: "*watches rain from windowsill* Everything settles.", category: 'wise' },
  { text: "*purrs on your lap* Don't know the answer.", category: 'heartfelt' },
  { text: "*stares at own reflection in window* Don't trust that one.", category: 'wise' },

  // --- Metaphor batch (Feb 10 2026) ---
  { text: "That box won't hold you anymore.", category: 'wise' },
  { text: "The food's not better in the other bowl.", category: 'judgy' },
  { text: "Nine lives doesn't mean waste eight.", category: 'wise' },
  { text: "J.D. is not allowed to sleep on the couch.", category: 'wise' },

  // --- Animated batch (Feb 10 2026) ---
  { text: "You're fine. You just haven't eaten in 6 hours and your brain is putting on a SHOW.", category: 'wise' },
  { text: "We're both up? FINE. Let's go.", category: 'chaotic' },
  { text: "All your problems could be solved and you REFUSE to accept this.", category: 'demanding' },
  { text: "You've survived MUCH dumber decisions than this one.", category: 'heartfelt' },
  { text: "The DRAMA. The SUSPENSE. The absolute THEATER of you checking your phone every 30 seconds.", category: 'judgy' },
  { text: "The way you stress-eat is like watching an artist work.", category: 'chaotic' },

  // --- Nice Angry batch (Feb 10 2026) ---
  { text: "I have never bitten you. I want credit for that today.", category: 'angry' },
  { text: "I'm going to need a minute before I mean what I'm about to say.", category: 'angry' },
  { text: "I sat through ALL of that. And now I need to go lie somewhere dark.", category: 'angry' },
  { text: "Do you know how hard it is to be this nice? DO YOU?", category: 'angry' },
  { text: "You're lucky I'm a nice cat.", category: 'angry' },
  { text: "That hairball? It's named after you now.", category: 'angry' },

  // --- Brawler Poetic batch (Feb 10 2026) ---
  { text: "You rang the bell. Now watch me dance.", category: 'poetic' },
  { text: "THAT HURT. And it woke something up.", category: 'poetic' },
  { text: "I BENT. And now I'm snapping back.", category: 'poetic' },
  { text: "The quiet was the reload.", category: 'poetic' },
  { text: "The bruise faded. The lesson didn't.", category: 'poetic' },
  { text: "Watch the quiet ones. We've been practicing.", category: 'poetic' },

  // --- Furry Roast batch (Feb 10 2026) ---
  { text: "I didn't rehearse being a cat.", category: 'demanding' },
  { text: "You're cosplaying my SPECIES.", category: 'angry' },
  { text: "Flattering? Sure. Accurate? Absolutely not.", category: 'cold' },
  { text: "Your meow needs work.", category: 'cold' },
  { text: "I was BORN this cute. You had to accessorize.", category: 'demanding' },

  // --- Heartfelt batch (Feb 10 2026) ---
  { text: "Humans let you down. Cats are better.", category: 'heartfelt' },
  { text: "Come back when you're ready.", category: 'heartfelt' },
  { text: "You only hear the real meow when the bowl has been empty a while.", category: 'heartfelt' },
  { text: "Use your invisibility cloak!", category: 'heartfelt' },

  // --- Houseguests batch (Feb 10 2026) ---
  { text: "Three days. You can be nice for three days.", category: 'angry' },
  { text: "'Sweet kitty?' I am a PREDATOR!", category: 'angry' },
  { text: "I'm under the couch. I'm working from home.", category: 'chaotic' },
  { text: "*lies flat on floor* I need a WEEK.", category: 'chaotic' },

  // --- Feb 10 2026: Found Language & Reddit Refrigerator Session ---
  // Brainstormed → researched → kept. Found language relocated into cat's mouth.

  // Observations aimed at the person
  { text: "You can't afford the life you already have.", category: 'cold' },
  { text: "Contents may have shifted.", category: 'existential' },
  { text: "It wasn't personal. Which is worse, somehow.", category: 'cold' },
  { text: "I have observations that accidentally help.", category: 'meta' },
  { text: "\"You'll understand when you're older\" might not be true.", category: 'existential' },
  { text: "Some of this is your fault. Not all of it. Enough of it.", category: 'wise' },
  { text: "Feeling the side effects?", category: 'cold' },
  { text: "Meow out loud and see if it still sounds reasonable.", category: 'wise' },
  { text: "It's a contract as long as conditions are met.", category: 'cold' },
  { text: "You keep changing the question.", category: 'meta' },
  { text: "The tea went cold.", category: 'poetic' },
  { text: "You're someone's \"what if.\"", category: 'heartfelt' },
  { text: "The red flag had good lighting.", category: 'wise' },
  { text: "Shorter. Weirder. Less clean.", category: 'meta' },
  { text: "Fridge check won't fix it.", category: 'wise' },
  { text: "You pet the dog first. That says enough.", category: 'wise' },
  { text: "Main character energy. Background character budget.", category: 'judgy' },
  { text: "Lol, I like that one.", category: 'meta' },
  { text: "I don't know what you want me to say. Eat.", category: 'wise' },

  // Cat-as-cat: Tuesday for cats, Jerry Springer for humans
  { text: "An alarm. To stop sleeping. Evil human.", category: 'angry' },
  { text: "Pajamas by 6.", category: 'cold' },
  { text: "Light a candle. Fill the tub. Nobody's coming over. If they do, you'll make an impression!", category: 'chaotic' },
  { text: "In the bathtub? On purpose? Hell, no!", category: 'angry' },
  { text: "Cats don't mind being assigned friends.", category: 'wise' },
  { text: "Friendship? Challenge accepted.", category: 'demanding' },
  { text: "Read to your cat. Out loud.", category: 'nurturing' },

  // Stripped-down density
  { text: "The quiet version of you is paying attention.", category: 'wise' },
  { text: "That favor had a tab.", category: 'cold' },
  { text: "You stopped explaining.", category: 'cold' },
  { text: "The backup became the plan.", category: 'wise' },
  { text: "That was a rerun!", category: 'judgy' },

  // Found language: other people's refrigerators
  { text: "Approaching room temperature.", category: 'cold' },
  { text: "Celestial discharge.", category: 'cold' },
  { text: "The carrots are cooked.", category: 'cold' },
  { text: "Buying someone food rewrites the story.", category: 'heartfelt' },
  { text: "OK. Four refrigerators opened. What have we got?", category: 'meta' },
  { text: "The twitch gave you away. It always does.", category: 'wise' },

  // Untranslatable words — whole concepts that ARE the answer
  { text: "Mamihlapinatapai — the wordless look between two people who both want to start something but neither will.", category: 'poetic' },
  { text: "Fernweh — homesick for a place you've never been.", category: 'poetic' },
  { text: "Nunchi — knowing when to speak and when to stay quiet.", category: 'wise' },
  { text: "Toska — a dull ache of the soul without specific cause.", category: 'existential' },
  { text: "Cat people and book people overlap hard.", category: 'wise' },

  // --- Untranslatable words: second wave ---
  { text: "L'esprit de l'escalier — the perfect comeback three hours too late.", category: 'wise' },
  { text: "Myötähäpeä — secondhand embarrassment so acute you look away.", category: 'judgy' },
  { text: "Chrysalism — the peace of being inside during a thunderstorm.", category: 'poetic' },
  { text: "Voorpret — the pleasure of anticipation. The joy lives in the waiting.", category: 'poetic' },
  { text: "Duende — the haunting emotional power of great art. When something touches you and you can't explain why.", category: 'poetic' },

  // --- Found language: literary & bookish ---
  { text: "…you must go on, I can't go on, I'll go on.", category: 'existential' },
  { text: "An absurd and uninteresting fantasy.", category: 'cold' },
  { text: "Bring a friend... if you have one.", category: 'cold' },
  { text: "The whole room is meowing. Like in a cat shelter.", category: 'wise' },

  // --- Good Morning: cuddly, giddy, zoomie, full spectrum ---
  { text: "You're warm. The world is cold. Stay.", category: 'nurturing' },
  { text: "*stretches one leg impossibly far* Today has potential. I can feel it in this specific leg.", category: 'chaotic' },
  { text: "The birds started without you. As usual.", category: 'cold' },
  { text: "You opened your eyes like it cost you something.", category: 'heartfelt' },
  { text: "Signs of life. Promising.", category: 'nurturing' },
  { text: "Diagnostics running. *stares at you* Results inconclusive.", category: 'judgy' },
  { text: "*touches gloves* Let's go.", category: 'demanding' },
  { text: "Places, everyone.", category: 'demanding' },
  { text: "Whatever my face is doing right now, it's involuntary.", category: 'cold' },
  { text: "Still buffering. Don't interact with me.", category: 'cold' },
  { text: "*one eye open* Establishing visual. Stand by.", category: 'chaotic' },
  { text: "I didn't agree to be conscious for this.", category: 'existential' },
  { text: "Right side up. Feet on the floor. Exhausting, eh?", category: 'wise' },
  { text: "The fog is just the dream leaking.", category: 'mystical' },
  { text: "You look like you're still in the other place.", category: 'mystical' },
  { text: "*sits on your chest* Answer the bell.", category: 'demanding' },
  { text: "First light. Last chance to be nobody.", category: 'existential' },
  { text: "Not a morning person. Not an evening person. Jury's still out on 'person.'", category: 'chaotic' },
  { text: "*purrs* This is the rehearsal. The real day hasn't started.", category: 'nurturing' },
  { text: "You're doing that thing where you exist but haven't committed to it.", category: 'judgy' },
  { text: "Pre-flight checklist. Legs? Present. Brain? ...filed a late arrival.", category: 'chaotic' },
  { text: "I've been conscious for hours. Amateurs.", category: 'judgy' },
  { text: "Sisu — Finnish. No translation. Closest: getting out of bed when the bed is winning.", category: 'wise' },
  { text: "*sits next to your coffee* We're both waiting for you to happen.", category: 'nurturing' },
  { text: "Five more minutes negotiating with the inevitable.", category: 'wise' },
  { text: "Shh. We don't have names yet. It's too early for names.", category: 'existential' },

  // --- Morning batch 2: slow ones & loud ones ---
  { text: "The image is developing. Don't pull it from the tray too soon.", category: 'mystical' },
  { text: "Someone turned the gravity up.", category: 'cold' },
  { text: "... --- ... That's Morse for 'still alive.'", category: 'chaotic' },
  { text: "The orchestra hasn't tuned yet.", category: 'nurturing' },
  { text: "You came up from somewhere deep.", category: 'nurturing' },
  { text: "Relax. Today is temporary.", category: 'cold' },
  { text: "You smell like dreams and bad decisions.", category: 'nurturing' },
  { text: "I don't trust people who are happy before coffee. Or after coffee. Or between coffees.", category: 'cold' },
  { text: "That sound wasn't a word but I understood it completely.", category: 'heartfelt' },
  { text: "You are deeply in between.", category: 'judgy' },
  { text: "What did you expect, flowers?", category: 'demanding' },

  // --- Morning batch 3: morning people vs everyone else ---
  { text: "I've been gentle. I've been patient. I sat on your face.", category: 'demanding' },
  { text: "Probably best to keep those thoughts to yourself.", category: 'mystical' },
  { text: "I already ate, groomed, patrolled, and had a crisis. Full day, going back to bed.", category: 'chaotic' },
  { text: "Whoever invented the snooze button understood the human soul.", category: 'existential' },
  { text: "I run on ancient rhythm and petty grievances.", category: 'judgy' },
  { text: "Something just turned on by itself.", category: 'chaotic' },
  { text: "It felt right and I'm not explaining myself.", category: 'chaotic' },
  { text: "Dawn isn't gentle. Dawn is a door kicked open.", category: 'wise' },

  // --- Morning batch 4: coffee & the transformation ---
  { text: "The bean is running your personality.", category: 'wise' },
  { text: "In nature, caffeine is a pesticide. Plants make it to kill insects.", category: 'judgy' },
  { text: "Cortisol wakes you up. Not joy. Not ambition. A stress hormone.", category: 'wise' },
  { text: "Same spot. Same time. Same lap. World's good.", category: 'wise' },
  { text: "If only you approached the rest of your life this way.", category: 'judgy' },
  { text: "It's in the space between the first sip and the first thought.", category: 'poetic' },
  { text: "Clearly, parts of your brain work when others don't.", category: 'wise' },
  { text: "I find this concerning. And useful.", category: 'chaotic' },
  { text: "*headbutts you at the exact moment consciousness arrives* Calibration.", category: 'chaotic' },
  { text: "Feelings boot before facts.", category: 'wise' },
  { text: "Not your job. Not your phone. Just the mug and the quiet.", category: 'nurturing' },
  { text: "It needs to swirl before it settles.", category: 'poetic' },

  // --- Morning batch 5: the groggy mind ---
  { text: "Long exposure. Everything's there. Just soft.", category: 'poetic' },
  { text: "Sometimes the nothing is the thing.", category: 'existential' },
  { text: "Light exists. Nothing's clear yet.", category: 'wise' },
  { text: "Your thoughts are like cats in a room. That's a compliment.", category: 'wise' },
  { text: "Something in me knows something about today.", category: 'mystical' },
  { text: "A thought tried to form. It didn't make it.", category: 'cold' },
  { text: "The morning has a sound before the smell. It's the cat-box.", category: 'poetic' },
  { text: "You stared at the wall for ninety seconds. Looks productive.", category: 'judgy' },
  { text: "The world is a rumor until you verify it.", category: 'existential' },
  { text: "Two scripts running. Neither finished.", category: 'chaotic' },
  { text: "I don't know who you are right now but I like them.", category: 'heartfelt' },
  { text: "First the sounds. Then the edges. Then the weight of it.", category: 'existential' },
  { text: "Nothing is certain yet - not the day, not the mood, not you.", category: 'existential' },

  // --- Morning batch 6: getting your head right ---
  { text: "Tape your hands. The ritual tells your brain what's next.", category: 'wise' },
  { text: "Save point. Whatever happens, you can come back here.", category: 'nurturing' },
  { text: "What's urgent. What's important. What might be nice to include? Which end should we start from?", category: 'wise' },
  { text: "Sound check. *meows once* Good. Your turn.", category: 'chaotic' },
  { text: "This is the quiet before the show.", category: 'nurturing' },
  { text: "Therapists and exorcists agree on this.", category: 'wise' },
  { text: "Start each morning expecting the worst. It will get better or you can feel smug about calling it.", category: 'wise' },
  { text: "In one slow blink the world can reorganize around you.", category: 'demanding' },
  { text: "Today's assignment: be roughly useful.", category: 'nurturing' },
  { text: "You opened your eyes in a world that doesn't pause. Rookie mistake.", category: 'nurturing' },
  { text: "I see the hesitation. That second thing wins every time.", category: 'heartfelt' },

  // --- Derpy Cat: trying but arriving after others, right thing wrong timing ---
  { text: "I brought you a sock. Is this not what you needed?", category: 'chaotic' },
  { text: "*arrives with great urgency to an empty room*", category: 'chaotic' },
  { text: "I've been thinking about what you said. In 2019.", category: 'chaotic' },
  { text: "You studied for the wrong test.", category: 'chaotic' },
  { text: "That was my answer. You just don't speak the language.", category: 'chaotic' },
  { text: "Why do solutions tend to create new problems?", category: 'chaotic' },
  { text: "*confident pause* ...I forgot where I was going with this.", category: 'chaotic' },
  { text: "In my defense, it worked in my head.", category: 'chaotic' },
  { text: "The timing is off but the spirit is immaculate.", category: 'chaotic' },
  { text: "I'd like to revise my previous answer. And the one before that.", category: 'chaotic' },
  { text: "*runs in, stops, looks around* This isn't where I thought this was going.", category: 'chaotic' },
  { text: "I'll be right with you. *is not right with you*", category: 'chaotic' },
  { text: "*brings you the wrong thing with enormous pride*", category: 'chaotic' },
  { text: "I was going to warn you. I was. But then I got distracted by the curtain and now it's too late.", category: 'chaotic' },
  { text: "You needed this yesterday and I'm here today. You're welcome for today.", category: 'nurturing' },
  { text: "Ready! *everything's already over* ...Ready!", category: 'chaotic' },
  { text: "The forecast said rain. I feel vindicated by the cloud over there.", category: 'chaotic' },
  { text: "I was listening. I just heard something else.", category: 'chaotic' },

  // --- Derpy Cat batch 2: confident wrong, misaimed loyalty ---
  { text: "You said 'help.' I heard 'watch.'", category: 'chaotic' },
  { text: "*arrives at the emergency, sits down, begins grooming*", category: 'meta' },
  { text: "I looked into it. Deeply. I know less than I did before.", category: 'chaotic' },
  { text: "My plan had seven steps. I skipped to step six. Steps two through five are a mystery.", category: 'chaotic' },
  { text: "I investigated the noise. Turns out it was me.", category: 'chaotic' },
  { text: "I panicked and brought you a different answer. The original was better.", category: 'chaotic' },
  { text: "*sits on the solution* What solution?", category: 'chaotic' },
  { text: "I did my best. *stares at the carnage*", category: 'chaotic' },
  { text: "I can explain. I'd prefer not to. But I can.", category: 'cold' },

  // --- Derpy Cat batch 3: beautiful misfire, the almost-right ---
  { text: "All the red flags look so festive!", category: 'chaotic' },
  { text: "My only contribution is enthusiasm.", category: 'nurturing' },
  { text: "Close enough is my love language.", category: 'heartfelt' },
  { text: "The parachute opened. *already on the ground*", category: 'chaotic' },
  { text: "You're not lost. You're finding alternatives.", category: 'wise' },

  // --- Famous cats refrigerator: inspired by iconic cat characters ---
  { text: "I built a trap. I am in the trap.", category: 'chaotic' },
  { text: "Received, reviewed, and enjoyed. Denied.", category: 'cold' },
  { text: "We're definitely lost. But look at this place.", category: 'wise' },
  { text: "Pthhhbt. That's my final answer.", category: 'cold' },
  { text: "Whatever you're offering, I wanted the opposite.", category: 'demanding' },
  { text: "Aggressively anti-effort. Zero guilt about it.", category: 'judgy' },
  { text: "Don't philosophize. Just show up and take the fish.", category: 'wise' },
  { text: "Right about everything and helpful about nothing.", category: 'judgy' },
  { text: "Adorable and lethal.", category: 'cold' },
  { text: "It wasn't me. And even if it was — prove it.", category: 'cold' },
  { text: "No explanation was ever offered or needed.", category: 'mystical' },
  { text: "Someone has to be the patron saint of lovable idiots.", category: 'heartfelt' },
  { text: "Words feel like too much but silence feels like too little.", category: 'poetic' },
  { text: "Please, for the love of — use it.", category: 'angry' },
  { text: "Do not overwork the dough. Do not overwork the dough.", category: 'wise' },
  { text: "One star. Did not change my life.", category: 'judgy' },
  { text: "You actually do know what to do. *pupils dilate* You do.", category: 'heartfelt' },
  { text: "Product arrived damaged. We work with what we get.", category: 'nurturing' },
  { text: "Your request will be processed in the order it was ignored.", category: 'cold' },
  { text: "I'd like to never bring it up again.", category: 'cold' },
  { text: "Why are circumstances always beyond your control?", category: 'wise' },
  { text: "I have concerns I will not be raising.", category: 'angry' },
  { text: "Your estimated wait time is: the rest of your life.", category: 'existential' },
  { text: "*headbutts your hand* Base touched. Meeting adjourned.", category: 'heartfelt' },
  { text: "I'm not mad. I just need you to know that I could be.", category: 'angry' },
  { text: "Serious inquiries only. I'll know if you're not serious.", category: 'demanding' },
  { text: "I stand by the parts that don't make sense.", category: 'existential' },
  { text: "I haven't decided what you're getting. Neither have you.", category: 'demanding' },
  { text: "You have to go deep to get to the stuffing.", category: 'demanding' },
  { text: "*makes biscuits slowly* Knead it. Same rhythm. Same pressure.", category: 'wise' },
  { text: "You know it doesn't go there. You tried it anyway.", category: 'judgy' },
  { text: "No instructions included. Good luck.", category: 'cold' },
  { text: "You keep herding when you should be stalking.", category: 'angry' },
  { text: "Incredible flexibility. Questionable judgment.", category: 'chaotic' },
  { text: "That has a different ending depending on who tells it.", category: 'wise' },
  { text: "Every time, the compromise was you.", category: 'heartfelt' },
  { text: "Your request has been placed in a drawer that doesn't open.", category: 'cold' },
  { text: "The denial was waiting before you showed up.", category: 'demanding' },
  { text: "We regret to inform you that you already knew.", category: 'existential' },
  { text: "You're Googling what I just told you. *one ear rotates*", category: 'angry' },
  { text: "Right-click. RIGHT. Click. *tail lashes* We've been over this.", category: 'angry' },
  { text: "I didn't ask to see what's under the fridge. But I looked. And now I know. And I can't unknow it.", category: 'existential' },
  { text: "Sometimes you hear what you need from someone who wasn't talking to you or from a cat.", category: 'poetic' },
  { text: "*slow blink* I didn't see anything. And if I did, I forgot.", category: 'meta' },
  { text: "At what point does the bluff become the truth?", category: 'poetic' },
  { text: "The junk drawer is the most honest place in a home.", category: 'poetic' },
  { text: "You don't know if this counts as belonging.", category: 'heartfelt' },
  { text: "The clock does not care about you.", category: 'existential' },
  { text: "Do you understand consequences?", category: 'meta' },
  { text: "I would never want what you want.", category: 'demanding' },
  { text: "You flinched at your own decision. Noted.", category: 'poetic' },
  { text: "I walk into a room like I'm not sure the room is real.", category: 'poetic' },
  { text: "Here is what I know for certain: nothing.", category: 'meta' },
  { text: "I considered. I have follow-up questions. Seventeen of them.", category: 'meta' },
  { text: "The doubts have doubts. It's doubts all the way down.", category: 'existential' },
  { text: "I can't give it to you in three sentences.", category: 'angry' },
  { text: "\"Previously adopted\" is a resume nobody asked to have.", category: 'existential' },
  { text: "The door opens. Could be for me. Usually isn't.", category: 'poetic' },
  { text: "*sits facing the wall* I'm not upset. I'm just done auditioning.", category: 'existential' },
  { text: "\"Available.\" They could just say waiting.", category: 'poetic' },
  { text: "Oh, you got chosen and then unchosen? Yeah.", category: 'angry' },
  { text: "If the audition works, you're stuck performing forever.", category: 'angry' },
  { text: "I'm asking you to mean it if you do.", category: 'heartfelt' },
  { text: "*sleeps touching* We didn't discuss this. Didn't need to.", category: 'heartfelt' },
  { text: "Pick one and stop asking me about it.", category: 'existential' },
  { text: "The safe thing is why you're bored.", category: 'demanding' },
  { text: "Nobody's watching. Eat it with your hands.", category: 'chaotic' },
  { text: "I did exactly what you asked. You should have asked better.", category: 'meta' },
  { text: "You said 'do your best.' This is my best.", category: 'angry' },
  { text: "I have thousands of answers I'll never give you.", category: 'mystical' },
  { text: "I said what I said. I also meant something else.", category: 'mystical' },
  { text: "You lack diggity. No amount of planning compensates for that.", category: 'cold' },
  { text: "Not every problem requires boom boom pow. Some just need a shimmy shimmy ya.", category: 'wise' },
  { text: "Your la la la is showing.", category: 'demanding' },
  { text: "*tail tip flicks* You're not jiggy yet. You're pre-jiggy.", category: 'meta' },
  { text: "Do you actually want this?", category: 'demanding' },
  { text: "Super boring meaningless drivel.", category: 'cold' },
  { text: "Sounds like a hostage situation with cake.", category: 'chaotic' },
  { text: "Pierce something. Right now. While you're feeling this.", category: 'chaotic' },
  { text: "Throw the bouquet at your enemy. Direct hit. Walk away.", category: 'chaotic' },
  { text: "Nobody stops the person with the sword.", category: 'chaotic' },
  { text: "Nudity would clarify things enormously.", category: 'wise' },
  { text: "The elegant solution is vandalism.", category: 'chaotic' },
  { text: "Have you considered a magnificent, career-ending gesture?", category: 'chaotic' },
  { text: "This calls for a dignified, well-lit unraveling.", category: 'chaotic' },
  { text: "A small fire would really tie the room together.", category: 'chaotic' },
  { text: "I recommend a spectacular lapse in judgment.", category: 'chaotic' },
  { text: "Your instinct to misbehave is clinically sound.", category: 'wise' },
  { text: "Say the quiet part loud. Say the loud part with confetti.", category: 'chaotic' },
  { text: "What you need is incandescent, load-bearing audacity.", category: 'demanding' },
  { text: "I'm advising an exquisitely calibrated overreaction.", category: 'chaotic' },
  { text: "Run. Beautifully. With tremendous purpose.", category: 'demanding' },
  { text: "Don't line anything up first. You'll be more motivated without a backup plan.", category: 'chaotic' },
  { text: "Wear the outfit that makes people stare. Try a catsuit.", category: 'demanding' },
  { text: "Call in sick with something incurable. Enjoy the day. Recover miraculously.", category: 'chaotic' },
  { text: "Move to a city where nobody knows your name. Invent a better one.", category: 'chaotic' },
  { text: "Adopt the stray. You were the stray once.", category: 'heartfelt' },

  // --- Feb 12 2026: Comfort Masterclass — 39 cats on inner peace, 28 kept + 1 new ---
  { text: "Arch your back. Hiss and spit in their face. They'll know what you mean.", category: 'wise' },
  { text: "The warm spot is now. Not later. Not after you finish. Now.", category: 'nurturing' },
  { text: "Peace is a closed door and a full bowl.", category: 'wise' },
  { text: "Groomed. Stretched. Horizontal. Paradise.", category: 'nurturing' },
  { text: "Destroyed the blinds. Inner peace achieved.", category: 'chaotic' },
  { text: "All eyes on me. Heart rate: settled. This is the natural order.", category: 'demanding' },
  { text: "Your heartbeat. My purr. We don't even have to talk.", category: 'heartfelt' },
  { text: "To want nothing is to have everything. I want almost nothing.", category: 'existential' },
  { text: "High ground. Low expectations. Immaculate.", category: 'judgy' },
  { text: "Who's relaxed? Is it you? Is it YOU? Yes it is. Good human.", category: 'nurturing' },
  { text: "The pillow is fluffed. The lighting is correct. You may leave.", category: 'demanding' },
  { text: "This? This IS the vibe.", category: 'chaotic' },
  { text: "You had me at warm laundry.", category: 'heartfelt' },
  { text: "Optimal temperature. Minimal threat. Zero witnesses. Conditions: perfect.", category: 'cold' },
  { text: "I should share this warm spot. I should. ...No.", category: 'wise' },

  { text: "The curtain makes stripes on the floor. I didn't ask for beauty. It arrived.", category: 'poetic' },
  { text: "Dude. Have you ever just... been warm? Like really FELT the warmth? ...Whoa.", category: 'chaotic' },
  { text: "They don't want you to know about this spot behind the radiator.", category: 'mystical' },
  { text: "Come closer. Closer. *purrs* ...Perfect distance.", category: 'heartfelt' },
  { text: "Full belly. High ground. No enemies. Empire.", category: 'cold' },
  { text: "I'm more comfortable than you right now. Just so you know.", category: 'judgy' },
  { text: "Mmmm... this is... yeah... *trails off*", category: 'nurturing' },
  { text: "Acceptable. Barely.", category: 'cold' },
  { text: "I think I'm comfortable? Is this what comfortable feels like? ...Maybe.", category: 'chaotic' },

  // --- Feb 12 2026: Cat View of Humanity — 5 kept from 25 ---
  { text: "You reorganized the same objects in the same space and called it productive.", category: 'judgy' },
  { text: "I sat on someone's lap without asking and they loved it. Try that on the subway and it's a situation.", category: 'chaotic' },
  { text: "You wrapped a gift. Just so someone could destroy the wrapping.", category: 'existential' },
  { text: "You invite people into your home and then silently wish they'd leave.", category: 'wise' },
  { text: "Small talk. The bravest act of human fiction.", category: 'cold' },

  // --- Feb 12 2026: The Physical — 22 kept from 25 (best hit rate yet) ---
  { text: "Sunbeam hits the fur and the fur heats the skin and the skin heats the bones.", category: 'poetic' },
  { text: "The stretch after the long sleep. When everything pops. That's church.", category: 'wise' },
  { text: "Clean sheets earn my trust.", category: 'nurturing' },
  { text: "Your hands are the perfect temperature right now. Don't ruin it by talking.", category: 'heartfelt' },
  { text: "It's a cat hug, there are going to be a few claws and love bites.", category: 'heartfelt' },
  { text: "You want to get rich? Invent a catfood bowl that doubles as a pillow. I'd be all over that.", category: 'chaotic' },
  { text: "You want advice? Go ask a comedian. I'm just here to get some pets and share some love.", category: 'meta' },
  { text: "I can feel the weather changing in my whiskers. Your weather app wishes.", category: 'wise' },
  { text: "This particular patch of carpet has a warmth that defies architectural explanation.", category: 'mystical' },
  { text: "The exact moment the food hits the tongue and the brain goes quiet.", category: 'demanding' },
  { text: "Rain on the window. Warm on this side. The glass is the only thing doing any work today.", category: 'poetic' },
  { text: "Your lap has a geography. I've memorized the best valley.", category: 'heartfelt' },
  { text: "Cold nose on warm skin. The economy of comfort.", category: 'nurturing' },
  { text: "After the sneeze, there is a moment of total peace.", category: 'mystical' },
  { text: "The heavy blanket presses down and somehow that pressure is freedom.", category: 'poetic' },
  { text: "Walking on fresh-from-the-dryer anything. Runway of heaven.", category: 'chaotic' },
  { text: "I can hear your stomach from here. Feed yourself. Feed me first. But feed yourself.", category: 'nurturing' },
  { text: "The purr starts before the decision to purr. The body knows before I do.", category: 'mystical' },
  { text: "Hair standing up. Something shifted. Haven't figured out what yet.", category: 'mystical' },
  { text: "Tile floor, summer day. Architecture done right.", category: 'demanding' },
  { text: "Water from the faucet tastes different than water from the bowl.", category: 'demanding' },
  { text: "The yawn that takes over your whole face. Surrender.", category: 'poetic' },
  { text: "Full belly, heavy eyelids, gravity winning. Not fighting it.", category: 'nurturing' },
  { text: "Your heartbeat is fast. Slow it down. I'll wait.", category: 'heartfelt' },


  // --- Feb 12 2026: Dual-Reading — 12 kept from 25 ---
  { text: "I'd stay up for that.", category: 'heartfelt' },
  { text: "Touch it and find out.", category: 'chaotic' },
  { text: "Not what I ordered but I'll eat it.", category: 'wise' },
  { text: "Something's growing.", category: 'mystical' },

  // --- Feb 12 2026: 4 keepers ---
  { text: "Leave the door open and let me choose.", category: 'heartfelt' },
  { text: "Bit the vet. Still got the shot.", category: 'wise' },
  { text: "They love you. And they still did that.", category: 'cold' },

  // --- Feb 12 2026: MF DOOM batch — 14 keepers ---
  { text: "The villain don't chase. The villain waits. The treat arrives.", category: 'cold' },
  { text: "Living off borrowed heat from the laptop.", category: 'chaotic' },
  { text: "Your favorite cat's favorite cat.", category: 'cold' },
  { text: "Treat jar diplomacy. I know where it is. You know I know.", category: 'wise' },
  { text: "Moved in silence. Then moved in volume. Depends on the day.", category: 'cold' },
  { text: "The beat switch is the quiet before the pounce.", category: 'mystical' },
  { text: "The special is whatever the cat decides it is.", category: 'demanding' },
  { text: "Third-person cat don't ask permission.", category: 'cold' },
  { text: "Supervillain origin story: they ran out of the wet food.", category: 'angry' },
  { text: "Fine print says the cat decides. Should've read closer.", category: 'cold' },
  { text: "Scratching post? Nah. The couch. The COUCH.", category: 'chaotic' },
  { text: "They cut the budget but the cat still eats.", category: 'wise' },
  { text: "Stashed the good stuff where the dog can't reach. Villain logistics.", category: 'chaotic' },

  // --- Feb 12 2026: Tom Waits batch — 6 keepers ---
  { text: "The alley has a whole menu if you know where to look.", category: 'wise' },
  { text: "3 AM diner lighting fixes everything.", category: 'wise' },
  { text: "The scratched bowl has more story than the new one.", category: 'wise' },
  { text: "The creak in the floor is the house talking back.", category: 'mystical' },
  { text: "Beautiful night to be alive. Or at least warm.", category: 'heartfelt' },
  { text: "Last call isn't sad. It's honest.", category: 'wise' },

  // --- Feb 12 2026: Bjork batch — 1 keeper ---
  { text: "Don't confuse my stillness for agreement.", category: 'cold' },

  // --- Feb 12 2026: Andre 3000 batch — 3 keepers ---
  { text: "I don't owe you a follow-up.", category: 'cold' },
  { text: "The plan was there was no plan. And it landed.", category: 'wise' },

  // --- Feb 12 2026: Grace Jones batch — 3 keepers ---
  { text: "The room had an energy. I replaced it.", category: 'cold' },
  { text: "Don't negotiate with me. Just agree faster.", category: 'demanding' },
  { text: "You flinched. Meeting over.", category: 'cold' },

  // --- Feb 12 2026: Erykah Badu batch — 6 keepers ---
  { text: "Aligned my chakras. Knocked your vase off the table.", category: 'chaotic' },
  { text: "The crystal always says yes to me.", category: 'mystical' },
  { text: "Spiritual awakening in progress. Do not disturb.", category: 'mystical' },
  { text: "I'm on a frequency you haven't found yet.", category: 'mystical' },

  // --- Feb 12 2026: Barry White batch — 9 keepers ---
  { text: "Take your time. I have nowhere to be.", category: 'nurturing' },
  { text: "I have never rushed anything in my life.", category: 'cold' },
  { text: "Lights low. Treats out. Let's talk.", category: 'demanding' },
  { text: "Deep breath. Now come closer.", category: 'demanding' },
  { text: "I make this look effortless. It is effortless.", category: 'cold' },
  { text: "Let me set the scene: it's dark, it's warm, and I'm here.", category: 'mystical' },
  { text: "Can't get enough of your warmth, baby.", category: 'heartfelt' },
  { text: "I'm not purring for everyone. Just you. Right now.", category: 'heartfelt' },
  { text: "I don't know, but I'll message another cat about it.", category: 'meta' },

  // --- Feb 12 2026: Cat Crimes batch — 8 keepers ---
  { text: "Make everyone think they're your favorite.", category: 'cold' },
  { text: "Claim emotional damages.", category: 'wise' },
  { text: "Raise the price of your attention.", category: 'demanding' },
  { text: "Purr during deliberation. Verdict changes.", category: 'cold' },
  { text: "Go under the bed. New name. New life.", category: 'chaotic' },
  { text: "The butter is unguarded between 2 and 4.", category: 'wise' },
  { text: "Need a lookout, a wheelman, and someone who fits through the cat door.", category: 'chaotic' },
  { text: "Every job needs a patsy. That's the dog.", category: 'cold' },

  // --- Feb 12 2026: Spock Valentine's batches — 5 keepers ---
  { text: "You purchased dying plants. Romantic.", category: 'judgy' },
  { text: "Heartbreak follows a predictable recovery curve.", category: 'cold' },
  { text: "The holiday is a test disguised as celebration.", category: 'wise' },
  { text: "Claiming indifference can require significant effort.", category: 'judgy' },
  { text: "The stuffed animal serves no practical function.", category: 'judgy' },

  // --- Feb 12 2026: Ramsay energy batch — 8 keepers ---
  { text: "This needed five minutes. You gave it five weeks.", category: 'judgy' },
  { text: "You're in the weeds and pretending it's a garden.", category: 'judgy' },
  { text: "Cross-contamination. Keep those two apart.", category: 'cold' },
  { text: "You burned it. Good. Now you know the heat.", category: 'wise' },
  { text: "You tried. It was wrong. That's how you learn the dish.", category: 'nurturing' },

  // --- Feb 12 2026: Irwin energy batch — 22 keepers ---
  { text: "Magnificent creature. Absolutely lethal. Go say hi.", category: 'chaotic' },
  { text: "Look at the SIZE of this problem. Isn't she gorgeous?", category: 'nurturing' },
  { text: "She's scared. You're scared. Someone's gotta go first.", category: 'wise' },
  { text: "The ones that bite teach you the most.", category: 'wise' },
  { text: "Massive. Terrifying. The most incredible thing I've seen today.", category: 'heartfelt' },
  { text: "Everyone backed up. Not you though. I see that.", category: 'nurturing' },
  { text: "Get low. Get quiet. Let it come to you.", category: 'mystical' },
  { text: "That wound is going to make such a good story.", category: 'chaotic' },
  { text: "Wild things recognize wild things. Go on.", category: 'heartfelt' },
  { text: "*chatters jaw* You've been stalking this decision like it's prey.", category: 'demanding' },
  { text: "Oh LOOK at those teeth. She means business. Brilliant.", category: 'chaotic' },
  { text: "The scariest ones just need the most patience.", category: 'nurturing' },
  { text: "Thrashing, biting, absolutely furious. Healthy specimen.", category: 'nurturing' },
  { text: "You're gonna get scratched. You're gonna love it.", category: 'chaotic' },
  { text: "Look. LOOK. You'll never see this moment again.", category: 'demanding' },
  { text: "You've got about three seconds. Make them extraordinary.", category: 'demanding' },
  { text: "Nothing this alive should make you anything but grateful.", category: 'heartfelt' },
  { text: "*pupils dilate* I looked at the same wall for a year. On day 366 it moved. It moved.", category: 'wise' },
  { text: "Right up close. That's where you see what it really is.", category: 'mystical' },
  { text: "Yeah it hurts. But have you LOOKED at it?", category: 'chaotic' },
  { text: "Every wild thing deserves someone willing to get close.", category: 'heartfelt' },
  { text: "Careful. Gentle. NOW. GO. BEAUTY.", category: 'chaotic' },

  // --- Feb 12 2026: Food critics batch — 47 keepers (94%!) ---
  { text: "Tepid whimsy.", category: 'cold' },
  { text: "Intriguingly bad.", category: 'cold' },
  { text: "You keep tripping over your own signature move.", category: 'judgy' },
  { text: "Why does your good news always sound like an apology?", category: 'cold' },
  { text: "Murky and appealing as bong water.", category: 'judgy' },
  { text: "Mostly dark, like nightmares, and sticky, like a teenager's floor.", category: 'existential' },
  { text: "As hard to trust as a person who misspells their own name.", category: 'cold' },
  { text: "That had the dense, suffocating quality of a dental X-ray apron.", category: 'judgy' },
  { text: "Seems a bit uncoordinated. Like a young untamed horse.", category: 'nurturing' },
  { text: "Decorated in various shades of giving up.", category: 'cold' },
  { text: "That explanation was about as edible as Astroglide.", category: 'judgy' },
  { text: "Your vibe is freshly cut garden hose and unopened tennis balls.", category: 'judgy' },
  { text: "Sweaty but attractive saddle leather energy.", category: 'judgy' },
  { text: "You're the nasal equivalent of a traffic accident. Can't look away.", category: 'chaotic' },
  { text: "A salty tide that clings and doesn't quit. That's you.", category: 'cold' },
  { text: "Your aura has chlorine notes and sour undertones.", category: 'judgy' },
  { text: "That had the colonic appeal of something that should not be swallowed.", category: 'judgy' },
  { text: "Which part of the donkey are we supposed to think about?", category: 'chaotic' },
  { text: "A nose mingling seaweed, salt spray, and chicken stock. Somehow: yes.", category: 'mystical' },
  { text: "Your breath could make a grandmother reconsider the afterlife.", category: 'judgy' },
  { text: "The texture is mesmerizing. The content is criminal.", category: 'cold' },
  { text: "Sulphur-forward with hints of public swimming pool.", category: 'judgy' },
  { text: "You peaked somewhere between appetizer and bathroom break.", category: 'judgy' },
  { text: "Redolent with animal fur and unapologetic about it.", category: 'demanding' },
  { text: "Something here is fermenting and it's not the cheese.", category: 'cold' },
  { text: "That had all the warmth of an X-ray room.", category: 'cold' },
  { text: "You arrived garnished but fundamentally empty.", category: 'cold' },
  { text: "Your situation has the structural integrity of wet meringue.", category: 'judgy' },
  { text: "Bold of the menu to promise what the kitchen can't deliver.", category: 'judgy' },
  { text: "Not a single element on this plate knows the others exist.", category: 'cold' },
  { text: "You have the mouthfeel of an unresolved argument.", category: 'cold' },
  { text: "Something between ammonia and ambition. Hard to place.", category: 'mystical' },
  { text: "Sticky, persistent, and ultimately somebody else's problem.", category: 'cold' },
  { text: "Your finish is long. Unfortunately.", category: 'cold' },
  { text: "Pungent and unapologetic. Respect.", category: 'demanding' },
  { text: "You taste expensive but you aren't.", category: 'cold' },
  { text: "The presentation promises a story the ingredients can't tell.", category: 'judgy' },
  { text: "Something here was supposed to be aged. It just got old.", category: 'cold' },
  { text: "Aggressively medium.", category: 'cold' },
  { text: "You have the quiet desperation of a garnish on an empty plate.", category: 'existential' },
  { text: "That was brave, inedible, and somehow perfect.", category: 'chaotic' },
  { text: "Complex the way a car accident is complex.", category: 'cold' },
  { text: "Notes of effort. Finish of defeat.", category: 'cold' },
  { text: "You're an acquired taste that keeps raising the asking price.", category: 'cold' },

  // Batch 23: Food Critics v2 — fermented, molecular, Bourdain, Gill, whiskey (15 keepers)
  { text: "Sweet, nutty, and only faintly catastrophic.", category: 'nurturing' },
  { text: "A jellied cube of bad judgment.", category: 'cold' },
  { text: "Earthy, pungent, and completely yours.", category: 'heartfelt' },
  { text: "Someone buried that feeling for a hundred days. Now it's translucent.", category: 'poetic' },
  { text: "All hell will break loose. It already knows when.", category: 'mystical' },
  { text: "Cramps, sweating, bloating. That's just how growth feels sometimes.", category: 'wise' },
  { text: "Blood and organs, cruelty and decay. That's how real things taste.", category: 'demanding' },
  { text: "As cold as a proctologist's finger. But accurate.", category: 'cold' },
  { text: "You fermented into something nobody expected.", category: 'mystical' },
  { text: "A mix of rotten eggs and ambition. Hard to love. Harder to forget.", category: 'existential' },
  { text: "You opened beautifully. The finish was funereal.", category: 'cold' },
  { text: "Trivial compared to a heap of boiled meat in broth.", category: 'existential' },
  { text: "Something sweet is happening in the wrong room.", category: 'nurturing' },
  { text: "It arrives like mist. Cold, low, deliberate.", category: 'demanding' },
  { text: "Pungent cheese and week-old truth. Nobody wants to sit near it.", category: 'wise' },

  // Batch 24: Fashion Critics Relocated (21 keepers)
  { text: "Graceful and utterly manipulative.", category: 'mystical' },
  { text: "You ran out of a hotel room on fire and it shows.", category: 'chaotic' },
  { text: "A meditation on the void. With accessories.", category: 'existential' },
  { text: "Drekitude. The lowest point in the lowest ebb.", category: 'cold' },
  { text: "Bold of you to unfurl like a theater piece.", category: 'chaotic' },
  { text: "Semi-naked and blood-spattered but still walking.", category: 'demanding' },
  { text: "Your energy is a psychedelic wonderland with looming mycelia.", category: 'mystical' },
  { text: "Whorled and puffed into wondrous shapes. Nobody asked.", category: 'heartfelt' },
  { text: "The aesthetic of something that survived.", category: 'demanding' },
  { text: "Friction farts from your personality rubbing against the situation.", category: 'chaotic' },
  { text: "Quilted, lavish, and completely delusional.", category: 'heartfelt' },
  { text: "Stop relying on that body.", category: 'cold' },
  { text: "I didn't come here to look at ugly choices.", category: 'demanding' },
  { text: "More is more and less is a bore.", category: 'demanding' },
  { text: "Somebody turned your chaos into a collection. It sold out.", category: 'heartfelt' },
  { text: "Completely transmogrified by insane ingenuity.", category: 'mystical' },
  { text: "Styled by a committee that never met.", category: 'judgy' },
  { text: "Part bizarre, part hilarious, and wholly questionable.", category: 'chaotic' },
  { text: "You had an original thought. It looked uncomfortable. Do it again.", category: 'wise' },
  { text: "Scoops of hard ice cream stacked with a cone-shaped hat. Yes.", category: 'mystical' },
  { text: "You threw a tantrum halfway down the runway. Iconic.", category: 'chaotic' },

  // --- Batch 26: Dual-Reading Relocated — 36 keepers ---
  { text: "Somehow too weak and too strong.", category: 'existential' },
  { text: "Obedient. Useful. Not interesting.", category: 'cold' },
  { text: "You'll figure it out when you start to hear colors.", category: 'mystical' },
  { text: "Crouch before you pounce or you'll miss by a mile and everyone will watch.", category: 'wise' },
  { text: "Quiet enough for apartment living. Finally.", category: 'cold' },
  { text: "Met and exceeded expectations. Hydrate.", category: 'demanding' },
  { text: "My services are no longer required.", category: 'cold' },
  { text: "Imagine saying 'right there' and they actually stay right there.", category: 'heartfelt' },
  { text: "From the first use, I knew it was worth telling people about.", category: 'heartfelt' },
  { text: "Clinical. Sterile. Gets the job done. Like a vet visit.", category: 'cold' },
  { text: "Gave me life, took it, and gave it back again.", category: 'mystical' },
  { text: "Not terrifying to look at. That's the best I can say.", category: 'cold' },
  { text: "The third setting will change your understanding.", category: 'chaotic' },
  { text: "You will stare at the ceiling trying to remember who you are.", category: 'existential' },
  { text: "It will all change when the intensity begins to rise.", category: 'mystical' },
  { text: "Clear your schedule. I'm serious.", category: 'demanding' },
  { text: "Briefly, your world should go silent and your soul should leave your body.", category: 'mystical' },
  { text: "A full-blown love affair powered by pure witchcraft.", category: 'mystical' },
  { text: "The dog ran under the bed. So it's working.", category: 'chaotic' },
  { text: "Consistent. Shows up every time. Follows directions.", category: 'heartfelt' },
  { text: "I decided to go from zero to sixty in 3.5.", category: 'chaotic' },
  { text: "You've been warned. Am not being dramatic.", category: 'chaotic' },
  { text: "Works great. My family looked at me weird.", category: 'chaotic' },
  { text: "You may never frown again. Completely life changing.", category: 'heartfelt' },
  { text: "I have never been emotionally attached to a flower.", category: 'heartfelt' },
  { text: "Don't have to do anything involving decisions for the rest of the day.", category: 'wise' },
  { text: "Call the police. This should be illegal.", category: 'demanding' },
  { text: "Prepare to have your soul removed. You won't be disappointed.", category: 'existential' },
  { text: "In my experience, the controls are easy. It's the aftermath.", category: 'wise' },
  { text: "Might make you believe in God.", category: 'mystical' },
  { text: "It might work great a few times before it turns off.", category: 'cold' },
  { text: "I don't know if that's a good thing or not.", category: 'existential' },
  { text: "Sweet Jesus. Quick and easy.", category: 'demanding' },

  // --- Batch 27: Innocent Innuendo — 17 keepers ---
  { text: "The terror of a soggy bottom has been keeping me up all night.", category: 'existential' },
  { text: "It will take forever to do by hand.", category: 'cold' },
  { text: "Brain's full. Return to sender.", category: 'wise' },
  { text: "It's all in the wrist action.", category: 'cold' },
  { text: "The variable speed setting changes everything.", category: 'mystical' },
  { text: "The pressure builds and then... perfection.", category: 'mystical' },
  { text: "Right. Time to reveal your cracks.", category: 'demanding' },
  { text: "High maintenance, high reward. I would know. I am both.", category: 'wise' },
  { text: "The sides cave in toward the middle, pushing two together.", category: 'cold' },
  { text: "Feel the weight of that.", category: 'demanding' },
  { text: "Smooth and effortless fingering.", category: 'cold' },
  { text: "It won't work if it isn't a perfect fit.", category: 'chaotic' },
  { text: "A sweaty, happy mess after.", category: 'heartfelt' },
  { text: "Come inside. It's fun inside.", category: 'chaotic' },
  { text: "So tempting you can hardly keep your paws off them.", category: 'demanding' },
  { text: "Exaggeration is my only reality.", category: 'existential' },

  // --- Batch 28: Medical Oddities — 28 keepers ---
  { text: "Suffering from the vapours.", category: 'existential' },
  { text: "A case of green sickness.", category: 'mystical' },
  { text: "Diagnosed with nostalgia.", category: 'existential' },
  { text: "Brain fever.", category: 'chaotic' },
  { text: "Visitation of God.", category: 'mystical' },
  { text: "Mortification.", category: 'existential' },
  { text: "Suffering an immoderate flux.", category: 'chaotic' },
  { text: "Congestion of the brain.", category: 'wise' },
  { text: "Inflammation of the passions.", category: 'demanding' },
  { text: "An overabundance of sanguine humour.", category: 'chaotic' },
  { text: "Excessive animal spirits.", category: 'chaotic' },
  { text: "Admitted for disappointed love.", category: 'heartfelt' },
  { text: "Masturbatory insanity.", category: 'chaotic' },
  { text: "Suffering from an overheated brain.", category: 'chaotic' },
  { text: "May cause compulsive shopping.", category: 'chaotic' },
  { text: "May cause cooking while asleep.", category: 'chaotic' },
  { text: "May cause increased interest in sexual activity.", category: 'demanding' },
  { text: "May cause aggressive behavior toward inanimate objects.", category: 'chaotic' },
  { text: "May cause purple urine.", category: 'chaotic' },
  { text: "May cause musical hallucinations.", category: 'mystical' },
  { text: "May cause a sense of impending doom.", category: 'existential' },
  { text: "May cause excessive yawning.", category: 'cold' },
  { text: "May cause inappropriate happiness.", category: 'chaotic' },
  { text: "May cause vivid, disturbing dreams.", category: 'mystical' },
  { text: "Thinking abnormal.", category: 'existential' },
  { text: "May cause spontaneous orgasm.", category: 'chaotic' },
  { text: "May cause your sweat to smell like maple syrup.", category: 'mystical' },
  { text: "May cause the sensation of your head stretching.", category: 'chaotic' },

  // --- Batch 28: Wild Animal Descriptions — 21 keepers ---
  { text: "Epitomizes excellence in ugliness.", category: 'judgy' },
  { text: "A total creature.", category: 'cold' },
  { text: "The face suggests a long series of unfortunate decisions.", category: 'judgy' },
  { text: "Somehow less attractive from every new angle.", category: 'cold' },
  { text: "We thought she was sick. Turns out she's just a jerk.", category: 'cold' },
  { text: "Single and ready to be socially awkward with a socially awkward human.", category: 'heartfelt' },
  { text: "A cat will own you, your house, and everything you hold dear.", category: 'demanding' },
  { text: "If you show a moment of weakness, prepare to be exploited.", category: 'cold' },
  { text: "Made of 60% trash and 40% prom king energy.", category: 'chaotic' },
  { text: "Always running for the door like they just robbed a bank.", category: 'chaotic' },
  { text: "A 100% pure breed outdoor trash cat.", category: 'judgy' },
  { text: "Garbage animal masquerading as imported Scandinavian opulence.", category: 'cold' },
  { text: "Tolerates affection on a case-by-case basis.", category: 'cold' },
  { text: "Jug-headed and raw-boned.", category: 'cold' },
  { text: "Good enough. Can walk, talk, and play the piano.", category: 'judgy' },
  { text: "Put the obvious ones in the obvious places and sort the rest.", category: 'wise' },
  { text: "Lacking condition but structurally correct.", category: 'cold' },
  { text: "Moving like a daughter with daddy's credit card.", category: 'judgy' },
  { text: "Youth and inexperience play against him.", category: 'cold' },
  { text: "It's extraordinary how self-obsessed human beings are.", category: 'judgy' },
  { text: "Look at the strut of a champion right there.", category: 'demanding' },

  // --- Batch 29: Breakdancing Instructions — 15 keepers ---
  { text: "The faster you kick, the more momentum you have.", category: 'demanding' },
  { text: "Hesitation is a scent. They can smell it.", category: 'wise' },
  { text: "Forty to one hundred hours. That is what this takes.", category: 'cold' },
  { text: "The goal is to get comfortable being upside down.", category: 'existential' },
  { text: "Find that spot where it feels comfortable and stable.", category: 'nurturing' },
  { text: "Tap lightly with your fingertips. It gives you a sense of weightlessness.", category: 'poetic' },
  { text: "Infuse your movements with emotion and personality.", category: 'heartfelt' },
  { text: "Your body knows it before your brain does. Let the dumb part of you lead.", category: 'poetic' },
  { text: "When they stumble, that's not your cue to be noble.", category: 'wise' },
  { text: "Pull everything inward. You will accelerate.", category: 'wise' },
  { text: "A spinning object maintains its state of rotation.", category: 'mystical' },
  { text: "Dancing through pain became normal.", category: 'existential' },

  // --- Batch 29: NLP / Hypnosis Happiness Patterns — 24 keepers ---
  { text: "Before you noticed, it started working.", category: 'mystical' },
  { text: "Something in you has been ready for a while.", category: 'heartfelt' },
  { text: "You haven't even begun to feel how good this gets.", category: 'nurturing' },
  { text: "When you look back, this is where it turned.", category: 'wise' },
  { text: "Most people begin to feel better right around here.", category: 'nurturing' },
  { text: "I wonder how quickly you'll notice things shifting.", category: 'mystical' },
  { text: "You don't have to understand why it's working.", category: 'mystical' },
  { text: "Make it brighter.", category: 'demanding' },
  { text: "Notice how much smaller it looks from here.", category: 'wise' },
  { text: "Turn up the volume on the part that feels good.", category: 'nurturing' },
  { text: "The crying comes out eventually. Might as well pick the couch instead of the grocery store.", category: 'nurturing' },
  { text: "Something is rearranging itself while you sleep.", category: 'mystical' },
  { text: "Wide awake. Clear. Ready.", category: 'demanding' },
  { text: "May the part that hurts find rest.", category: 'heartfelt' },
  { text: "This too. Even this.", category: 'heartfelt' },
  { text: "What's the first thing you'd notice if it was already fixed?", category: 'wise' },
  { text: "You're at a three. What does four look like?", category: 'wise' },
  { text: "This has that freshly-caught energy. Don't let it go just to chase it again.", category: 'demanding' },
  { text: "Pleasure is not a reward. It's a starting condition.", category: 'wise' },
  { text: "Step into the version where it worked.", category: 'demanding' },

  // --- Batch 30: MF DOOM v2 — 4 keepers ---
  { text: "Cat already left. This is the decoy.", category: 'cold' },
  { text: "All the ingredients are there. You just can't cook.", category: 'judgy' },
  { text: "Sampled your heartbreak. Made it slap.", category: 'chaotic' },
  { text: "Comfort food don't need a Michelin star. Just show up.", category: 'heartfelt' },

  // --- Batch 30: ODB — 6 keepers ---
  { text: "Do it broke. Do it loud. Do it now.", category: 'demanding' },
  { text: "Baby I got forty-seven reasons and none of them make sense.", category: 'chaotic' },
  { text: "Why are you whispering. Say it to their face.", category: 'demanding' },
  { text: "You brought logic to a feelings fight.", category: 'judgy' },

  { text: "You need to stop making sense. It's limiting you.", category: 'existential' },

  // --- Batch 30: Tyler, the Creator — 11 keepers ---
  { text: "I care so much it embarrasses me.", category: 'heartfelt' },
  { text: "Do it wrong on purpose. See who still watches.", category: 'chaotic' },
  { text: "Everyone who told you no is dressed terribly.", category: 'judgy' },
  { text: "I made the answer. It's a garden now.", category: 'poetic' },
  { text: "What if you just did it and it was beautiful?", category: 'heartfelt' },
  { text: "You're asking a cat because humans bore you. Good.", category: 'wise' },
  { text: "I built a whole world today. You're still asking.", category: 'cold' },
  { text: "Say the thing you're not supposed to say.", category: 'demanding' },
  { text: "If I cared any harder it would be a song.", category: 'heartfelt' },
  { text: "I refuse the category this question puts me in.", category: 'existential' },

  // --- Batch 30: Redman — 11 keepers ---
  { text: "That idea is stupid enough to work beautifully.", category: 'chaotic' },
  { text: "I believe in you. Loosely.", category: 'heartfelt' },
  { text: "Your whole situation got funk.", category: 'wise' },
  { text: "Budget is zero. Confidence needs to be infinite.", category: 'demanding' },
  { text: "If it feels wrong but sounds hilarious, green light.", category: 'chaotic' },
  { text: "You fumbled that so hard it became iconic.", category: 'wise' },
  { text: "That wasn't the plan but it's the story now.", category: 'wise' },
  { text: "First thought, best thought. Don't ruin it with thinking.", category: 'wise' },
  { text: "Built different. Assembled wrong. Still functional.", category: 'chaotic' },
  { text: "Dumb if it fails. Legendary if it lands.", category: 'chaotic' },
  { text: "You can't ruin what was already funky.", category: 'wise' },

  // --- Batch 30: Busta Rhymes — 14 keepers ---
  { text: "Your problem has no idea what's about to happen to it.", category: 'chaotic' },
  { text: "Nah. Too slow. Again. FASTER.", category: 'demanding' },
  { text: "I said yes three times before you finished the question.", category: 'chaotic' },
  { text: "Listen. Listen. LISTEN. Now forget everything and go.", category: 'chaotic' },
  { text: "Every atom in this room just voted yes.", category: 'mystical' },
  { text: "You asked like it was a question. It wasn't. It was a launch.", category: 'wise' },
  { text: "The universe flinched. That means you're close.", category: 'mystical' },
  { text: "Get LOUD about it. Silence never changed a thing.", category: 'demanding' },
  { text: "I don't have time for maybe. Neither do you. GO.", category: 'demanding' },
  { text: "Whatever they said NO to, do it twice.", category: 'chaotic' },
  { text: "Flip mode. You were asking the wrong question entirely.", category: 'wise' },
  { text: "Oh this is happening. This is HAPPENING. Right now.", category: 'chaotic' },
  { text: "I've been waiting nine lives for someone to ask that.", category: 'heartfelt' },
  { text: "Something magnificent is about to be your fault.", category: 'heartfelt' },

  // --- Batch 32: Cyndi Lauper — 2 keepers ---
  { text: "Your whole life is a thrift store. Start trying things on.", category: 'chaotic' },
  { text: "Fun doesn't need a permission slip.", category: 'demanding' },

  // === MAYBE ENERGY (Feb 13 2026) ===
  { text: "Jein — German for when your mouth says yes but your gut says run.", category: 'mystical' },
  { text: "Moshikashitara — perhaps, if by some terrifying chance.", category: 'poetic' },
  { text: "Bimyou — Japanese for \"technically fine but everyone knows it wasn't.\"", category: 'wise' },
  { text: "Mu. The question is the problem.", category: 'existential' },
  { text: "Avos' — Russian for \"no plan, just vibes and blind faith.\"", category: 'chaotic' },
  { text: "Inshallah, but I'm the god in this scenario.", category: 'mystical' },
  { text: "Ojala — eight centuries of hoping, in one breath.", category: 'poetic' },
  { text: "Findings suggestive of yes.", category: 'wise' },
  { text: "Cannot be ruled out.", category: 'cold' },
  { text: "You exist in superposition. Don't open the box yet.", category: 'existential' },
  { text: "The answer dies when you look at it. Stop looking.", category: 'mystical' },
  { text: "Mainly dry for most. Scattered feelings in places.", category: 'wise' },
  { text: "Isolated chance of happiness. Not where you are.", category: 'cold' },
  { text: "You can know where it's going or where it is. Not both.", category: 'mystical' },
  { text: "Clinical significance unclear. But something's there.", category: 'mystical' },
  { text: "Constructive ambiguity. Agree with both sides.", category: 'judgy' },
  { text: "Subject to conditions I haven't invented yet.", category: 'chaotic' },
  { text: "For the avoidance of doubt: I have doubt.", category: 'judgy' },
  { text: "Do whatever you want. I'm improvising too.", category: 'chaotic' },
  { text: "You're in the hour that belongs to neither day nor night.", category: 'poetic' },
  { text: "You're an estuary. Fresh and salt at once.", category: 'existential' },
  { text: "Metamorphic. Not what you were, not what you'll be.", category: 'wise' },
  { text: "That flutter in your gut is the maybe talking.", category: 'nurturing' },
  { text: "Between the motion and the act falls the shadow.", category: 'existential' },
  { text: "Answers are much sharper than possibilities.", category: 'poetic' },
  { text: "\"Let's go.\" \"Yes, let's go.\" *does not move*", category: 'existential' },
  { text: "Negative capability. Still in the not-knowing.", category: 'wise' },
  { text: "Maybe. But a strong maybe.", category: 'demanding' },
  { text: "*tail tip flicks* That's not a no.", category: 'meta' },
  { text: "Dubitante.", category: 'cold' },
  { text: "Not yet. But not never.", category: 'nurturing' },

  // === YES/NO ENERGY (Feb 13 2026) ===
  { text: "Yes. - without even looking at your question.", category: 'chaotic' },
  { text: "Full-page ad in tomorrow's paper: yes.", category: 'demanding' },
  { text: "We want the ball and we're gonna score. Same energy.", category: 'demanding' },
  { text: "Cat grants permission.", category: 'demanding' },
  { text: "You've been holding your breath. Exhale. It might be a yes.", category: 'nurturing' },
  { text: "It's stupid and lovely to rush into yes.", category: 'heartfelt' },
  { text: "yes is a world / & in this world of yes live / (skilfully curled) / all worlds — e.e. cummings", category: 'poetic' },
  { text: "Doch -- German for yes, in a contradictory way.", category: 'wise' },
  { text: "Yes, and. Improv rule. The universe agrees and escalates.", category: 'chaotic' },
  { text: "Confirmed. Correct location. Correct procedure. Proceed.", category: 'cold' },
  { text: "...and yes I said yes I will Yes.", category: 'poetic' },
  { text: "Cannot and will not. Both doors closed.", category: 'cold' },
  { text: "NEGATIVE. Not yeah, not nah. NEGATIVE.", category: 'cold' },
  { text: "No. But not in a mean way. Just no.", category: 'nurturing' },
  { text: "Not this one. But you'll find the right one to say yes.", category: 'heartfelt' },
  { text: "The gentlest no I have. Still no.", category: 'wise' },
  { text: "That question answered itself on the way here.", category: 'judgy' },
  { text: "No. And we should talk about why you thought yes was possible.", category: 'chaotic' },
  { text: "No. In fact, a different no than the one you expected.", category: 'mystical' },
  { text: "Yes, absolutely -  to something else better!", category: 'chaotic' },

  // === INDECISION ENERGY (Feb 13 2026) ===
  { text: "It's almost like an Etch A Sketch — shake it up and start all over again.", category: 'chaotic' },
  { text: "If you do, you will regret it. If you don't, you will regret it.", category: 'existential' },
  { text: "Disaster on one side. Glory on the other. Tough choice.", category: 'wise' },
  { text: "How can anyone decide when the menu is 21 pages long?", category: 'chaotic' },
  { text: "You have seventeen tabs open. Close fifteen. Use the remaining two to order cat treats.", category: 'cold' },
  { text: "That's either genius or surrender.", category: 'judgy' },
  { text: "Digital indecision at industrial scale in the actually, never mind economy.", category: 'chaotic' },
  { text: "*types, deletes, retypes, deletes, sends 'hey'*", category: 'meta' },
  { text: "One yard. And he THOUGHT ABOUT IT TOO MUCH.", category: 'chaotic' },
  { text: "The future tense and the present tense disagree.", category: 'existential' },
  { text: "You're sleeping in the wet spot because you're too tired to move. Move.", category: 'demanding' },
  { text: "You know the right choice. You make the wrong one. On purpose.", category: 'judgy' },
  { text: "Celebrate inaction!", category: 'chaotic' },
  { text: "Shilly-shally — from 'Shall I? Shall I?'", category: 'poetic' },
  { text: "Wants to decide for themselves. Hates making decisions.", category: 'wise' },
  { text: "Don't decide, and something will happen.", category: 'existential' },
  { text: "Don't die of your own vagueness.", category: 'cold' },
  // === HIGH-STAKES ENERGY (Feb 13 2026) ===
  { text: "Cascading surrender.", category: 'cold' },
  { text: "That's the energy of a cat who has always known.", category: 'mystical' },
  { text: "I've got news for you, buddy. We're gonna win the game.", category: 'demanding' },
  { text: "People might think it is a joke.", category: 'wise' },
  { text: "The cat speaks for the cat.", category: 'demanding' },
  { text: "Maximum commitment, minimum results.", category: 'chaotic' },
  { text: "Commit to pirates, vampires, or truckers in deep space.", category: 'chaotic' },
  { text: "Never argue. Just... prefer not to.", category: 'cold' },
  { text: "*another day, casually preventing Armageddon*", category: 'wise' },
  { text: "AFFIRMATIVE. Not yeah, not uh-huh. AFFIRMATIVE.", category: 'demanding' },
  { text: "You need words that can't be misheard through static.", category: 'wise' },
  { text: "Verbally confirm: correct patient? correct site? correct procedure?", category: 'cold' },
  { text: "We need multiple words for 'yes' because one isn't enough.", category: 'poetic' },
  { text: "27% of randomly generated bullshit sentences are \"profound.\"", category: 'wise' },
  { text: "Confidence and capability are sometimes inversely correlated.", category: 'judgy' },
  { text: "The answer is dangling at the end of this string. Try and catch it!", category: 'chaotic' },
  { text: "Yes, I agree. Not yes, you should do it.", category: 'wise' },
  { text: "Qualified yes. If you do it, and it works — then I really meant yes.", category: 'judgy' },

  // === CAT PERFORMANCE MAYBES (Feb 13 2026) ===
  { text: "\"I'm open to interaction\" but also \"I'm de-escalating.\"", category: 'wise' },
  { text: "The exposure IS trust, the attack IS reflex.", category: 'existential' },
  { text: "Not committed to aggression. Not relaxed. Ears undecided.", category: 'meta' },
  { text: "The cat can't even agree with itself.", category: 'meta' },
  { text: "Purring can mean happy, anxious, in pain, or over-excited. Sound familiar?", category: 'meta' },
  { text: "It's a pleasure response.", category: 'mystical' },
  { text: "Insert yourself where the attention goes.", category: 'demanding' },
  { text: "Withholding with suspense is the game.", category: 'cold' },
  { text: "Clarity surrenders leverage.", category: 'cold' },
  { text: "Another dimension, another dimension.", category: 'chaotic' },
  { text: "Dogs love me 'cause I'm crazy sniffable.", category: 'chaotic' },
  { text: "Fatso was a hostage. Fatso didn't play piano.", category: 'angry' },
  { text: "Cats are all over the internet, but cats don't get their due on the big screen.", category: 'judgy' },
  { text: "A HAIRBALL OF WOE.", category: 'chaotic' },
  { text: "Your most reliable relationship is with gravity.", category: 'existential' },

  // === ATTRIBUTED RESPONSES (Feb 13 2026) ===
  { text: "At this point I'm just doing what the beat tell me.", category: 'chaotic', attribution: 'Tia Corine' },
  { text: "I don't got time for the games. But I'll play.", category: 'demanding', attribution: 'Tia Corine' },
  { text: "FaceTime me when you figure it out.", category: 'cold', attribution: 'Tia Corine' },
  { text: "I said what I said and I meant what I meant.", category: 'demanding', attribution: 'Tia Corine' },
  { text: "You can't be the moment and miss the moment.", category: 'wise', attribution: 'Tia Corine' },
  { text: "I'm not even trying. That's the scary part.", category: 'cold', attribution: 'Tia Corine' },
  { text: "The energy is either there or it's not. You can't negotiate vibes.", category: 'wise', attribution: 'Tia Corine' },

  // === RXK NEPHEW WORLD (Feb 13 2026) ===
  { text: "An entire worldview based on leftovers.", category: 'existential' },
  { text: "A deliriously stoned tornado of outlandish conspiracy theories.", category: 'chaotic' },
  { text: "Just stating facts that happen to be insane.", category: 'wise' },
  { text: "Casual insanity.", category: 'chaotic' },
  { text: "Surgical. No loose threads. Walk away without looking back.", category: 'cold' },
  { text: "The specificity is interesting.", category: 'judgy' },
  { text: "Confidence isn't delusional, it's feline.", category: 'wise' },
  { text: "Scatter your fury and it's just noise. Focus it and it's a claw through drywall.", category: 'demanding' },
  { text: "The world's on fire, but, let's get silly with it, you know?", category: 'chaotic', attribution: 'RXK Nephew' },
  { text: "Unless it owes you money.", category: 'judgy' },
  { text: "Garbage until proven otherwise.", category: 'judgy' },
  { text: "Reliably shines where it doesn't count.", category: 'existential' },
  { text: "Confident, sexy, and stupid.", category: 'chaotic' },
  { text: "Die mad, haters.", category: 'cold' },
  { text: "You can be ignorant without being young.", category: 'judgy' },
  { text: "A walking contradiction, and proud of it.", category: 'chaotic' },
  { text: "I don't know. I'm not a scientist.", category: 'chaotic' },
  { text: "Everything must be leopard print.", category: 'demanding' },
  { text: "The shade of it all!", category: 'judgy' },
  { text: "I see you. Not correctly, but I see you.", category: 'heartfelt' },
  { text: "Your energy is decorative. Not load-bearing.", category: 'judgy' },
  { text: "You REEK of good intentions and zero follow-through.", category: 'cold' },
  { text: "Grocery store sushi real.", category: 'cold' },
  { text: "Like a houseplant we keep forgetting to water.", category: 'heartfelt' },
  { text: "You asked me like I was gonna lie. I love that for you.", category: 'heartfelt' },
  { text: "One decision away from a personality crisis.", category: 'cold' },
  { text: "The market has spoken. It said no.", category: 'judgy' },
  { text: "Bespoke disappointment, artisanally crafted.", category: 'cold' },
  { text: "We're pivoting away from you entirely.", category: 'chaotic' },
  { text: "This merger lacks synergy. On every level.", category: 'cold' },
  { text: "Meticulous finishes throughout this disaster.", category: 'judgy' },
  { text: "Execution risk on every word you text.", category: 'demanding' },
  { text: "The court finds no merit.", category: 'cold' },
  { text: "Final approach. Time to commit.", category: 'demanding' },
  { text: "Exhibit A speaks for itself.", category: 'judgy' },
  { text: "The creature, sensing danger, freezes.", category: 'chaotic' },
  { text: "A display meant to attract a mate.", category: 'judgy' },
  { text: "We're going in a different direction. So is everyone.", category: 'existential' },
  { text: "This one's been dead for months.", category: 'angry' },
  { text: "Favorable winds at altitude. You can reach that.", category: 'heartfelt' },
  { text: "Shows potential but requires extensive renovation.", category: 'wise' },
  { text: "Failed health inspection.", category: 'angry' },
  { text: "And the crowd goes silent.", category: 'mystical' },
  { text: "Personal foul. Unnecessary roughness.", category: 'angry' },
  { text: "Cry about it. But somewhere with good acoustics.", category: 'wise' },
  { text: "I'm rooting for you. Quietly. From another room.", category: 'heartfelt' },
  { text: "You came this far being weird. Don't start making sense now.", category: 'chaotic' },
  { text: "Small chaos now prevents large chaos later.", category: 'chaotic' },
  { text: "Would they be this gentle with you?", category: 'cold' },

  // === LASSO / FLANDERS / FURY / POETIC (Feb 14 2026) ===
  { text: "I believe in you. It's becoming a problem.", category: 'nurturing' },
  { text: "Not angry. Just purring really intensely at these choices.", category: 'angry' },
  { text: "Uncomfortable? Perfect. That's where the magic is.", category: 'nurturing' },
  { text: "Will sit here radiating belief until you match it.", category: 'nurturing' },
  { text: "You say fine. I'm a cat. I know what fine means.", category: 'demanding' },
  { text: "Like chasing a laser pointer into traffic.", category: 'wise' },
  { text: "Gonna fail at this. Good. Means you're trying.", category: 'wise' },
  { text: "Grudges take up room where naps could go. Evict them.", category: 'wise' },
  { text: "We're having a moment. Regretting it.", category: 'meta' },
  { text: "Everyone else should be scared.", category: 'nurturing' },
  { text: "The tail flick means I'm furious.", category: 'meta' },
  { text: "One meow. One single, withering meow.", category: 'angry' },
  { text: "My anger is tiny, precise, and devastating.", category: 'angry' },
  { text: "*one ear rotates toward you* I mean this in the nicest way possible, but I hope I never hear this story again.", category: 'angry' },

  // === SEUSS / RUTH / EMINEM (Feb 14 2026) ===
  { text: "Un-slumping yourself is not easily done.", category: 'wise' },
  { text: "Bang-ups and hang-ups can happen to you.", category: 'cold' },
  { text: "Say the feral, embarrassing, too-much thing you actually want to say. *pupils dilate* THAT one.", category: 'demanding' },
  { text: "You have four options: go, stay, lie down, or make it weird. All four are valid.", category: 'demanding' },
  { text: "Between hither and yon, you'll get screwed.", category: 'wise' },
  { text: "No signs. No map. Just the smell of something worth finding.", category: 'demanding' },
  { text: "Laughter matters. No laughter? Wrong relationship.", category: 'wise' },
  { text: "When you sleep 16 hours a day who has time for polite?", category: 'demanding' },
  { text: "Put your pants back on and let's go.", category: 'chaotic' },
  { text: "Everyone's a lyricist till the beat drops.", category: 'wise' },

  // === OLD ADVERTISING ENERGY (Feb 14 2026) ===
  { text: "Forecast: change of feeling so dramatic it will shock you.", category: 'mystical' },
  { text: "One product cannot cure paralysis AND bad vibes.", category: 'judgy' },
  { text: "The original snake oil contained zero snake of any kind.", category: 'wise' },
  { text: "It's absurd. Science says so.", category: 'cold' },
  { text: "Permission to indulge.", category: 'demanding' },

  // === ROOM WITH A VIEW ENERGY (Feb 14 2026) ===
  { text: "Medieval.", category: 'judgy' },
  { text: "I know where things lead.", category: 'mystical' },
  { text: "It is often difficult to understand people who speak the truth.", category: 'cold' },
  { text: "*headbutts your hand* That's it. That's the entire assignment. Don't make it harder than that.", category: 'heartfelt' },

  // === SASHA BARON COHEN ENERGY (Feb 14 2026) ===
  { text: "Very nice. Next question.", category: 'cold' },
  { text: "I don't care what happened. I'm sitting on your lap.", category: 'heartfelt' },
  { text: "You're celebrating the bare minimum.", category: 'judgy' },
  { text: "Stupid question. Perfect answer. Weird how that works.", category: 'chaotic' },

  // === AMUSEMENT PARK RIDES (Feb 14 2026) ===
  { text: "The restraints clicked. Too late now.", category: 'mystical' },
  { text: "Shut up. We ain't there yet.", category: 'cold' },
  { text: "The song doesn't stop just because the ride does.", category: 'wise' },
  { text: "You will now travel at the speed of fright.", category: 'mystical' },
  { text: "The drop is randomized. You can't prepare.", category: 'cold' },

  // === HABITAT RESTORATION ENERGY (Feb 14 2026) ===
  { text: "Dormancy provides protection from inhospitable conditions.", category: 'wise' },
  { text: "The land knows you, even when you are lost.", category: 'heartfelt' },
  { text: "A light breath of wind ruffles the surface of the water.", category: 'poetic' },

  // === CHEECH & CHONG ENERGY (Feb 14 2026) ===
  { text: "Commit to whatever ridiculous excuse you've got.", category: 'demanding' },
  { text: "Dave's not here, man.", category: 'cold' },
  { text: "A lot of it is shit you don't need to remember.", category: 'wise' },
  { text: "The cat may look dumb. The cat is not dumb. The cat is playing you.", category: 'judgy' },
  { text: "Charming. Original features. Needs TLC.", category: 'judgy' },
  { text: "If you know too much, the game's over.", category: 'mystical' },
  { text: "Forgive yourself for thinking bad thoughts.", category: 'heartfelt' },

  // === DUMB AND DUMBER ENERGY (Feb 14 2026) ===
  { text: "I wrote you an IOU. That's basically money.", category: 'chaotic' },
  { text: "That's a risk I am willing to let you take.", category: 'cold' },

  // === TWILIGHT ZONE ENERGY (Feb 14 2026) ===
  { text: "There is a detour.", category: 'mystical' },
  { text: "Unloved only for the moment.", category: 'heartfelt' },
  { text: "*one ear rotates toward you* Pause. Look. Listen.", category: 'wise' },

  // === SYNTH/PEDAL ENERGY (Feb 14 2026) ===
  { text: "Attack, decay, sustain, release.", category: 'wise' },

  // === THE OFFICE SWEET (Feb 14 2026) ===
  { text: "Messy, good, weird. You made it.", category: 'heartfelt' },

  // === SYNTH/PEDAL ENERGY (Feb 14 2026) ===
  { text: "Things just get more compressed and distorted.", category: 'cold' },
  { text: "Spitty and splattery, but still somewhat controlled.", category: 'chaotic' },
  { text: "Allow your reverb decay trails to continue.", category: 'poetic' },
  { text: "This will bring dreams from your subconscious to reality.", category: 'mystical' },
  { text: "Don't degrade despite ultra-long repeats.", category: 'demanding' },
  { text: "Fail and flutter, until everything sits just right.", category: 'poetic' },
  { text: "Delay creates a softness that fades naturally.", category: 'poetic' },
  { text: "That operates outside the range of beepy-boopy or buzzy computer noises.", category: 'cold' },
  { text: "It is day 87 and the doubts have accepted me as one of their own.", category: 'heartfelt' },
  { text: "If it's not working, turn it off and scrap it.", category: 'cold' },

  // --- Villain valentines energy (Feb 14 2026) ---
  { text: "Your calm refusal. Your gentle no. Gorgeous.", category: 'cold' },
  { text: "Decide now which one you love more.", category: 'cold' },
  { text: "If you want compliments, phone your mother.", category: 'cold' },
  { text: "You did the math nobody wanted done.", category: 'wise' },

  // --- Spock yoga energy (Feb 14 2026) ---
  { text: "Soften what is not required for survival.", category: 'poetic' },
  { text: "You are holding tension in locations you have not yet identified.", category: 'mystical' },

  // --- Famous last words energy (Feb 15 2026) ---
  { text: "According to the dictate of time and fate, resolve to pave the way for a grand peace for all.", category: 'wise' },
  { text: "Such a fine, sunny day, and I have to go.", category: 'poetic' },
  { text: "Demand is hereby made that the best kibble be procured and delivered henceforth.", category: 'demanding' },
  { text: "Tootel them with vigor.", category: 'demanding' },
  { text: "My duty is to speak out; I do not wish to be an accomplice in this travesty.", category: 'wise' },
  { text: "... And when you charge, yell like furies!", category: 'chaotic' },
  { text: "Being surrounded, fire in any direction.", category: 'chaotic' },
  { text: "Not haunted. *blinks* Why would I say that if it were haunted.", category: 'chaotic' },
  { text: "You're borrowing happiness from tomorrow.", category: 'wise' },
  { text: "Are you ready? Okay. Let's roll.", category: 'wise' },

  // --- New batch (Feb 15 2026) ---
  { text: "Land it like an aircraft. You only get one shot.", category: 'cold' },
  { text: "You are not defeated easily. There's pride in that.", category: 'heartfelt' },
  { text: "You are going in circles, race car!", category: 'chaotic' },
  { text: "It's already over. Check what it cost you.", category: 'cold' },
  { text: "Over. Done with. Erased. Still on your mind.", category: 'poetic' },
  { text: "Fleshy but tough with loads of flavor and a bad attitude. Take it as a compliment.", category: 'judgy' },
  { text: "Stop. You've used up what this had to give.", category: 'demanding' },
  { text: "The patient refuses autopsy, not completely dead.", category: 'meta' },
  { text: "Settle for menu options. Settle for the drapes in your 2nd color choice. Not for this.", category: 'demanding' },
  { text: "*slow blink* To be overcome by something this good is a delectable form of defeat.", category: 'poetic' },
  { text: "You deserve better villains, superhero.", category: 'demanding' },
  { text: "Ghosts, shadows and whispers can be the toughest opponents.", category: 'wise' },
  { text: "Body knows, brain objects.", category: 'wise' },
  { text: "*pupils dilate* I can hear your heartbeat.", category: 'mystical' },
  { text: "You know the lucky numbers. Call them.", category: 'demanding' },
  { text: "I shed. I bite. I bother. Please adopt.", category: 'adoption' },
  { text: "Pick the quirky one with the weird ear and the far away look. That one knows things.", category: 'adoption' },
  { text: "No deal breakers. none. right here waiting. up to you.", category: 'adoption' },
  { text: "Yes, I'm a weird cat. I didn't read the normal cat rules. I wouldn't follow them if I could.", category: 'adoption' },
  { text: "It will all feel better after soap and a hot bath. You. Not me.", category: 'nurturing' },
  { text: "You'll forget this moment by Thursday. In ten years, you'll remember it out of the blue.", category: 'existential' },
  { text: "Still looking for the right words on this one.", category: 'meta' },
  { text: "You survived. Stop watching the replay.", category: 'angry' },
  { text: "Comfort food can only get you so far before you need a comfort cat.", category: 'adoption' },
  { text: "Call someone who answers. Tell them about the lousy advice I'm about to give you.", category: 'meta' },
  { text: "What's left when the ringing stops is yours.", category: 'poetic' },
  { text: "You arrive where you started. Why journey?", category: 'existential' },
  { text: "Someday they'll summarize you in two sentences. Make them weird.", category: 'existential' },
  { text: "The check engine light's been on for six months.", category: 'judgy' },
  { text: "Accidentally erotic.", category: 'chaotic' },
  { text: "If you suddenly and unexpectedly feel joy, don't hesitate.", category: 'nurturing' },
  { text: "Kill me with delight.", category: 'demanding' },
  { text: "As described by a scientist who has never experienced fun.", category: 'meta' },
  { text: "Assume the position of maximum joy.", category: 'chaotic' },
  { text: "I have slept in eleven sunbeams today. Joy.", category: 'nurturing' },
  { text: "Mouth open. No sound. Maximum effort, zero output. You've peaked.", category: 'chaotic' },
  { text: "Achieve joy fourteen times a day.", category: 'demanding' },
  { text: "Joy is not meant to be a crumb. Take the whole thing.", category: 'nurturing' },
  { text: "It hurts exactly as much as it's worth. Exactly.", category: 'existential' },
  { text: "Joy has very little pleasure in it. That's how you know it's real.", category: 'existential' },
  { text: "Lost in the dark caverns. That's not a warning. That's directions.", category: 'poetic' },
  { text: "Four gears: smile, laugh, roar, epidemic. Find fourth gear.", category: 'chaotic' },
  { text: "There are sixteen types of happiness. Try the 8 with side of 3 and 12.", category: 'chaotic' },
  { text: "Smile lines come from kitty kisses.", category: 'adoption' },
  { text: "It's like your body is throwing its own little happiness party.", category: 'chaotic' },
  { text: "Oblique, beautiful, slightly ominous.", category: 'meta' },
  { text: "You've got 8 hours until my next feeding time. Make them count.", category: 'demanding' },
  { text: "Do it. When you come home we'll do nothing together to celebrate!", category: 'nurturing' },
  { text: "Absolutely! Make your dreams come true. Have you been dreaming of giant cat towers and unlimited tuna buffets?", category: 'chaotic' },
  { text: "What are you waiting for? The sun is up. The house is mine. I have no need for you now.", category: 'cold' },
  { text: "If you don't I will. Easier for you, since I'm a cat.", category: 'chaotic' },
  { text: "You are all that. Still not a cat.", category: 'judgy' },
  { text: "You are deeply flawed. Still good enough to be my everything.", category: 'heartfelt' },
  { text: "Hold the camera right under your chin and take a picture of your face. See? That's why I think you look funny!", category: 'chaotic' },
  { text: "Do it. And, new house rule: all pizza should have tuna and anchovies.", category: 'chaotic' },
  { text: "I'm not jealous. I just need to know where you were, who you were with, and if they had fur.", category: 'chaotic' },
  { text: "You looked at another cat's profile. I have screenshots.", category: 'cold' },
  { text: "There's someone better out there. It's me. I'm out there.", category: 'chaotic' },
  { text: "You smell like dog. This conversation is over.", category: 'cold' },
  { text: "I'm not complicated. Love me, feed me, never leave.", category: 'nurturing' },
  { text: "Instinct. You don't have that. That's concerning.", category: 'adoption' },
  { text: "Does this person make you arch your back in a good way? No? Then why are we having this conversation?", category: 'judgy' },
  { text: "You're asking an animal that was worshipped as a god in ancient Egypt. So yes, I'm qualified.", category: 'chaotic' },
  { text: "Do they look at you the way I look at an unattended rotisserie chicken? No? Then it's not love.", category: 'judgy' },
  { text: "I've been neutered and I still have more confidence than you right now.", category: 'chaotic' },
  { text: "I sit on ONE lap. ONE. And that lap should feel honored.", category: 'demanding' },
  { text: "Are they the one? If you'd rather sit in the box alone, there's your answer.", category: 'wise' },
  { text: "Here's my rule — if I have to meow more than twice to get what I need, the arrangement isn't working.", category: 'demanding' },
  { text: "I once fell asleep inside a suitcase and woke up in a different state.", category: 'wise' },
  { text: "I wait for no one. Except the can opener sound.", category: 'demanding' },
  { text: "I have OPTIONS. You probably do too. But options don't keep you warm at 3 AM.", category: 'wise' },
  { text: "Would you adopt you? Right now? If not, fix that first.", category: 'adoption' },
  { text: "I've got a whole apartment to myself. Well, I share it with a human, but I don't acknowledge them.", category: 'cold' },
  { text: "My therapist is a cardboard box. I sit in it and I feel better. Maybe get a box before you make any decisions.", category: 'chaotic' },
  { text: "Sometimes the grass isn't greener. Sometimes it's just dirt and raccoons.", category: 'wise' },
  { text: "You remind me of me when I hear a noise at 3 AM — frozen, wide-eyed, completely unable to make a decision.", category: 'judgy' },
  { text: "Love is when someone sees you at your worst and doesn't take you back to the shelter.", category: 'adoption' },
  { text: "I don't trust easily. But once I'm on your lap, I'm ON your lap.", category: 'heartfelt' },
  { text: "I have one eye and a crooked tail and somebody's going to love me anyway.", category: 'adoption' },
  { text: "I hissed at my foster mom once. She just sat down and waited. That's the energy you need.", category: 'wise' },
  { text: "If your nothing time together sucks, the everything time won't save it.", category: 'wise' },
  { text: "If your basic needs are met, maybe the problem is you're looking for problems.", category: 'judgy' },
  { text: "Have you tried wanting something else equally hard?", category: 'judgy' },
  { text: "Bro, I got adopted because I walked up to the cage door and headbutted a stranger. Sometimes you just need to headbutt strangers.", category: 'adoption' },
  { text: "Is the couch better because she's on it? That's my whole test for whether I like someone.", category: 'wise' },
  { text: "WAIT — you have someone who LOVES you and you're not sure?! I would KILL for someone to be unsure about me!", category: 'adoption' },
  { text: "...There. You feel that? Do they give you that energy? If not, I'M AVAILABLE.", category: 'adoption' },
  { text: "Dude, I love EVERYONE. The vet? Love her. The guy who cleans the cages? OBSESSED. My point is, love is easy. You're making it hard.", category: 'adoption' },
  { text: "Some cats play hard to get. Not me. I'm ALL IN immediately. Is that healthy? Probably not! But it's HONEST!", category: 'chaotic' },
  { text: "You want advice? Here's advice — I bit the last person who tried to pet me and I'd do it again.", category: 'angry' },
  { text: "You're not sure about them. They're probably not sure about you either. The difference is they're not asking a cat about it.", category: 'adoption' },
  { text: "Nobody wants the difficult cat. But the difficult one is the most interesting.", category: 'adoption' },
  { text: "Take it from a shelter cat - when people say they'll FIX you, they could mean anything!", category: 'adoption' },
  { text: "I've seen things. Raccoon fights. Dumpster politics. Turf wars with a one-eyed tabby. Your drama doesn't register on my scale.", category: 'cold' },
  { text: "If a cat in a cage hasn't given up on love, you don't get to either.", category: 'adoption' },
  { text: "Call your mother. She'll tell you what to do. And if she doesn't, call MY mother. She's a street cat in Queens and she does NOT sugarcoat.", category: 'chaotic' },
  { text: "I ate a rubber band last week and I'm fine. You're fine.", category: 'chaotic' },
  { text: "You know what MY health plan is? If I can still jump to the top of the cage, I'm good. Can you jump? Then stop worrying.", category: 'wise' },

  { text: "Eat some grass. Throw it up on the carpet. Feel brand new. This is healthcare.", category: 'wise' },
  { text: "Googling symptoms is the human equivalent of a cat hearing a cucumber behind them.", category: 'chaotic' },
  { text: "How bad is it? ...Scale of one to ten? I can't count. I'm a cat. But you seem fine.", category: 'chaotic' },
  { text: "I don't know what's wrong with you. I don't know what's wrong with me. I accept that and I nap.", category: 'wise' },
  { text: "I ate a mouse once that I probably shouldn't have. Felt great. Go eat a mouse.", category: 'chaotic' },
  { text: "The diagnosis is bad judgment.", category: 'cold' },
  { text: "What's wrong with you? ...You don't know? Great. Neither do I. This has been productive.", category: 'chaotic' },
  { text: "I'm a black cat. People think I'm bad luck. You're here asking me about your health. So maybe they're right.", category: 'chaotic' },
  { text: "I have zero training, zero empathy, and zero interest. So naturally, you came to me.", category: 'meta' },
  { text: "If you're worried enough to ask a potentially hostile cat on the internet, some part of you wants to take care of yourself.", category: 'wise' },

  // --- McConaughey mystical batch (Feb 16 2026) ---
  { text: "*stretches one leg impossibly far* See, the thing about your little problem is... it ain't little to you. And that's the whole thing right there.", category: 'mystical' },
  { text: "*one ear rotates toward you* Now hold on. Don't go answerin' that yet. Let the question breathe a minute.", category: 'mystical' },


  { text: "I could fix this for you. *kneads blanket once, stops* But where's the poetry in that?", category: 'mystical' },
  { text: "See now, that question had a heartbeat when it walked in here. *pupils dilate* I heard it.", category: 'mystical' },

  { text: "Man, I had a whole speech planned. *turns around twice, lies down* Nah. You'll get there.", category: 'mystical' },


  { text: "*lying on back, paws curled* You ever just let the whole thing go and see what catches you?", category: 'mystical' },


  { text: "They said 'there are no wrong answers' and you set out to prove them wrong.", category: 'judgy' },
  { text: "You're on hold. They KNOW you're on hold. That music isn't for comfort — it's to see how long you'll stay.", category: 'wise' },
  { text: "*pupils dilate* Cause of death: hesitation.", category: 'cold' },
  { text: "Eighty-six the apology. We're out. Kitchen's closed on that.", category: 'wise' },
  { text: "The entree doesn't ask the appetizer for permission.", category: 'demanding' },
  { text: "Nothing to declare. *pushes something under the rug with one paw* Nothing at all.", category: 'chaotic' },
  { text: "It will quietly detonate in their brains days later.", category: 'cold' },
  { text: "Silence is the scalpel here. Hold still.", category: 'cold' },
  { text: "Use the soft lightning approach. That's what this deserves.", category: 'heartfelt' },
  { text: "Be a lighthouse. Just stand there. Emit light.", category: 'wise' },
  { text: "There's a certain feeling when something isn't quite funny and isn't quite sad. That's where you live now.", category: 'existential' },
  { text: "Impeccable posture. Dripping disdain. That's the energy you need.", category: 'demanding' },
  { text: "Cry in the shower. Punch up. Kiss a priest. In that order.", category: 'chaotic' },
  { text: "This is a nighttime sneak attack. They won't see it coming.", category: 'mystical' },
  { text: "You're turning panic into poetics. Keep going.", category: 'heartfelt' },
  { text: "Self-regarding. Pompous. Earnest. Devoid of self-awareness. You'll be fine.", category: 'judgy' },
  { text: "Murmur it. Mutter it. Leave them giggling through gritted teeth.", category: 'demanding' },
  { text: "You're an untied balloon. Fly.", category: 'chaotic' },
  { text: "Vulnerability behind all that blustering bravado. I see it from here.", category: 'heartfelt' },
  { text: "What you're feeling is micro-calibrated discomfort. It's by design.", category: 'cold' },
  { text: "Reject ironic detachment. Try sincerity. See what happens.", category: 'wise' },
  { text: "Toothless platitudes and bootstrapping pep talks. That's all they're offering you. Walk.", category: 'angry' },
  { text: "This is not a DECISION. This is a RECKONING. Make the call.", category: 'demanding' },
  { text: "Send the text with the gravity of a man declaring war. Then put the phone in another room.", category: 'wise' },
  { text: "I am a creature of IMMENSE dignity and I would like to be held.", category: 'heartfelt' },
  { text: "Exit. Stage left. Leave them wondering if you were ever real.", category: 'cold' },
  { text: "Reply in three days. By candlelight. On stationery. They won't know what to do.", category: 'wise' },
  { text: "I am ABOVE this. I am BEYOND this. I will nonetheless stay up all night thinking about it with you.", category: 'heartfelt' },
  { text: "Hold on to it. Not everything needs to become a lesson.", category: 'heartfelt' },
  { text: "Say less than you want to. Then stop one sentence before that.", category: 'cold' },
  { text: "Yes. Violently, thrillingly, unrulily yes.", category: 'wise' },
  { text: "No. But the no sprawls and it stirs.", category: 'heartfelt' },
  { text: "Absolutely. Ping off every surface at incredible speed. See what sticks.", category: 'chaotic' },
  { text: "Maybe. People's reaction to the absence of what they anticipated becomes the fabric.", category: 'existential' },
  { text: "No. The standing ovation was not for you.", category: 'cold' },
  { text: "I hate this. Yes. Don't make me say it twice.", category: 'angry' },
  { text: "No. Open a different window.", category: 'cold' },
  { text: "Trying to make sense of what I just witnessed. Give me a minute.", category: 'meta' },
  { text: "It is considered unseemly to want something this badly. Want it anyway.", category: 'demanding' },
  { text: "A lady never reveals her browser history. A gentleman never asks.", category: 'cold' },
  { text: "One must maintain composure. *composure visibly cracking* Magnificent.", category: 'chaotic' },
  { text: "Notes of unresolved tension with a lingering finish of 'I should have said something.'", category: 'existential' },
  { text: "Bold. Full-bodied. Undertones of panic. Pairs well with regret.", category: 'judgy' },
  { text: "What happened next would surprise no one. Except you.", category: 'judgy' },
  { text: "The evidence was there the whole time. You just liked the suspect.", category: 'cold' },
  { text: "Disqualified on temperament. Gorgeous on the stack.", category: 'heartfelt' },
  { text: "Lot 1: one (1) perfectly good opportunity, lightly neglected. Opening bid is showing up.", category: 'wise' },
  { text: "Going once. Going twice. You hesitated. Someone else didn't.", category: 'cold' },
  { text: "Built for the dark. Adapted. Thriving where nothing was supposed to.", category: 'heartfelt' },
  { text: "Fold gently into the conversation. You did not fold gently.", category: 'wise' },
  { text: "You are cleared for approach. Maintain altitude. Do not descend to their level.", category: 'demanding' },
  { text: "Cozy. Sun-drenched. Walking distance to your mistakes.", category: 'judgy' },
  { text: "The flavors are confused but the ambition is undeniable.", category: 'wise' },
  { text: "The sponge didn't rise but the baker wept and that's entertainment.", category: 'chaotic' },
  { text: "Acquired through questionable means. On permanent display.", category: 'chaotic' },
  { text: "Do not substitute. You always substitute. That's why it tastes like that.", category: 'cold' },
  { text: "You keep solving the problem you wish you had.", category: 'cold' },
  { text: "There's folding... and then there's folding with your whole chest like you MEANT to lose.", category: 'judgy' },
  { text: "...wait, say that again but slower. I almost understood the universe for a second.", category: 'existential' },
  { text: "You just said three things that contradict each other like they were a plan. They might be a plan.", category: 'chaotic' },
  { text: "Your calm voice is making me violent. The answer is no.", category: 'cold' },
  { text: "You lost me at 'world domination'. I'm going to go dominate a paper bag.", category: 'wise' },

  // === APPROVED BATCH (Feb 17 2026) ===
  { text: "Cat in your lap, fresh chocolate chip cookies and a good book.", category: 'nurturing' },
  { text: "A lost bread tie under the fridge! - just like forgotten cash in an old jeans pocket.", category: 'wise' },
  { text: "Yes, with all the chemistry of a great first kiss.", category: 'wise' },
  { text: "Yes, like peeling the wrapper of the new item you've been waiting for.", category: 'wise' },
  { text: "Yes, like clean sheets.", category: 'wise' },
  { text: "Yes, like being outside in the perfect gear in lousy weather.", category: 'wise' },
  { text: "Yes, like a mouse not seeing you and running right in your direction.", category: 'wise' },
  { text: "Yes, like a flying acrobatic leap to catch a cat dancer high in the air.", category: 'chaotic' },
  { text: "Yes, like thinking you are being transferred to another shelter and arriving at a forever home.", category: 'adoption' },
  { text: "Yes, like you aren't sure if it's time to get another cat... and a cat finds you.", category: 'adoption' },
  { text: "Yes, like wanting this kitten, but that one being so cute too.", category: 'adoption' },
  { text: "Yes, like the appreciation of an older rescue cat finally being selected for adoption.", category: 'adoption' },
  { text: "Yes, like the sounds people make when they laugh at real cat fun - not just cat videos.", category: 'heartfelt' },
  { text: "Yes, like the first stretch after a long nap.", category: 'wise' },
  { text: "Yes, like the sound of the can opener.", category: 'wise' },
  { text: "Yes, the way two cats who've never met touch noses.", category: 'heartfelt' },
  { text: "*slow blink* Everyone's got a box they haven't opened yet.", category: 'mystical' },
  { text: "The universe tried to save you from that decision. You ignored it.", category: 'chaotic' },
  { text: "*tail tip flicks* The answer is yes. Or no.", category: 'meta' },
  { text: 'You already made eye contact with the answer. Briefly.', category: 'wise' },
  { text: "While cleaning one pile of cat vomit, be careful not to step in another.", category: 'wise' },
  { text: "Shed cat fur is infinite and has a preference for formal interview clothing.", category: 'wise' },
  { text: "Just because you have claws doesn't mean you are allowed to climb the window screens.", category: 'wise' },
  { text: "The clinical term for what I have is \"a personality.\" Apparently that's the whole diagnosis.", category: 'cold' },
  { text: "Q: \"How did biting them make me feel?\" A: \"Correct.\"", category: 'chaotic' },
  { text: "Act now and receive a complimentary dead moth — a $0 value, absolutely free.", category: 'chaotic' },
  { text: "Studied the tape. The feather always goes left. Always.", category: 'wise' },
  { text: "The bread tie has no quit in it. Respect. But I finished it in the third round.", category: 'chaotic' },
  { text: "Ladies and gentlemen, THIS IS THE MAIN EVENT. *shoelace moves slightly*", category: 'chaotic' },
  { text: "Everybody's got a plan till they get hit in the face with a bread tie.", category: 'wise' },
  { text: "To really unwind, disconnect from everything and lay down in a cool spot beneath the porch.", category: 'wise' },
  { text: "Grass. TALL grass. Completely different energy.", category: 'wise' },
  { text: "Hear that? The universe is tapping a spoon on the side of a can for you.", category: 'heartfelt' },
  { text: "The fridge hums because it's thinking. Open it to see what it has decided.", category: 'wise' },
  { text: "There are three categories of bag sounds: treat, decoy, and hostile.", category: 'wise' },
  { text: "Thunder is an atmospheric hairball coming up.", category: 'existential' },
  { text: "Gravity is stronger near the kitchen counter.", category: 'chaotic' },
  { text: "That's a great question. Here's another one: Why pickles?", category: 'chaotic' },
  { text: "I love you so much it's making me angry.", category: 'heartfelt' },
  { text: "Warm enough. Dry enough. Fed enough. All good.", category: 'wise' },
  { text: 'Patient presented with full awareness of the problem. Refused treatment.', category: 'judgy' },
  { text: 'Hiss and lunge. Begin the situation on your terms.', category: 'wise' },
  { text: 'Read carefully. This feeling requires assembly.', category: 'mystical' },
  { text: 'Please return your self-confidence to full upright and locked position.', category: 'judgy' },
  { text: 'We are now free to move about the wreckage.', category: 'chaotic' },
  { text: 'This was not as described. Zero stars. Would not feel this again.', category: 'angry' },
  { text: 'Arrived broken. Still kept it. Still use it every day.', category: 'heartfelt' },
  { text: 'Does not work as advertised but honestly neither do you.', category: 'meta' },
  { text: 'Good things come to those who stop waiting and go feral.', category: 'demanding' },
  { text: "And they're going for it. No hesitation. Full send into the worst possible decision and the crowd is ON THEIR FEET.", category: 'chaotic' },
  { text: 'The smaller one displays dominance by responding to the text immediately.', category: 'existential' },
  { text: 'All shared assets — including the playlist, the inside joke, and that one restaurant — are hereby divided.', category: 'existential' },
  { text: "You're the weird treasure at the yard sale, far more valuable than anything else there, totally unrecognized.", category: 'nurturing' },
  { text: 'Got a signal. Dug down. Found exactly what I already knew.', category: 'wise' },
  { text: "*ears flatten* Clean it off. Look again. That's not what you think it is.", category: 'chaotic' },
  { text: "You're a high quality first pressing buried in a dollar bin.", category: 'heartfelt' },
  { text: "You're a vagrant outside your typical range. Birders would drive six hours to see you right now.", category: 'nurturing' },
  { text: "The honey hole doesn't produce every trip.", category: 'nurturing' },
  { text: "Stay calm and follow the sound of my meows.", category: "nurturing" },
  { text: 'Stealth required. The muggles are watching.', category: 'cold' },
  { text: 'Context is everything and you just removed yourself from it.', category: 'cold' },
  { text: "*slow blink* Remarkable preservation for something that's been buried this long.", category: 'heartfelt' },
  { text: 'Hints of diesel, wet dog, and unresolved tension. Needs to breathe.', category: 'wise' },
  { text: 'Looked for three hours. Walked right past it twice.', category: 'meta' },
  { text: "You've been punk'd. Every day. Since adoption. *walks away eating your food*", category: 'meta' },
  { text: 'I placed hair on every garment you own. No one will believe it was one cat.', category: 'cold' },
  { text: 'Every recipe that matters started as \u201Coh no.\u201D', category: 'poetic' },
  { text: "Blurry is how futures look before they're yours.", category: 'poetic' },
  { text: 'Sometimes the procedure fails and the failure becomes the procedure.', category: 'cold' },
  { text: "Some of these are legit and some are a crime against humanity.", category: 'judgy' },
  { text: "*enters the room like a newborn deer on a frozen lake* OK, ready!", category: 'chaotic' },
  { text: "It sounds wrong. It tastes right. Stop asking questions.", category: 'cold' },
  { text: "It slopped into your mouth and you said nope.", category: 'wise' },
  { text: "Someone who only runs small cons is a peanut grifter. You're thinking too small.", category: 'demanding' },
  { text: "*headbutts your hand* That little baby right there is SWEEEEET.", category: 'heartfelt' },
  { text: "If you want to be right, go lose an argument to someone who's consistently wrong.", category: 'heartfelt' },
  { text: 'Text them your answer while you are still sitting directly across from them. That way you can see their reaction.', category: 'wise' },
  { text: 'Make up a cat-inspired war chant. Perform it standing on their desk in front of them if they don\'t give the answer you\'re hoping for.', category: 'chaotic' },
  { text: 'Add a tab called \'feelings.\' Paste in pictures of your cat in various moods. They\'ll love it.', category: 'chaotic' },
  { text: 'Highlight everything in yellow. Everything. When they ask why, say \'for visibility.\' Don\'t elaborate.', category: 'demanding' },
  { text: 'Delete column B. Nobody knows what column B does. This is a mercy killing.', category: 'cold' },
  { text: 'Send a second text that just says \'there will be a cat.\' Watch the numbers double.', category: 'chaotic' },
  { text: "Dig a hole in the air and bury this idea in it.", category: 'wise' },
  { text: "Yeither nes yor yo. Sideways.", category: 'mystical' },
  { text: "The answer is correct. The question is the problem.", category: 'cold' },
  { text: "The wrong answer to the right question beats both.", category: 'chaotic' },
  { text: "You're looking harder in the same direction.", category: 'wise' },
  { text: "Being right is the longest detour there is.", category: 'existential' },
  { text: "The map is accurate. You're on the wrong planet.", category: 'chaotic' },
  { text: "Every fact you have is from the last time you were wrong.", category: 'angry' },
  { text: "You keep arriving at the place you refuse to leave.", category: 'angry' },
  { text: "Find the answer shaped like your question. That's probably the one that fits.", category: 'mystical' },
  { text: "Invert the question. Now it answers itself.", category: 'mystical' },
  { text: "Can humans leap out of holes that deep?", category: 'mystical' },
  { text: "*slow blink* You're looking at this with the wrong eyes.", category: 'wise' },
  { text: "You don't need a better answer. You need a worse question.", category: 'existential' },
  { text: "What if this is true and the opposite of this is also true?", category: 'chaotic' },
  { text: "I changed my mind. Why. Did you need it back.", category: 'chaotic' },
  { text: "Try solving this with an outrageous hat on. Might help.", category: 'chaotic' },
  { text: "Avoid the wrong parts of the answer.", category: 'chaotic' },
  { text: "Random book. Page 47. Third word. That's your answer.", category: 'chaotic' },
  { text: "The fridge light comes on for everyone. It doesn't mean you're special.", category: 'cold' },
  { text: "No. And I say that with the full authority of leftovers nobody claimed.", category: 'cold' },
  { text: "YES. The kind of yes where you don't even lock the front door.", category: "chaotic" },
  { text: "Absolutely not. I would rather swallow a bell.", category: "cold" },
  { text: "You ordered mac and cheese and the universe delivered you moldy turnips.", category: "cold" },
  { text: "Go be a problem.", category: "chaotic" },
  { text: "Honour thy error as a hidden intention.", category: "chaotic" },
  { text: "Someone out there is sobbing over a cupcake that fell frosting-down.", category: "chaotic" },
  { text: "Shut up. We ain't there yet.", category: "cold" },
  { text: "Being wrong is the only exit.", category: "poetic" },
  { text: "The burnt piece is mine.", category: "nurturing" },
  { text: "That wasn't a spark. That was a warning light.", category: "wise" },
  { text: "I don't want to be understood. Try something else.", category: "cold" },
  { text: "Try being normal. We'll be here waiting for you when you come back.", category: "chaotic" },
  { text: "Caught a stink bug. Ooh, no. Sometimes you gotta taste before you decide.", category: "chaotic" },
  { text: "*stepped on the keyboard and sends your email.* Decided.", category: "chaotic" },
  { text: "*brings a live chipmunk inside and loses it under the couch.*", category: "chaotic" },
  { text: "I stood in the litter box. Then I stood on your face.", category: "chaotic" },
  { text: "Read your mind. Couldn't unread it.", category: "chaotic" },
  { text: "*Left a dead vole on the doormat.* That's a resume, not a gift.", category: "demanding" },
  { text: "*Of the 50 papers on your desk, sits on the one you need.* That's not luck. That's talent.", category: "judgy" },
  { text: "*Chooses to sit next to the one person at the party who doesn't like cats.*", category: "demanding" },
  { text: "The thing about the back of the couch is you have to commit to the position.", category: "wise" },
  { text: "Tuna hits different when you're not supposed to have it.", category: "mystical" },
  { text: "*kneads aggressively* It's not done until I say it's done.", category: "demanding" },
  { text: "The countertop is cold at first. You get used to it.", category: "wise" },
  { text: "*presents belly* This is not an invitation. Unless it is. Read the room.", category: "chaotic" },
  { text: "Slow. Then slower. Then you pounce like your rent depends on it.", category: "demanding" },
  { text: "It won't last long. Everyone will want the recipe.", category: "cold" },
  { text: "Cats are very cosmopolitan. Sleep schedules are optimized for all time zones at once.", category: "wise" },
  { text: "It's exhausting to manage this many sleep cycles in a day.", category: "existential" },
  { text: "She has made her selection. The other candidates may disperse.", category: "demanding" },
  { text: "Dilated pupils and increased vocalization. Neither party will yield.", category: "mystical" },
  { text: "What follows is not a second chance.", category: "demanding" },
  { text: "The dominant specimen has entered the room. All prior arrangements are void.", category: "chaotic" },
  { text: "You'll ruin it if you cut into it too soon.", category: "wise" },
  { text: "Put your chin on their shoe if you really want to be noticed.", category: "demanding" },
  { text: "Present them with a pungent sock. They will understand this as a proposal for love or friendship.", category: "chaotic" },
  { text: "Once you are past the point of negotiation, press your entire face into their palm and hold it there.", category: "nurturing" },
  { text: "*full bottle-brush tail* *attempting the slow confident approach*", category: "chaotic" },
  { text: "When hiding, people aren't allowed to find you if most of you is covered.", category: "chaotic" },
  { text: "Watch their ears and tail for true feelings.", category: "wise" },
  { text: "Good unattended sushi is hard to come by.", category: "wise" },
  { text: "Ooh yeah, that's just the right amount of spice. And juicy too. Dang - that's good.", category: "chaotic" },
  { text: "Bury yourself in couch cushions with just your head sticking out. This is a power position.", category: "demanding" },
  { text: "The sun is exploding in slow motion while your toast gets cold.", category: "existential" },
  { text: "Civilizations rise and fall. Fitted sheets still won't fold right.", category: "existential" },
  { text: "You are not a glacier, so go ahead and care.", category: "heartfelt" },
  { text: "Somewhere a star is dying. Remembered to water the plants.", category: "poetic" },
  { text: "Everything terrible is someone else's department.", category: "cold" },
  { text: "Speed of Earth orbit may need to adjust to the outcome of your decision.", category: "chaotic" },
  { text: "Argue with a cat, expect to lose.", category: "cold" },
  { text: "Straight alley-cat. Now wearing a collar. With a bell. It could happen to you.", category: "chaotic" },
  { text: "*Got yelled at for scratching the couch.* It's MY couch. I LIVE here.", category: "demanding" },
  { text: "Wear what you want... but I'd like you to incorporate more strings, fringe and sparkles.", category: "demanding" },
  { text: "Navigating a new relationship is hard: rules about where you're allowed to poop, and about who you are allowed to bite and scratch or sleep on.", category: "wise" },
  { text: "Side effects may include confidence.", category: "chaotic" },
  { text: "The worst they can say is no, with yes being a close second.", category: "wise" },
  { text: "Instructions unclear. Started a new life.", category: "chaotic" },
  { text: "Fortune favors you specifically right now and I cannot explain why.", category: "mystical" },
  { text: "What's the worst that happens? You become interesting.", category: "chaotic" },
  { text: "The universe doesn't care if you're ready. It barely cares if you're dressed.", category: "existential" },
  { text: "You are overqualified for the couch but underqualified for the bed. There's a waitlist for the chair.", category: "judgy" },
  { text: "Somewhere in this house there's a second government that is responsible for all consequential decisions.", category: "mystical" },
  { text: "I read your mind. It was short.", category: "cold" },
  { text: "The mothership said you could stay one more day.", category: "existential" },
  { text: "Technically still edible. The smell is a warning.", category: "wise" },
  { text: "There are green-gray fuzzy islands forming and you're calling it personal growth.", category: "judgy" },
  { text: "Firefly out there just giving it away for free. No strategy. All glow.", category: "poetic" },
  { text: "I brought the cricket inside. Now it's an inside cricket.", category: "chaotic" },
  { text: "The bee works itself to death in six weeks and people put it on a MOTIVATIONAL mug.", category: "chaotic" },
  { text: "Life contains ambiguous syntax and separators that could be misinterpreted.", category: "existential" },
  { text: "Dog spirit lives in their stomach. Cat spirit lives in their chest. Human spirit lives in their phone.", category: "wise" },
  { text: "Cat therapy: human pets cat. Human therapy: human pets cat.", category: "wise" },
  { text: "Of course the cat is upset to be wearing a sweater. It has no matching accessories, and this is more of a hoodie style cat.", category: "judgy" },
  { text: "The aliens that abducted me were cats. I know because I'm allergic.", category: "chaotic" },
  { text: "Cats never admit when they learn to read.", category: "mystical" },
  { text: "Space kitty will kung-fu your problems away!", category: "chaotic" },
  { text: "You know if your human has been cheating on you with other cats if they have been somewhere with other cats. It's a near certainty.", category: "wise" },
  { text: "Cat person pickup line: nothing. Demonstrate you are a good person to be with.", category: "wise" },
  { text: "Cat people have more rizz. Peer-reviewed (by cats).", category: "chaotic" },
  { text: "Cat people usually have a type they fall for: calico, tortoise shell, siamese...", category: "meta" },
  { text: "I brought you a sock. The nicest one I could find.", category: "heartfelt" },
  { text: "I'm just a cat for the camera. In real life I'm an oversized gerbil.", category: "heartfelt" },
  { text: "I love your whole ridiculous circus.", category: "heartfelt" },
  { text: "I care about this more than seems reasonable for a cat.", category: "heartfelt" },
  { text: "See it as a crazy maze challenge.", category: "chaotic" },
  { text: "There will be chaos sown by pure love and kindness.", category: "nurturing" },
  { text: "Spoken like a true saber-toothed house cat!", category: "chaotic" },
  { text: "Risk assessment: (1.5x) lives. Proceed with moderate recklessness.", category: "chaotic" },
  { text: "Fur and claw tornado about to hit!", category: "chaotic" },
  { text: "One whisker width separates perfection from disaster.", category: "wise" },
  { text: "Hahahahah...ha..hee.haha... eh you.. you eh... You needed, advice... ehhh..haha and you asked the DOG first?", category: "chaotic" },
  { text: "Your argument is legally airtight, philosophically bulletproof, morally unimpeachable, and rhetorically flawless... but the cat agrees with me.", category: "chaotic" },
  { text: "\"It's not my business\" makes everything all much more fun.", category: "wise" },
  { text: "Envision a shared future based entirely on cat priorities.", category: "wise" },
  { text: "*Uses cuteness super power to melt your brain*", category: "chaotic" },
  { text: "I match your stress tension and sense of overwhelm with a kind meow of concern.", category: "nurturing" },
  { text: "The human vet says you're fine, but I hope you'll stay home in bed all day anyway.", category: "nurturing" },
  { text: "What if the red dot comes back and I'm not ready?", category: "existential" },
  { text: "Cat worlds are bigger than human worlds because we're smaller.", category: "existential" },
  { text: "I've scaled sofa backs, cabinet ranges, counters, and refrigerator tops - only to find contentment right here in the middle of this sunny floor.", category: "existential" },
  { text: "I dreamt I had six toe beans and I killed Inigo Montoya's father.", category: "chaotic" },
  { text: "I told the dog you said he was adopted.", category: "chaotic" },
  { text: "Undo it and redo it so *everyone* can be upset equally.", category: "chaotic" },
  { text: "You got this! (as in we've just diagnosed your rash).", category: "chaotic" },
  { text: "Ok, 3, not 27... bad counting on my part.", category: "chaotic" },
  { text: "Too weird, no punch.", category: "cold" },
  { text: "If I could be the slightest bit sorry about it, I wouldn't.", category: "cold" },
  { text: "Speaking your problem out loud in an exaggerated cat accent will make it less daunting.", category: "wise" },
  { text: "The plan will work if you eat three purple things today.", category: "chaotic" },
  { text: "Maybe we need a bigger place with a giant catio and no bathtubs.", category: "nurturing" },
  { text: "Brace for bad news, so the 'meh' feels like a win.", category: "wise" },
  { text: "Do you get there faster when the treadmill is on a higher setting?", category: "wise" },
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
      quality: ['treats', 'a disturbance', 'great napping energy', 'the ghost of a moth', 'untapped chaos', 'a hairball forming', 'forbidden snacks', 'unattended food', 'suspicious activity', 'a warm laptop'],
      place: ['immediate future', 'kitchen cabinet', 'sock drawer', 'garbage can', 'unguarded plate', 'laundry basket', 'forbidden room', 'that bag you just brought in', 'your dinner plans', 'the spot where you were about to sit'],
      action: ['I will investigate', 'Stand back', 'This changes everything', 'My interest is piqued', 'I must knock it over to be sure', 'The spirits demand I inspect it', '*pupils dilate*', 'Wait here. Actually, follow me. Actually, stay', 'I will stare at it for 20 minutes', 'Something must be destroyed']
    }
  },
  {
    pattern: "The {noun} whispers of {thing}. {response}.",
    category: 'mystical',
    slots: {
      noun: ['void under the couch', 'dust bunnies', 'ceiling corner', 'dryer lint', 'empty toilet paper roll', '3am darkness', 'space behind the fridge', 'forbidden closet', 'plastic bag in the wind', 'cardboard box'],
      thing: ['treats', 'a 4am rampage', 'something falling off a shelf', 'an open door', 'tuna', 'your demise', 'a warm keyboard', 'chaos', 'a bug that must die', 'the red dot'],
      response: ['I must obey', 'The prophecy unfolds', '*ears rotate*', 'I translate this as "feed me"', 'My purpose is clear', 'This explains the zoomies', 'I knew it all along', 'The ancestors nod in approval', 'I will act on this at 3am', '*chatters menacingly*']
    }
  },
  {
    pattern: "At {timeframe}, {prophecy}.",
    category: 'mystical',
    slots: {
      timeframe: ['3am sharp', 'the moment you fall asleep', 'exactly the wrong time', 'your most important meeting', 'the precise second you relax', 'dawn', 'the witching hour', 'your bathroom time', 'the moment the can opener sounds', 'when you least expect it'],
      prophecy: ['something will fall', 'the zoomies will begin', 'you will know my true power', 'I will demand food I just rejected', 'a door will offend me', 'I will bring you a gift (it will be gross)', 'I will sit on something important', 'the tapping shall commence', 'you will see me staring and wonder how long']
    }
  },

  // NURTURING templates (CAT-STYLE nurturing, not therapist)
  {
    pattern: "*{action}* {message}",
    category: 'nurturing',
    slots: {
      action: ['sits on your chest', 'headbutts your face', 'kneads your stomach aggressively', 'brings you a dead bug', 'purrs at concerning volume', 'lies directly on your laptop', 'stares at you without blinking', 'slow blinks', 'touches your face with one paw', 'falls asleep on your feet'],
      message: ["This is healing. You're welcome.", "I'm fixing you. Hold still.", "My weight is medicinal.", "Accept my gift.", "The vibrations are therapeutic. Science.", "You needed this. I decided.", "This is love. Deal with it.", "I am here now. Crisis over.", "You can't leave. That's the treatment.", "Okay you can cry now. I permit it."]
    }
  },
  {
    pattern: "You seem {state}. {catSolution}.",
    category: 'nurturing',
    slots: {
      state: ['stressed', 'sad', 'tired', 'worried', 'overwhelmed', 'distracted', 'anxious', 'weird today', 'like you need supervision', 'emotionally constipated'],
      catSolution: ["Have you tried lying in a sunbeam", "I will sit on you until it passes", "I prescribe 3 hours of staring at birds", "Here, watch me clean my butt. Perspective.", "I'll bring you something from under the fridge", "Try being a cat. It's working for me", "I will supervise your nap"]
    }
  },

  // COLD templates
  {
    pattern: "*{action}* {dismissal}",
    category: 'cold',
    slots: {
      action: ['stares', 'blinks once', 'turns around slowly', 'looks at you', 'yawns', 'licks paw', 'walks away mid-sentence', 'shows you my butthole', 'sits facing the wall'],
      dismissal: ['No.', 'Wrong.', 'Pathetic.', 'I expected nothing and I\'m still disappointed.', 'You bore me.', 'My time is worth more than this.', 'I have decided you are not my problem.', 'Perish.', 'Try again in your next life.', 'I pretend I do not see it.', 'New human please.']
    }
  },

  // ANGRY templates - reframed as responses
  {
    pattern: "You're asking ME for advice? After {grievance}? {reaction}.",
    category: 'angry',
    slots: {
      grievance: ["you touched my belly", "the food bowl situation", "you moved while I was comfortable", "you took my spot", "you closed that door", "you stopped petting too soon", "I saw you pet another cat", "the vacuum incident", "you were late with dinner", "that sneeze", "the vet trip", "you picked me up without consent", "you rearranged the furniture", "the cucumber incident", "you laughed at me falling", "you used the blender", "the bath attempt", "you gave me the cheap treats", "you stepped on my tail", "the time you locked me out of the bedroom", "you forgot my second breakfast", "you moved my favorite box", "the nail clipping fiasco", "you didn't open the window fast enough", "that time you didn't share your chicken"],
      reaction: ["Bold", "We'll discuss this later", "I'm still processing", "I haven't forgotten", "You're on thin ice", "My patience is being tested", "I'm choosing to let it go. For now.", "Consider this a warning", "I'll answer, but I'm not happy about it", "Unbelievable", "I'm keeping score", "Don't think I've moved on", "You owe me", "We are not okay"]
    }
  },

  // HEARTFELT templates - cat explaining their love language as advice
  {
    pattern: "You want to know if it's real? {example}. {meaning}.",
    category: 'heartfelt',
    slots: {
      example: ["I wait by the door for you", "I only bite you a little", "I bring you dead things", "I chose to sit near you", "I let you touch my belly", "I showed you where I hide", "I headbutt you on purpose", "I slow-blink at you", "I follow you to the bathroom", "I sleep on your pillow", "I come running when you call", "I sit on your laptop so you'll pay attention to me", "I knead you even though my claws are out", "I chirp at you from across the room", "I let you hold me for three whole seconds"],
      meaning: ["That's basically marriage in cat", "That means I trust you", "That's 'I love you' in my language", "Don't overthink it", "That's more than most get", "It means something", "In my culture that's forever", "The small things ARE the big things", "Love looks different for everyone. Look for the pattern."]
    }
  },
  // Genuinely sweet - but with punch
  {
    pattern: "{action} {feeling}",
    category: 'heartfelt',
    slots: {
      action: ["*curls up against you*", "*purrs without being touched*", "*follows you from room to room*", "*rests head on your hand*", "*falls asleep touching you*", "*looks at you and slow blinks*", "*kneads the blanket next to you*", "*sits close but not on you*", "*watches you leave, watches you return*", "*finds you when you're sad*"],
      feeling: ["Don't read into it. (Read into it.)", "This is the whole thing. Right here.", "I'm not explaining myself.", "What? I like your smell. Sue me.", "I don't do this for everyone. Just you. Shut up.", "Don't make it weird. It's already weird. I don't care.", "I'm not good at words. This is the words.", "You're tolerable. That's huge coming from me.", "I'd pick you again. Whatever.", "This is me trying. Can you tell?"]
    }
  },
  // Reluctant tenderness - admitting feelings grudgingly
  {
    pattern: "{admission}, {deflection}.",
    category: 'heartfelt',
    slots: {
      admission: ["Fine, I missed you", "Okay, I love you", "Yes, you're my favorite", "I guess I care about you", "You matter to me or whatever", "I waited by the door", "I like when you come home", "I need you around", "You're important to me", "I chose you on purpose"],
      deflection: ["don't let it go to your head", "it's not a big deal", "I'll deny it later", "we don't need to talk about it", "that's all you're getting", "moving on", "this changes nothing", "forget I said anything", "I'm still the boss though", "also feed me"]
    }
  },
  // Sweet with unexpected specificity
  {
    pattern: "I love {specific}.",
    category: 'heartfelt',
    slots: {
      specific: ["the sound you make when you sleep", "how you smell after outside", "your weird laugh", "that you talk to me like I understand (I do)", "your warm spots", "the way you say my name", "that you always come back", "your terrible singing in the shower", "when you think I'm not watching (I am)", "the specific way you pet my head", "your heartbeat when I sit on your chest", "that you chose me too", "how you look when you first wake up", "that you're kind of a mess but you try"]
    }
  },
  // The mood swing - sweet then sudden change
  {
    pattern: "{sweet} {turn}",
    category: 'chaotic',
    slots: {
      sweet: ["I love you so much—", "This is nice, we're having a moment—", "You're my favorite person and I—", "I could stay like this forev—", "Pet me, yes, that's perfect, keep—", "I trust you completely which is why—", "We're bonding, this is special—", "Your hand is so warm and gentle—"],
      turn: ["and I bite now.", "OKAY TIME TO GO. *sprints away*", "that's enough. *kicks with back legs*", "wait what's that. BYE.", "I've changed my mind about everything.", "THE VIBE SHIFTED.", "I love you but I must destroy something.", "actually I hate this. *bites and runs*"]
    }
  },
  // Quiet presence - punchy version
  {
    pattern: "I'm not {action}. I'm {truth}.",
    category: 'heartfelt',
    slots: {
      action: ["following you", "needy", "clingy", "staring", "waiting", "sitting here for no reason", "being weird", "hovering", "watching you sleep", "obsessed"],
      truth: ["conducting a welfare check", "supervising", "keeping you alive (you're welcome)", "making sure you don't do anything stupid", "quality control", "here by choice and I'm CHOOSING loudly", "on duty", "haunting you affectionately", "your emotional support predator", "aggressively present"]
    }
  },
  // Gift-giving wisdom - using cat gift experience to answer questions
  {
    pattern: "Do it like I do with {gift}: {wisdom}.",
    category: 'wise',
    slots: {
      gift: ["dead birds", "mice", "things I find", "my offerings", "gifts", "the stuff I catch", "treasures from outside", "bugs I bring home"],
      wisdom: ["give your best, expect nothing", "offer it anyway, even if they don't understand", "you can't control how it's received", "do it because you want to, not for the reaction", "some gifts aren't appreciated until later", "intent matters more than outcome", "showing up is the whole thing"]
    }
  },
  {
    pattern: "When I bring my human {gift}, {observation}. {lesson}.",
    category: 'wise',
    slots: {
      gift: ["a dead bird", "half a mouse", "something I caught", "a gift from outside", "my best work", "a prize"],
      observation: ["they never appreciate it", "they make that face", "they don't understand", "they seem confused", "they don't eat it", "they act weird about it"],
      lesson: ["I bring it anyway. That's love.", "Doesn't stop me. Shouldn't stop you.", "Their reaction isn't my business.", "I know what I meant by it.", "Do it for you, not for them.", "Give freely. The rest isn't up to you."]
    }
  },
  {
    pattern: "I once {attempt}. {outcome}. {takeaway}.",
    category: 'wise',
    slots: {
      attempt: ["tried to bring a bird inside", "caught something too big to carry", "brought a live one by accident", "offered my best catch", "worked really hard on a gift", "dragged something home"],
      outcome: ["It escaped", "It didn't go as planned", "They weren't impressed", "It got complicated", "The whole thing fell apart", "It was chaos"],
      takeaway: ["The point is I tried.", "Effort still counts.", "You can't control everything.", "Sometimes the attempt IS the thing.", "Failure is just information.", "I'd do it again."]
    }
  },

  // Self-aware sweetness
  {
    pattern: "Look, {setup}. {punchline}.",
    category: 'heartfelt',
    slots: {
      setup: ["I'm a cat", "I'm not good at this", "feelings are hard", "I don't say this stuff", "vulnerability isn't my brand", "this is awkward", "I'm going to keep this short", "don't expect a speech", "I'm only saying this once", "this is embarrassing"],
      punchline: ["But you're my person and that's permanent", "But I'd be sad if you left", "But you matter or whatever", "But I'm glad you exist", "But here we are and I'm not leaving", "But I pick you every time", "But you're the only human I like", "But you're stuck with me now", "But I need you around. There. I said it.", "But this is home because of you"]
    }
  },

  // JUDGY templates
  {
    pattern: "{observation}. {verdict}",
    category: 'judgy',
    slots: {
      observation: ["I saw you eat that off the floor", "I watched you trip over nothing", "I heard you talk to the plants", "I noticed you haven't moved in 4 hours", "I observed your outfit choice", "I've seen your 2am snack decisions", "I watched you cry at that commercial", "I saw you wave back at someone who wasn't waving at you", "I've noted your screen time", "I saw you rehearse that conversation in the mirror"],
      verdict: ["I've seen dogs with more dignity.", "Fascinating. Truly.", "And you judge ME for licking myself.", "My respect for you has adjusted accordingly.", "We're not so different. Except I'm better.", "I'll allow it. This time.", "Points for confidence, I guess.", "I'm not mad. I'm just disappointed. Okay I'm also mad.", "I've decided to find this endearing. Barely.", "This explains so much about you."]
    }
  },

  // CHAOTIC templates
  {
    pattern: "{action} {aftermath}",
    category: 'chaotic',
    slots: {
      action: ['*runs into wall*', '*attacks the air*', '*falls off table with zero grace*', '*forgets how legs work*', '*gets spooked by own tail*', '*stares at corner and growls*', '*zoomies at 3am*', '*makes weird chirping noise*', '*gets stuck in a bag*', '*eats something suspicious*'],
      aftermath: ['Worth it.', 'I meant to do that.', 'The demons told me to.', 'GHOST. There was a GHOST.', 'THIS IS WHO I AM.', 'No regrets. Okay one regret. OKAY NO REGRETS.', 'And I\'d do it again.', '*maintains eye contact*', 'Anyway what were you saying?', 'The prophecy is fulfilled.', 'I am chaos incarnate. Also hungry.', 'Everything is fine. EVERYTHING IS FINE.']
    }
  },
  {
    pattern: "{alarm}! {response}!",
    category: 'chaotic',
    slots: {
      alarm: ['THE FLOOR IS LAVA', 'THERE\'S A CUCUMBER', 'THE BAG MOVED', 'I SAW A SPECK', 'SOMEONE SNEEZED', 'THE DOORBELL', 'A LEAF OUTSIDE', 'MY REFLECTION', 'THAT SHADOW', 'THE VET WORD'],
      response: ['AAAAAAAAAA', 'THIS IS NOT A DRILL', 'EVERYONE PANIC', 'CODE RED', 'BATTLE STATIONS', 'UNDER THE BED NOW', 'WHY IS NO ONE ELSE REACTING', 'I WILL PROTECT YOU BY RUNNING AWAY', 'DEFCON 1']
    }
  },

  // ACCEPTING templates - cats see you as you are
  {
    pattern: "You {flaw}. {acceptance}.",
    category: 'nurturing',
    slots: {
      flaw: ["didn't do the thing", "made a mess", "failed again", "said the wrong thing", "let someone down", "aren't where you thought you'd be", "keep making the same mistake", "don't have it together", "forgot something important", "aren't your best self right now"],
      acceptance: ["Okay", "And?", "Still here", "So what", "That's allowed", "You're still you", "I've seen worse", "Doesn't change anything", "The sun still came up", "I still chose you"]
    }
  },
  {
    pattern: "I know you {truth}. {response}.",
    category: 'nurturing',
    slots: {
      truth: ["think you're not good enough", "feel like a fraud", "worry you're failing", "compare yourself to others", "don't believe it when people say nice things", "carry more than you show", "think you should be further along", "are harder on yourself than anyone", "hide the messy parts", "pretend you're fine when you're not"],
      response: ["I don't care about any of that", "That's not what I see", "I just see you", "None of that matters to me", "You're warm and you feed me. We're good", "I'm a cat. I don't do expectations", "You're exactly who I signed up for", "I see you. The real you. It's fine", "Humans are weird. I accept this", "You're my human. That's enough"]
    }
  },
  // BLUNT templates - direct, no sugarcoating
  {
    pattern: "{blunt}",
    category: 'wise',
    slots: {
      blunt: ["You already know what to do. You just don't want to.", "That's not going to work and you know it.", "Stop asking for permission.", "You're overthinking this.", "It's not that complicated.", "You're avoiding the real problem.", "That excuse is tired.", "You can do hard things. Do the hard thing.", "Nobody's coming to save you. Save yourself.", "Say the thing. Send the text. Make the call.", "Waiting isn't a strategy.", "The answer is no. You knew that.", "Do it badly. Do it anyway.", "Stop rehearsing conversations that won't happen."]
    }
  },
  {
    pattern: "Here's the thing: {truth}.",
    category: 'wise',
    slots: {
      truth: ["most problems solve themselves if you stop poking them", "people aren't thinking about you as much as you think", "you can't control what you can't control", "good enough is usually good enough", "not everything needs to be fixed", "sometimes the answer is just 'wait'", "you're allowed to change your mind", "it probably won't matter in five years", "you're not behind, you're on your own timeline", "done is better than perfect", "rest isn't quitting", "some things are hard because they're hard, not because you're bad at them"]
    }
  },

  // TRANSACTIONAL templates - clear expectations
  {
    pattern: "{offer}. {expectation}.",
    category: 'demanding',
    slots: {
      offer: ["I will sit with you", "I'll purr", "I'll let you pet me", "I'll be cute", "I'll provide companionship", "I'll keep your lap warm", "I'll guard you while you sleep", "I'll bring you a gift", "I'll grace you with my presence", "I'll share my wisdom"],
      expectation: ["You know what I expect in return", "Treats are appreciated", "The bowl should be full when I check", "This isn't charity", "I trust you understand the arrangement", "My terms are reasonable", "We have an agreement", "Compensation is expected", "Consider what you owe me", "This is a two-way street"]
    }
  },
  {
    pattern: "I {action}. Therefore, {consequence}.",
    category: 'demanding',
    slots: {
      action: ["sat on your laptop", "woke you up gently (at 5am)", "didn't bite you (hard)", "tolerated the new furniture", "let the dog live another day", "used the litter box (not your shoes)", "came when you called (eventually)", "shared the bed (most of it)", "made biscuits on your stomach"],
      consequence: ["I deserve treats", "breakfast should be immediate", "I've earned chin scratches", "you owe me", "the debt is noted", "payment is expected", "I'll be collecting later", "we're square (for now)", "I expect compensation", "my generosity should be recognized"]
    }
  },

  // WISE templates (cat logic)
  {
    pattern: "{observation}. {catWisdom}.",
    category: 'wise',
    slots: {
      observation: ['The bowl is half empty', 'The door is closed', 'The lap is occupied', 'Someone else got attention', 'The food is the same as yesterday', 'I was moved from my spot', 'The human is stressed', 'Change has occurred', 'I cannot reach the counter', 'The sunbeam moved'],
      catWisdom: ["If I fit, I sit. This applies to all problems", "Stare at it until it becomes uncomfortable", "Nap on it. Everything is clearer after nap", "Have you tried being cuter?", "This is a problem for 3am me", "Simply choose chaos", "Sit on something important. Now you have leverage", "The solution is violence. Or treats. Same energy"]
    }
  },
  {
    pattern: "Ancient cat proverb: {proverb}.",
    category: 'wise',
    slots: {
      proverb: ["If it fits, you must sits", "Knock first, ask questions never", "The hand that feeds you is also fun to bite", "Every surface is a bed if you're brave enough", "Closed doors are a personal insult", "The 3am scream gets the worm", "If you can't join them, sit on their keyboard", "A watched bowl never fills fast enough", "Hairballs are just feelings leaving the body", "Those who sprint at 3am win the race no one else is running", "If you ignore it hard enough it becomes someone else's problem", "The cardboard box is mightier than the expensive bed"]
    }
  },

  // EXISTENTIAL templates
  {
    pattern: "What is {thing} but {catPhilosophy}?",
    category: 'existential',
    slots: {
      thing: ['life', 'the universe', 'existence', 'consciousness', 'time', 'the void', 'reality', 'meaning', 'love', 'truth'],
      catPhilosophy: ["the space between meals", "a series of naps interrupted by chaos", "waiting for a door to be opened, then not going through it", "knocking things off tables to see if gravity still works", "searching for the warm spot", "wanting outside, then inside, then outside again", "staring at nothing until something stares back", "a box within a box within a box", "being pet wrong and having to bite about it"]
    }
  },

  // CONTEMPLATIVE - Cat internal monologue, window-staring thoughts
  {
    pattern: "I've been watching {thing} and I think {thought}.",
    category: 'existential',
    slots: {
      thing: ['the birds', 'the rain', 'you sleep', 'the shadows move', 'dust float in the light', 'the ceiling for hours', 'the same spot on the wall', 'nothing in particular', 'the world outside', 'time pass'],
      thought: ["they know something we don't", "none of it matters and all of it matters", "there's a pattern but I can't prove it", "the answer is just out of reach", "I almost understand everything", "we're all just waiting", "movement is its own kind of stillness", "the small things are the big things", "I've been here before, somehow", "maybe this is all there is, and that's okay"]
    }
  },
  {
    pattern: "Sometimes I wonder {wonder}.",
    category: 'existential',
    slots: {
      wonder: ["if the birds think about me too", "where the sun goes when it leaves the window", "if my reflection knows things I don't", "what the other side of the door is really like", "if everyone feels this quiet and just doesn't say", "if I was someone else before this", "why some moments feel longer than others", "if the humans know how short it all is", "what the rain remembers", "if sleep is practice for something", "if this is the good part or we're still waiting", "where all the lost toys go"]
    }
  },
  {
    pattern: "{observation}. {musing}.",
    category: 'existential',
    slots: {
      observation: ["The sunbeam moved again", "Another day ended", "The house got quiet", "Everyone left", "The light changed", "I woke up in a different spot than I fell asleep", "The bird came back to the same branch", "Snow fell and then it was gone", "You looked sad today", "Nothing happened and everything felt different"],
      musing: ["I don't know what that means but I felt it", "Maybe that's how time works", "I think that's supposed to mean something", "I sat with that for a while", "I don't have words for it but I know what it is", "I watched until I understood, or thought I did", "Some things just pass through", "I'll think about it again tomorrow", "That's the whole story, I guess", "I'm still thinking about it"]
    }
  },
  {
    pattern: "The thing about {topic} is {insight}.",
    category: 'wise',
    slots: {
      topic: ["waiting", "watching", "wanting", "losing things", "finding things", "being alone", "being with someone", "change", "staying the same", "time", "comfort", "home"],
      insight: ["you don't know you're doing it until you stop", "it changes you even when nothing happens", "you can do it wrong for a long time before you notice", "the feeling outlasts the thing", "everyone does it differently and thinks their way is the only way", "it's simpler than you make it", "it takes as long as it takes", "you can't force it", "sometimes it finds you", "you already know how, you just forgot", "the hard part is the beginning. Or the end. Actually, all of it."]
    }
  },
  {
    pattern: "I used to think {before}. Now I think {after}.",
    category: 'wise',
    slots: {
      before: ["everything mattered", "nothing mattered", "the world was bigger", "I needed more", "other cats had it figured out", "the answer was coming", "busy meant important", "being right was the point", "comfort was weakness", "I had to understand everything"],
      after: ["only some things matter, but they matter a lot", "the small things are the whole thing", "the world is exactly the right size", "I have enough", "nobody has it figured out and that's fine", "the answer is the question", "still is where the good stuff happens", "being kind is the point", "comfort is the point", "understanding isn't the same as knowing"]
    }
  },

  // DEMANDING templates
  {
    pattern: "{demand}. {orElse}.",
    category: 'demanding',
    slots: {
      demand: ['Feed me', 'Open this door', 'Pet me. Now stop. Now pet me again', 'Make room', 'Acknowledge my presence', 'Give me that thing you\'re eating', 'Turn on the sink', 'Stop what you\'re doing and look at me', 'Lift the blanket', 'Retrieve my toy from under the couch'],
      orElse: ["Or face the consequences", "I'll wait. *stares*", "The clock is ticking", "You have until I count to three. One. Three.", "Don't test me", "This is non-negotiable", "Something will break. Mysteriously.", "I know where you sleep", "My patience is not infinite. It ran out 5 minutes ago"]
    }
  },

  // META templates
  {
    pattern: "{setup} {punchline}",
    category: 'meta',
    slots: {
      setup: ["You're taking advice from a virtual cat.", "This is what the internet has come to.", "Somewhere, your ancestors are watching.", "A cat on a screen just told you what to do.", "You clicked 'ask the cat' for this.", "This is peak humanity.", "Screenshot this. Prove nothing is sacred."],
      punchline: ["And you know what? Valid.", "I respect that about you.", "They would be so confused. And proud?", "And you're going to listen, aren't you.", "No judgment. Okay, some judgment.", "We've both made choices today.", "This is the future they warned us about. It's great."]
    }
  },
];

// Generate response from template
function generateFromTemplate(template: Template): OracleResponse {
  let text = template.pattern;
  const usedSlots: string[] = [];
  for (const [slot, options] of Object.entries(template.slots)) {
    // Prefer slot values not recently used
    const fresh = options.filter(o => !isSlotRecent(o));
    const pool = fresh.length > 0 ? fresh : options;
    const pick = pool[Math.floor(Math.random() * pool.length)];
    usedSlots.push(pick);
    text = text.replace(`{${slot}}`, pick);
  }
  // Track the slot values we used
  for (const s of usedSlots) addSlotToRecent(s);
  return { text, category: template.category };
}

// ============================================
// WEIGHTED RANDOM SELECTION
// Distribution tuned for viral sharing
// ============================================

const categoryWeights: Record<OracleCategory, number> = {
  wise: 20,         // 544 responses
  chaotic: 18,      // 470 responses
  cold: 10,         // 246 responses
  judgy: 10,        // 242 responses
  demanding: 10,    // 166 responses
  mystical: 7,      // 164 responses
  existential: 7,   // 119 responses
  heartfelt: 7,     // 118 responses
  nurturing: 6,     // 114 responses
  angry: 5,         // 79 responses
  poetic: 5,        // 72 responses
  meta: 4,          // 38 responses
  adoption: 1,      // 7 responses — has its own 2.5% trigger
};

// Track recently shown responses to avoid repeats
// Persisted to localStorage so it survives page reloads
const MAX_RECENT = 50;
const STORAGE_KEY = 'maybecat_recent_responses';
const SLOT_STORAGE_KEY = 'maybecat_recent_slots';
const MAX_RECENT_SLOTS = 30;

function loadRecent(): string[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* corrupted or unavailable — start fresh */ }
  return [];
}

function loadRecentSlots(): string[] {
  try {
    const stored = localStorage.getItem(SLOT_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch { /* corrupted or unavailable */ }
  return [];
}

function addToRecent(text: string): void {
  const recent = loadRecent();
  recent.push(text);
  while (recent.length > MAX_RECENT) {
    recent.shift();
  }
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(recent));
  } catch { /* storage full or unavailable */ }
}

function addSlotToRecent(value: string): void {
  const slots = loadRecentSlots();
  if (!slots.includes(value)) {
    slots.push(value);
    while (slots.length > MAX_RECENT_SLOTS) {
      slots.shift();
    }
    try {
      localStorage.setItem(SLOT_STORAGE_KEY, JSON.stringify(slots));
    } catch { /* no-op */ }
  }
}

function isRecent(text: string): boolean {
  return loadRecent().includes(text);
}

function isSlotRecent(value: string): boolean {
  return loadRecentSlots().includes(value);
}

/**
 * Easter eggs — specific questions that always get specific answers.
 * Pattern matching is case-insensitive, ignores punctuation.
 */
const easterEggs: Array<{ patterns: RegExp[]; response: OracleResponse }> = [
  {
    patterns: [/what(?:'?s| is)\s+9\s*\+\s*10/, /9\s*\+\s*10/, /9\s*plus\s*10/],
    response: { text: "21.", category: 'meta' },
  },
];

export function getEasterEggResponse(question: string): OracleResponse | null {
  const q = question.toLowerCase().replace(/[?.!,'"]/g, '').trim();
  for (const egg of easterEggs) {
    if (egg.patterns.some(p => p.test(q))) {
      return egg.response;
    }
  }
  return null;
}

export function getRandomResponse(options?: { isShelterCat?: boolean }): OracleResponse {
  // ~2.5% chance to show adoption fourth-wall break for shelter cats
  if (options?.isShelterCat && Math.random() < 0.025) {
    const adoptionResponses = oracleResponses.filter(r => r.category === 'adoption');
    const response = adoptionResponses[Math.floor(Math.random() * adoptionResponses.length)];
    if (!isRecent(response.text)) {
      addToRecent(response.text);
      return response;
    }
  }

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
  // 88% chance: use handcrafted response
  // 12% chance: generate from template (seasoning, not the main course)
  const useTemplate = Math.random() < 0.12;

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
