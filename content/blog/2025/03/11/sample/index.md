+++
title = "Sample blog post"
summary = "This is summary"
date = 2025-03-11
lastmod = 2025-03-16
tags = ["sample", "hugo", "kayal"]
coverImg = "moon.jpg"
# externalUrl = "https://www.example.com" # Redirect
draft = false
showToC = true
showComments = true
+++

```toml
+++
title = 'Sample blog post'
summary = "This is summary"
date = 2025-03-11
lastmod = 2025-03-16
tags = ["sample", "hugo", "kayal"]
coverImg = "moon.jpg"
# externalUrl = "https://www.example.com" # Redirect
draft = false
showDate = true
showToC = true
showComments = false
+++
```

View full source in <a href="https://github.com/RayCC51/raycc51.github.io">Github</a>

---

## Directory

```
content/
├─ blog/  <- Blog menu
│  ├─ 250311-sample/
│  │  ├─ index.md  <- Current post
│  │  ├─ moon.jpg  <- Current post's asset
├─ _index.html  <- Home page 
```

---

## Header

# h1

## h2

### h3

#### h4

##### h5

###### h6

## Markdown

hello world hello world hello world hello world  
hello world hello world hello world hello world  
hello world hello world hello world hello world

1. ordered
2. list
   1. nested

- unordered
- list

  - nested

- [ ] check
- [x] box

[link](https://www.example.com "title")

`[link](https://www.example.com "title")`

<https://www.example.com>

`<https://www.example.com>`

![place hold image](https://place-hold.it/100x100 "caption")

`![place hold image](https://place-hold.it/100x100 "caption")`

> block
>
> quote

### Code

inline code: `inline code`

```python {linenos=true, hl_lines=[1,"4-5"]}
# comment
list_var = [1, 2, 3, 4, 5]

def greet(name):
    return f"Hello, {name}!"

if len(list_var) < 10:
    for i in list_var:
        print(f"Number: {i}")
```

````md
```python {linenos=true, hl_lines=[1,"4-5"]}
# comment
list_var = [1, 2, 3, 4, 5]

def greet(name):
    return f"Hello, {name}!"

if len(list_var) < 10:
    for i in list_var:
        print(f"Number: {i}")
```
````

### Table

| table | table | table |
| :---- | :---: | ----: |
| l     |   c   |     r |
| l     |   c   |     r |
| l     |   c   |     r |

---

## Rich text

### Figure

{{< figure
src="https://nasa3d.arc.nasa.gov/shared_assets/thumbnails/as11-44-6665/428x321"
alt="Nasa moon"
caption="Nasa moon"
loading="lazy" >}}

```md {linenos=true}
{{</* figure
src="https://nasa3d.arc.nasa.gov/shared_assets/thumbnails/as11-44-6665/428x321"
alt="Nasa moon"
caption="Nasa moon"
loading="lazy" */>}}
```

### Callout

{{< callout >}}
Hello world  
Goodbye world
{{< /callout >}}

```md {linenos=true}
{{</* callout */>}}
Hello world  
Goodbye world
{{</* /callout */>}}
```

{{< callout icon="apple" iconColor="#6482B4" cardColor="coral" textColor="#fff" >}}
Hello world  
{{< /callout >}}

```md {linenos=true}
{{</* callout icon="apple" iconColor="#6482B4" cardColor="coral" textColor="#fff" */>}}
Hello world  
{{</* /callout */>}}
```

### Callout Preset

{{< callout icon="circle-info" iconColor="#6482B4" cardColor="#D8E8FFB3" >}}
Info
{{< /callout >}}

```md {linenos=true}
{{</* callout icon="circle-info" iconColor="#6482B4" cardColor="#D8E8FFB3" */>}}
Info
{{</* /callout */>}}
```

{{< callout icon="bulb" iconColor="#78AAA0" cardColor="#E2F5ECB3" >}}
Tip
{{< /callout >}}

```md {linenos=true}
{{</* callout icon="bulb" iconColor="#78AAA0" cardColor="#E2F5ECB3" */>}}
Tip
{{</* /callout */>}}
```

{{< callout icon="warning" iconColor="#C89632" cardColor="#FFF8D8B3" >}}
Warning
{{< /callout >}}

```md {linenos=true}
{{</* callout icon="warning" iconColor="#C89632" cardColor="#FFF8D8B3" */>}}
Warning
{{</* /callout */>}}
```

{{< callout icon="x-mark" iconColor="#B46464" cardColor="#FFE0E0B3" >}}
Danger
{{< /callout >}}

```md {linenos=true}
{{</* callout icon="x-mark" iconColor="#B46464" cardColor="#FFE0E0B3" */>}}
Danger
{{</* /callout */>}}
```

### Detail Summary

{{< collapse summary="Click to expand" open=false >}}
Lorem ipsum dolor sit amet, 
{{< /collapse >}}

```md {linenos=true}
{{</* collapse summary="Click to expand" open=false */>}}
Lorem ipsum dolor sit amet, 
{{</* /collapse */>}}
```

### Icon

Add *.svg* file in `assets/icons/` and insert `fill="currentColor"` inside `<svg>` tag.

{{< icon "github" >}}

```md {linenos=true}
{{</* icon "github" */>}}
```

### Youtube

{{< youtube jNQXAC9IVRw >}}

```md {linenos=true}
{{</* youtube jNQXAC9IVRw */>}}
```

### QR code

{{< qr >}}
https://raycc51.github.io/blog/250311-sample/
{{< /qr >}}

```md {linenos=true}
{{</* qr */>}}
https://raycc51.github.io/blog/250311-sample/
{{</* /qr */>}}
```

### Shortcode markdown codeblock

```md {linenos=true}
Youtube {{</* youtube jNQXAC9IVRw */>}}
```

````md {linenos=true}
```md {linenos=true}
Youtube {{</*/* youtube jNQXAC9IVRw */*/>}}
```
````
