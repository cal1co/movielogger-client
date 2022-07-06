import axios from 'axios'
import URLS from '../api/MovieApi'


export const getPopularFilms = async () => {
    try {
        return await axios.get(URLS.POPULAR)
    } catch (err){
        return err
    }
}

export const popFilms = [
    {
      "adult": false,
      "backdrop_path": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
      "genre_ids": [
        14,
        28,
        12
      ],
      "id": 453395,
      "original_language": "en",
      "original_title": "Doctor Strange in the Multiverse of Madness",
      "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
      "popularity": 12833.993,
      "poster_path": "/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
      "release_date": "2022-05-04",
      "title": "Doctor Strange in the Multiverse of Madness",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 3596
    },
    {
      "adult": false,
      "backdrop_path": "/zGLHX92Gk96O1DJvLil7ObJTbaL.jpg",
      "genre_ids": [
        14,
        12,
        28
      ],
      "id": 338953,
      "original_language": "en",
      "original_title": "Fantastic Beasts: The Secrets of Dumbledore",
      "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
      "popularity": 3338.797,
      "poster_path": "/jrgifaYeUtTnaH7NF5Drkgjg2MB.jpg",
      "release_date": "2022-04-06",
      "title": "Fantastic Beasts: The Secrets of Dumbledore",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 2067
    },
    {
      "adult": false,
      "backdrop_path": "/t0mwKhUDa62hdhdKSsN4xMfhY5Z.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 626735,
      "original_language": "en",
      "original_title": "Dog",
      "overview": "An army ranger and his dog embark on a road trip along the Pacific Coast Highway to attend a friend's funeral.",
      "popularity": 2872.548,
      "poster_path": "/rkpLvPDe0ZE62buUS32exdNr7zD.jpg",
      "release_date": "2022-02-17",
      "title": "Dog",
      "video": false,
      "vote_average": 7.4,
      "vote_count": 503
    },
    {
      "adult": false,
      "backdrop_path": "/egoyMDLqCxzjnSrWOz50uLlJWmD.jpg",
      "genre_ids": [
        28,
        12,
        10751,
        35
      ],
      "id": 675353,
      "original_language": "en",
      "original_title": "Sonic the Hedgehog 2",
      "overview": "After settling in Green Hills, Sonic is eager to prove he has what it takes to be a true hero. His test comes when Dr. Robotnik returns, this time with a new partner, Knuckles, in search for an emerald that has the power to destroy civilizations. Sonic teams up with his own sidekick, Tails, and together they embark on a globe-trotting journey to find the emerald before it falls into the wrong hands.",
      "popularity": 2760.004,
      "poster_path": "/6DrHO1jr3qVrViUO6s6kFiAGM7.jpg",
      "release_date": "2022-03-30",
      "title": "Sonic the Hedgehog 2",
      "video": false,
      "vote_average": 7.7,
      "vote_count": 2289
    },
    {
      "adult": false,
      "backdrop_path": "/gG9fTyDL03fiKnOpf2tr01sncnt.jpg",
      "genre_ids": [
        28,
        878,
        14
      ],
      "id": 526896,
      "original_language": "en",
      "original_title": "Morbius",
      "overview": "Dangerously ill with a rare blood disorder, and determined to save others suffering his same fate, Dr. Michael Morbius attempts a desperate gamble. What at first appears to be a radical success soon reveals itself to be a remedy potentially worse than the disease.",
      "popularity": 2365.981,
      "poster_path": "/6JjfSchsU6daXk2AKX8EEBjO3Fm.jpg",
      "release_date": "2022-03-30",
      "title": "Morbius",
      "video": false,
      "vote_average": 6.5,
      "vote_count": 1863
    },
    {
      "adult": false,
      "backdrop_path": "/1Ds7xy7ILo8u2WWxdnkJth1jQVT.jpg",
      "genre_ids": [
        28,
        12,
        35
      ],
      "id": 752623,
      "original_language": "en",
      "original_title": "The Lost City",
      "overview": "A reclusive romance novelist was sure nothing could be worse than getting stuck on a book tour with her cover model until a kidnapping attempt sweeps them both into a cutthroat jungle adventure, proving life can be so much stranger, and more romantic, than any of her paperback fictions.",
      "popularity": 2352.542,
      "poster_path": "/neMZH82Stu91d3iqvLdNQfqPPyl.jpg",
      "release_date": "2022-03-24",
      "title": "The Lost City",
      "video": false,
      "vote_average": 6.8,
      "vote_count": 1355
    },
    {
      "adult": false,
      "backdrop_path": "/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 634649,
      "original_language": "en",
      "original_title": "Spider-Man: No Way Home",
      "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
      "popularity": 2220.07,
      "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
      "release_date": "2021-12-15",
      "title": "Spider-Man: No Way Home",
      "video": false,
      "vote_average": 8.1,
      "vote_count": 13803
    },
    {
      "adult": false,
      "backdrop_path": "/vjnLXptqdxnpNJer5fWgj2OIGhL.jpg",
      "genre_ids": [
        28,
        53,
        80
      ],
      "id": 818397,
      "original_language": "en",
      "original_title": "Memory",
      "overview": "Alex, an assassin-for-hire, finds that he's become a target after he refuses to complete a job for a dangerous criminal organization. With the crime syndicate and FBI in hot pursuit, Alex has the skills to stay ahead, except for one thing: he is struggling with severe memory loss, affecting his every move. Alex must question his every action and whom he can ultimately trust.",
      "popularity": 2197.866,
      "poster_path": "/4Q1n3TwieoULnuaztu9aFjqHDTI.jpg",
      "release_date": "2022-04-28",
      "title": "Memory",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 411
    },
    {
      "adult": false,
      "backdrop_path": "/qBu6blwnOA75Hz61QHrNe8unUNw.jpg",
      "genre_ids": [
        53,
        80,
        18
      ],
      "id": 975714,
      "original_language": "en",
      "original_title": "Collision",
      "overview": "Over the course of one fateful day, a corrupt businessman and his socialite wife race to save their daughter from a notorious crime lord.",
      "popularity": 2063.977,
      "poster_path": "/4zsihgkxMZ7MrflNCjkD3ySFJtc.jpg",
      "release_date": "2022-06-16",
      "title": "Collision",
      "video": false,
      "vote_average": 5.8,
      "vote_count": 43
    },
    {
      "adult": false,
      "backdrop_path": "/v7hdWmLh6VLgZQgkbHDxAa17M47.jpg",
      "genre_ids": [
        28,
        80,
        53
      ],
      "id": 852592,
      "original_language": "es",
      "original_title": "Centauro",
      "overview": "Rafa's hooked on the pure, fiery feelings he gets from speed racing, but when his kid's mom gets mixed up with drug dealers, he burns rubber to save her.",
      "popularity": 2009.085,
      "poster_path": "/wOx97MJOxEoR38aoya3lopyrlYC.jpg",
      "release_date": "2022-06-15",
      "title": "Centauro",
      "video": false,
      "vote_average": 6.6,
      "vote_count": 45
    },
    {
      "adult": false,
      "backdrop_path": "/5tmjv1moohN65IuHAbYjKw3cw7I.jpg",
      "genre_ids": [
        878,
        53
      ],
      "id": 615469,
      "original_language": "en",
      "original_title": "Spiderhead",
      "overview": "A prisoner in a state-of-the-art penitentiary begins to question the purpose of the emotion-controlling drugs he's testing for a pharmaceutical genius.",
      "popularity": 1998.503,
      "poster_path": "/7COPO5B9AOKIB4sEkvNu0wfve3c.jpg",
      "release_date": "2022-06-15",
      "title": "Spiderhead",
      "video": false,
      "vote_average": 5.6,
      "vote_count": 411
    },
    {
      "adult": false,
      "backdrop_path": "/wo3l9p0S7pcvwlzlndtKgq0peRJ.jpg",
      "genre_ids": [
        28,
        12,
        878
      ],
      "id": 507086,
      "original_language": "en",
      "original_title": "Jurassic World Dominion",
      "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history’s most fearsome creatures.",
      "popularity": 1992.373,
      "poster_path": "/kAVRgw7GgK1CfYEJq8ME6EvRIgU.jpg",
      "release_date": "2022-06-01",
      "title": "Jurassic World Dominion",
      "video": false,
      "vote_average": 6.7,
      "vote_count": 854
    },
    {
      "adult": false,
      "backdrop_path": "/dFCtmk760k1j6G0sSPrZMnMuNuL.jpg",
      "genre_ids": [
        27,
        53,
        28
      ],
      "id": 960258,
      "original_language": "en",
      "original_title": "Shark Bait",
      "overview": "A group of friends enjoying a weekend steal a couple of jetskis racing them out to sea, ending up in a horrific head-on collision. They struggle to find a way home with a badly injured friend while from the waters below predators lurk.",
      "popularity": 1761.589,
      "poster_path": "/mVVU9zC8snNHlcqYONY2HOsh9ob.jpg",
      "release_date": "2022-05-13",
      "title": "Shark Bait",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 60
    },
    {
      "adult": false,
      "backdrop_path": "/GLLgrghu7wSPaSjl2Rw4kjASOJ.jpg",
      "genre_ids": [
        27,
        53,
        14
      ],
      "id": 756999,
      "original_language": "en",
      "original_title": "The Black Phone",
      "overview": "Finney Shaw, a shy but clever 13-year-old boy, is abducted by a sadistic killer and trapped in a soundproof basement where screaming is of little use. When a disconnected phone on the wall begins to ring, Finney discovers that he can hear the voices of the killer’s previous victims. And they are dead set on making sure that what happened to them doesn’t happen to Finney.",
      "popularity": 1682.255,
      "poster_path": "/bxHZpV02OOu9vq3sb3MsOudEnYc.jpg",
      "release_date": "2022-05-29",
      "title": "The Black Phone",
      "video": false,
      "vote_average": 7.2,
      "vote_count": 117
    },
    {
      "adult": false,
      "backdrop_path": "/trtFAmf4IcndxSh5tIfLwxPyW67.jpg",
      "genre_ids": [
        28,
        53
      ],
      "id": 628878,
      "original_language": "en",
      "original_title": "Panama",
      "overview": "An ex-marine is hired by a defense contractor to travel to Panama to complete an arms deal. In the process he becomes involved with the U.S. invasion of Panama, and learns an important lesson about the true nature of political power.",
      "popularity": 1665.946,
      "poster_path": "/u9DzgsmssidygWuORgYzhi317vj.jpg",
      "release_date": "2022-03-17",
      "title": "Panama",
      "video": false,
      "vote_average": 5.9,
      "vote_count": 54
    },
    {
      "adult": false,
      "backdrop_path": "/cqnVuxXe6vA7wfNWubak3x36DKJ.jpg",
      "genre_ids": [
        28,
        12,
        14
      ],
      "id": 639933,
      "original_language": "en",
      "original_title": "The Northman",
      "overview": "Prince Amleth is on the verge of becoming a man when his father is brutally murdered by his uncle, who kidnaps the boy's mother. Two decades later, Amleth is now a Viking who's on a mission to save his mother, kill his uncle and avenge his father.",
      "popularity": 1647.088,
      "poster_path": "/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
      "release_date": "2022-04-07",
      "title": "The Northman",
      "video": false,
      "vote_average": 7.3,
      "vote_count": 1699
    },
    {
      "adult": false,
      "backdrop_path": "/fOy2Jurz9k6RnJnMUMRDAgBwru2.jpg",
      "genre_ids": [
        16,
        10751,
        35,
        14
      ],
      "id": 508947,
      "original_language": "en",
      "original_title": "Turning Red",
      "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist – when she gets too excited, she transforms into a giant red panda.",
      "popularity": 1589.826,
      "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
      "release_date": "2022-03-10",
      "title": "Turning Red",
      "video": false,
      "vote_average": 7.5,
      "vote_count": 2591
    },
    {
      "adult": false,
      "backdrop_path": "/aEGiJJP91HsKVTEPy1HhmN0wRLm.jpg",
      "genre_ids": [
        28,
        12
      ],
      "id": 335787,
      "original_language": "en",
      "original_title": "Uncharted",
      "overview": "A young street-smart, Nathan Drake and his wisecracking partner Victor “Sully” Sullivan embark on a dangerous pursuit of “the greatest treasure never found” while also tracking clues that may lead to Nathan’s long-lost brother.",
      "popularity": 1581.525,
      "poster_path": "/rJHC1RUORuUhtfNb4Npclx0xnOf.jpg",
      "release_date": "2022-02-10",
      "title": "Uncharted",
      "video": false,
      "vote_average": 7.1,
      "vote_count": 2554
    },
    {
      "adult": false,
      "backdrop_path": "/qp8qKiP7Q7zK4z3LItwWMHfV9kJ.jpg",
      "genre_ids": [
        53
      ],
      "id": 764835,
      "original_language": "en",
      "original_title": "The Desperate Hour",
      "overview": "A woman desperately races to save her child after police place her hometown on lockdown due to an active shooter incident.",
      "popularity": 1565.389,
      "poster_path": "/u6Pg9eTklhg6Aa7kXaxrfdE1Chi.jpg",
      "release_date": "2021-09-12",
      "title": "The Desperate Hour",
      "video": false,
      "vote_average": 6,
      "vote_count": 145
    },
    {
      "adult": false,
      "backdrop_path": "/hGr0FrLI74vqpBWTBOPloDBwOAK.jpg",
      "genre_ids": [
        18,
        35
      ],
      "id": 705861,
      "original_language": "en",
      "original_title": "Hustle",
      "overview": "After discovering a once-in-a-lifetime player with a rocky past abroad, a down on his luck basketball scout takes it upon himself to bring the phenom to the States without his team's approval. Against the odds, they have one final shot to prove they have what it takes to make it in the NBA.",
      "popularity": 1541.15,
      "poster_path": "/fVf4YHHkRfo1uuljpWBViEGmaUQ.jpg",
      "release_date": "2022-06-03",
      "title": "Hustle",
      "video": false,
      "vote_average": 7.9,
      "vote_count": 843
    }
]

export const getTopFilms = async () => {
    try {
        return await axios.get(URLS.TOP_RATED)
    } catch (err){
        return err
    }
}

export const topFilms = [
    {
      "adult": false,
      "backdrop_path": "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 278,
      "original_language": "en",
      "original_title": "The Shawshank Redemption",
      "overview": "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      "popularity": 76.108,
      "poster_path": "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      "release_date": "1994-09-23",
      "title": "The Shawshank Redemption",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 21668
    },
    {
      "adult": false,
      "backdrop_path": "/90ez6ArvpO8bvpyIngBuwXOqJm5.jpg",
      "genre_ids": [
        35,
        18,
        10749
      ],
      "id": 19404,
      "original_language": "hi",
      "original_title": "दिलवाले दुल्हनिया ले जायेंगे",
      "overview": "Raj is a rich, carefree, happy-go-lucky second generation NRI. Simran is the daughter of Chaudhary Baldev Singh, who in spite of being an NRI is very strict about adherence to Indian values. Simran has left for India to be married to her childhood fiancé. Raj leaves for India with a mission at his hands, to claim his lady love under the noses of her whole family. Thus begins a saga.",
      "popularity": 29.725,
      "poster_path": "/2CAL2433ZeIihfX1Hb2139CX0pW.jpg",
      "release_date": "1995-10-19",
      "title": "Dilwale Dulhania Le Jayenge",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 3698
    },
    {
      "adult": false,
      "backdrop_path": "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 238,
      "original_language": "en",
      "original_title": "The Godfather",
      "overview": "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      "popularity": 74.836,
      "poster_path": "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      "release_date": "1972-03-14",
      "title": "The Godfather",
      "video": false,
      "vote_average": 8.7,
      "vote_count": 16136
    },
    {
      "adult": false,
      "backdrop_path": "/loRmRzQXZeqG78TqZuyvSlEQfZb.jpg",
      "genre_ids": [
        18,
        36,
        10752
      ],
      "id": 424,
      "original_language": "en",
      "original_title": "Schindler's List",
      "overview": "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
      "popularity": 43.867,
      "poster_path": "/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
      "release_date": "1993-11-30",
      "title": "Schindler's List",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 12891
    },
    {
      "adult": false,
      "backdrop_path": "/poec6RqOKY9iSiIUmfyfPfiLtvB.jpg",
      "genre_ids": [
        18,
        80
      ],
      "id": 240,
      "original_language": "en",
      "original_title": "The Godfather: Part II",
      "overview": "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      "popularity": 51.759,
      "poster_path": "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      "release_date": "1974-12-20",
      "title": "The Godfather: Part II",
      "video": false,
      "vote_average": 8.6,
      "vote_count": 9734
    },
    {
      "adult": false,
      "backdrop_path": "/ryr532va3rN7MADPAO2updA4Akz.jpg",
      "genre_ids": [
        10751,
        18
      ],
      "id": 667257,
      "original_language": "es",
      "original_title": "Cosas imposibles",
      "overview": "A widow who is tormented by the memory of her abusive husband befriends a young man.",
      "popularity": 16.954,
      "poster_path": "/eaf7GQj0ieOwm08rrvjJQNbN0kN.jpg",
      "release_date": "2021-06-17",
      "title": "Impossible Things",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 248
    },
    {
      "adult": false,
      "backdrop_path": "/hZth9NCeXvvO7Xi98d8q34e1Ier.jpg",
      "genre_ids": [
        16,
        10751,
        14
      ],
      "id": 129,
      "original_language": "ja",
      "original_title": "千と千尋の神隠し",
      "overview": "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
      "popularity": 88.086,
      "poster_path": "/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      "release_date": "2001-07-20",
      "title": "Spirited Away",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 12983
    },
    {
      "adult": false,
      "backdrop_path": "/3RMLbSEXOn1CzLoNT7xFeLfdxhq.jpg",
      "genre_ids": [
        10749,
        16
      ],
      "id": 372754,
      "original_language": "ja",
      "original_title": "同級生",
      "overview": "Rihito Sajo, an honor student with a perfect score on the entrance exam and Hikaru Kusakabe, in a band and popular among girls, would have never crossed paths. Until one day they started talking at the practice for their school’s upcoming chorus festival. After school, the two meet regularly, as Hikaru helps Rihito to improve his singing skills. While they listen to each other’s voice and harmonize, their hearts start to beat together.",
      "popularity": 15.143,
      "poster_path": "/cIfRCA5wEvj9tApca4UDUagQEiM.jpg",
      "release_date": "2016-02-20",
      "title": "Dou kyu sei – Classmates",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 235
    },
    {
      "adult": false,
      "backdrop_path": "/mMtUybQ6hL24FXo0F3Z4j2KG7kZ.jpg",
      "genre_ids": [
        10749,
        16,
        18
      ],
      "id": 372058,
      "original_language": "ja",
      "original_title": "君の名は。",
      "overview": "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
      "popularity": 172.632,
      "poster_path": "/q719jXXEzOoYaps6babgKnONONX.jpg",
      "release_date": "2016-08-26",
      "title": "Your Name.",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 8829
    },
    {
      "adult": false,
      "backdrop_path": "/v5CEt88iDsuoMaW1Q5Msu9UZdEt.jpg",
      "genre_ids": [
        10749,
        18
      ],
      "id": 730154,
      "original_language": "ja",
      "original_title": "きみの瞳が問いかけている",
      "overview": "A tragic accident lead to Kaori's blindness, but she clings to life and the smaller pleasures it can still afford her. She meets Rui and begins to talk to him. Rui was once a promising kickboxer, but something happened in his past. Kaori's smile brings out a change in Rui. However, the two are connected in more than one way. Rui attempts to do what is right.",
      "popularity": 58.45,
      "poster_path": "/cVn8E3Fxbi8HzYYtaSfsblYC4gl.jpg",
      "release_date": "2020-10-23",
      "title": "Your Eyes Tell",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 328
    },
    {
      "adult": false,
      "backdrop_path": "/w2uGvCpMtvRqZg6waC1hvLyZoJa.jpg",
      "genre_ids": [
        10749
      ],
      "id": 696374,
      "original_language": "en",
      "original_title": "Gabriel's Inferno",
      "overview": "An intriguing and sinful exploration of seduction, forbidden love, and redemption, Gabriel's Inferno is a captivating and wildly passionate tale of one man's escape from his own personal hell as he tries to earn the impossible--forgiveness and love.",
      "popularity": 14,
      "poster_path": "/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg",
      "release_date": "2020-05-29",
      "title": "Gabriel's Inferno",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 2254
    },
    {
      "adult": false,
      "backdrop_path": "/TU9NIjwzjoKPwQHoHshkFcQUCG.jpg",
      "genre_ids": [
        35,
        53,
        18
      ],
      "id": 496243,
      "original_language": "ko",
      "original_title": "기생충",
      "overview": "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
      "popularity": 65.355,
      "poster_path": "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      "release_date": "2019-05-30",
      "title": "Parasite",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 13907
    },
    {
      "adult": false,
      "backdrop_path": "/tj6iPnz18hGfr0LKqWmG6Cp3niO.jpg",
      "genre_ids": [
        18
      ],
      "id": 389,
      "original_language": "en",
      "original_title": "12 Angry Men",
      "overview": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
      "popularity": 23.336,
      "poster_path": "/ppd84D2i9W8jXmsyInGyihiSyqz.jpg",
      "release_date": "1957-04-10",
      "title": "12 Angry Men",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 6486
    },
    {
      "adult": false,
      "backdrop_path": "/jtAI6OJIWLWiRItNSZoWjrsUtmi.jpg",
      "genre_ids": [
        10749
      ],
      "id": 724089,
      "original_language": "en",
      "original_title": "Gabriel's Inferno: Part II",
      "overview": "Professor Gabriel Emerson finally learns the truth about Julia Mitchell's identity, but his realization comes a moment too late. Julia is done waiting for the well-respected Dante specialist to remember her and wants nothing more to do with him. Can Gabriel win back her heart before she finds love in another's arms?",
      "popularity": 16.262,
      "poster_path": "/x5o8cLZfEXMoZczTYWLrUo1P7UJ.jpg",
      "release_date": "2020-07-31",
      "title": "Gabriel's Inferno: Part II",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 1417
    },
    {
      "adult": false,
      "backdrop_path": "/l6hQWH9eDksNJNiXWYRkWqikOdu.jpg",
      "genre_ids": [
        14,
        18,
        80
      ],
      "id": 497,
      "original_language": "en",
      "original_title": "The Green Mile",
      "overview": "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
      "popularity": 88.143,
      "poster_path": "/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
      "release_date": "1999-12-10",
      "title": "The Green Mile",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 14070
    },
    {
      "adult": false,
      "backdrop_path": "/cfT29Im5VDvjE0RpyKOSdCKZal7.jpg",
      "genre_ids": [
        18,
        28,
        80,
        53
      ],
      "id": 155,
      "original_language": "en",
      "original_title": "The Dark Knight",
      "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
      "popularity": 73.469,
      "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      "release_date": "2008-07-14",
      "title": "The Dark Knight",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 27786
    },
    {
      "adult": false,
      "backdrop_path": "/lp6SmwyNRspEYkkLXFEVuNlCw77.jpg",
      "genre_ids": [
        16,
        14,
        10749,
        18
      ],
      "id": 533514,
      "original_language": "ja",
      "original_title": "劇場版 ヴァイオレット・エヴァーガーデン",
      "overview": "As the world moves on from the war and technological advances bring changes to her life, Violet still hopes to see her lost commanding officer again.",
      "popularity": 23.94,
      "poster_path": "/bajajkoErDst0JxdFyBkABiF9rW.jpg",
      "release_date": "2020-09-18",
      "title": "Violet Evergarden: The Movie",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 239
    },
    {
      "adult": false,
      "backdrop_path": "/fQq1FWp1rC89xDrRMuyFJdFUdMd.jpg",
      "genre_ids": [
        10749,
        35
      ],
      "id": 761053,
      "original_language": "en",
      "original_title": "Gabriel's Inferno: Part III",
      "overview": "The final part of the film adaption of the erotic romance novel Gabriel's Inferno written by an anonymous Canadian author under the pen name Sylvain Reynard.",
      "popularity": 35.962,
      "poster_path": "/uqmTxOP3gNl5MWRt1wlrUnzTphM.jpg",
      "release_date": "2020-11-19",
      "title": "Gabriel's Inferno: Part III",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 970
    },
    {
      "adult": false,
      "backdrop_path": "/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
      "genre_ids": [
        53,
        80
      ],
      "id": 680,
      "original_language": "en",
      "original_title": "Pulp Fiction",
      "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
      "popularity": 60.822,
      "poster_path": "/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg",
      "release_date": "1994-09-10",
      "title": "Pulp Fiction",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 23354
    },
    {
      "adult": false,
      "backdrop_path": "/x4biAVdPVCghBlsVIzB6NmbghIz.jpg",
      "genre_ids": [
        37
      ],
      "id": 429,
      "original_language": "it",
      "original_title": "Il buono, il brutto, il cattivo",
      "overview": "While the Civil War rages between the Union and the Confederacy, three men – a quiet loner, a ruthless hit man and a Mexican bandit – comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
      "popularity": 45.13,
      "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
      "release_date": "1966-12-23",
      "title": "The Good, the Bad and the Ugly",
      "video": false,
      "vote_average": 8.5,
      "vote_count": 6695
    }
]