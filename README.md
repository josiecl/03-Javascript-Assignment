# 03-Javascript-Assignment
Third assignment, random password generator

# Why it was made
It's important to have security in a password. Passwords are used on so many sites, and reusing a password, or using a personal one, can put one's information at risk. This random password generator gives users a randomly generated password that allows them to choose what values are used in it, so it can be somewhat personalized. Random passwords are usually much more difficult to guess than a personal password, which gives an extra layer of security as well.

# How it works
Upon pressing the 'generate password' button, the user will be greeted with several prompts. If the user clicks 'no' for all of them, then the prompts will alert the user that they must select at least one.

# Issues
While working on this code, I ran into several issues. My biggest one was that I kept getting an 'error: out of memory' alert. I had inadvertently written a 'for' loop incorrectly, so it kept running until the webpage would run out of memory and crash. Thankfully, this was fixed relatively easily, but it did set me back for a while.
I also kept getting a console log error. I was unsure how to fix this (and still am, rip)