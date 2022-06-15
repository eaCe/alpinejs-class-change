# alpinejs-class-change
alpinejs directive to check if a given class has been added or removed

```html
<div x-class-change:className.added="console.log('className added')"></div>
<div x-class-change:className.removed="console.log('className removed')"></div>
<div x-class-change:className="console.log('className added or removed')"></div>
```
