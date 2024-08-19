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
    '1d': [ 5570, 5550, 5540, 5550, 5540, 5550, 5540, 5550, 5540, 5550,
            5540, 5550, 5540, 5550, 5550, 5550, 5550, 5540, 5550, 5540,
            5540, 5540, 5540, 5530, 5530, 5530, 5530, 5530, 5530, 5540,
            5530, 5540, 5530, 5540, 5530, 5540, 5530, 5540, 5540, 5550,
            5540, 5550, 5540, 5550, 5540, 5550, 5540, 5550, 5540, 5550,
            5540, 5540, 5540, 5540, 5540, 5540, 5550, 5540, 5540, 5550,
            5540, 5550, 5540, 5550, 5540, 5550, 5550, 5550, 5550, 5540,
            5550, 5540, 5550, 5540, 5540, 5540, 5550, 5550, 5560, 5550,
            5560, 5550, 5560, 5550, 5560, 5560, 5560, 5560, 5560, 5550,
            5550, 5560, 5550, 5560, 5550, 5560, 5560, 5550, 5560, 5560,
            5570, 5560, 5570, 5560, 5570, 5560, 5570, 5560, 5570, 5560,
            5560, 5560, 5560, 5570, 5560, 5570, 5570, 5570, 5570, 5570,
            5570, 5600, 5600, 5600, 5600, 5600, 5600, 5590, 5600, 5590,
            5600, 5590, 5600, 5590, 5600, 5590, 5600, 5600, 5610, 5610,
            5620, 5620, 5630, 5630, 5650, 5650, 5650, 5650, 5650, 5650,
            5650, 5650, 5650, 5650, 5650, 5650, 5650, 5650, 5650, 5650],
  
    '1w': [ 5510, 5550, 5540, 5550, 5530, 5560, 5570, 5550, 5550, 5540,
            5540, 5530, 5560, 5570, 5600, 5590, 5610, 5610, 5620, 5620,
            5630, 5630, 5650],
  
    '1m': [ 5050, 5060, 5060, 5030, 4990, 5010, 5070, 5060, 5070, 5080,
            5120, 5160, 5130, 5140, 5170, 5180, 5210, 5200, 5230, 5240, 
            5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5100, 5140,
            5050, 5030, 5010, 5040, 5030, 5190, 5150, 5160, 5180, 5200,
            5160, 5230, 5270, 5280, 5290, 5290, 5330, 5310, 5320, 5490, 
            5520, 5550, 5560, 5570, 5530, 5650],
    
    'ytd':[ 4000, 4100, 3980, 3990, 3970, 3950, 3960, 3910, 3840, 3810,
            3830, 3890, 3760, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3660, 3630, 3500, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3790, 3800, 3740, 3790, 3810, 3880, 3820, 3870, 3890, 3880,
            3890, 3890, 3890, 3950, 4000, 4200, 4100, 4130, 4180, 4120,
            4190, 4240, 4280, 4250, 4280, 4290, 4250, 4290, 4270, 4270,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230,
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650],
            
  
    '1y': [ 4710, 4820, 4900, 4710, 4610, 4610, 4510, 4310, 4240, 4120,
            4150, 4230, 4180, 4410, 4180, 4010, 4080, 4150, 4020, 3990,
            4000, 4100, 3980, 3990, 3970, 3950, 3960, 3910, 3840, 3810,
            3830, 3890, 3760, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3660, 3630, 3500, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3790, 3800, 3740, 3790, 3810, 3880, 3820, 3870, 3890, 3880,
            3890, 3890, 3890, 3950, 4000, 4200, 4100, 4130, 4180, 4120,
            4190, 4240, 4280, 4250, 4280, 4290, 4250, 4290, 4270, 4270,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230, 
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650],
  
    '3y': [ 2000, 2100, 2150, 2180, 2130, 2150, 2170, 2190, 2240, 2210,
            2180, 2240, 2290, 2350, 2310, 2340, 2360, 2300, 2280, 2250,
            2290, 2310, 2350, 2380, 2450, 2410, 2430, 2380, 2430, 2480,
            2450, 2500, 2580, 2520, 2510, 2480, 2500, 2550, 2590, 2580,
            2690, 2750, 2730, 2700, 2650, 2690, 2750, 2750, 2780, 2890,
            2900, 2900, 2970, 2910, 2950, 3000, 3040, 3100, 3090, 3050,
            3070, 3010, 2950, 2950, 2910, 2840, 2880, 2750, 2720, 2620,
            2750, 2780, 2800, 2780, 2780, 2850, 2950, 2910, 3000, 3100,
            3090, 3140, 3180, 3250, 3210, 3250, 3180, 3280, 3400, 3350,
            3420, 3480, 3580, 3800, 3710, 3650, 3710, 3780, 3790, 3870,
            3890, 3980, 4100, 4120, 4120, 4050, 4100, 4200, 4500, 4310,
            4100, 4150, 4170, 4010, 3800, 3750, 3810, 3640, 3510, 3400,
            3320, 3310, 3340, 3310, 3250, 3310, 3210, 3350, 3150, 3050,
            3400, 3240, 3240, 2800, 2530, 2540, 2580, 2410, 2350, 2100,
            2050, 2090, 2150, 2040, 1950, 1980, 1850, 1740, 1610, 1690,
            1680, 1680, 1680, 1980, 1780, 1710, 1710, 1620, 1530, 1580,
            1680, 1420, 1250, 1420, 1480, 1480, 1580, 1680, 1800, 1700,
            1850, 2000, 2100, 2050, 2080, 2150, 2250, 2450, 2580, 2680,
            2620, 2610, 2800, 2900, 3000, 2500, 2590, 2700, 2700, 2850,
            2810, 2900, 3000, 3200, 3180, 3300, 3100, 3400, 3500, 3600,
            3800, 3600, 3750, 3800, 3950, 3410, 3500, 3750, 3860, 3910,
            4000, 4100, 4200, 4120, 4280, 4100, 4210, 4300, 4350, 4380,
            4250, 4210, 4100, 4180, 4200, 4350, 4450, 4310, 4380, 4450,
            4410, 4300, 4410, 4410, 4410, 4410, 4700, 4800, 4680, 4410,
            4100, 4130, 4150, 4110, 4300, 4380, 4800, 4810, 4810, 4950,
            5010, 5020, 5010, 5080, 5010, 5090, 5180, 5130, 5050, 5010,
            5230, 5180, 5250, 5310, 5110, 5210, 5240, 5400, 5320, 5390,
            5450, 5500, 5410, 5120, 5210, 5120, 5050, 4780, 4510, 4780,
            4710, 4820, 4820, 4710, 4610, 4610, 4510, 4310, 4240, 4120,
            4150, 4230, 4180, 4410, 4180, 4010, 4080, 4150, 4020, 3990,
            4000, 4100, 3980, 3990, 3970, 3950, 3960, 3910, 3840, 3810,
            3830, 3890, 3760, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3660, 3630, 3500, 3790, 3790, 3800, 3740, 3710, 3610, 3680,
            3790, 3800, 3740, 3790, 3810, 3880, 3820, 3870, 3890, 3880,
            3890, 3890, 3890, 3950, 4000, 4200, 4100, 4130, 4180, 4120,
            4190, 4240, 4280, 4250, 4280, 4290, 4250, 4290, 4270, 4270,
            4260, 4280, 4290, 4380, 4380, 4410, 4480, 4420, 4410, 4440,
            4440, 4480, 4580, 4520, 4530, 4580, 4460, 4470, 4500, 4480,
            4530, 4590, 4630, 4630, 4600, 4640, 4680, 4660, 4640, 4630,
            4610, 4610, 4550, 4610, 4630, 4690, 4710, 4780, 4780, 4710,
            4760, 4780, 4850, 4820, 4890, 4950, 4980, 5000, 5000, 5050,
            5090, 5020, 4950, 4920, 4950, 5000, 5020, 5050, 5080, 5090,
            5100, 5120, 5160, 5130, 5170, 5160, 5180, 5210, 5200, 5230, 
            5240, 5250, 5160, 5140, 5170, 5120, 5140, 5130, 5160, 5030,
            5180, 5160, 5230, 5320, 5520, 5510, 5570, 5650]
  };
  

// Initial data for the chart
const initialData = data['1d'];


// Function to update the chart based on the selected time range
function updateChart(timeRange) {
    const chartData = data[timeRange];
  
    // Limit the chart data to show only the latest 200 data points
    const latestData = chartData.slice(-10000);
  
    // Kondisi untuk mengubah warna berdasarkan timeRange
    let borderColor;
    let shadowColor;
    
    if (timeRange === '' || timeRange === '' || timeRange === '') {
      borderColor = 'rgb(255, 0, 0)'; // Warna merah 
      shadowColor = 'rgba(255, 0, 0, 0.8)'; // Bayangan merah
    } else {
      borderColor = 'rgb(0, 211, 0)'; // Warna hijau untuk rentang waktu lainnya
      shadowColor = 'rgba(0, 128, 0, 0.8)'; // Bayangan hijau
    }
  
    // Update dataset dengan warna yang baru
    myChart.data.datasets[0].data = latestData;
    myChart.data.datasets[0].borderColor = borderColor;
    myChart.data.datasets[0].shadowColor = shadowColor;
  
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
gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
gradient.addColorStop(1, 'rgba(0, 255, 0, 0)');

const initialDataKey = '1d'; // Memilih data awal (1d, 1w, 1m, 1y, 3y)

let myChart;

document.addEventListener('DOMContentLoaded', () => {
    // Inisialisasi grafik
    myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: initialData.length }).fill('.'),
            datasets: [
                {
                    label: 'Market Gabungan Saham XDID & XTWR',
                    data: initialData,
                    borderColor: 'rgb(0, 211, 0)',
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
  
    // Aktifkan tombol 1d dan perbarui grafik saat halaman dimuat
    const button1d = document.querySelector('#time-range-buttons button[data-time-range="1d"]');
    button1d.classList.add('active');
    updateChart('1d');
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
          const freqValue1 = Math.floor(Math.random() * 5000);
          freqCell1.textContent = freqValue1;

          const lotCell1 = newRow.insertCell();
          lotCell1.textContent = freqValue1 * 7; // Lot is 7 times the Freq value

          const bidCell = newRow.insertCell();
          bidCell.textContent = (Math.random() * 5000).toFixed(2);

          const askCell = newRow.insertCell();
          askCell.textContent = (Math.random() * 5000).toFixed(2);
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
          marketStatus.innerHTML = 'Market Open <span class="silver-text bold-text">[Normal]</span>';
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

document.querySelectorAll('#time-range-buttons button').forEach(button => {
    button.addEventListener('click', function() {
      // Hapus kelas 'active' dari semua tombol
      document.querySelectorAll('#time-range-buttons button').forEach(btn => btn.classList.remove('active'));
      
      // Tambahkan kelas 'active' ke tombol yang ditekan
      this.classList.add('active');
    });
  });
  
