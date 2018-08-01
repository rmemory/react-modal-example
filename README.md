This project provides a simple example of a toggle component and render props. The content of what is toggled is provided by the client.

The starting point is this project:

https://github.com/rmemory/react-basic-boilerplate

It provides an example of the ng-if type syntax, 

```
	{
		this.state.someVal
		&& <h1>Toggle Me</h1>
	}
```

There is an example of an explict "render" prop, as well as the same functionality implemented using "children" props.

The toggle pattern also serves as a basis to provide modal functionality, but its also useful for menus as well.

