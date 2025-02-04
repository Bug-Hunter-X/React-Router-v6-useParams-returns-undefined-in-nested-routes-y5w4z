The solution involves using the `useLocation` hook to access the full URL and extract the necessary parameters manually.  Here's how you can modify the `Child` component:

```jsx
import { useLocation } from 'react-router-dom';

const Child = () => {
  const location = useLocation();
  const pathname = location.pathname;
  // Extract parameters from the pathname
  const parts = pathname.split('/');
  const parentId = parts[2];
  const childId = parts[3];

  return (
    <div>
      <h1>Child Component</h1>
      <p>Parent ID: {parentId}</p>
      <p>Child ID: {childId}</p>
    </div>
  );
};

export default Child;
```

This approach allows you to reliably access all relevant parameters regardless of the route nesting.