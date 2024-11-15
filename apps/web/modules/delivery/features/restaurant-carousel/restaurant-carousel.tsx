import { Restaurant } from '@repo/types'
import RestaurantCard from '@repo/ui/restaurant-card'
// import { getRestaurant } from '../../../restaurant/models/restaurant'

type Props = {
  restaurants: Restaurant[]
  title: string
}

const RestaurantCarousel = ({ restaurants, title }: Props) => {
  // const restaurant = getRestaurant('1')

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="flex space-x-4">
        {restaurants.map((restaurant, index) => (
          <RestaurantCard key={index} restaurant={restaurant} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantCarousel
