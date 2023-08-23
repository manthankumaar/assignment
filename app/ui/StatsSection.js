import {
  likeIcon,
  totaRevenueIcon,
  totalTransactionIcon,
  userIcon,
} from '@/asset/stat_svg'
import Card from './Card'

const StatsSection = () => {
  return (
    <div className='col-span-12 mt-8'>
      <div className='grid grid-cols-12 gap-6 mt-5'>
        <Card
          icon={totaRevenueIcon}
          color='#ddefe0'
          value='$2,129,430'
          title='Total Revenues'
        />
        <Card
          icon={totalTransactionIcon}
          color='#f4ecdd'
          value='1,520'
          title='Total Transactions'
        />
        <Card
          icon={likeIcon}
          color='#efdada'
          value='9721'
          title='Total Likes'
        />
        <Card icon={userIcon} color='#dee0ef' value='892' title='Total Users' />
      </div>
    </div>
  )
}

export default StatsSection
