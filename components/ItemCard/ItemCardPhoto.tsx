import Image from 'next/image'
import React from 'react'

type Props = {
    name: string;
    picture: string;
}

const ItemCardPhoto = ({name, picture}: Props) => {
  return (
    <div className="item-photo absolute left-0 sm:-left-[1.6875rem] lg:left-0">
        <div className="relative w-[18.75rem] h-[18.75rem] sm:w-[13.5118rem] lg:w-64 sm:h-[8.875rem] lg:h-[10.625rem]">
          <Image
          className="object-cover"
            alt={`Photo of ${name}`}
            src={`/assets/img/personalities/${picture}`}
            fill
          />
        </div>
      </div>
  )
}

export default ItemCardPhoto