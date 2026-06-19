# React Debugging Checkpoint Report

## Setup
- Created a React application using Vite.
- Installed the React Developer Tools browser extension.
- Set up a sample app with App, Counter, and UserProfile components.

## Issues Found and Fixed

### Bug 1: Wrong Prop Names in UserProfile
- Problem: The page showed "Hello, undefined!" and "Role: undefined".
- How I found it: Used React DevTools Components tab. Clicked on UserProfile and saw the props being passed were "userName" and "userTitle", but the component was trying to read "props.username" and "props.title".
- Fix: Changed props.username to props.userName and props.title to props.userTitle in UserProfile.jsx.

### Bug 2: Direct State Mutation in Counter
- Problem: Clicking the Increment button did not update the number.
- How I found it: Used React DevTools Components tab. Clicked on Counter and watched the hooks panel. The count stayed at 0 even after clicking. The code was using "count = count + 1" instead of the setter function.
- Fix: Changed "count = count + 1" to "setCount(count + 1)" in Counter.jsx.

## Verification
- After fixing, the profile correctly shows "Hello, Alex!" and "Role: Senior Developer".
- The counter now increases when clicking the Increment button.
- React DevTools confirms the state and props are working correctly.