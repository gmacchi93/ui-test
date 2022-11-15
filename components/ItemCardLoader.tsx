import React from 'react'

type Props = {}

const ItemCardLoader = (props: Props) => {
  return (
    <div className='flex-shrink-0 item-card animate-pulse bg-slate-700 w-[18.75rem] h-[18.75rem] sm:w-full sm:h-[8.875rem] lg:h-[10.625rem]'></div>
  )
}

export default ItemCardLoader