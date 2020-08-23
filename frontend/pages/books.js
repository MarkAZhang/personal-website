import WRITINGS from './writing_links'

const BOOKS = [
    { name: 'Dubliners', author: 'James Joyce' },
    { name: 'Good Strategy, Bad Strategy', author: 'Richard Rumelt' },
    { name: 'Bad Blood', author: 'John Carreyrou' },
    { name: 'Creative Selection', author: 'Ken Kocienda' },
    { name: 'Anathem', author: 'Neal Stephenson' },
    { name: 'Death on the Nile', author: 'Agatha Christie' },
    { name: 'The Three Body Problem', author: 'Liu Cixin' },
    { name: 'Envisioning Information', author: 'Edward Tufte' },
    { name: 'The Dictator\'s Handbook', author: 'Bruce Bueno de Mesquita and Alastair Smith' },
    { name: 'The Power Broker: Robert Moses and the Fall of New York', author: 'Robert Caro' },
    { name: 'Factfulness', author: 'Hans Rosling' },
    { name: 'Impro: Improvisation and the Theater', author: 'Keith Johnstone', favorite: true },
    { name: 'Phoenix', author: 'Osamu Tezuka' },
    { name: 'The Manager\'s Path', author: 'Camille Fournier' },
    { name: 'Lying', author: 'Sam Harris' },
    { name: 'Ending Aging', author: 'Aubrey de Grey' },
    { name: 'The Culture Code', author: 'Daniel Coyle' },
    { name: 'The 48 Laws of Power', author: 'Robert Greene' },
    { name: 'When Breath Becomes Air', author: 'Paul Kalanithi' },
    { name: 'World Order', author: 'Henry Kissinger' },
    { name: 'Confessions of an Economic Hitman', author: 'John Perkins' },
    { name: 'I am a Strange Loop', author: 'Douglas Hofstadter', favorite: true },
    { name: 'Gödel, Escher, Bach: an Eternal Golden Braid', author: 'Douglas Hofstadter' },
    { name: 'The 7 Habits of Highly Effective People', author: 'Stephen Covey' },
    { name: 'Sapiens', author: 'Yuval Noah Harari' },
    { name: 'Finnegan\'s Wake (the first two pages)', author: 'James Joyce' },
    { name: 'The Four Steps to an Epiphany', author: 'Steve Blank' },
    { name: 'Shoe Dog: A Memoir by the Creator of Nike', author: 'Phil Knight' },
    { name: 'The Effective Manager', author: 'Mark Horstman' },
    { name: 'Principles', author: 'Ray Dalio' },
    { name: 'Gateless', author: 'Sebastian Marshall' },
    { name: 'However Long the Night', author: 'Victoria Odoi-Atsem' },
    { name: 'The Examined Life', author: 'Stephen Grosz' },
    { name: 'A Fire Upon the Deep', author: 'Vernor Vinge' },
    { name: 'The Righteous Mind', favorite: true, author: 'Jonathan Haidt' },
    { name: 'The Paper Menagerie and Other Stories', author: 'Ken Liu' },
    { name: 'The Signal and the Noise', author: 'Nate Silver' },
    { name: 'What If?', author: 'Randall Munroe' },
    { name: 'Einstein\'s Dreams', author: 'Alan Lightman' },
    { name: 'Blindness', author: 'José Saramago' },
    { name: 'Just Mercy', author: 'Bryan Stevenson' },
    { name: 'Fierce Conversations', author: 'Susan Scott' },
    { name: 'The Hard Thing about Hard Things', author: 'Ben Horowitz', favorite: true },
    { name: 'Market Wizards', author: 'Jack Schwager' },
    { name: 'Hyperion', author: 'Dan Simmons' },
    { name: 'Station Eleven', author: 'Emily St. John Mandel' },
    { name: 'Bird by Bird', author: 'Anne Lamott' },
    { name: 'Mystic River', author: 'Dennis Lehane' },
    { name: 'Half the Sky', author: 'Nicholas Kristof and Sheryl WuDunn' },
    { name: 'The Name of the Wind', author: 'Patrick Rothfuss' },
    { name: 'Stories of Your Life', favorite: true, author: 'Ted Chiang' },
    { name: 'The Emperor\'s Soul', favorite: true, author: 'Brandon Sanderson' },
    { name: 'American Gods', author: 'Neil Gaiman' },
    { name: 'Sandman', author: 'Neil Gaiman' },
    { name: 'A Brief History of Time', author: 'Stephen Hawking' },
    { name: 'Neuromancer', author: 'William Gibson' },
    { name: 'Thinking, Fast and Slow', favorite: true, author: 'Daniel Kahneman' },
    { name: 'Sum: Forty Tales from the Afterlives', author: 'David Eagleman' },
    { name: 'Hard-Boiled Wonderland and the End of the World', author: 'Haruki Murakami' },
    { name: 'Grimus', author: 'Salman Rushdie' },
    { name: 'Solaris', author: 'Stanislaw Lem' },
    { name: 'Catch-22', author: 'Joseph Heller' },
    { name: 'The Colour from Outer Space', author: 'H.P. Lovecraft' },
    { name: 'Night Shift', author: 'Stephen King' },
    { name: 'The Things They Carried', author: 'Tim O\'Brien' },
    { name: 'The Left Hand of Darkness', author: 'Ursula K. Le Guin' },
    { name: 'Perdido Street Station', author: 'China Mieville' },
    { name: 'White Noise', author: 'Don DeLillo' },
    { name: 'A Portrait of the Artist as a Young Man', author: 'James Joyce' },
    { name: 'The Master and Margarita', favorite: true, author: 'Mikhail Bulgakov' },
    { name: 'The Poisonwood Bible', author: 'Barbara Kingsolver' },
    { name: 'One Hundred Years of Solitude', favorite: true, author: 'Gabriel García Márquez' },
    { name: 'Dune', author: 'Frank Herbert' },
    { name: 'A Tale of Two Cities', author: 'Charles Dickens' },
    { name: 'Hope and other Dangerous Pursuits', author: 'Laila Lalami' },
    { name: 'The Kite Runner', author: 'Khaled Hosseini' },
    { name: 'Ender\'s Game', author: 'Orson Scott Card' },
    { name: 'Speaker for the Dead', author: 'Orson Scott Card' },
    { name: 'The Golden Compass', author: 'Philip Pullman' },
    { name: 'Surely You\'re Joking, Mr. Feynman!', favorite: true, author: 'Richard Fenyman' },
    { name: 'Genentech: The Beginnings Of Biotech', author: 'Sally Smith Hughes', notes: WRITINGS.book_notes_genentech },
    { name: 'The Antidote', author: 'Barry Werth' },
    { name: 'The Billion-Dollar Molecule', author: 'Barry Werth' },
    { name: 'From Third World to First: The Singapore Story', author: 'Lee Kuan Yew' },
    { name: 'Born a Crime: Stories from a South African Childhood', author: 'Trevor Noah' },
    { name: 'The Idea Factory: Bell Labs and the Great Age of American Innovation', author: 'John Gertner' },
    { name: 'The War of Art', author: 'Steven Pressfield' },
    { name: 'Brave New World', author: 'Aldous Huxley' },
    { name: 'Ubik', author: 'Philip K. Dick' },
    { name: 'The Martian', author: 'Andy Weir' },
    { name: 'Foundation', author: 'Isaac Asimov' },
    { name: 'The Charisma Myth', author: 'Olivia Fox Cabane' },
    { name: '1984', author: 'George Orwell' },
    { name: 'Animal Farm', author: 'George Orwell', favorite: true },
    { name: 'Quiet: The Power of Introverts in a World That Can’t Stop Talking', author: 'Susan Cain' },
    { name: 'Steal Like an Artist', author: 'Austin Kleon' },
    { name: 'Story: Substance, Structure, Style, and the Principles of Screenwriting', author: 'Robert McKee', favorite: true },
    { name: 'The Art of Gathering', author: 'Priya Parker' },
    { name: 'Pivot', author: 'Jenny Blake'},
    { name: 'Rules for Radicals', author: 'Saul Alinsky', favorite: true },
    { name: 'The Gene: An Intimate History', author: 'Siddhartha Mukherjee' },
    { name: 'The Founder\'s Dilemma', author: 'Noam T. Wasserman' },
    { name: 'The Lean Startup', author: 'Eric Ries' },
    { name: 'The Life-Changing Magic of Tidying Up', author: 'Marie Kondo' },
    { name: 'The Lessons of History', author: 'Ariel Durant and Will Durant' },
    { name: 'Impossible Owls', author: 'Brian Phillips' },
    { name: 'On Photography', author: 'Susan Sontag' },
    { name: 'Plain Talk', author: 'Ken Iverson' },
    { name: 'The Prophet', author: 'Kahlil Gibran' },
    { name: 'In Defense of Food', author: 'Michael Pollan' },
    { name: 'Never Eat Alone', author: 'Keith Ferrazzi' },
    { name: 'Watchmen', author: 'Alan Moore' },
    { name: 'Figure Drawing', author: 'Andrew Loomis' },
    { name: 'Color and Light: A Guide for the Realist Painter', author: 'James Gurney' },
    { name: 'Handbook of the Biology of Aging', author: 'Matt R. Kaeberlein and George M. Martin' },
    { name: 'Getting to Yes', author: 'Roger Fisher and William Ury' },
    { name: 'Never Split the Difference', author: 'Christopher Voss and Tahl Raz' },
    { name: 'The Personal MBA', author: 'Josh Kaufman' },
    { name: 'The Power of Habit', author: 'Charles Duhigg' },
    { name: 'Venture Deals', author: 'Dick Costolo' },
    { name: 'Rework', author: 'Jason Fried and David Heinemeier Hansson' },
    { name: 'A Little History of the World', author: 'E. H. Gombrich' },
    { name: 'The Count of Mount Cristo', author: 'Alexandre Dumas' },
    { name: 'The Sound and the Fury', author: 'William Faulkner' },
    { name: 'The Linux Programming Interface', author: 'Michael Kerrisk' },
    { name: 'Don\'t Make Me Think', author: 'Steve Krug' },
    { name: 'The Design of Everyday Things', author: 'Don Norman' },
    { name: 'How the Immune System Works', author: 'Lauren Sompayrac' },
    { name: 'Entrepreneur\'s Guide to a Biotech Startup', author: 'Peter Kolchinsky' },
    { name: 'If on a Winter\'s Night a Traveler', author: 'Italo Calvino' },
    { name: 'Huckleberry Finn', author: 'Mark Twain' },
    { name: 'The Great CEO Within: A Tactical Guide to Company Building', author: 'Matt Mochary', favorite: true },
]

export default BOOKS
