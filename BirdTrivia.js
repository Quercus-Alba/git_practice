/*
MIXED MESSAGES PROJECT
This program displays a random bird question and then three seconds
later displays the answer (name of the bird) in
the console
*/


// Bird and question array data set
let birdBank = [{"bird": "House Sparrow", "question": "What bird was introduced into Brooklyn, NY in 1851?"},
        {"bird": "Mourning Dove", "question": "What bird eats roughly 12 to 20% of its body weight per day?"},
        {"bird": "American Goldfinch", "question": "What bird has a strict vegetarian diet?"},
        {"bird": "Northern Cardinal", "question": "What bird is the state bird in seven states?"},
        {"bird": "Blue Jay", "question": "Which bird has brown feathers, but the feathers appear blue to humans?"},
        {"bird": "Black-capped Chickadee", "question": "What bird hides seeds to eat later and can remember 1,000 of hiding places?"},
        {"bird": "American Robing", "question": "What bird eats honeysuckle berries and can become intoxicated?"},
        {"bird": "American Crow", "question": "What bird will follow other birds back to their nest to eat their chicks?"},
        {"bird": "Downy Woodpecker", "question": "Which male and female bird species divide up to look for food in winter?"},
        {"bird": "White-breasted Nuthatch", "question": "Which bird forages in flocks led by chickadees or titmice?"},
        {"bird": "Song Sparrow", "question": "Which male bird most often sing perched around eye level on exposed branches?"},
        {"bird": "Red-bellied Woodpecker", "question": "Which bird can stick out its tongue nearly 2 inches past the end of its beak?"},
        {"bird": "European Starling", "question": "Which bird was set loose in New York's Central Park in the early 1890s?"},
        {"bird": "Tufted Titmouse", "question": "Which bird depends on dead trees and the tree holes made by woodpeckers for its nest?"},
        {"bird": "Common Grackle", "question": "Which bird pick leeches off the legs of turtles and steal worms from American Robins?"},
        {"bird": "Hairy Woodpecker", "question": "Which bird likes to forage along trunks and main branches of large trees?"},
        {"bird": "House Finch", "question": "Which bird was originally only in western U.S. and mexico but introduced in NY in 1940?"},
        {"bird": "Northern Flicker", "question": "Which woodpecker bird prefers to eat ants on the ground versus on trees?"},
        {"bird": "Dark-eyed Junco", "question": "Which bird are considered snowbirds of the middle latitudes?"},
        {"bird": "Brown-headed Cowbird", "question": "Which female bird makes no nest but instead lays her eggs in other bird's nests?"},
        {"bird": "Cedar Waxwing", "question": "Which bird specializes in eating fruit and can survive on fruit alone for several months?"}];


// Function selects random bird and qestion from bird/question array
const getRandomBird = arr => {
    const randomArrIndex = Math.floor(Math.random() * arr.length);
    return randomArrIndex;
}  // end getRandomBird Fn


// Function display random bird question followed by a 3 second delay, then the answer
const displayRandomMessage = arr => {
    const randomBird = getRandomBird(arr);
    console.log("QUESTION: ", arr[randomBird].question);
    setTimeout(function() {console.log("ANSWER: ", arr[randomBird].bird)}, 3 * 1000);  // 3 second delay before desplay of answer
}  // end displayMessage Fn


// ***** MAIN PROGRAM *****
displayRandomMessage(birdBank);
