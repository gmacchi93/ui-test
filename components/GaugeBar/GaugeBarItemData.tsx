import { Direction } from '@/types/models';
import React from 'react'
import ThumbsIcon from '../ThumbsIcon'

type Props = {
    percentage: number;
    direction: Direction
}

const GaugeBarItemData = ({percentage, direction}: Props) => {
  return (
    <div className={`flex ${direction === "up" ? "flex-row" : "flex-row-reverse"} items-center`}>
          <div className="thumbs-icon-container p-2 w-[1.875rem] h-[1.875rem] lg:w-[2.8125rem] lg:h-[2.8125rem]">
            <ThumbsIcon direction={direction} />
          </div>
          <p className="font-light text-white text-lg lg:text-[1.6875rem]">{`${percentage.toFixed(1)}%`}</p>
        </div>
  )
}

export default GaugeBarItemData