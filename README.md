TypeScript HTML Rewrite Input Value Setter Demo
=================================

如果直接调用 input.value = "value"，不会触发 MutationObserver。可以覆写set，手动 `setAttribute`来触发MutationObserver

```
npm i
npm start
```
