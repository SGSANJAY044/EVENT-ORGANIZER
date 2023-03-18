
const mainContainer = Object.assign(
    document.createElement('div'),
    { id:'main-container'}
  )
const posterContainer =  Object.assign(
    document.createElement('div'),
    { 
      id:'poster-container'
    }
  )
const anc =  Object.assign(
    document.createElement('a')
)
const poster = Object.assign(
    document.createElement('img'),
    { id : 'poster',
    src : "./image/Event Poster.png",
    }
)
const tickContent = Object.assign(
    document.createElement('div'),
    { 
    id : 'ticket__content'
    }
)
const title = Object.assign(
    document.createElement('div'),
    { 
    id : 'ticket__movie-title',
    innerHTML : 'Register Now'
    }
)
const disp = Object.assign(
    document.createElement('p'),{
        id : 'ticket__movie-slogan',
        innerHTML : 'Register Now'
    }
)
const venue = Object.assign(
    document.createElement('p'),{
        id : 'ticket__current-price',
        innerHTML : 'Register Now'
    }
)
const date = Object.assign(
    document.createElement('p'),{
        id : 'ticket__current-price',
        innerHTML : 'Register Now'
    }
)
const reig = Object.assign(
    document.createElement('button'),{
        id : 'ticket__buy-btn',
        class : 'ticket__buy-btn',
        innerHTML : 'Register Now'
    }
)
const posterCon = Object.assign(
    document.createElement('div'),
    { 
      id:'poster-container3',
      class:'poster-container3'
    }
  )
const post = Object.assign(
    document.createElement('img'),
    { id : 'poster1',
    class : 'poster1',
    src : "./image/Event Poster.png",
    }
)
const an =  Object.assign(
    document.createElement('a')
)





document.body.appendChild(mainContainer).appendChild(posterContainer).appendChild(anc).appendChild(poster)
mainContainer.appendChild(tickContent).appendChild(posterCon).appendChild(an).appendChild(post)
tickContent.appendChild(title).appendChild(disp).appendChild(venue).appendChild(date).appendChild(reig)