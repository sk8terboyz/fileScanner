# fileScanner

Author: Shane Kennedy

## Basic Idea

I created this file scanner to take a .txt file and read through it and output whenever a specified value is found within the file. After working on it for awhile, I realized I could also work towards reading .json files and searching for specific letters and phrases, so currently I want to work towards that.


## How To Use

- Currently a file must be uploaded to the 'readableFiles' folder and hard-coded to scan through it.
- Enter the word(s) to be searched for in the file into the text-area at the top and separate each word using a tilde (~).
  - I used a tilde because it is very rarely used in files and spaces would have broken the scanner as some regex are replaced with spaces.
- Choose a search option
  - Currently only words are able to be specified
- Choose a file type
  - Currently only .txt files are able to be read
