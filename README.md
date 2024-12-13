# Expo Linking EventListener Bug

This repository demonstrates a bug with Expo's `Linking` API where `Linking.addEventListener` doesn't fire when the app is initially launched from a deep link.  The issue is specifically related to the initial app launch. Subsequent deep links work correctly.

## Reproduction Steps

1. Clone this repository.
2. Run `expo start`.
3. Open a deep link that targets this application (replace with your app's scheme and path).
4. Observe that the app launches, but the `Linking.addEventListener` callback is not executed.
5. After closing the app and launching from a different entry point (not a deep link), then opening a deep link, the `Linking.addEventListener` callback will fire correctly.

## Solution

The provided solution uses `Linking.getInitialURL` to retrieve the initial URL at launch. This allows you to handle the deep link even if the `addEventListener` doesn't trigger on initial app load.