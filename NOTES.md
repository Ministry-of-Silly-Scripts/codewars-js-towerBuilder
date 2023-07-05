# Notes

## Description

- **Build Tower**

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

``` 
[
  "  *  ",
  " *** ", 
  "*****"
]
``` 

And a tower with 6 floors looks like this:

``` 
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
``` 

## Domain Discussion
- input: positive integer number
- output: "tower block" with n floors (n -> input) -> array
- 1 floor `["*"]`
```
2 floors 
" * " -> _1_
"***" ->  3
```

```
3 floors
"  *  " -> __1__
" *** " ->  _3_
"*****" ->   5
```

```
4 floors
"   *   " -> ___1___
"  ***  " ->  __3__
" ***** " ->   _5_
"*******" ->    7
```
- first floor = total size of all arrays
- size of last array = 2 * number of floors - 1

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG 

---

TODO:

# Pomodoro 1 🍅:
- initial setup
    - update README ✅
    - update NOTES ✅
    - update package.json ✅
    - update code/test files ✅
- domain discussion 🚧
- perform the 'canary' test just to check if the structure works construction ✅

# Pomodoro 2 🍅:
- it should return ["*"] for a single floor ✅
- it should return [" * ", "***"] for 2 floors ✅
- it should return ["  *  ", " *** ", "*****"] for 3 floors ✅
- refactor: added last row as per domain description ✅