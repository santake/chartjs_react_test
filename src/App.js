import React, {useEffect, useState} from "react";
import {Card, CardContent, CardHeader, Grid} from '@material-ui/core';

import {obtainData} from "./chartjs/DataProvider";
import {Bar, Doughnut, Line, Pie} from "react-chartjs-2";


function App() {
  const [barChartData, setBarChartData] = useState('');
  const [lineChartData, setLineChartData] = useState('');
  const [pieChartData, setPieChartData] = useState('');
  useEffect(() => {
    obtainData('bar').then(obj => setBarChartData(obj));
    obtainData('line').then(obj => setLineChartData(obj));
    obtainData('pie').then(obj => setPieChartData(obj));
  }, []);


  return (
    <Grid container spacing={2}>

      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'棒グラフ'}/>
          <CardContent>
            <Bar data={barChartData.data}
                 options={barChartData.options}
                 width={500} height={500}/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'線グラフ'}/>
          <CardContent>
            <Line data={lineChartData.data}
                  options={lineChartData.options}
                  width={500} height={500}/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'円グラフ(1)'}/>
          <CardContent>
            <Pie data={pieChartData.data}
                 options={pieChartData.options}
                 legend={pieChartData.legend}
                 width={500} height={500}/>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sm={6} xl={4}>
        <Card>
          <CardHeader title={'円グラフ(2)'}/>
          <CardContent>
            <Doughnut data={pieChartData.data}
                      options={pieChartData.options}
                      legend={pieChartData.legend}
                      width={500} height={500}/>
          </CardContent>
        </Card>
      </Grid>

    </Grid>
  );
}

export default App;
