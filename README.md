This project provides a simple example of a portal component. The content of what is toggled is provided by the client.

A portal can be used for things like a modal, which essentially overlays everything else.

Basically, it allows us to insert whatever HTML into anywhere in the DOM. A Modal is just one example, but pretty much anything you need to just insert somewhere else, but you still want to maintain the same state as the rest of your application, is a candidate for using the portal. 

See the public/index.html, and look for this element:

```
  <!-- Top div for react to use via portal -->
  <div id="portal"></div>
```

