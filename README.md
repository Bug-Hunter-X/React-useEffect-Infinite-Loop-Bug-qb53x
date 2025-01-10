# React useEffect Infinite Loop Bug
This repository demonstrates a common but subtle error in React's `useEffect` hook: creating an infinite loop by modifying state within the effect itself. The bug.js file shows the incorrect implementation, while bugSolution.js provides the corrected version. 

## Problem
The original code attempts to increment a counter within the `useEffect` hook, making the `count` state update continuously, leading to an infinite rendering loop and potential browser crashes. The incorrect use of dependencies in useEffect is common, but usually, it leads to unexpected behavior.  Here, it is even more severe. 

## Solution
The solution demonstrates the proper use of the `useEffect` hook. The dependency array is correctly modified. 

## How to Reproduce
1. Clone this repository
2. Run `npm install`
3. Run `npm start`

Observe the console errors in the original code. The solution fixes the problem without console errors.