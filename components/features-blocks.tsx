import VideoThumb from '@/public/images/chatbotvideo.png'
import ModalVideo from '@/components/modal-video'

export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gradient-to-r from-blue-100 to-blue-200 pointer-events-none" aria-hidden="true"></div>

      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Explore, Chat, Learn</h2>
            <p className="text-xl text-gray-600">

            Choose what you will learn and start asking
            </p>
          </div>

          {/* Items */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={768}
            thumbHeight={432}
            thumbAlt="Modal video thumbnail"
            video="/videos/videoai.mp4"
            videoWidth={1920}
            videoHeight={1080} />

        </div>
      </div>
    </section>

  )
}