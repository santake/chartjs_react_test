import React from "react";

import {Bar} from "react-chartjs-2";

export default () => {
  const data = {
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
        backgroundColor:'rgba(30, 144, 255, 1)',
        data: [30, 24, 38, 59, 31]
      },
      {
        label: '魚',
        backgroundColor:'rgba(144, 255, 30, 1)',
        data: [38, 20, 29, 24, 48]
      },
      {
        label: '野菜',
        backgroundColor:'rgba(255, 30, 144, 1)',
        data: [87, 43, 85, 66, 90]
      },
    ]
  };

  const options = {
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
            callback: (value, index, values) => `${value}kg` ,
          }
        }

      ],
    }
  };

  return (
    <Bar data={data} options={options} width={500} height={500}/>
  );
}