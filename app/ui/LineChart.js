import dynamic from 'next/dynamic'

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })
const LineChart = () => {
  const lineChartOptions = {
    series: [
      {
        name: 'TEAM A',
        type: 'line',
        data: [44, 55, 31, 47, 31, 43, 26, 41, 31, 47, 33],
      },
      {
        name: 'TEAM B',
        type: 'line',
        data: [55, 69, 45, 61, 43, 54, 37, 52, 44, 61, 43],
      },
    ],
    chart: {
      height: 250,
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      type: 'solid',
      opacity: [0.35, 1],
    },
    labels: [
      'Dec 01',
      'Dec 02',
      'Dec 03',
      'Dec 04',
      'Dec 05',
      'Dec 06',
      'Dec 07',
      'Dec 08',
      'Dec 09 ',
      'Dec 10',
      'Dec 11',
    ],
    markers: {
      size: 0,
    },
    yaxis: [
      {
        title: {
          text: 'Series A',
        },
      },
      {
        opposite: true,
        title: {
          text: 'Series B',
        },
      },
    ],
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== 'undefined') {
            return y.toFixed(0) + ' points'
          }
          return y
        },
      },
    },
  }
  if (typeof window === 'undefined') return null
  return (
    <div className='col-span-12 mt-5'>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-1'>
        <div className='bg-white p-4 shadow-sm rounded-2xl'>
          <h1 className='font-bold text-base'>Activity</h1>
          <div className=' flex flex-col mt-4 -my-2 overflow-x-auto overflow-auto  sm:rounded-lg  py-2 align-middle min-w-full w-full'>
            {typeof window !== 'undefined' && (
              <ApexChart
                options={lineChartOptions}
                series={lineChartOptions.series}
                type='line'
                height={250}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineChart
