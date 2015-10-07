# To Rule Them All .JS

To Rule Them All is a very small and simple jquery plugin that adds rulers to elements in the dom.

You can either add rulers fixed on pixels in the window, or by percent.
Or you can stick rulers to elements.

```javascript
$('selector').rule();
```

## Settings

Rule comes with some settings to make the rulers fit your needs. Settings can be sent in as an object into the rule function.

```javascript
$('selector').rule({
    follow: true,
    offsetX: 0,
    offsetXType: '%',
    offsetY: 0,
    offsetYType: 'px',
    type: 'vertical',
    color: #FF0000,
    alpha: 0.5
});
```
#### Settingvalues

#### follow
Will make the ruler follow its target.  
Default: `true`

#### offsetX, offsetY
Offsets the ruler x|y pixels or percent.  
Default: `0`

#### offsetXType, offsetYType
Sets the offset type to either percent or pixels.  
Default: `px`

#### type
Make the ruler either vertical or horizontal.  
Default: `vertical`

#### color
Sets the color of the ruler. Works with any css values, hex, cleartext, rgba, and so on.  
Default: `cyan`

#### alpha
The alpha of the ruler.
Default: `1`

## Version history

0.0.5  
Writing more readme.

0.0.1 - 0.0.4  
Just making it work properly.

## Future updates.

- Able to set default settings.
- Make ui to add rulers directly in the browser window.
- Keyboard command to show or hide rulers.
- Ruler defaults, like susy grid 6 column base.
- Test on more lower jquery versions.
- Save rulers to cookies.
