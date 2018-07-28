Memory Game: 

“If you fail to plan, you are planning to fail.”
Project Name & Description:  Memory Game; A card game that consists of 16 card with eight matching pairs. The game is won by flipping one card over and guessing where the match is. The goal is to do this in as fewer moves and as little time as possible. The one with more correct guesses and shortest time is the winner. 

What are the goals of the project?
The project should accommodate the basic functionality of the card game. Everything should work the way it is intended to. There should be no misunderstandings about game design and functionality. 

What should the user experience?
 The user should be able to play the game, experiencing it as though it were not a “computer game”. The user should be able to interact with the application without difficulties and misunderstandings. 



What are the functionality goals? Describe the different pieces of functionality that the finished product should support.

1.	Picking one card to reveal the underlying symbol, then selecting a second card to see if it matches the first card. If the cards match, then the cards should stay open and change colors indicating that they are a match. (How do know if they match?, what goes on under the hood?)
2.	If the cards do not match, then both should be flipped back over to the starting position.(What is the logic that determines if the cards match or do not match?)
3.	Each move is counted for. 1 move = revealing 2 cards to see if they match.  (If the cards match or do not match, the moves counter is incremented by one. )
4.	Your star rating is based on the number of moves, and time taken to complete the full deck of cards. If moves > 8 && < 12: display 2 stars…. And so on. 
5.	The game should start by shuffling the deck (randomize) to solve for any random error. An array is passed to the shuffle function. 

6.	A reset button should have the functionality to reset the time, reset the moves counter to 0, re-shuffle the deck
7.	When the game is completed, a window should be displayed with a message congratulating the user and displaying the number of moves and time it took to complete the matching game.  It should also give the user the option to play again (I.e. the reset functionality and re-shuffling of the deck of cards). 

