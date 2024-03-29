const setViewportWidth = () => {
  const metaViewportTag = document.querySelector('meta[name=viewport]') as HTMLMetaElement
  metaViewportTag.setAttribute('content', `height=${window.innerHeight}px, width=device-width, initial-scale=1`)
}

export default setViewportWidth
