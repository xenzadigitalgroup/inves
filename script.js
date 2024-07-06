function updateChart(timeRange, button) {
    // Panggil fungsi untuk memperbarui grafik
    // Implementasikan logika updateChart di sini

    // Hapus kelas "active" dari semua tombol
    var buttons = document.querySelectorAll('#time-range-buttons button');
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    // Tambahkan kelas "active" ke tombol yang ditekan
    button.classList.add('active');
}

const data = {
  '1d': [ 5000, 4990, 5000, 5010, 5020, 5020],

  '1w': [ 4950, 4920, 4950, 5000, 5020],

  '1m': [ 4500, 4300, 5000, 5000, 5050, 5090, 5020, 4950, 4920, 4950,
          5000, 5020],
  
  'ytd':[ 4000,50, 70, 90, 130, 100, 90, 120, 130, 150, 210, 
          130, 260, 810, 1000, 1200, 1400, 1530, 1580, 1550, 1450,
          1800, 2000, 2500, 3500, 4000, 4500, 4300, 5000, 5000, 5050,
          5090, 5020, 4950, 4920, 4950, 5000, 5020],
          

  '1y': [ 2000, 1500, 1900, 2100, 2500, 2300, 2700, 2800, 3000, 3500,
          3550, 3500, 3200, 3400, 3200, 3500, 3750, 3800, 3900, 4000,
          4100, 4200, 3900, 3500, 4250, 4350, 4400, 4300, 4450, 4500,
          4600, 4600, 4700, 4800, 5000, 5100, 5000, 4900, 5000, 5100,
          5210, 5200, 4400, 4800, 5050, 5100, 5200, 5300, 5400, 5500,
          5500, 5200, 5300, 5400, 5700, 5900, 6000, 5900, 6000, 6100,
          6000, 5800, 5000, 5200, 5000, 4500, 4800, 4000, 3000, 3200,
          3500, 3800, 3500, 3800, 4000, 4500, 4300, 5000, 5000, 5050,
          5090, 5020, 4950, 4920, 4950, 5000, 5020],

  '3y': [ 2200, 2500, 2800, 2400, 2600, 2300, 2700, 1900, 2400, 2100,
          3000, 2800, 2700, 2500, 2200, 2000, 1800, 2400, 2000, 1800,
          1500, 1600, 1900, 2200, 2300, 2600, 2900, 2500, 2200, 2000,
          2450, 2480, 2600, 2800, 2900, 3000, 3100, 3000, 2800, 2900,
          3000, 3200, 3500, 3800, 3500, 3300, 3500, 3600, 3800, 3900,
          4000, 3900, 3800, 3700, 3800, 3500, 3200, 3400, 3100, 2800,
          2500, 2200, 2300, 2800, 2200, 2500, 3000, 3100, 3300, 3200,
          3000, 3400, 3200, 3000, 2500, 2500, 2200, 2000, 1200, 1500,
          2000, 1500, 1900, 2100, 2500, 2300, 2700, 2800, 3000, 3500,
          3550, 3500, 3200, 3400, 3200, 3500, 3750, 3800, 3900, 4000,
          4100, 4200, 3900, 3500, 4250, 4350, 4400, 4300, 4450, 4500,
          4600, 4600, 4700, 4800, 5000, 5100, 5000, 4900, 5000, 5100,
          5210, 5200, 4400, 4800, 5050, 5100, 5200, 5300, 5400, 5500,
          5500, 5200, 5300, 5400, 5700, 5900, 6000, 5900, 6000, 6100,
          6000, 5800, 5000, 5200, 5000, 4500, 4800, 4000, 3000, 3200,
          3500, 3800, 3500, 3800, 4000, 4500, 4300, 5000, 5000, 5050, 
          5090, 5020, 4950, 4920, 4950, 5000, 5020]
};

// Initial data for the chart
const initialData = data['1d'];

// Function to update the chart based on the selected time range
function updateChart(timeRange) {
  const chartData = data[timeRange];

  // Limit the chart data to show only the latest 200 data points
  const latestData = chartData.slice(-200);

  myChart.data.datasets[0].data = latestData;
  myChart.data.datasets[1].data = Array(latestData.length).fill(latestData[0]); // Use the first value as the reference line
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
                  label: 'Nilai Awal',
                  data: Array(initialData.length).fill(initialData[0]),
                  borderColor: 'silver',
                  borderWidth: 2,
                  fill: false,
                  pointRadius: 0, // Menghilangkan titik pada garis nilai awal
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
          lotCell2.textContent = freqValue1 * 7; // Lot is 7 times the Freq value

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

function updateMarketStatus() {
  const marketStatusElement = document.getElementById('marketStatus');
  const currentDateElement = document.getElementById('currentDate');
  const marketCountdownElement = document.getElementById('marketCountdown');

  const today = new Date();
  const dayOfWeek = today.getDay();
  const currentHour = today.getHours();

  // Check if it's a weekday (Monday to Friday)
  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      const marketOpenTime = new Date(today);
      marketOpenTime.setHours(9, 0, 0); // Market opens at 9:00 AM

      const marketCloseTime = new Date(today);
      marketCloseTime.setHours(16, 0, 0); // Market closes at 4:00 PM

      // Check if the current time is before market close
      if (today >= marketOpenTime && today < marketCloseTime) {
          marketStatusElement.textContent = 'Market Open';
          marketStatus.innerHTML = 'Market Open <span class="silver-text bold-text">[NORMAL]</span>';
          marketStatusElement.classList.add('open');
          marketStatusElement.classList.remove('closed');
          marketCountdownElement.textContent = ''; // Clear countdown

          currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
      } else {
          // Market is closed, calculate time until next open
          const nextOpenTime = new Date(today);

          // If current time is after market close, calculate next open time
          if (today >= marketCloseTime) {
              nextOpenTime.setDate(today.getDate() + 1); // Move to next day
          }

          nextOpenTime.setHours(9, 0, 0); // Next open at 9:00 AM

          const timeDifference = nextOpenTime.getTime() - today.getTime();
          const secondsUntilOpen = Math.floor(timeDifference / 1000);

          const hours = Math.floor(secondsUntilOpen / 3600);
          const minutes = Math.floor((secondsUntilOpen % 3600) / 60);
          const seconds = secondsUntilOpen % 60;

          marketStatusElement.textContent = 'Market Closed';
          marketStatusElement.classList.add('closed');
          marketStatusElement.classList.remove('open');

          marketCountdownElement.textContent = `Market akan buka dalam ${hours}h ${minutes}m ${seconds}s`;

          currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
      }
  } else {
      // Weekend (Saturday or Sunday)
      marketStatusElement.textContent = 'Market Closed';
      marketStatusElement.classList.add('closed');
      marketStatusElement.classList.remove('open');

      // Find the next Monday at 9:00 AM
      let nextMonday = new Date(today);
      nextMonday.setDate(today.getDate() + ((1 + 7 - dayOfWeek) % 7));
      nextMonday.setHours(9, 0, 0);

      const timeDifference = nextMonday.getTime() - today.getTime();
      const secondsUntilOpen = Math.floor(timeDifference / 1000);

      const hours = Math.floor(secondsUntilOpen / 3600);
      const minutes = Math.floor((secondsUntilOpen % 3600) / 60);
      const seconds = secondsUntilOpen % 60;

      marketCountdownElement.textContent = `Market will open on Monday at 9:00 AM`;
      currentDateElement.textContent = `Tanggal: ${today.toLocaleDateString()}`;
  }
}

// Initial update
updateMarketStatus();

// Update every second
setInterval(updateMarketStatus, 1000);
