import ReactApexChart from 'react-apexcharts'

const Chart = () => {
  const pieChartOptions = {
    series: [44, 55, 67, 83],
    chart: {
      height: 250,
      type: 'pie',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '22px',
          },
          value: {
            fontSize: '16px',
          },
          total: {
            show: true,
            label: 'Total',
            formatter: function (w) {
              return 249
            },
          },
        },
      },
    },
    labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
  }

  return (
    <div className='col-span-12 mt-5'>
      <div className='grid gap-2 grid-cols-1 lg:grid-cols-2'>
        <div className='bg-white shadow-sm p-4 rounded-2xl'>
          <ReactApexChart
            options={pieChartOptions}
            series={pieChartOptions.series}
            type={pieChartOptions.chart.type}
            height={250}
          />
        </div>
        <div className='bg-white shadow-sm p-4 rounded-2xl'>
          <h1 className='font-bold text-base'>Schedule</h1>
          <div className='mt-4'>
            <div className='flex h-auto p-2'>
              <div className='bg-[#9BDD7C] w-1'></div>
              <div className='p-2'>
                <p>Meeting with suppliers from Kuta Bali</p>
                <p className='text-[#858585]'>14.00-15.00</p>
                <p className='text-[#858585]'>at Sunset Road, Kuta Bali</p>
              </div>
            </div>
            <div className='flex h-auto p-2'>
              <div className='bg-[#6972C3] w-1'></div>
              <div className='p-2'>
                <p>Meeting with suppliers from Kuta Bali</p>
                <p className='text-[#858585]'>14.00-15.00</p>
                <p className='text-[#858585]'>at Sunset Road, Kuta Bali</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chart
