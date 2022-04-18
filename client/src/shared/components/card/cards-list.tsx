import { FC } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import CardItem from './card-item'
import { useFavorites } from '../../../../shared/hooks/useFavorites'

export interface ICards {
  data?: Array<any>
  isLoading?: boolean
  handleClick?: (e: any) => void
}
const CardList: FC<ICards> = ({ data, isLoading }) => {
  const hasData: boolean = !!(data && !isLoading)

  return (
    <>
      <SimpleGrid height="auto" width="7xl" columns={2} spacingX="40px" spacingY="20px">
        {hasData && data?.map((item: any) => <CardItem hit={item} key={`${item.objectID}_name`} />)}
      </SimpleGrid>
    </>
  )
}
export default CardList
