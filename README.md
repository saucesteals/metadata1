# metadata1

## For Educational Purposes ONLY

This is a template repository for creating a metadata1 generator\
It's intention is to show what metadata1 is and how its payloads are structured and created

## Example

```ts
import { metadata1 } from "@saucesteals/metadata1";

metadata1.generatePayload({
  location: "https://www.amazon.com/ap/signin?...",
  referrer: "https://www.amazon.com/ap/signin?...",
  start: Date.now(),
  userAgent: "...",
});
```

## Notes

- Even though it is possible to generate "valid" payloads with the hardcoded example data that is in the repo, you shouldn't rely on it always working
- The code is mostly self-explanatory, but additional documentation may be added in the future
