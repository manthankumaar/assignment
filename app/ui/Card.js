import { NavLink } from '../utility/NavLink'

const Card = ({ icon, color, title, value }) => {
  const colors = [
    'bg-[#ddefe0]',
    'bg-[#f4ecdd]',
    'bg-[#efdada]',
    'bg-[#dee0ef]',
  ]
  return (
    <NavLink
      className={`transform hover:scale-105 transition duration-300 shadow-sm rounded-2xl col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-[${color}]`}
      href='#'
    >
      <div className='p-5'>
        <div className='flex justify-end'>
          <span className='h-7 w-7'>{icon}</span>
        </div>
        <div className='ml-2 w-full flex-1'>
          <div>
            <div className='mt-1 text-base text-gray-600'>{title}</div>
            <div className='mt-3 text-3xl font-bold leading-8'>{value}</div>
          </div>
        </div>
      </div>
    </NavLink>
  )
}
export default Card
