---
slug: handbook
title: Handbook for Contributors
description: This includes the details of the framework and components used.
authors: [aozaki]
tags: ['maintenance talk']
---

## The Handbook

I decided to write something and let the contributors know how to edit and improve the site.

### Framework

The site is generated using [Docusarus](https://docusaurus.io/), based on `React.js`.

All docs and pages were written in MDX (Markdown React).

The package manager I'm using is [pnpm](https://pnpm.io/), their document site also uses Docusarus.

### Custom Components

These are the React components used.

Import the components in the beginning of `.mdx` file before use.

It's always welcomed if you can write more reactive components to easy the writing.

#### YouTube Embed Responsive

```html
import YTTime from '@site/src/components/YTEmbed'
<YT Id="" />
<!--  Id: YT video id, required -->
```

#### YouTube Timestamp

```html
import YTTime from '@site/src/components/YTTime'
<YTTime Id="" Time="" Desc="" />
<!-- Time: YT video natural time (12:31), required -->
<!-- Desc: Description, optional -->
```

#### YouTube Link

```html
import YTLink from '@site/src/components/YTLink' >
<YTLink Id="" />
<!--  Id: YT video id, required -->
```

#### For more information => Topic

```html
import FYI from '@site/src/components/FYI'
<FYI Topic="" Desc="" />
<!-- Topic: the title of the destination, in site -->
```

#### Insert Date without routing

```html
import Date from '@site/src/components/date'
<Date D="" />
<!-- D: Natural date (2021-12-31), required -->
```

### Writing

#### Major Compositions

Replace `${abc}` with actual contents.

```md
# Tokomachi in ${YEAR}
<!-- h1 -->

## ${Important Event Title}
<!-- h2 -->

<Date D="yyyy-mm-dd" /> (optional)

### ${Topics}
<!-- h3 ~ h5 -->

## Summary of ${YEAR}
<!-- h2 -->
```

TBD
