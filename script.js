// max200 Data
const data = {
    '1d': [ 1080, 1130, 1130, 1150, 1150, 1150, 1150, 1150, 1150, 1150,
            1150, 1150, 1150, 1150, 1130, 1150, 1150, 1150, 1150, 1150,
            1150, 1150, 1150, 1150, 1150, 1150, 1160, 1150, 1150, 1150,
            1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150,
            1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150, 1150,
            1140, 1140, 1140, 1140, 1140, 1140, 1140, 1130, 1140, 1140,
            1150, 1150, 1170, 1150, 1150, 1150, 1150, 1150, 1150, 1160,
            1130, 1170, 1160, 1160, 1160, 1160, 1160, 1180, 1150, 1150,
            1150, 1150, 1150, 1150, 1160, 1160, 1160, 1160, 1160, 1160,
            1150, 1160, 1150, 1160, 1150, 1160, 1150, 1170, 1170, 1170,
            1170, 1170, 1190, 1100, 1120, 1120, 1130, 1160, 1140, 1150,
            1150, 1150, 1160, 1160, 1180, 1170, 1180, 1170, 1180, 1170,
            1180, 1170, 1180, 1170, 1180, 1170, 1180, 1170, 1200, 1180,
            1190, 1180, 1150, 1170, 1170, 1170, 1170, 1170, 1170, 1200,
            1200, 1200, 1200, 1200, 1200, 1200, 1190, 1190, 1190, 1190,
            1190, 1190, 1170, 1200, 1200, 1200, 1200, 1200, 1200, 1200],

    '1w': [ 715, 700, 750, 800, 850, 910, 1000, 1000, 1020, 1070, 1040,
            1050, 1050, 1060, 1060, 1070, 1070, 1110, 1080, 1200],

    '1m': [ 210, 130, 190, 260, 340, 470, 470, 485, 505, 520, 
            530, 550, 630, 680, 740, 790, 810, 665, 600, 550,
            715, 700, 750, 850, 910, 1000, 1070, 1040, 1100, 1080,
            1200],

    '1y': [ 2000, 1500, 1900, 2100, 2500, 2300, 2700, 2800, 3000, 3500,
            3550, 3500, 3200, 3400, 3200, 3500, 3750, 3800, 3900, 4000,
            4100, 4200, 3900, 3500, 4250, 4350, 4400, 4300, 4450, 4500,
            4600, 4600, 4700, 4800, 5000, 5100, 5000, 4900, 5000, 5100,
            5210, 5200, 4400, 4800, 5050, 5100, 5200, 5300, 5400, 5500,
            5500, 5200, 5300, 5400, 5700, 5900, 6000, 5900, 6000, 6100],

    '3y': [ 3000, 3200, 3500, 3800, 3500, 3300, 3500, 3600, 3800, 3900,
            4000, 3900, 3800, 3700, 3800, 3500, 3200, 3400, 3100, 2800,
            2500, 2200, 2300, 2800, 2200, 2500, 3000, 3100, 3300, 3200,
            3000, 3400, 3200, 3000, 2500, 2500, 2200, 2000, 1200, 1500,
            2000, 1500, 1900, 2100, 2500, 2300, 2700, 2800, 3000, 3500,
            3550, 3500, 3200, 3400, 3200, 3500, 3750, 3800, 3900, 4000,
            4100, 4200, 3900, 3500, 4250, 4350, 4400, 4300, 4450, 4500,
            4600, 4600, 4700, 4800, 5000, 5100, 5000, 4900, 5000, 5100,
            5210, 5200, 4400, 4800, 5050, 5100, 5200, 5300, 5400, 5500,
            5500, 5200, 5300, 5400, 5700, 5900, 6000, 5900, 6000, 6100,]
  };

  // Initial data for the chart
    const initialData = data['1d'];

  // Function to update the chart based on the selected time range
    function updateChart(timeRange) {
    const chartData = data[timeRange];

  // Limit the chart data to show only the latest 80 data points
    const latestData = chartData.slice(-200);

    myChart.data.datasets[0].data = latestData;
    myChart.data.labels = Array.from({ length: latestData.length }).fill('.');
  
  // Update x-axis scale to match the number of data points
    myChart.options.scales.x.ticks.min = 0;
    myChart.options.scales.x.ticks.max = latestData.length - 1;

    myChart.update();
}


// Chart.js configuration
const ctx = document.getElementById('myChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 400);
gradient.addColorStop(0, 'rgba(0, 128, 0, 0.1)');
gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

const initialDataKey = '1d'; // Memilih data awal (1d, 1w, 1m, 1y, 3y)

// Hitung nilai rata-rata dari data awal
const averageValue = calculateAverage(initialData);

let myChart;

// Inisialisasi grafik
document.addEventListener('DOMContentLoaded', () => {
  myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({ length: initialData.length }).fill('.'),
      datasets: [
        {
          label: 'Market Gabungan Saham XDID & XTWR',
          data: initialData,
          borderColor: 'green',
          backgroundColor: gradient,
          borderWidth: 2,
          tension: 0.4,
          fill: true,
          pointRadius: 0, // Menghilangkan titik pada garis
          borderSkipped: 'round',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          shadowBlur: 10,
          shadowColor: 'rgba(0, 128, 0, 0.8)',
        },
        {
          label: 'Rata-rata',
          data: Array(initialData.length).fill(averageValue),
          borderColor: 'silver',
          borderWidth: 2,
          fill: false,
          pointRadius: 0, // Menghilangkan titik pada garis rata-rata
          tooltip: {
            enabled: false,
          },
        },
      ],
    },
    options: {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: true, // Tampilkan nilai pada sumbu y
          beginAtZero: false,
          grid: {
            display: false, // Sembunyikan garis pada sumbu y
          },
        },
      },
      plugins: {
        legend: {
          display: false, // Sembunyikan legenda
        },
        tooltip: {
          enabled: false,
        },
      },
    },
  });
});

// Fungsi untuk menghitung nilai rata-rata dari sebuah array
function calculateAverage(dataArray) {
  const sum = dataArray.reduce((acc, curr) => acc + curr, 0);
  return sum / dataArray.length;
}
  // Update order book table with random data every 5 seconds
  function updateOrderBookTable() {
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
  
    if (day >= 1 && day <= 5 && hour >= 9 && hour < 16) { // Market is open from Monday to Friday, 9:00-16:00
      const tableBody = document.querySelector('#orderBook tbody');
      tableBody.innerHTML = '';
  
      for (let i = 1; i < 10; i++) {
        const newRow = tableBody.insertRow();
  
        const freqCell1 = newRow.insertCell();
        const freqValue1 = Math.floor(Math.random() * 200);
        freqCell1.textContent = freqValue1;
  
        const lotCell1 = newRow.insertCell();
        lotCell1.textContent = freqValue1 * 7; // Lot is 7 times the Freq value
  
        const bidCell = newRow.insertCell();
        bidCell.textContent = (Math.random() * 2000).toFixed(2);
  
        const askCell = newRow.insertCell();
        askCell.textContent = (Math.random() * 2000).toFixed(2);
  
        const lotCell2 = newRow.insertCell();
        lotCell2.textContent = freqValue1 * 7; // Lot is 10 times the Freq value
  
        const freqCell2 = newRow.insertCell();
        const freqValue2 = Math.floor(Math.random() * 200);
        freqCell2.textContent = freqValue2;
      }
    }
  }
  
  // Initial order book update
  updateOrderBookTable();
  
  // Update order book every 5 seconds during market hours (Monday to Friday, 9:00-16:00)
  setInterval(() => {
    updateOrderBookTable();
  }, 5000);
  
  
  // Initial order book update
  updateOrderBookTable();
  
  // Update order book every 5 seconds
  setInterval(updateOrderBookTable, 3000);
  
  // Initial order book update
  updateOrderBookTable();

  // Update order book every 5 seconds
  setInterval(updateOrderBookTable, 3000);

  function updateMarketStatus() {
    const today = new Date();
    const day = today.getDay();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();
    const date = today.getDate();
    const month = today.getMonth() + 1; // Months are zero-based
    const year = today.getFullYear();
  
    const marketStatus = document.getElementById('marketStatus');
    const currentDate = document.getElementById('currentDate');
  
    // Calculate next market open time based on current day and time
    let nextOpen = new Date(today);
  
    if (day >= 1 && day <= 5) {
      // Weekday (Monday to Friday): Calculate time until next open on the next day (Monday to Friday) at 9:00
      if (hour < 16) {
        // Market is closed, calculate time until 16:00 today
        nextOpen.setHours(16, 0, 0, 0); // Next open time today at 16:00
      } else {
        // Market is closed after 16:00, calculate time until 9:00 on the next day (Monday to Friday)
        nextOpen.setDate(today.getDate() + 1); // Next open day
        nextOpen.setHours(9, 0, 0, 0); // Next open time at 9:00
      }
    } else if (day === 0 || day === 6) {
      // Weekend (Saturday or Sunday): Calculate time until Monday 9:00
      nextOpen.setDate(today.getDate() + (1 + 7 - day) % 7); // Next Monday
      nextOpen.setHours(9, 0, 0, 0); // Next open time on Monday at 9:00
    }
  
    const timeDifference = nextOpen - today;
    const countdown = Math.max(timeDifference, 0) / 1000; // Ensure countdown is non-negative
  
    if (hour >= 9 && hour < 16 && day >= 1 && day <= 5) {
      // Market is open
      marketStatus.innerHTML = 'Market Open <span class="silver-text bold-text">[NORMAL]</span> <br><br> || 1 Day (<span class="green-text">+11,12%</span>)';
      marketStatus.classList.add('open');
      marketStatus.classList.remove('closed');
      marketCountdown.textContent = '';
    } else {
      // Market is closed
      marketStatus.textContent = 'Market Closed';
      marketStatus.classList.add('closed');
      marketStatus.classList.remove('open');
  
      const hours = Math.floor(countdown / 3600);
      const minutes = Math.floor((countdown % 3600) / 60);
      const seconds = Math.floor(countdown % 60);
      marketCountdown.textContent = `Market akan buka dalam ${hours}h ${minutes}m ${seconds}s`;
    }
  
    currentDate.textContent = `Tanggal: ${date}/${month}/${year}`;
  }
  
  // Initial update
  updateMarketStatus();
  
  // Update status and order book every second
  setInterval(() => {
    updateMarketStatus();
  }, 1000);
  