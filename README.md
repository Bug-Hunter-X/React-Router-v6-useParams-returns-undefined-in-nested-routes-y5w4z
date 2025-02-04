# React Router v6 useParams Issue in Nested Routes

This repository demonstrates a common issue encountered when using the `useParams` hook in nested routes with React Router v6. The problem arises when trying to access parameters from parent routes within a child component.  The example shows how this leads to parameters being undefined, and provides a working solution.

## Problem

When nested routes are used, `useParams` only provides parameters specific to the current route segment.  This can cause parameters from parent routes to appear undefined in child components. 

## Solution

The solution involves using the `useLocation` hook to access the entire URL path and manually parsing the parameters.