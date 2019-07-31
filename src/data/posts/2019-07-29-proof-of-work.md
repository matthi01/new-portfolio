---
path: "/blog/proof-of-work"
title: "Proof of Work"
date: "2019-07-29"
author: "Matthi"
excerpt: "A basic interactive introduction to what gives a cryptocurrency like Bitcoin value."
---

# Mining

There are a lot of people that are into blockchain and cryptocurrency. A ton, either by having invested in a cryptocurrency or just by having an interest. But I find it surprising that to a lot of people, even people that are really interested in the field, for some the functionality of how mining in a cryptocurrency really works. This post is meant for the very beginner that wants to have the fog lifted around mining, and the concept of proof of work. I've also built some interactive components that will hopefully help to understand this (the basic concept is really not that difficult or scary).

### Overview

### Analogy
The analogy that is implied is gold mining. With gold mining, you have a finite amount of gold that is actually in the ground. At the beginning, getting the gold out of the ground is relatively simple and less resource intensive. Meaning you don't need to put a lot of energy in to pull out a good amount of gold. 
As time goes on, and more gold gets pulled out of the ground, it will get increasingly more difficult to get the gold. You may need to dig deeper, process more material and therefore you are exerting more resources to extract less gold. As you are exerting more resources to get the gold, the new gold added to the global market should decrease, the scarcity driving up the value.

Bitcoin works in a similar way. There is a set amount of bitcoin that will ever be mined, 21 million coins. New bitcoin gets put into circulation by being mined. In this process, a miner node (which is just a computer the bitcoin mining software). What they do is validate new transactions on the bitcoin network, solve a cryptographic puzzle via proof of work, which then lets them append a new block of transactions onto the blockchain. -- we'll go into more detail soon-- When a miner is able to append a block to the blockchain, he will be awarded with a 'block reward'. This is a reward of a set amount of new bitcoin that is created when a block is mined. Giving this reward of newly created bitcoin is what incentivises the miner to validate transactions and append blocks to the blockchain. (kind of like cashing in your newly dug up gold nugget). This process will go on until all the bitcoin (21 million coins) have been mined.

### Halfing
Back to our gold mining analogy. We said that time goes on, gold becomes more scarce. Bitcoin behaves the same way via something called bitcoin halfing. 
Now initially the block reward one would receive for mining a block was 50 BTC. This block reward has a half life. After half of all the bitcoin ever to exist have been mined, the block reward will halve. So after 10.5 million BTC have been mined, the block reward will be halved to 25 BTC per block.
Then once again, once half of the remaining bitcoin are mined, it will halve again. At 15.75 million BTC mined, the block reward is halved to 12.5, etc. 
So as time goes on, and bitcoin becomes more scarce, the value should be driven up based on supply and demand.

## Proof of Work
So you validate the transactions, and append the block to the blockchain via proof of work... what does that mean? Validating a transaction is simlpy checking if a specific address that is sending bitcoin in a certain amount, actually has that amount of bitcoin. This can be traced by checking the open distributed ledger, the blockchain.

To append a block to the blockchain, the miner needs to solve the proof of work puzzle. The idea behind this is exactly what the name says, it is the proof that the miner put in a substancial amount of work or resources into mining that block. The difficulty of this puzzle is also adjusted after every 2016 mined blocks (roughly once every two weeks) to make the puzzle difficult enough that all the miners currently on the bitcoin network can only mine 1 block every 10 minutes on average. This difficulty adjustment is done automatically in the core bitcoin code. 

So for example, if 5 large super miners come all of a sudden come online on the network and start solving blocks at a rate of 7 minutes per block, then after 2016 mined blocks, the puzzle will adjust it's own own difficulty so that at the current rate of mining, each following block should take 10 minutes. This also goes both ways, the difficulty can be adjusted up or down, fully dependent on the network and mining speed.

So to summarize the properties of this puzzle, it needs to be:
- difficult enough that any super computer would have a very hard time solving it.
- basic enough that any computer can still compete
- random so that no one computer can take advantage and solve multiple blocks one after another
- able to adjust its own difficulty automatically 
- infinitely repeatable without repeats
- easily verifiable

That last point, easily verifiable, is important. If you have a have a problem that is extremely difficult to solve, how can you verify it without having to exert the resources to find the answer yourself first? With the proof of work puzzle, every node in the network needs to be able to quickly and efficiently verify that a miner has indeed found the correct solution to the puzzle.

This is where we need to introduce the idea of hashing.

A hashing algorithm

### The meaning and importance of the 'Work'

### Hashing
This section is meant to help drive the idea of hashing home. Enter some text into the first box. This can be anything, a letter, your name, random letters, or maybe a whole paragraph from the blog post. Once you enter the text into the first box, the text will be duplicated in the second box. This is so we have a copy of the original in our little demonstration. With each letter you press, the text you are entering is being hashed using the SHA256 hashing algorithm. 
If you now change the text in the second box even slightly, it will completely change the hash. Play around with this by copying the entire blog into the first box, and then just changing a single letter in the second box. The hash will be completely different. If you now change the letter back to the original you will see that the hash is once again identical to the original.

<hash-component></hash-component>

<hash-component></hash-component>

### Block hashing

Now by using an additional field in the blog called the NONCE, we can adjust the data being hashed by guessing random numbers for the nonce, and then hashing the combination of all the data in the block and the nonce that we just chose. Check the result, if the hash result starts with the correct amount of 0's then our NONCE is the solution. If it doesn't, then we guess again.
In this example demonstration, enter in any amount of data into the data field. When you press the Mine button, we will do the same, we will keep guessing values for the NONCE until we find a hash which matches our criteria. In this case it is a hash starting with 3 0's.


<block-component></block-component>

Now if you would like to double check this, add the same data that you had in the mined block into the field below. Note the output hash. Now add the nonce from the above block to the end of the text in the data field (no spaces). You will see that the outcome hash has the 3 0's as we expected. This is all the work that is required in verifying that a specific proof of work solution is correct.


<hash-component></hash-component>