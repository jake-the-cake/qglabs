export const createAppRoot = ( rootName: string ) => {
  // set rootElement or create a new rootElement
  let rootElement: HTMLElement | null = document.getElementById( rootName )
  
  if ( !rootElement ) {
    // give error message
    console.error(`Cannot find an HTMLElement with the id of '${ rootName }'.`)

    // create new element as rootElement
    rootElement = document.createElement( 'div' )
    rootElement!.id = rootName

    // place new element inside an existing div or append the new element
    const elementArray: ChildNode[] = Array.from( document.body.getElementsByTagName( 'div' ))

    if ( elementArray.length > 0 ) {
      document.body.replaceChild( rootElement, elementArray[ 0 ] )
      // notify in console about the change
      console.warn( `An HTMLElement with the id of '${( elementArray[ 0 ] as HTMLElement ).id }' is being replaced with an HTMLElement with the id of '${ rootName }'. All of the inner content was discarded.` )
    }
    else {
      document.body.appendChild( rootElement )
      // notify in console about the change
      console.warn(`An HTMLElement with the id of '${ rootName }' is now included in the document.`)
    }

    // suggest a solution to the error
    console.info( `You should add an HTMLDivElement with the id of '${ rootName }' to your HTML file.`)
  }

  return rootElement
}