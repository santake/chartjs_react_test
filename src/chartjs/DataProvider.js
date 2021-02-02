
const barChartData = {
  data: {
    labels: [
      ['2020年', '1月'], // 配列にすることで改行が働く(らしい)
      ['2020年', '2月'],
      ['2020年', '3月'],
      ['2020年', '4月'],
      ['2020年', '5月'],
    ],
    datasets: [
      {
        label: '肉',
        backgroundColor: 'rgba(30, 144, 255, 1)',
        data: [30, 24, 38, 59, 31]
      },
      {
        label: '魚',
        backgroundColor: 'rgba(144, 255, 30, 1)',
        data: [38, 20, 29, 24, 48]
      },
      {
        label: '野菜',
        backgroundColor: 'rgba(255, 30, 144, 1)',
        data: [87, 43, 85, 66, 90]
      },
    ]
  },
  options: {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '年 月'
          },
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '消費量'
          },
          ticks: {
            beginAtZero: true,
            callback: (value, index, values) => `${value}kg`,
          }
        }
      ],
    },
    legend: {
      display: true,
      position:'bottom',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      },

    }
  }
};


const lineChartData = {
  data: {
    labels: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
    datasets: [
      {
        label: '日経平均株価',
        fill: false, // true if you need 'area' chart
        backgroundColor: 'rgba(196,27,83,0.6)',
        borderColor: 'rgba(196,27,83,0.3)',
        pointBackgroundColor: 'rgba(196, 27, 83, 1)',
        data: [23656,23872,20794,17820,19619,21877,22306,22329,23205,23029,24325,26751]
      }
    ],
  },
  options: {
    scales: {
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '2020年'
          },
        }
      ],
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: '株価(円)'
          },
          ticks: {
            beginAtZero: false,
            callback: (value, index, values) => `${value}円`,
          }
        }
      ],
    }
  }
}

const pieChartData = {
  data: {
    labels: ['リンゴ','トマト','檸檬','オレンジ','スイカ','マンゴー'],
    datasets: [
      {
        data: [35, 29, 12, 72, 45, 8],
        backgroundColor: [
          '#f06384',
          '#f033f0',
          '#36A2eb',
          '#ffce56',
          '#30ff30',
          '#3030ff',
        ],
        hoverBackgroundColor: [
          '#ff93a4',
          '#ff83fa',
          '#86f2fb',
          '#fffe5f',
          '#f0fff0',
          '#f0f0ff',
        ]
      }
    ]
  },
  options: {
    legend: {
      display: true,
      position:'bottom',
      fullWidth: true,
      reverse: false,
      labels: {
        fontColor: 'rgb(255, 99, 132)'
      }
    }
  },
}


export const obtainData = async (type) => {
  let result = null;
  if (type === 'bar') {
    result = barChartData;
  } else if (type === 'line') {
    result = lineChartData;
  } else if (type === 'pie') {
    result = pieChartData;
  }
  return result;
}