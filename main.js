import './style.css';
import Chart from 'chart.js/auto';

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Scroll Animation
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});

// Charts Configuration
const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            labels: { color: '#a1a1aa', font: { family: 'Inter' } }
        },
        title: {
            display: true,
            color: '#fff',
            font: { size: 14, family: 'Inter', weight: '600' },
            padding: { bottom: 20 }
        }
    },
    scales: {
        y: {
            grid: { color: '#27272a' },
            ticks: { color: '#a1a1aa' }
        },
        x: {
            grid: { color: '#27272a' },
            ticks: { color: '#a1a1aa' }
        }
    }
};

// Initialize Charts
document.addEventListener('DOMContentLoaded', () => {

    // Project 1: Regional Growth
    const ctx1 = document.getElementById('chart-project-1');
    if (ctx1) {
        new Chart(ctx1, {
            type: 'bar',
            data: {
                labels: ['Iraq/Lebanon', 'Egypt'],
                datasets: [{
                    label: 'Purchases',
                    data: [15000, 5000],
                    backgroundColor: '#3b82f6',
                    yAxisID: 'y'
                }, {
                    label: 'CPA (EGP)',
                    data: [36, 45],
                    backgroundColor: '#10b981',
                    yAxisID: 'y1'
                }]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, title: { display: true, text: 'Volume vs. Efficiency by Region' } },
                scales: {
                    ...commonOptions.scales,
                    y1: {
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#10b981', callback: (val) => val + ' EGP' }
                    }
                }
            }
        });
    }

    // Project 2: E-commerce Scaling
    const ctx2 = document.getElementById('chart-project-2');
    if (ctx2) {
        new Chart(ctx2, {
            type: 'line',
            data: {
                labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4'],
                datasets: [{
                    label: 'ROAS',
                    data: [4.5, 6.2, 7.8, 9.0],
                    borderColor: '#3b82f6',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    fill: true,
                    tension: 0.4
                }, {
                    label: 'CTR (%)',
                    data: [2.5, 4.8, 7.2, 9.1],
                    borderColor: '#f59e0b',
                    tension: 0.4,
                    yAxisID: 'y1'
                }]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, title: { display: true, text: 'ROAS & CTR Growth Trend' } },
                scales: {
                    ...commonOptions.scales,
                    y1: {
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#f59e0b', callback: (val) => val + '%' }
                    }
                }
            }
        });
    }

    // Project 3: Aman Stores
    const ctx3 = document.getElementById('chart-project-3');
    if (ctx3) {
        new Chart(ctx3, {
            type: 'bar',
            data: {
                labels: ['Utility', 'Home', 'Electronics'],
                datasets: [{
                    label: 'ROAS',
                    data: [13, 11, 8.5],
                    backgroundColor: '#8b5cf6'
                }, {
                    label: 'CTR (%)',
                    data: [4.6, 3.8, 2.9],
                    backgroundColor: '#ec4899',
                    yAxisID: 'y1'
                }]
            },
            options: {
                ...commonOptions,
                plugins: { ...commonOptions.plugins, title: { display: true, text: 'Performance by Category' } },
                scales: {
                    ...commonOptions.scales,
                    y1: {
                        position: 'right',
                        grid: { drawOnChartArea: false },
                        ticks: { color: '#ec4899', callback: (val) => val + '%' }
                    }
                }
            }
        });
    }

    // Project 4: Dropshipping Bundles
    const ctx4 = document.getElementById('chart-project-4');
    if (ctx4) {
        new Chart(ctx4, {
            type: 'doughnut',
            data: {
                labels: ['Prod Cost', 'Ad Spend', 'Profit Margin'],
                datasets: [{
                    data: [30, 15, 55], // Illustrative split for high ROAS
                    backgroundColor: ['#ef4444', '#f59e0b', '#10b981'],
                    borderWidth: 0
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { position: 'right', labels: { color: '#a1a1aa' } },
                    title: { display: true, text: 'Profitability Breakdown (24x ROAS)', color: '#fff' }
                }
            }
        });
    }

    // Project 5: Athar Agency
    const ctx5 = document.getElementById('chart-project-5');
    if (ctx5) {
        new Chart(ctx5, {
            type: 'radar',
            data: {
                labels: ['Cost Efficiency', 'Reach', 'Brand Awareness', 'Lead Quality', 'Conv. Rate'],
                datasets: [{
                    label: 'Before',
                    data: [40, 50, 30, 45, 40],
                    borderColor: '#ef4444',
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    pointBackgroundColor: '#ef4444'
                }, {
                    label: 'After',
                    data: [90, 85, 80, 85, 75],
                    borderColor: '#10b981',
                    backgroundColor: 'rgba(16, 185, 129, 0.2)',
                    pointBackgroundColor: '#10b981'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { labels: { color: '#a1a1aa' } },
                    title: { display: true, text: 'Impact of Optimization Strategy', color: '#fff' }
                },
                scales: {
                    r: {
                        grid: { color: '#27272a' },
                        angleLines: { color: '#27272a' },
                        pointLabels: { color: '#a1a1aa', font: { size: 11 } },
                        ticks: { display: false, backdropColor: 'transparent' }
                    }
                }
            }
        });
    }
});
