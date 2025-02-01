// Styles
import { CallToAction, ContainerVideo, Emphasis, Video, Overlay, VideoBody, VideoCaption } from './styles'

// Types
import { IVideoDisplay } from './types'

const VideoDisplay = (props: IVideoDisplay) => {
  const { handleScrollTo, routes } = props
  return (
    <ContainerVideo>
      <Video />
      <Overlay></Overlay>
      <VideoBody>
        <VideoCaption variant="h3">
          Audiovisual storytelling.<br></br>By a{' '}
          <Emphasis variant="h1" component="span">
            {' '}
            dynamic{' '}
          </Emphasis>
          duo.
        </VideoCaption>

        {routes.map((r, i) => {
          if (i === 0) {
            return <CallToAction key={r.title} handleScrollTo={handleScrollTo} location={'#' + r.anchor} label="Book a call"></CallToAction>
          }
          return null
        })}
      </VideoBody>
    </ContainerVideo>
  )
}

export default VideoDisplay
