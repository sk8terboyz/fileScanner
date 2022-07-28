# fileScanner

Author: Shane Kennedy

## Project Status

Project on Hold.

## Basic Idea

I created this file scanner to take a .txt file and read through it and output whenever a specified value is found within the file. After working on it for awhile, I realized I could also work towards reading .json files and searching for specific letters and phrases, so currently I want to work towards that.


## How To Use

- Currently a file must be uploaded to the 'readableFiles' folder and hard-coded to scan through it.
- Enter the word(s) to be searched for in the file into the text-area at the top and separate each word using a tilde (~).
  - I used a tilde because it is very rarely used in files and spaces would have broken the scanner as some regex are replaced with spaces.
- Choose a search option
  - Currently only words are able to be specified
- Choose a file type
  - Currently only .txt files are able to be searched


## Jotting Ideas
- I could transfer this to a ReactJS project since I'm learning it and it would make the layout a bit easier when looking at the code. Right now everything is on the same file. To be fair I did just create this to test out file reading with json/txt files and I have accomplished that, but I want to output the data somewhere other than the console. With React I could better create components of a page that will look more uniform and potentially be more adaptable in future projects. If I did do this, a few things I would have to change would be:
  - Convert the form into its own separate component that is pulled by the App.js file
  - Create a component for the indices of the found words
  - Create a component for the entire file (maybe highlight words that were searched for?)
  - Restart the whole project and make it work replacing JQuery attributes with React (I know you can integrate JQuery in React but it seems more advantageous to not use JQuery)
- I could also create each of these components in this project, but it wouldn't be very adaptable for future use because the styling would have to be exactly the same or else it would cause a headache later.
- More or less I have just created a search bar for files, and realizing this makes me feel like I should create it in React as separate components and potentially make them adjustable for future use as well.