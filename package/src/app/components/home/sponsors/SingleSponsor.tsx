import Image from 'next/image'
import Slider from 'react-infinite-logo-slider'

const SingleSponsor = ({ sponsor }: { sponsor: any }) => { 

  return (
    <Slider.Slide>
      <div className='flex items-center'>
        <Image
          src={sponsor}
          alt="sponsor-icon"
          height={50}
          width={130}
          className=''
        />
      </div>
    </Slider.Slide>
  )
}

export default SingleSponsor
