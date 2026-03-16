import * as NextImage from 'next/future/image'
import {
  imageResizeUrl,
  getContentApiImageUrl,
} from '@washingtonpost/custom-template-utils/client/imageResizeUrl'
import { useState, useEffect } from 'react' // Import useState and useEffect
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import topperFrameOneDesktop from '../../../public/img/topper/desktop/topper-frame-1.png'
import topperFrameTwoDesktop from '../../../public/img/topper/desktop/topper-frame-2.png'
import topperFrameThreeDesktop from '../../../public/img/topper/desktop/topper-frame-3.png'
import topperFrameFourDesktop from '../../../public/img/topper/desktop/topper-frame-4.png'
import topperFrameOneMobile from '../../../public/img/topper/mobile/topper-frame-1.png'
import topperFrameTwoMobile from '../../../public/img/topper/mobile/topper-frame-2.png'
import topperFrameThreeMobile from '../../../public/img/topper/mobile/topper-frame-3.png'
import topperFrameFourMobile from '../../../public/img/topper/mobile/topper-frame-4.png'

import topperFrameEight from '../../../public/img/topper/topper-frame-8.gif'
import topperFrameNine from '../../../public/img/topper/topper-frame-9.gif'

import { useStoryContext } from '@/context/StoryContext'
// import { sendGAEvent } from '@washingtonpost/site-components/core/analytics'

const TopperVisualCustom = props => {
  const { enableReducedMotion } = props

  // const { ref, inView, entry } = useInView({
  //   /* Optional options */
  //   threshold: 0.1,
  // })

  const [storyContext, dispatch] = useStoryContext()
  const { isMobile } = storyContext

  // const [loggingDone, setLoggingDone] = useState(false)

  // useEffect(() => {
  //   if (inView && !loggingDone) {
  //     console.log(`topper-loaded`)
  //     sendGAEvent('onpage-scroll-impression', 'onpage', `topper-loaded`)
  //     setLoggingDone(true) // Set logging as done to prevent repeated logging
  //   }
  // }, [inView, loggingDone])

  const imageLoader = ({ src, width }) => {
    return `${src}?w=${width}&q=75`
  }

  return (
    <div className="topper-visual-wrapper">
      <div
        className="topper-image-group"
        style={{
          opacity: enableReducedMotion ? 0 : 1,
          transition: 'opacity 0.4s',
        }}
      >
        <div className="frame-container">
          <NextImage
            src={topperFrameNine}
            className="frame-9"
            alt={''}
            unoptimized={true} // Corrected spelling
            loader={imageLoader} // Modified loader
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%',
              transform: 'scaleX(-1)',
            }}
          />

          <NextImage
            src={topperFrameEight}
            className="frame-8"
            alt={''}
            unoptimized={true} // Corrected spelling
            loader={imageLoader} // Modified loader
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />

          <motion.div
            animate={{
              opacity: [0, 0, 1, 1, 0], // Animation values for opacity over time
            }}
            transition={{
              duration: 3, // Total duration of the animation cycle (0.5s + 8s + 0.5s)
              ease: 'linear', // Use linear easing for a constant speed
              times: [0, 0.3, 0.35, 0.7, 0.75], // Keyframes for each value in the opacity array
              repeat: Infinity,
            }}
            className="topper-frame-4"
          >
            <NextImage
              src={isMobile ? topperFrameFourMobile : topperFrameFourDesktop}
              className="frame-4"
              alt={''}
              unoptimized={true} // Corrected spelling
              loader={imageLoader} // Modified loader
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1, 0], // Animation values for opacity over time
            }}
            transition={{
              duration: 3, // Total duration of the animation cycle (0.5s + 8s + 0.5s)
              ease: 'linear', // Use linear easing for a constant speed
              times: [0, 0.25, 0.3, 0.75, 0.8], // Keyframes for each value in the opacity array
              repeat: Infinity,
            }}
            className="topper-frame-3"
          >
            <NextImage
              src={isMobile ? topperFrameThreeMobile : topperFrameThreeDesktop}
              className="frame-3"
              alt={''}
              unoptimized={true} // Corrected spelling
              loader={imageLoader} // Modified loader
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          </motion.div>
          <motion.div
            animate={{
              opacity: [0, 0, 1, 1, 0], // Animation values for opacity over time
            }}
            transition={{
              duration: 3, // Total duration of the animation cycle (0.5s + 8s + 0.5s)
              ease: 'linear', // Use linear easing for a constant speed
              times: [0, 0.15, 0.2, 0.8, 0.85], // Keyframes for each value in the opacity array
              repeat: Infinity,
            }}
            className="topper-frame-2"
          >
            <NextImage
              src={isMobile ? topperFrameTwoMobile : topperFrameTwoDesktop}
              className="frame-2"
              alt={''}
              unoptimized={true} // Corrected spelling
              loader={imageLoader} // Modified loader
              fill
              style={{
                objectFit: 'cover',
                objectPosition: '50% 50%',
              }}
            />
          </motion.div>

          <NextImage
            src={isMobile ? topperFrameOneMobile : topperFrameOneDesktop}
            className={`frame-1`}
            alt={''}
            unoptimized={true} // Corrected spelling
            loader={imageLoader} // Modified loader
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '50% 50%',
            }}
          />
        </div>
      </div>
    </div>
  )
}
export { TopperVisualCustom as default }
