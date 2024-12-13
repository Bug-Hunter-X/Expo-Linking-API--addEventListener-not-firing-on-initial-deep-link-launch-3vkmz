This solution uses `Linking.getInitialURLAsync()` to handle initial deep links.

```javascript
import * as Linking from 'expo-linking';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [initialUrl, setInitialUrl] = useState(null);

  useEffect(() => {
    const getInitialUrl = async () => {
      const url = await Linking.getInitialURL();
      setInitialUrl(url);
    };

    getInitialUrl();

    const handleUrl = (event) => {
      console.log('Deep Link received:', event.url);
      // Handle URL navigation here
    };

    const subscription = Linking.addEventListener('url', handleUrl);

    return () => subscription.remove();
  }, []);

  useEffect(() => {
    if (initialUrl) {
      console.log('Initial URL:', initialUrl);
      // Handle initial URL navigation here
    }
  }, [initialUrl]);

  return (
    <View>
      {/* Your app content here */}
    </View>
  );
}
```