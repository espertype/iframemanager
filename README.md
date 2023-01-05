<h1 align="center">
  <img src="./demo/assets/iframemanager_logo.svg" height="100px" alt="IframeManager Logo" />
</h1>

<div align="center">

[Demo](https://orestbida.com/demo-projects/iframemanager/demo1/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Features](#features)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Installation](#installation)&nbsp;&nbsp;&nbsp;

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
![Size](https://img.shields.io/github/size/orestbida/iframemanager/dist/iframemanager.js)
[![Stable version](https://img.shields.io/github/v/release/orestbida/iframemanager)](https://github.com/orestbida/iframemanager/releases)
</div>
<div align="center">

**IframeMananger** is a lightweight javascript plugin which helps you **comply with `GDPR`** by completely removing iframes initially and setting a notice relative to that service. **Iframes are loaded only after consent**.

<sub>
<i>

The plugin was mainly developed to aid [**CookieConsent**](https://github.com/orestbida/cookieconsent) with iframe management.
</i>
</sub>

</div>

<br>

## Table of Contents

- [**Key features**](#features)
- [**Installation**](#installation)
- [**Configuration options & API**](#configuration-options)
- [**Configuration examples**](#configuration-examples)
    - [youtube](#configuration-examples)
    - [dailymotion](#configuration-examples)
    - [vimeo](#configuration-examples)
    - [twitch](#configuration-examples)
    - [google maps](#configuration-examples)
- [**License**](#license)

## Features
- Lightweight
- Complies with **GDPR**
- **Multilanguage** support
- Automatic/custom thumbnail [support *](#note)
- Allows to integrate any service which uses iframes
- Improves website **performance**:
  - no `<iframe>` tags on first page load
  - lazyloads thumbnails
  - lazyloads iframes
- Can be integrated with any cookie consent solution

## Installation
1. #### Download the [latest release](https://github.com/orestbida/iframemanager/releases/latest) or use via CDN:

    ```bash
    https://cdn.jsdelivr.net/gh/orestbida/iframemanager@v1.2.0/dist/iframemanager.js
    https://cdn.jsdelivr.net/gh/orestbida/iframemanager@v1.2.0/dist/iframemanager.css
    ```

2. #### Import script + stylesheet:

    ```html
    <html>
      <head>
        ...
        <link rel="stylesheet" href="iframemanager.css">
      </head>
      <body>
        ...
        <script defer src="iframemanager.js"></script>
      <body>
    </html>
    ```

3. #### Configure and run:
    -   <details><summary>As external script</summary>
        <p>

        - Create a .js file (e.g. `app.js`) and import it in your html markup:

            ```html
            <body>
                ...
                <script defer src="iframemanager.js"></script>
                <script defer src="app.js"></script>
            <body>
            ```

        - Configure iframemanager inside `app.js`:

            ```javascript
            (function(){

                const im = iframemanager();

                // Example with youtube embed
                im.run({
                    currLang: 'en',
                    services : {
                        youtube : {
                            embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
                            thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',
                            iframe : {
                                allow : 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
                            },
                            languages : {
                                en : {
                                    notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
                                    loadBtn: 'Load video',
                                    loadAllBtn: "Don't ask again"
                                }
                            }
                        }
                    }
                });
            })();
            ```
        </p>
        </details>
    -   <details><summary>As inline script</summary>
        <p>

        ```html
        <body>
          ...
          <script defer src="iframemanager.js"></script>

          <!-- Inline script -->
          <script>
            window.addEventListener('load', function(){

                const im = iframemanager();

                // Example with youtube embed
                im.run({
                    currLang: 'en',
                    services : {
                        youtube : {
                            embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',
                            thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg'
                            iframe : {
                                allow : 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;'
                            },
                            languages : {
                                en : {
                                    notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
                                    loadBtn: 'Load video',
                                    loadAllBtn: "Don't ask again"
                                }
                            }
                        }
                    }
                });
            });
          </script>
        <body>
        ```
      </p>
    </details>

4. #### Create a div with `data-service` and `data-id` attributes:

    ```html
    <div data-service="youtube" data-id="<video-id>"></div>
    ```

## Configuration options
All available options for  the `<div>` element:
```html
<div
    data-service="<service-name>"
    data-id="<resource-id>"
    data-params="<iframe-query-parameters>"
    data-thumbnail="<path-to-image>"
    data-autoscale
    data-ratio="<x:y>">
</div>
```

- `data-service` :      [String, Required] name of the service (must also be defined in the config. object)
- `data-id` :           [String, Required] unique id of the resource (example: video id)
- `data-params` :       [String] iframe query parameters
- `data-thumbnail` :    [String] path to custom thumbnail
- `data-ratio` :        [String] custom aspect ratio ([Available values.](#available-data-ratio))[v1.1.0]
- `data-autoscale` :    specify for **responsive iframe** (fill parent width + scale proportionally)

### How to set attributes on the `iframe` element
You can set set attribute by using the following syntax
- `data-iframe-<attribute>`  [String] note: replace `<attribute>` with a valid attribute name. [v1.1.0]

Example:
```html
<div
    data-service="youtube"
    data-id="5b35haQV7tU"
    data-autoscale
    data-iframe-id="myYoutubeEmbed"
    data-iframe-loading="lazy"
    data-iframe-frameborder="0">
</div>
```

<br>

All available options for the config. object:
```javascript
{
    currLang: 'en',     // current language of the notice (must also be defined in the "languages" object below)
    autoLang: false,    // if enabled => use current client's browser language
                        // instead of currLang [OPTIONAL]

    services : {
        myservice : {

            embedUrl: 'https://<myservice_embed_url>',

            // set valid url for automatic thumbnails   [OPTIONAL]
            thumbnailUrl: 'https://<myservice_embed_thumbnail_url>',

            // global iframe settings (apply to all iframes relative to current service) [OPTIONAL]
            iframe: {
                allow: 'fullscreen',           // iframe's allow attribute
                params: 'mute=1&start=21',     // iframe's url query parameters

                // function run for each iframe configured with current service
                onload: (dataId, setThumbnail) => {
                    console.log(`loaded iframe with data-id=${dataId}`);
                }
            },

            // cookie is set if the current service is accepted
            cookie: {
                name: 'cc_youtube',            // cookie name
                path: '/',                     // cookie path          [OPTIONAL]
                samesite: 'lax',               // cookie samesite      [OPTIONAL]
                domain: location.hostname      // cookie domain        [OPTIONAL]
            },

            languages: {
                en: {
                    notice: 'Html <b>notice</b> message',
                    loadBtn: 'Load video',          // Load only current iframe
                    loadAllBtn: "Don't ask again"   // Load all iframes configured with this service + set cookie
                }
            }
        },

        anotherservice: {
            // ...
        }
    }
}
```

Any other property specified inside the `iframe` object, will be set directly to the `iframe` element as attribute.

Example: add `frameborder` and `style` attributes:
```javascript
{
    // ...

    services: {
        myservice: {
            // ...

            iframe: {
                // ...

                frameborder: '0',
                style: 'border: 4px solid red;'
            }
        }
    }
}
```

Note: `thumbnailUrl` can be static string, dynamic string or a function:

- `static string` : "https://path_to_image/image.png"
- `dynamic string` : "https://myservice_embed_url/{data-id}"
- `function` :
    ```javascript
    thumbnailUrl: (dataId, setThumbnail) => {
        // fetch thumbnail url here based on dataId of the current element ...
        let url = 'fetched_url';

        // pass obtained url to the setThumbnail function
        setThumbnail(url);
    }
    ```

## APIs
The plugin exposes 3 main methods:
- `.run(<config_object>)`
- `.acceptService(<service_name>)`
- `.rejectService(<service_name>)`

Example usage:

```javascript
// accept specific service only
im.acceptService('youtube');

// accept all services (for example if user has given full consent to cookies)
im.acceptService('all');

// reject specific service
im.rejectService('youtube');

// reject all services (for example when user opts out of cookies)
im.rejectService('all');
```

Both `acceptService` and `rejectService` work the same way:
1. set/erase cookie
2. create/remove iframes

## Configuration examples
-   <details><summary>Youtube</summary>
    <p>

    ```javascript
    im.run({
        currLang: 'en',
        services: {
            youtube: {
                embedUrl: 'https://www.youtube-nocookie.com/embed/{data-id}',

                thumbnailUrl: 'https://i3.ytimg.com/vi/{data-id}/hqdefault.jpg',

                iframe: {
                    allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
                },

                languages: {
                    en: {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.youtube.com/t/terms" target="_blank">terms and conditions</a> of youtube.com.',
                        loadBtn: 'Load video',
                        loadAllBtn: "Don't ask again"
                    }
                }
            }
        }
    });
    ```
    Example:
    ```html
    <!-- https://www.youtube.com/watch?v=5b35haQV7tU -->
    <div
        data-service="youtube"
        data-id="5b35haQV7tU"
    ></div>
    ```
    </p>
    </details>
-   <details><summary>Dailymotion</summary>
    <p>

    ```javascript
    im.run({
        currLang: 'en',
        services: {
            dailymotion: {
                embedUrl: 'https://www.dailymotion.com/embed/video/{data-id}',

                thumbnailUrl: async (dataId, setThumbnail) => {
                    // Use dailymotion's API to fetch the thumbnail
                    const url = `https://api.dailymotion.com/video/${dataId}?fields=thumbnail_large_url`;
                    const response = await (await fetch(url)).json();
                    const thumbnailUlr = response?.thumbnail_large_url;
                    thumbnailUlr && setThumbnail(thumbnailUlr);
                },

                iframe: {
                    allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
                },

                languages: {
                    en: {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.dailymotion.com/legal/privacy?localization=en" target="_blank">terms and conditions</a> of dailymotion.com.',
                        loadBtn: 'Load video',
                        loadAllBtn: "Don't ask again"
                    }
                }
            }
        }
    });
    ```
    </p>
    </details>
-   <details><summary>Vimeo</summary>
    <p>

    ```javascript
    im.run({
        currLang: 'en',
        services: {
            vimeo: {
                embedUrl: 'https://player.vimeo.com/video/{data-id}',

                iframe: {
                    allow : 'fullscreen; picture-in-picture, allowfullscreen;',
                },

                thumbnailUrl: async (dataId, setThumbnail) => {
                    const url = `https://vimeo.com/api/v2/video/${dataId}.json`;
                    const response = await (await fetch(url)).json();
                    const thumbnailUrl = response[0]?.thumbnail_large;
                    thumbnailUrl && setThumbnail(thumbnailUrl);
                },

                languages: {
                    en: {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://vimeo.com/terms" target="_blank">terms and conditions</a> of vimeo.com.',
                        loadBtn: 'Load video',
                        loadAllBtn: "Don't ask again"
                    }
                }
            }
        }
    });
    ```
    </p>
    </details>
-   <details><summary>Twitch</summary>
    <p>

    ```javascript
    im.run({
        currLang: 'en',
        services: {
            twitch: {
                embedUrl: `https://player.twitch.tv/?{data-id}&parent=${location.hostname}`,

                iframe: {
                    allow: 'accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen;',
                },

                languages: {
                    en: {
                        notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://www.twitch.tv/p/en/legal/terms-of-service/" target="_blank">terms and conditions</a> of twitch.com.',
                        loadBtn: 'Load stream',
                        loadAllBtn: "Don't ask again"
                    }
                }
            }
        }
    });
    ```
    </p>
    </details>
-   <details><summary>Google Maps</summary>
    <p>

    -   <details><summary>With API key</summary>
        <p>

        ```javascript
        im.run({
            currLang: 'en',
            services: {
                googlemaps: {
                    embedUrl: 'https://www.google.com/maps/embed/v1/place?key=API_KEY&q={data-id}',

                    iframe: {
                        allow: 'picture-in-picture; fullscreen;'
                    },

                    languages: {
                        en: {
                            notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">terms and conditions</a> of Google Maps.',
                            loadBtn: 'Load map',
                            loadAllBtn: "Don't ask again"
                        }
                    }
                }
            }
        });
        ```

        Example:
        ```html
        <div
            data-service="GoogleMaps"
            data-id="Space+Needle,Seattle+WA"
            data-autoscale
        ></div>
        ```
        </p>
        </details>

    -   <details><summary>Without API key</summary>
        <p>

        ```javascript
        im.run({
            currLang: 'en',
            services : {
                googlemaps : {
                    embedUrl: 'https://www.google.com/maps/embed?pb={data-id}',

                    iframe: {
                        allow : 'picture-in-picture; fullscreen;'
                    },

                    languages : {
                        en : {
                            notice: 'This content is hosted by a third party. By showing the external content you accept the <a rel="noreferrer noopener" href="https://cloud.google.com/maps-platform/terms" target="_blank">terms and conditions</a> of Google Maps.',
                            loadBtn: 'Load map',
                            loadAllBtn: "Don't ask again"
                        }
                    }
                }
            }
        });
        ```

        Example usage:
        ```html
        <div
            data-service="googlemaps"
            data-id="!1m18!1m12!1m3!1d2659.4482749804133!2d11.644969316034478!3d48.19798087922823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e7499e2d4c67f%3A0x32f7f02c5e77043a!2sM%C3%BCnchner+Str.+123%2C+85774+Unterf%C3%B6hring%2C+Germany!5e0!3m2!1sen!2sin!4v1565347252768!5m2!1sen!2sin"
            data-autoscale
        ></div>
        ```
        </p>
        </details>
    </p>
    </details>




### Available `data-ratio`

Horizontal aspect ratio:

* `1:1`, `2:1`, `3:2`, `5:2`, `4:3`, `16:9`, `16:10`, `20:9`, `21:9`

Vertical aspect ratio:
* `9:16`, `9:20`

## License
Distributed under the MIT License. See [LICENSE](https://github.com/orestbida/iframemanager/blob/master/LICENSE) for more information.

<br>

#### Note
<i>Not all services (example: twitch) allow automatic/easy thumbnail fetch.</i>