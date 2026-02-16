# Attribution Audit — oracleResponses.ts

**Date:** 2026-02-13
**Scope:** Every response in oracleResponses.ts that is a direct quote, close adaptation, or recognizable reference from a specific identifiable person and currently **lacks** an `attribution` field.

**What's already attributed:**
- Lines 551-573: Have attribution baked into the text string (e.g., `"— Rumi"`) but do NOT use the `attribution` field
- Lines 3427-3433: Use the `attribution` field properly (7 Tia Corine lines)

**Rules applied:**
- Only flagged where a SPECIFIC person/work can be identified
- Did NOT flag generic wisdom, common sayings, or internet slang
- DID flag: verbatim quotes, close paraphrases, song lyrics/titles, standup bits, literary lines, movie/TV quotes, famous catchphrases

---

## CATEGORY 1: Lines with inline text attribution (need `attribution` field added)

These already credit the source IN THE TEXT but should also have the `attribution` field on the object for data consistency.

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 551 | "Let yourself be silently drawn by the strange pull of what you really love." — Rumi | Rumi | Rumi, poet |
| 552 | "Be patient toward all that is unsolved in your heart." — Rilke | Rainer Maria Rilke | *Letters to a Young Poet* |
| 553 | "I dwell in possibility." — Emily Dickinson | Emily Dickinson | Poem #657 |
| 554 | "Forever is composed of nows." — Emily Dickinson | Emily Dickinson | Letter to Susan Gilbert |
| 559 | "Reality is wrong. Dreams are for real." — Tupac | Tupac Shakur | Interview |
| 560 | "Fight the power." — Public Enemy | Public Enemy | Song title, *Fear of a Black Planet* (1990) |
| 562 | "How you gonna win when you ain't right within?" — Lauryn Hill | Lauryn Hill | "Doo Wop (That Thing)" |
| 563 | "Respect is just a minimum." — Lauryn Hill | Lauryn Hill | "Ex-Factor" / interviews |
| 564 | "It could all be so simple." — Lauryn Hill | Lauryn Hill | "Ex-Factor" |
| 565 | "I ain't a killer but don't push me." — Biggie | The Notorious B.I.G. | "Ready to Die" / also 2Pac lyric |
| 566 | "I'll tell you what freedom is to me: no fear." — Nina Simone | Nina Simone | Interview, *What Happened, Miss Simone?* |
| 567 | "You have to learn to get up from the table when love is no longer being served." — Nina Simone | Nina Simone | Widely attributed to Simone |
| 568 | "You wanna fly, you got to give up the sh*t that weighs you down." — Toni Morrison | Toni Morrison | *Song of Solomon* |
| 569 | "When someone shows you who they are, believe them the first time." — Maya Angelou | Maya Angelou | *Oprah Winfrey Show* |
| 570 | "I'm not a humanitarian. I'm a hell-raiser." — Mother Jones | Mother Jones | *The Autobiography of Mother Jones* |
| 571 | "Strong people don't need strong leaders." — Ella Baker | Ella Baker | Civil rights organizing |
| 572 | "Your silence will not protect you." — Audre Lorde | Audre Lorde | *The Cancer Journals* / *Sister Outsider* |
| 573 | "You are your best thing." — Toni Morrison | Toni Morrison | *Beloved* |

---

## CATEGORY 2: Sci-Fi references (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 503 | "These are not the answers you're looking for." | Star Wars (Obi-Wan Kenobi) | *Star Wars: A New Hope* (1977) — adapted from "These aren't the droids you're looking for" |
| 504 | "Live long and prosper. Or don't. I'm not your mom." | Star Trek (Spock) | *Star Trek* — adapted from Vulcan salutation |
| 505 | "I've seen things you wouldn't believe. Mostly birds." | Blade Runner (Roy Batty) | *Blade Runner* (1982) — adapted from "tears in rain" monologue |
| 506 | "Resistance is futile. Petting is mandatory." | Star Trek (The Borg) | *Star Trek: The Next Generation* — adapted from Borg catchphrase |
| 507 | "So long, and thanks for all the fish." | Douglas Adams | *The Hitchhiker's Guide to the Galaxy* — book/chapter title, verbatim |
| 508 | "Do. Or do not. There is no try. Personally, I choose do not." | Star Wars (Yoda) | *The Empire Strikes Back* (1980) — adapted |
| 509 | "In space, no one can hear you meow." | *Alien* (1979) | Film tagline — adapted from "In space no one can hear you scream" |

---

## CATEGORY 3: Austen / Wilde adaptations (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 514 | "It is a truth universally acknowledged that a cat in possession of a sunbeam must be in want of nothing else." | Jane Austen | *Pride and Prejudice* (1813) — adapted from opening line |
| 515 | "I can resist everything except treats." | Oscar Wilde | *Lady Windermere's Fan* — adapted from "I can resist everything except temptation" |
| 516 | "We are all in the gutter, but some of us are looking at birds." | Oscar Wilde | *Lady Windermere's Fan* — adapted from "looking at the stars" |
| 517 | "I have the simplest tastes. I am always satisfied with the best." | Oscar Wilde | Widely attributed to Wilde, verbatim |
| 518 | "The only way to get rid of temptation is to yield to it." | Oscar Wilde | *The Picture of Dorian Gray* — verbatim |

---

## CATEGORY 4: Classic Film Lines (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 539 | "Of all the sunbeams in all the windows in all the world, you walked into mine." | *Casablanca* (Rick Blaine / Humphrey Bogart) | Adapted from "Of all the gin joints in all the towns..." |
| 540 | "Frankly, my dear, I don't give a meow." | *Gone with the Wind* (Rhett Butler / Clark Gable) | Adapted from "Frankly, my dear, I don't give a damn" |
| 541 | "You can't handle the truth. Neither can I, honestly." | *A Few Good Men* (Col. Jessup / Jack Nicholson) | Adapted from courtroom scene |
| 542 | "Life is like a box of... actually, I love boxes." | *Forrest Gump* (Forrest / Tom Hanks) | Adapted from "Life is like a box of chocolates" |
| 543 | "I'm gonna make him a purr he can't refuse." | *The Godfather* (Don Corleone / Marlon Brando) | Adapted from "an offer he can't refuse" |
| 544 | "Give yourself over to absolute pleasure." | *The Rocky Horror Picture Show* (Frank-N-Furter / Tim Curry) | Close to verbatim from "Sweet Transvestite" / film dialogue |
| 545 | "Antici... ...pation." | *The Rocky Horror Picture Show* (Frank-N-Furter / Tim Curry) | Verbatim from "Sweet Transvestite" musical number |
| 546 | "It's astounding. Time is fleeting. Madness takes its toll." | *The Rocky Horror Picture Show* | Verbatim lyrics from "Time Warp" by Richard O'Brien |

---

## CATEGORY 5: Pop Culture — Movies, TV, Music (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 578 | "You had me at 'pspsps.'" | *Jerry Maguire* (Dorothy / Renee Zellweger) | Adapted from "You had me at hello" |
| 579 | "One does not simply walk into Mordor. One naps first." | *The Lord of the Rings* (Boromir / Sean Bean) | Adapted from Council of Elrond scene |
| 580 | "I'm not a regular cat. I'm a cool cat." | *Mean Girls* (Mrs. George / Amy Poehler) | Adapted from "I'm not a regular mom, I'm a cool mom" |
| 581 | "You can't sit with us. This is my spot." | *Mean Girls* (Gretchen / Lacey Chabert) | Adapted from "You can't sit with us!" |
| 582 | "Stop trying to make fetch happen. I won't fetch." | *Mean Girls* (Regina George / Rachel McAdams) | Adapted from "Stop trying to make fetch happen" |
| 583 | "60% of the time, it works every time." | *Anchorman* (Brian Fantana / Paul Rudd) | Verbatim quote |
| 584 | "Why are you the way that you are?" | *The Office* (Michael Scott / Steve Carell) | Close to verbatim — "Why are you the way that you are?" to Toby |
| 585 | "May the odds be ever in your favor. They're not." | *The Hunger Games* (Effie Trinket) | Adapted from Suzanne Collins |
| 586 | "Let it go. Let it gooo. I can't hold it back anymore." | *Frozen* (Elsa) | Song lyrics by Kristen Anderson-Lopez & Robert Lopez |
| 587 | "I can do this all day." | MCU (Captain America / Chris Evans) | Verbatim catchphrase from *Captain America* films |
| 588 | "Reality can be whatever I want." | MCU (Thanos / Josh Brolin) | Verbatim from *Avengers: Infinity War* |
| 589 | "Pivot! PIVOT!" | *Friends* (Ross / David Schwimmer) | Verbatim from "The One with the Cop" |
| 590 | "I'm not great at the advice. Can I interest you in a sarcastic comment?" | *Friends* (Chandler / Matthew Perry) | Close paraphrase from show dialogue |
| 591 | "Winter is coming. Close the window." | *Game of Thrones* (House Stark) | Adapted from Stark house words / George R.R. Martin |
| 592 | "I am the danger." | *Breaking Bad* (Walter White / Bryan Cranston) | Verbatim from "I am the one who knocks" scene |
| 593 | "Clear eyes, full hearts, can't lose." | *Friday Night Lights* (Coach Taylor / Kyle Chandler) | Verbatim team motto |
| 594 | "Cool. Cool cool cool." | *Community* (Abed / Danny Pudi) | Verbatim Abed catchphrase (also Jake Peralta in *Brooklyn Nine-Nine*) |
| 602 | "Modern problems require modern solutions." | Dave Chappelle / *Chappelle's Show* | Meme from *Chappelle's Show* sketch |
| 603 | "Surprise, motherf—" | *Dexter* (James Doakes / Erik King) | Verbatim catchphrase |
| 604 | "Reality is often disappointing." | MCU (Thanos / Josh Brolin) | Verbatim from *Avengers: Infinity War* |
| 605 | "You know, I'm something of a cat myself." | *Spider-Man* (Norman Osborn / Willem Dafoe) | Adapted from "I'm something of a scientist myself" |
| 606 | "We found love in a hopeless place." | Rihanna | Song lyric, "We Found Love" (2011), written by Calvin Harris |
| 607 | "Shake it off." | Taylor Swift | Song title/lyric, "Shake It Off" (2014) |
| 608 | "Just dance." | Lady Gaga | Song title, "Just Dance" (2008) |
| 609 | "Don't believe me? Just watch." | Bruno Mars & Mark Ronson | Lyric from "Uptown Funk" (2014) |
| 610 | "Harder, better, faster, stronger." | Daft Punk | Song title/lyric (2001) |
| 611 | "Who run the world? Cats." | Beyonce | Adapted from "Run the World (Girls)" (2011) |

---

## CATEGORY 6: More Pop Culture / TV References (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 662 | "Thy mother was a hamster and thy father smelt of elderberries." | *Monty Python and the Holy Grail* | Verbatim — French Taunter, written by Graham Chapman & John Cleese et al. |
| 668 | "I would challenge thee to a battle of wits, but I see thou art unarmed." | Widely attributed to Shakespeare / Oscar Wilde | Uncertain original source — commonly misattributed. Mark as UNVERIFIED. |
| 676 | "That's rough, buddy." | *Avatar: The Last Airbender* (Zuko) | Verbatim quote |
| 684 | "Chaos reigns." | *Antichrist* (Lars von Trier, 2009) | Verbatim — the fox scene |
| 685 | "Some cats just want to watch the world burn." | *The Dark Knight* (Alfred / Michael Caine) | Adapted from "Some men just want to watch the world burn" |
| 696 | "Chaos is a ladder. *climbs curtains*" | *Game of Thrones* (Littlefinger / Aidan Gillen) | Verbatim quote from show (originally George R.R. Martin) |
| 725 | "You is kind. You is smart. You is important." | *The Help* (Aibileen / Viola Davis) | Close to verbatim, Kathryn Stockett novel / Tate Taylor film (2011) |
| 726 | "In case I forget to tell you later, I had a really good time tonight." | *Pretty Woman* (Edward / Richard Gere) | Verbatim |
| 727 | "Some people are worth melting for." | *Frozen* (Olaf / Josh Gad) | Verbatim |
| 1071 | "Time is a flat circle and I have been chasing it." | *True Detective* (Rust Cohle / Matthew McConaughey) | Adapted from "Time is a flat circle" — also Nietzsche concept |
| 1212 | "Pick me. Choose me. Love me. Or don't. I have other options." | *Grey's Anatomy* (Meredith Grey / Ellen Pompeo) | Adapted from iconic monologue |
| 1213 | "You're my person. Don't make me regret that." | *Grey's Anatomy* (Cristina Yang / Sandra Oh) | Adapted from Cristina's catchphrase |
| 1219 | "I live in two worlds. One is a world of books." | *Gilmore Girls* (Rory Gilmore / Alexis Bledel) | Close paraphrase from show |
| 1220 | "People are particularly stupid today. I can't talk to any more of them." | *Gilmore Girls* (Michel Gerard / Yanic Truesdale) | Close to verbatim |
| 1667 | "All the world's a stage. I'm off stage." | William Shakespeare | *As You Like It* — adapted from "All the world's a stage" monologue |
| 1668 | "It was the best of times. Then I woke up." | Charles Dickens | *A Tale of Two Cities* — adapted from opening line |
| 1669 | "Life finds a way. Usually the wrong way." | *Jurassic Park* (Ian Malcolm / Jeff Goldblum) | Adapted from "Life, uh, finds a way" — Michael Crichton |
| 1775 | "I solemnly swear I am up to no good. Obviously." | *Harry Potter* (Marauder's Map) | Adapted from J.K. Rowling, *Prisoner of Azkaban* |
| 1780 | "I used to be with it. Then they changed 'it'." | *The Simpsons* (Abe Simpson) | Close to verbatim — "Homerpalooza" episode, written by Mike Scully |
| 1782 | "Same as it ever was. Same as it ever was." | Talking Heads (David Byrne) | Verbatim lyrics from "Once in a Lifetime" (1981) |
| 2003 | "That's just like, your opinion, man." | *The Big Lebowski* (The Dude / Jeff Bridges) | Close to verbatim — Coen Brothers |
| 2004 | "I've heard it both ways." | *Psych* (Shawn Spencer / James Roday) | Verbatim catchphrase |
| 2005 | "Inconceivable." | *The Princess Bride* (Vizzini / Wallace Shawn) | Verbatim catchphrase — William Goldman |
| 2006 | "As you wish." | *The Princess Bride* (Westley / Cary Elwes) | Verbatim — William Goldman |
| 2011 | "42." | Douglas Adams | *The Hitchhiker's Guide to the Galaxy* — the answer to life, the universe, and everything |
| 2012 | "There's always money in the banana stand." | *Arrested Development* (George Sr. / Jeffrey Tambor) | Verbatim — Mitchell Hurwitz |
| 2013 | "Not great, Bob." | *Mad Men* (Pete Campbell / Vincent Kartheiser) | Verbatim |
| 2015 | "Could this BE any more obvious?" | *Friends* (Chandler Bing / Matthew Perry) | Adapted from Chandler's signature delivery |
| 2016 | "It's a moo point. Like a cow's opinion. It doesn't matter." | *Friends* (Joey Tribbiani / Matt LeBlanc) | Close to verbatim |
| 2018 | "You think a normal person can do what I do?" | *Better Call Saul* (Jimmy McGill / Bob Odenkirk) | Close paraphrase |
| 2833 | "You had me at warm laundry." | *Jerry Maguire* (Dorothy / Renee Zellweger) | Adapted from "You had me at hello" (second usage, after line 578) |

---

## CATEGORY 7: Literary & Philosophical Quotes (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 964 | "I contain multitudes. Mostly fur and attitude." | Walt Whitman | *Song of Myself* — adapted from "I am large, I contain multitudes" |
| 2157 | "You contain multitudes. One of the multitudes is unhinged. Embrace her." | Walt Whitman | Same reference — *Song of Myself* (second usage) |
| 2564 | "...you must go on, I can't go on, I'll go on." | Samuel Beckett | *The Unnamable* (1953) — close to verbatim closing line |
| 3332 | "Between the motion and the act falls the shadow." | T.S. Eliot | *The Hollow Men* (1925) — verbatim from Section V |
| 3334 | "\"Let's go.\" \"Yes, let's go.\" *does not move*" | Samuel Beckett | *Waiting for Godot* (1953) — verbatim stage direction |
| 3335 | "Negative capability. Still in the not-knowing." | John Keats | Keats coined "Negative Capability" in 1817 letter to his brothers |
| 3349 | "yes is a world / & in this world of yes live / (skilfully curled) / all worlds — e.e. cummings" | e.e. cummings | Poem — already credited in text but needs `attribution` field |
| 3353 | "...and yes I said yes I will Yes." | James Joyce | *Ulysses* (1922) — Molly Bloom's soliloquy, close to verbatim |
| 3367 | "If you do, you will regret it. If you don't, you will regret it." | Soren Kierkegaard | *Either/Or* (1843) — close paraphrase |
| 3368 | "Dare to disturb the universe." | T.S. Eliot | *The Love Song of J. Alfred Prufrock* (1915) — "Do I dare / Disturb the universe?" |

---

## CATEGORY 8: Named Person Quotes / Paraphrases (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 1866 | "I used to think that was a bad idea. I still do, but I used to, too." | Mitch Hedberg | Adapted from "I used to do drugs. I still do, but I used to, too." — standup bit |
| 1869 | "I don't have a solution, but I do admire the problem." | Ashleigh Brilliant | Pot-Shot #1899 — verbatim. Commonly misattributed. |
| 1871 | "They have no enemies but are thoroughly disliked by their friends." | Oscar Wilde | Close paraphrase — "He has no enemies, and is thoroughly disliked by his friends" |
| 1874 | "Your body is not a temple. It's an amusement park." | Anthony Bourdain | Close paraphrase — "Your body is not a temple, it's an amusement park. Enjoy the ride." |
| 1876 | "Your need for acceptance can make you invisible." | Jim Carrey | Commencement speech at Maharishi University (2014) — close paraphrase |
| 1878 | "If you have nothing nice to say, come sit by me." | Alice Roosevelt Longworth | Famous quip — also used in *Steel Magnolias* (Clairee / Olympia Dukakis) |
| 1880 | "I don't care what's written about me as long as it isn't true." | Dorothy Parker | Widely attributed to Parker (also attributed to others — Katharine Hepburn, Brendan Behan). UNVERIFIED exact source. |
| 1895 | "Every corpse on Everest was once a highly motivated person." | Unknown / Internet | Widely circulated internet aphorism — no verified original author. Consider NOT attributing. |
| 2121 | "Your body keeps score and the score is chaotic." | Bessel van der Kolk (reference) | Adapted from book title *The Body Keeps the Score* (2014) |
| 2168 | "Everybody's got a plan until reality shows up. Reality just arrived." | Mike Tyson | Adapted from "Everyone has a plan until they get punched in the mouth" |
| 3086 | "More is more and less is a bore." | Iris Apfel / also attributed to Rachel Zoe | Famous fashion quote — commonly attributed to Iris Apfel |
| 3150 | "Exaggeration is my only reality." | Diana Vreeland | Verbatim — famous quote from the *Vogue* editor |
| 3366 | "It's almost like an Etch A Sketch -- shake it up and start all over again." | Eric Fehrnstrom (Romney advisor) | 2012 CNN interview — political gaffe quote, verbatim |

---

## CATEGORY 9: Song Lyrics / Music References (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 1666 | "Touch-a touch-a touch me. On second thought, don't." | *The Rocky Horror Picture Show* | Adapted from "Touch-a, Touch-a, Touch-a, Touch Me" song — Richard O'Brien |
| 2225 | "I bet on losing dogs." | Mitski | Song title/lyric from *Puberty 2* (2016) |
| 2227 | "Please, please, please let me get what I want." | The Smiths (Morrissey / Johnny Marr) | Song title, verbatim (1984) |
| 2233 | "The less I know the better." | Tame Impala (Kevin Parker) | Song title, verbatim (2015) |
| 2790 | "Not every problem requires boom boom pow. Some just need a shimmy shimmy ya." | Black Eyed Peas + Ol' Dirty Bastard | "Boom Boom Pow" (BEP, 2009) + "Shimmy Shimmy Ya" (ODB, 1995) — song title references |

---

## CATEGORY 10: Beastie Boys / Hardcore Punk References (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 3417 | "Another dimension, another dimension." | Beastie Boys | Lyric from "Intergalactic" (1998) — verbatim hook |
| 3418 | "Dogs love me 'cause I'm crazy sniffable." | Beastie Boys | Adapted from "Ch-Check It Out" lyrics (2004) |
| 3419 | "Fatso was a hostage. Fatso didn't play piano." | Reference to Keyboard Cat meme / Fatso the cat | Charlie Schmidt's viral video — debunking the myth. Not a person per se, but a specific cultural artifact. |

---

## CATEGORY 11: Fashion / Critics Relocated Language (potential attributions)

These are from the Fashion Critics and Food Critics batches. Many are relocated descriptions from specific critics. Where the source critic is identifiable:

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 3076 | "Drekitude. The lowest point in the lowest ebb." | Likely fashion criticism language | "Drekitude" was coined by Diana Vreeland or is trade fashion jargon. Possibly Tim Gunn. UNVERIFIED specific source. |
| 3084 | "Stop relying on that body." | Possibly *America's Next Top Model* (Tyra Banks) or fashion judge language | UNVERIFIED — common fashion competition critique |
| 3085 | "I didn't come here to look at ugly choices." | Possibly fashion competition language | UNVERIFIED |
| 3202 | "It's extraordinary how self-obsessed human beings are." | David Attenborough (paraphrase) / could be other naturalists | UNVERIFIED specific source |

**Note on batches 22-25 (Food Critics, Fashion Critics, Massage/Dual-Reading):** These batches use *relocated found language* from specific critics (Jay Rayner, Pete Wells, A.A. Gill, Bourdain, fashion critics). The individual lines have been transformed enough that specific attribution to a single critic is difficult without the original batch tracking. The *process* was sourcing from real critics, but the final lines are composites/adaptations rather than verbatim quotes from one person.

---

## CATEGORY 12: TV Show Catchphrases Used Without Show Context (no attribution)

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 595 | "I can has cheezburger?" | Internet meme / Lolcats | *I Can Has Cheezburger?* meme (2007) — Eric Nakagawa / Kari Unebasami. Specific cultural artifact. |
| 675 | "Oh no. Anyway." | Jeremy Clarkson / *The Grand Tour* | Internet meme from Clarkson's delivery |

---

## CATEGORY 13: Feb 13 2026 Batch — Maybe/Yes/No/Indecision Energy

| Line | Current Text | Attribution | Source |
|------|-------------|-------------|--------|
| 3344 | "We want the ball and we're gonna score. Same energy." | Matt Hasselbeck | 2004 NFL Playoffs — verbatim famous quote before interception |
| 3375 | "One yard. And he THOUGHT ABOUT IT TOO MUCH." | Sports commentary reference | Likely referencing a specific play/announcer call — UNVERIFIED exact source |
| 3388 | "I've got news for you, buddy. We're gonna win the game." | Likely sports quote | UNVERIFIED specific source |
| 3393 | "Never argue. Just... prefer not to." | Herman Melville (reference) | Adapted from Bartleby: "I would prefer not to" — *Bartleby, the Scrivener* (1853) |
| 3400 | "27% of randomly generated bullshit sentences are \"profound.\"" | Reference to academic study | References the "Barnum effect" / pseudo-profound bullshit research by Gordon Pennycook et al. (2015). Not a direct quote. |

---

## SUMMARY

**Total responses needing attribution field added:** ~115

**Breakdown:**
- 18 lines with inline text attribution that need `attribution` field (Category 1)
- 7 Sci-Fi adaptations (Category 2)
- 5 Austen/Wilde adaptations (Category 3)
- 8 Classic Film adaptations (Category 4)
- 34 Pop Culture / Movie / TV / Music references (Category 5)
- 20+ more TV/Film references scattered (Category 6)
- 10 Literary / Philosophical quotes (Category 7)
- 13 Named person quotes/paraphrases (Category 8)
- 5 Song lyrics/titles (Category 9)
- 2-3 Beastie Boys / punk references (Category 10)
- 4 Fashion/critics (uncertain, Category 11)
- 2 Internet meme origins (Category 12)
- 5 Feb 13 batch references (Category 13)

**What was NOT flagged (by design):**
- Comedian-energy batches (Bo Burnham, Mulaney, Bargatze, Tomlinson, Glaser, Ali Wong, Schulz, Theo Von, Matt Rife) — these are ORIGINAL lines written in a comedian's worldview/energy, not direct quotes
- Musician-energy batches (MF DOOM v2, ODB, Tyler, Redman, Busta Rhymes, Cyndi Lauper) — original cat-voice lines inspired by artist energy, not direct quotes
- Food critics / fashion relocated language where the final line is a composite transformation
- Generic internet slang (slay, periodt, bestie, etc.)
- Common sayings or wisdom that don't trace to a specific person
- Cat behavior descriptions and original cat-voice content

**Recommendation:** Prioritize Categories 1-9 (clear, specific, verifiable attributions). Categories 10-13 have more edge cases. The inline-attribution lines (Category 1) are the easiest — they already name the source, they just need the `attribution` field added to the TypeScript object.
