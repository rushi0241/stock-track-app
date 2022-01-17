import { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
const Stock = () => {
    const [stock, setStock] = useState('');
    const [stockChartXValue, setStockChartXValue] = useState('');
    const [stockChartYValue, setStockChartYValue] = useState('');
    useEffect(() => {
        getData();
        async function getData() {
            const pointerToThis = this;
            console.log(pointerToThis);
            const API_key = 'M6YYT9DG208LCROU';
            const stockStymbol = 'FB'
            const response = await fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockStymbol}&interval=15min&apikey=${API_key}`);
            const data = await response.json();
            console.log(data);
            setStock(data) ;
        }
    }, []);
    return (
        <>
            <h1>Stock</h1>
            <Plot
                data={[
                {
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+markers',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
      </>
    )
}

export default Stock;