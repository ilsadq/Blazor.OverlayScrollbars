# Blazor.OverlayScrollbars

A lightweight, fully-featured Blazor component wrapper for the excellent [OverlayScrollbars](https://github.com/KingSora/OverlayScrollbars) JavaScript library.

Provides beautiful, highly customizable scrollbars with zero manual JS interop. Works seamlessly with both **Blazor Server** and **Blazor WebAssembly**.

## Installation

```bash
dotnet add package Blazor.OverlayScrollbars
```

## Quick Start

#### App.razor

```html
<head>
    ...
    <link rel="stylesheet" href="@Assets["_content/Blazor.OverlayScrollbars/OverlayScrollbars.min.css"]">
</head>

<body>
    ...
    <script type="text/javascript" src="@Assets["_content/Blazor.OverlayScrollbars/OverlayScrollbars.js"]"></script>
</body>
```

#### Use the component:

```html
<OverlayScrollbar Theme="OverlayScrollbarTheme.Dark"
                  AutoHide="AutoHideBehavior.Move"
                  Visibility="ScrollbarVisibility.Auto">
    <h1>Hello, world!</h1>
    <p>This content is scrollable with custom stylish scrollbars.</p>
    <div style="height: 1500px; background: linear-gradient(to bottom, #ff8a00, #da1b60);">
        <!-- Tall content forces scrolling -->
    </div>
</OverlayScrollbar>
```

## Parameters

| Parameter              | Type                            | Default               | Description                                      |
|------------------------|---------------------------------|-----------------------|--------------------------------------------------|
| `ChildContent`         | `RenderFragment`                | **Required**          | Scrollable content                               |
| `Class`                | `string?`                       | `null`                | Additional CSS classes                           |
| `Theme`                | `OverlayScrollbarTheme`         | `Dark`                | `Dark`, `Light`, `None`                          |
| `OverflowX`            | `OverflowBehavior`              | `Scroll`              | Horizontal overflow behavior                     |
| `OverflowY`            | `OverflowBehavior`              | `Scroll`              | Vertical overflow behavior                       |
| `Visibility`           | `ScrollbarVisibility`           | `Auto`                | `Auto`, `Visible`, `Hidden`                      |
| `AutoHide`             | `AutoHideBehavior`              | `Never`               | `Never`, `Scroll`, `Leave`, `Move`               |
| `AutoHideDelay`        | `int`                           | `1300`                | Delay in milliseconds                            |
| `AutoHideSuspend`      | `bool`                          | `false`               | Suspend auto-hide until first scroll             |
| `PaddingAbsolute`      | `bool`                          | `false`               | macOS-style padding                              |
| `ShowNativeOverlaid`   | `bool`                          | `false`               | Show native scrollbars underneath                |
| `DragScroll`           | `bool`                          | `true`                | Enable dragging the scrollbar handle             |
| `ClickScroll`          | `ClickScrollBehavior`           | `Instant`             | `Disabled`, `Normal`, `Instant`                  |
| `Pointers`             | `string?`                       | `"mouse, touch, pen"` | Supported pointer types                          |
| `AdditionalAttributes` | `Dictionary<string, object>?`   | `null`                | Any other HTML attributes                        |