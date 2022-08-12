const quotes = [
    {
        "q": "Life must be rich and full of loving-it's no good otherwise, no good at all, for anyone.  ",
        "a": "Jack Kerouac",
        "c": "90",
        "h": "<blockquote>&ldquo;Life must be rich and full of loving-it's no good otherwise, no good at all, for anyone.  &rdquo; &mdash; <footer>Jack Kerouac</footer></blockquote>"
    },
    {
        "q": "Learning is a weightless treasure you can always carry easily.",
        "a": "Chinese Proverb",
        "c": "62",
        "h": "<blockquote>&ldquo;Learning is a weightless treasure you can always carry easily.&rdquo; &mdash; <footer>Chinese Proverb</footer></blockquote>"
    },
    {
        "q": "The meaning of life is to find your gift. The purpose of life is to give it away.",
        "a": "Pablo Picasso",
        "c": "81",
        "h": "<blockquote>&ldquo;The meaning of life is to find your gift. The purpose of life is to give it away.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
    },
    {
        "q": "But better die than live mechanically a life that is a repetition of repetitions.",
        "a": "D. H. Lawrence",
        "c": "81",
        "h": "<blockquote>&ldquo;But better die than live mechanically a life that is a repetition of repetitions.&rdquo; &mdash; <footer>D. H. Lawrence</footer></blockquote>"
    },
    {
        "q": "It is better to light a single candle than to curse the darkness.",
        "a": "Eleanor Roosevelt",
        "c": "65",
        "h": "<blockquote>&ldquo;It is better to light a single candle than to curse the darkness.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "I am who I am today because of the choices I made yesterday.",
        "a": "Eleanor Roosevelt",
        "c": "60",
        "h": "<blockquote>&ldquo;I am who I am today because of the choices I made yesterday.&rdquo; &mdash; <footer>Eleanor Roosevelt</footer></blockquote>"
    },
    {
        "q": "You cannot swim for new horizons until you have courage to lose sight of the shore.",
        "a": "William Faulkner",
        "c": "83",
        "h": "<blockquote>&ldquo;You cannot swim for new horizons until you have courage to lose sight of the shore.&rdquo; &mdash; <footer>William Faulkner</footer></blockquote>"
    },
    {
        "q": "True wealth is of the heart, not of the purse.",
        "a": "Og Mandino",
        "c": "46",
        "h": "<blockquote>&ldquo;True wealth is of the heart, not of the purse.&rdquo; &mdash; <footer>Og Mandino</footer></blockquote>"
    },
    {
        "q": "You know you are on the road to success if you would do your job and not be paid for it.",
        "a": "Oprah Winfrey",
        "c": "88",
        "h": "<blockquote>&ldquo;You know you are on the road to success if you would do your job and not be paid for it.&rdquo; &mdash; <footer>Oprah Winfrey</footer></blockquote>"
    },
    {
        "q": "When you judge others, you do not define them, you define yourself.",
        "a": "Earl Nightingale",
        "c": "67",
        "h": "<blockquote>&ldquo;When you judge others, you do not define them, you define yourself.&rdquo; &mdash; <footer>Earl Nightingale</footer></blockquote>"
    },
    {
        "q": "We are all in the gutter, but some of us are looking at the stars. ",
        "a": "Oscar Wilde",
        "c": "67",
        "h": "<blockquote>&ldquo;We are all in the gutter, but some of us are looking at the stars. &rdquo; &mdash; <footer>Oscar Wilde</footer></blockquote>"
    },
    {
        "q": "For all evils there are two remedies - time and silence.",
        "a": "Alexandre Dumas",
        "c": "56",
        "h": "<blockquote>&ldquo;For all evils there are two remedies - time and silence.&rdquo; &mdash; <footer>Alexandre Dumas</footer></blockquote>"
    },
    {
        "q": "The journey, not the destination matters.",
        "a": "T.S. Eliot",
        "c": "41",
        "h": "<blockquote>&ldquo;The journey, not the destination matters.&rdquo; &mdash; <footer>T.S. Eliot</footer></blockquote>"
    },
    {
        "q": "The scariest moment is always just before you start. After that, things can only get better.",
        "a": "Stephen King",
        "c": "92",
        "h": "<blockquote>&ldquo;The scariest moment is always just before you start. After that, things can only get better.&rdquo; &mdash; <footer>Stephen King</footer></blockquote>"
    },
    {
        "q": "Hardly anybody recognizes the most significant moments of their life at the time they happen.",
        "a": "W.P. Kinsella",
        "c": "93",
        "h": "<blockquote>&ldquo;Hardly anybody recognizes the most significant moments of their life at the time they happen.&rdquo; &mdash; <footer>W.P. Kinsella</footer></blockquote>"
    },
    {
        "q": "Stop being a prisoner of your past. Become the architect of your future.",
        "a": "Robin Sharma",
        "c": "72",
        "h": "<blockquote>&ldquo;Stop being a prisoner of your past. Become the architect of your future.&rdquo; &mdash; <footer>Robin Sharma</footer></blockquote>"
    },
    {
        "q": "You are not only responsible for what you say, but also for what you do not say. ",
        "a": "Martin Luther",
        "c": "81",
        "h": "<blockquote>&ldquo;You are not only responsible for what you say, but also for what you do not say. &rdquo; &mdash; <footer>Martin Luther</footer></blockquote>"
    },
    {
        "q": "Peaceful is the one who expects nothing.",
        "a": "Maxime Lagace",
        "c": "40",
        "h": "<blockquote>&ldquo;Peaceful is the one who expects nothing.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "What's right is what's left if you do everything else wrong.",
        "a": "Robin Williams",
        "c": "60",
        "h": "<blockquote>&ldquo;What's right is what's left if you do everything else wrong.&rdquo; &mdash; <footer>Robin Williams</footer></blockquote>"
    },
    {
        "q": "Associate yourself with men of good quality, if you esteem your own reputation; for 'tis better to be alone than in bad company. ",
        "a": "George Washington",
        "c": "129",
        "h": "<blockquote>&ldquo;Associate yourself with men of good quality, if you esteem your own reputation; for 'tis better to be alone than in bad company. &rdquo; &mdash; <footer>George Washington</footer></blockquote>"
    },
    {
        "q": "I have not failed. I've just found 10,000 ways that won't work.",
        "a": "Thomas Edison",
        "c": "63",
        "h": "<blockquote>&ldquo;I have not failed. I've just found 10,000 ways that won't work.&rdquo; &mdash; <footer>Thomas Edison</footer></blockquote>"
    },
    {
        "q": "It's not how much we give but how much love we put into giving.",
        "a": "Mother Teresa",
        "c": "63",
        "h": "<blockquote>&ldquo;It's not how much we give but how much love we put into giving.&rdquo; &mdash; <footer>Mother Teresa</footer></blockquote>"
    },
    {
        "q": "Never close your lips to those whom you have already opened your heart.",
        "a": "Charles Dickens",
        "c": "71",
        "h": "<blockquote>&ldquo;Never close your lips to those whom you have already opened your heart.&rdquo; &mdash; <footer>Charles Dickens</footer></blockquote>"
    },
    {
        "q": "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.",
        "a": "Robin Williams",
        "c": "79",
        "h": "<blockquote>&ldquo;Everyone you meet is fighting a battle you know nothing about. Be kind. Always.&rdquo; &mdash; <footer>Robin Williams</footer></blockquote>"
    },
    {
        "q": "The only thing more frustrating than slanderers is those foolish enough to listen to them.",
        "a": "Criss Jami",
        "c": "90",
        "h": "<blockquote>&ldquo;The only thing more frustrating than slanderers is those foolish enough to listen to them.&rdquo; &mdash; <footer>Criss Jami</footer></blockquote>"
    },
    {
        "q": "Force has no place where there is need of skill. ",
        "a": "Herodotus",
        "c": "49",
        "h": "<blockquote>&ldquo;Force has no place where there is need of skill. &rdquo; &mdash; <footer>Herodotus</footer></blockquote>"
    },
    {
        "q": "To accomplish big things, I am convinced you must first dream big dreams.",
        "a": "Conrad Hilton",
        "c": "73",
        "h": "<blockquote>&ldquo;To accomplish big things, I am convinced you must first dream big dreams.&rdquo; &mdash; <footer>Conrad Hilton</footer></blockquote>"
    },
    {
        "q": "The most creative act you will ever undertake is the act of creating yourself.",
        "a": "Deepak Chopra",
        "c": "78",
        "h": "<blockquote>&ldquo;The most creative act you will ever undertake is the act of creating yourself.&rdquo; &mdash; <footer>Deepak Chopra</footer></blockquote>"
    },
    {
        "q": "It is the power of the mind to be unconquerable.",
        "a": "Seneca",
        "c": "48",
        "h": "<blockquote>&ldquo;It is the power of the mind to be unconquerable.&rdquo; &mdash; <footer>Seneca</footer></blockquote>"
    },
    {
        "q": "Dreams are for dreamers. Goals are for achievers.",
        "a": "Arnold Schwarzenegger",
        "c": "49",
        "h": "<blockquote>&ldquo;Dreams are for dreamers. Goals are for achievers.&rdquo; &mdash; <footer>Arnold Schwarzenegger</footer></blockquote>"
    },
    {
        "q": "Great leaders are almost always great simplifiers, who can cut through argument, debate and doubt, to offer a solution everybody can understand.",
        "a": "Colin Powell",
        "c": "144",
        "h": "<blockquote>&ldquo;Great leaders are almost always great simplifiers, who can cut through argument, debate and doubt, to offer a solution everybody can understand.&rdquo; &mdash; <footer>Colin Powell</footer></blockquote>"
    },
    {
        "q": "Work out your own salvation. Do not depend on others.",
        "a": "Buddha",
        "c": "53",
        "h": "<blockquote>&ldquo;Work out your own salvation. Do not depend on others.&rdquo; &mdash; <footer>Buddha</footer></blockquote>"
    },
    {
        "q": "Singleness of purpose is one of the chief essentials for success in life, no matter what may be one's aim.",
        "a": "John D. Rockefeller",
        "c": "106",
        "h": "<blockquote>&ldquo;Singleness of purpose is one of the chief essentials for success in life, no matter what may be one's aim.&rdquo; &mdash; <footer>John D. Rockefeller</footer></blockquote>"
    },
    {
        "q": "Integrity is the ability to stand by an idea.",
        "a": "Ayn Rand",
        "c": "45",
        "h": "<blockquote>&ldquo;Integrity is the ability to stand by an idea.&rdquo; &mdash; <footer>Ayn Rand</footer></blockquote>"
    },
    {
        "q": "There are no differences but differences of degree between different degrees of difference and no difference.",
        "a": "William James",
        "c": "109",
        "h": "<blockquote>&ldquo;There are no differences but differences of degree between different degrees of difference and no difference.&rdquo; &mdash; <footer>William James</footer></blockquote>"
    },
    {
        "q": "It's the job that's never started that takes the longest to finish.",
        "a": "J.R.R. Tolkien",
        "c": "67",
        "h": "<blockquote>&ldquo;It's the job that's never started that takes the longest to finish.&rdquo; &mdash; <footer>J.R.R. Tolkien</footer></blockquote>"
    },
    {
        "q": "Life moves on and so should we.",
        "a": "Spencer Johnson",
        "c": "31",
        "h": "<blockquote>&ldquo;Life moves on and so should we.&rdquo; &mdash; <footer>Spencer Johnson</footer></blockquote>"
    },
    {
        "q": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        "a": "Winston Churchill",
        "c": "86",
        "h": "<blockquote>&ldquo;Success is not final, failure is not fatal: it is the courage to continue that counts.&rdquo; &mdash; <footer>Winston Churchill</footer></blockquote>"
    },
    {
        "q": "Life is too short to waste your time on people who don't respect, appreciate, and value you.",
        "a": "Roy T. Bennett",
        "c": "92",
        "h": "<blockquote>&ldquo;Life is too short to waste your time on people who don't respect, appreciate, and value you.&rdquo; &mdash; <footer>Roy T. Bennett</footer></blockquote>"
    },
    {
        "q": "Life is much more successfully looked at from a single window.",
        "a": "F. Scott Fitzgerald",
        "c": "62",
        "h": "<blockquote>&ldquo;Life is much more successfully looked at from a single window.&rdquo; &mdash; <footer>F. Scott Fitzgerald</footer></blockquote>"
    },
    {
        "q": "Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",
        "a": "Albus Dumbledore",
        "c": "97",
        "h": "<blockquote>&ldquo;Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.&rdquo; &mdash; <footer>Albus Dumbledore</footer></blockquote>"
    },
    {
        "q": "Fools read fast. Geniuses reread.",
        "a": "Maxime Lagace",
        "c": "33",
        "h": "<blockquote>&ldquo;Fools read fast. Geniuses reread.&rdquo; &mdash; <footer>Maxime Lagace</footer></blockquote>"
    },
    {
        "q": "You are not what you think you are, You are not what others think you are, You are what you think others think you are.",
        "a": "Unknown",
        "c": "119",
        "h": "<blockquote>&ldquo;You are not what you think you are, You are not what others think you are, You are what you think others think you are.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "The only problem we really have is we think we're not supposed to have problems! Problems call us to higher level- - face & solve them now!",
        "a": "Tony Robbins",
        "c": "139",
        "h": "<blockquote>&ldquo;The only problem we really have is we think we're not supposed to have problems! Problems call us to higher level- - face & solve them now!&rdquo; &mdash; <footer>Tony Robbins</footer></blockquote>"
    },
    {
        "q": "Everything you can imagine is real.",
        "a": "Pablo Picasso",
        "c": "35",
        "h": "<blockquote>&ldquo;Everything you can imagine is real.&rdquo; &mdash; <footer>Pablo Picasso</footer></blockquote>"
    },
    {
        "q": "We make a living by what we get, but we make a life by what we give.",
        "a": "Unknown",
        "c": "68",
        "h": "<blockquote>&ldquo;We make a living by what we get, but we make a life by what we give.&rdquo; &mdash; <footer>Unknown</footer></blockquote>"
    },
    {
        "q": "There is peace even in the storm.",
        "a": "Vincent van Gogh",
        "c": "33",
        "h": "<blockquote>&ldquo;There is peace even in the storm.&rdquo; &mdash; <footer>Vincent van Gogh</footer></blockquote>"
    },
    {
        "q": "Failure is an option, fear is not.",
        "a": "James Cameron",
        "c": "34",
        "h": "<blockquote>&ldquo;Failure is an option, fear is not.&rdquo; &mdash; <footer>James Cameron</footer></blockquote>"
    },
    {
        "q": "He who knows, does not speak. He who speaks, does not know.",
        "a": "Lao Tzu",
        "c": "59",
        "h": "<blockquote>&ldquo;He who knows, does not speak. He who speaks, does not know.&rdquo; &mdash; <footer>Lao Tzu</footer></blockquote>"
    },
    {
        "q": "Don't be afraid to go slowly. Be afraid of stopping.",
        "a": "Zen Proverb",
        "c": "52",
        "h": "<blockquote>&ldquo;Don't be afraid to go slowly. Be afraid of stopping.&rdquo; &mdash; <footer>Zen Proverb</footer></blockquote>"
    }
]

export default quotes;