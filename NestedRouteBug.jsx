In React Router Dom v6, a common issue arises when working with nested routes and the `useParams` hook. If you have a route structure like this: 

```jsx
<Route path="/parent/:parentId" element={<Parent />}>
  <Route path=":childId" element={<Child />}/>
</Route>
```

And you try to access `params.childId` inside the `Child` component, it might return `undefined` even if the URL is correct. This happens because `useParams` only provides parameters from the current route segment and doesn't automatically merge parameters from parent routes.