const teapotsVertices = [ 
	[ 1.4000,  0.0000,  2.4000], 
	[ 1.4000, -0.7840,  2.4000], 
	[ 0.7840, -1.4000,  2.4000], 
	[ 0.0000, -1.4000,  2.4000], 
	[ 1.3375,  0.0000,  2.5312], 
	[ 1.3375, -0.7490,  2.5312], 
	[ 0.7490, -1.3375,  2.5312], 
	[ 0.0000, -1.3375,  2.5312], 
	[ 1.4375,  0.0000,  2.5312], 
	[ 1.4375, -0.8050,  2.5312], 
	[ 0.8050, -1.4375,  2.5312], 
	[ 0.0000, -1.4375,  2.5312], 
	[ 1.5000,  0.0000,  2.4000], 
	[ 1.5000, -0.8400,  2.4000], 
	[ 0.8400, -1.5000,  2.4000], 
	[ 0.0000, -1.5000,  2.4000], 
	[-0.7840, -1.4000,  2.4000], 
	[-1.4000, -0.7840,  2.4000], 
	[-1.4000,  0.0000,  2.4000], 
	[-0.7490, -1.3375,  2.5312], 
	[-1.3375, -0.7490,  2.5312], 
	[-1.3375,  0.0000,  2.5312], 
	[-0.8050, -1.4375,  2.5312], 
	[-1.4375, -0.8050,  2.5312], 
	[-1.4375,  0.0000,  2.5312], 
	[-0.8400, -1.5000,  2.4000], 
	[-1.5000, -0.8400,  2.4000], 
	[-1.5000,  0.0000,  2.4000], 
	[-1.4000,  0.7840,  2.4000], 
	[-0.7840,  1.4000,  2.4000], 
	[ 0.0000,  1.4000,  2.4000], 
	[-1.3375,  0.7490,  2.5312], 
	[-0.7490,  1.3375,  2.5312], 
	[ 0.0000,  1.3375,  2.5312], 
	[-1.4375,  0.8050,  2.5312], 
	[-0.8050,  1.4375,  2.5312], 
	[ 0.0000,  1.4375,  2.5312], 
	[-1.5000,  0.8400,  2.4000], 
	[-0.8400,  1.5000,  2.4000], 
	[ 0.0000,  1.5000,  2.4000], 
	[ 0.7840,  1.4000,  2.4000], 
	[ 1.4000,  0.7840,  2.4000], 
	[ 0.7490,  1.3375,  2.5312], 
	[ 1.3375,  0.7490,  2.5312], 
	[ 0.8050,  1.4375,  2.5312], 
	[ 1.4375,  0.8050,  2.5312], 
	[ 0.8400,  1.5000,  2.4000], 
	[ 1.5000,  0.8400,  2.4000], 
	[ 1.7500,  0.0000,  1.8750], 
	[ 1.7500, -0.9800,  1.8750], 
	[ 0.9800, -1.7500,  1.8750], 
	[ 0.0000, -1.7500,  1.8750], 
	[ 2.0000,  0.0000,  1.3500], 
	[ 2.0000, -1.1200,  1.3500], 
	[ 1.1200, -2.0000,  1.3500], 
	[ 0.0000, -2.0000,  1.3500], 
	[ 2.0000,  0.0000,  0.9000], 
	[ 2.0000, -1.1200,  0.9000], 
	[ 1.1200, -2.0000,  0.9000], 
	[ 0.0000, -2.0000,  0.9000], 
	[-0.9800, -1.7500,  1.8750], 
	[-1.7500, -0.9800,  1.8750], 
	[-1.7500,  0.0000,  1.8750], 
	[-1.1200, -2.0000,  1.3500], 
	[-2.0000, -1.1200,  1.3500], 
	[-2.0000,  0.0000,  1.3500], 
	[-1.1200, -2.0000,  0.9000], 
	[-2.0000, -1.1200,  0.9000], 
	[-2.0000,  0.0000,  0.9000], 
	[-1.7500,  0.9800,  1.8750], 
	[-0.9800,  1.7500,  1.8750], 
	[ 0.0000,  1.7500,  1.8750], 
	[-2.0000,  1.1200,  1.3500], 
	[-1.1200,  2.0000,  1.3500], 
	[ 0.0000,  2.0000,  1.3500], 
	[-2.0000,  1.1200,  0.9000], 
	[-1.1200,  2.0000,  0.9000], 
	[ 0.0000,  2.0000,  0.9000], 
	[ 0.9800,  1.7500,  1.8750], 
	[ 1.7500,  0.9800,  1.8750], 
	[ 1.1200,  2.0000,  1.3500], 
	[ 2.0000,  1.1200,  1.3500], 
	[ 1.1200,  2.0000,  0.9000], 
	[ 2.0000,  1.1200,  0.9000], 
	[ 2.0000,  0.0000,  0.4500], 
	[ 2.0000, -1.1200,  0.4500], 
	[ 1.1200, -2.0000,  0.4500], 
	[ 0.0000, -2.0000,  0.4500], 
	[ 1.5000,  0.0000,  0.2250], 
	[ 1.5000, -0.8400,  0.2250], 
	[ 0.8400, -1.5000,  0.2250], 
	[ 0.0000, -1.5000,  0.2250], 
	[ 1.5000,  0.0000,  0.1500], 
	[ 1.5000, -0.8400,  0.1500], 
	[ 0.8400, -1.5000,  0.1500], 
	[ 0.0000, -1.5000,  0.1500], 
	[-1.1200, -2.0000,  0.4500], 
	[-2.0000, -1.1200,  0.4500], 
	[-2.0000,  0.0000,  0.4500], 
	[-0.8400, -1.5000,  0.2250], 
	[-1.5000, -0.8400,  0.2250], 
	[-1.5000,  0.0000,  0.2250], 
	[-0.8400, -1.5000,  0.1500], 
	[-1.5000, -0.8400,  0.1500], 
	[-1.5000,  0.0000,  0.1500], 
	[-2.0000,  1.1200,  0.4500], 
	[-1.1200,  2.0000,  0.4500], 
	[ 0.0000,  2.0000,  0.4500], 
	[-1.5000,  0.8400,  0.2250], 
	[-0.8400,  1.5000,  0.2250], 
	[ 0.0000,  1.5000,  0.2250], 
	[-1.5000,  0.8400,  0.1500], 
	[-0.8400,  1.5000,  0.1500], 
	[ 0.0000,  1.5000,  0.1500], 
	[ 1.1200,  2.0000,  0.4500], 
	[ 2.0000,  1.1200,  0.4500], 
	[ 0.8400,  1.5000,  0.2250], 
	[ 1.5000,  0.8400,  0.2250], 
	[ 0.8400,  1.5000,  0.1500], 
	[ 1.5000,  0.8400,  0.1500], 
	[-1.6000,  0.0000,  2.0250], 
	[-1.6000, -0.3000,  2.0250], 
	[-1.5000, -0.3000,  2.2500], 
	[-1.5000,  0.0000,  2.2500], 
	[-2.3000,  0.0000,  2.0250], 
	[-2.3000, -0.3000,  2.0250], 
	[-2.5000, -0.3000,  2.2500], 
	[-2.5000,  0.0000,  2.2500], 
	[-2.7000,  0.0000,  2.0250], 
	[-2.7000, -0.3000,  2.0250], 
	[-3.0000, -0.3000,  2.2500], 
	[-3.0000,  0.0000,  2.2500], 
	[-2.7000,  0.0000,  1.8000], 
	[-2.7000, -0.3000,  1.8000], 
	[-3.0000, -0.3000,  1.8000], 
	[-3.0000,  0.0000,  1.8000], 
	[-1.5000,  0.3000,  2.2500], 
	[-1.6000,  0.3000,  2.0250], 
	[-2.5000,  0.3000,  2.2500], 
	[-2.3000,  0.3000,  2.0250], 
	[-3.0000,  0.3000,  2.2500], 
	[-2.7000,  0.3000,  2.0250], 
	[-3.0000,  0.3000,  1.8000], 
	[-2.7000,  0.3000,  1.8000], 
	[-2.7000,  0.0000,  1.5750], 
	[-2.7000, -0.3000,  1.5750], 
	[-3.0000, -0.3000,  1.3500], 
	[-3.0000,  0.0000,  1.3500], 
	[-2.5000,  0.0000,  1.1250], 
	[-2.5000, -0.3000,  1.1250], 
	[-2.6500, -0.3000,  0.9375], 
	[-2.6500,  0.0000,  0.9375], 
	[-2.0000, -0.3000,  0.9000], 
	[-1.9000, -0.3000,  0.6000], 
	[-1.9000,  0.0000,  0.6000], 
	[-3.0000,  0.3000,  1.3500], 
	[-2.7000,  0.3000,  1.5750], 
	[-2.6500,  0.3000,  0.9375], 
	[-2.5000,  0.3000,  1.1250], 
	[-1.9000,  0.3000,  0.6000], 
	[-2.0000,  0.3000,  0.9000], 
	[ 1.7000,  0.0000,  1.4250], 
	[ 1.7000, -0.6600,  1.4250], 
	[ 1.7000, -0.6600,  0.6000], 
	[ 1.7000,  0.0000,  0.6000], 
	[ 2.6000,  0.0000,  1.4250], 
	[ 2.6000, -0.6600,  1.4250], 
	[ 3.1000, -0.6600,  0.8250], 
	[ 3.1000,  0.0000,  0.8250], 
	[ 2.3000,  0.0000,  2.1000], 
	[ 2.3000, -0.2500,  2.1000], 
	[ 2.4000, -0.2500,  2.0250], 
	[ 2.4000,  0.0000,  2.0250], 
	[ 2.7000,  0.0000,  2.4000], 
	[ 2.7000, -0.2500,  2.4000], 
	[ 3.3000, -0.2500,  2.4000], 
	[ 3.3000,  0.0000,  2.4000], 
	[ 1.7000,  0.6600,  0.6000], 
	[ 1.7000,  0.6600,  1.4250], 
	[ 3.1000,  0.6600,  0.8250], 
	[ 2.6000,  0.6600,  1.4250], 
	[ 2.4000,  0.2500,  2.0250], 
	[ 2.3000,  0.2500,  2.1000], 
	[ 3.3000,  0.2500,  2.4000], 
	[ 2.7000,  0.2500,  2.4000], 
	[ 2.8000,  0.0000,  2.4750], 
	[ 2.8000, -0.2500,  2.4750], 
	[ 3.5250, -0.2500,  2.4938], 
	[ 3.5250,  0.0000,  2.4938], 
	[ 2.9000,  0.0000,  2.4750], 
	[ 2.9000, -0.1500,  2.4750], 
	[ 3.4500, -0.1500,  2.5125], 
	[ 3.4500,  0.0000,  2.5125], 
	[ 2.8000,  0.0000,  2.4000], 
	[ 2.8000, -0.1500,  2.4000], 
	[ 3.2000, -0.1500,  2.4000], 
	[ 3.2000,  0.0000,  2.4000], 
	[ 3.5250,  0.2500,  2.4938], 
	[ 2.8000,  0.2500,  2.4750], 
	[ 3.4500,  0.1500,  2.5125], 
	[ 2.9000,  0.1500,  2.4750], 
	[ 3.2000,  0.1500,  2.4000], 
	[ 2.8000,  0.1500,  2.4000], 
	[ 0.0000,  0.0000,  3.1500], 
	[ 0.0000, -0.0020,  3.1500], 
	[ 0.0020,  0.0000,  3.1500], 
	[ 0.8000,  0.0000,  3.1500], 
	[ 0.8000, -0.4500,  3.1500], 
	[ 0.4500, -0.8000,  3.1500], 
	[ 0.0000, -0.8000,  3.1500], 
	[ 0.0000,  0.0000,  2.8500], 
	[ 0.2000,  0.0000,  2.7000], 
	[ 0.2000, -0.1120,  2.7000], 
	[ 0.1120, -0.2000,  2.7000], 
	[ 0.0000, -0.2000,  2.7000], 
	[-0.0020,  0.0000,  3.1500], 
	[-0.4500, -0.8000,  3.1500], 
	[-0.8000, -0.4500,  3.1500], 
	[-0.8000,  0.0000,  3.1500], 
	[-0.1120, -0.2000,  2.7000], 
	[-0.2000, -0.1120,  2.7000], 
	[-0.2000,  0.0000,  2.7000], 
	[ 0.0000,  0.0020,  3.1500], 
	[-0.8000,  0.4500,  3.1500], 
	[-0.4500,  0.8000,  3.1500], 
	[ 0.0000,  0.8000,  3.1500], 
	[-0.2000,  0.1120,  2.7000], 
	[-0.1120,  0.2000,  2.7000], 
	[ 0.0000,  0.2000,  2.7000], 
	[ 0.4500,  0.8000,  3.1500], 
	[ 0.8000,  0.4500,  3.1500], 
	[ 0.1120,  0.2000,  2.7000], 
	[ 0.2000,  0.1120,  2.7000], 
	[ 0.4000,  0.0000,  2.5500], 
	[ 0.4000, -0.2240,  2.5500], 
	[ 0.2240, -0.4000,  2.5500], 
	[ 0.0000, -0.4000,  2.5500], 
	[ 1.3000,  0.0000,  2.5500], 
	[ 1.3000, -0.7280,  2.5500], 
	[ 0.7280, -1.3000,  2.5500], 
	[ 0.0000, -1.3000,  2.5500], 
	[ 1.3000,  0.0000,  2.4000], 
	[ 1.3000, -0.7280,  2.4000], 
	[ 0.7280, -1.3000,  2.4000], 
	[ 0.0000, -1.3000,  2.4000], 
	[-0.2240, -0.4000,  2.5500], 
	[-0.4000, -0.2240,  2.5500], 
	[-0.4000,  0.0000,  2.5500], 
	[-0.7280, -1.3000,  2.5500], 
	[-1.3000, -0.7280,  2.5500], 
	[-1.3000,  0.0000,  2.5500], 
	[-0.7280, -1.3000,  2.4000], 
	[-1.3000, -0.7280,  2.4000], 
	[-1.3000,  0.0000,  2.4000], 
	[-0.4000,  0.2240,  2.5500], 
	[-0.2240,  0.4000,  2.5500], 
	[ 0.0000,  0.4000,  2.5500], 
	[-1.3000,  0.7280,  2.5500], 
	[-0.7280,  1.3000,  2.5500], 
	[ 0.0000,  1.3000,  2.5500], 
	[-1.3000,  0.7280,  2.4000], 
	[-0.7280,  1.3000,  2.4000], 
	[ 0.0000,  1.3000,  2.4000], 
	[ 0.2240,  0.4000,  2.5500], 
	[ 0.4000,  0.2240,  2.5500], 
	[ 0.7280,  1.3000,  2.5500], 
	[ 1.3000,  0.7280,  2.5500], 
	[ 0.7280,  1.3000,  2.4000], 
	[ 1.3000,  0.7280,  2.4000], 
	[ 0.0000,  0.0000,  0.0000], 
	[ 1.5000,  0.0000,  0.1500], 
	[ 1.5000,  0.8400,  0.1500], 
	[ 0.8400,  1.5000,  0.1500], 
	[ 0.0000,  1.5000,  0.1500], 
	[ 1.5000,  0.0000,  0.0750], 
	[ 1.5000,  0.8400,  0.0750], 
	[ 0.8400,  1.5000,  0.0750], 
	[ 0.0000,  1.5000,  0.0750], 
	[ 1.4250,  0.0000,  0.0000], 
	[ 1.4250,  0.7980,  0.0000], 
	[ 0.7980,  1.4250,  0.0000], 
	[ 0.0000,  1.4250,  0.0000], 
	[-0.8400,  1.5000,  0.1500], 
	[-1.5000,  0.8400,  0.1500], 
	[-1.5000,  0.0000,  0.1500], 
	[-0.8400,  1.5000,  0.0750], 
	[-1.5000,  0.8400,  0.0750], 
	[-1.5000,  0.0000,  0.0750], 
	[-0.7980,  1.4250,  0.0000], 
	[-1.4250,  0.7980,  0.0000], 
	[-1.4250,  0.0000,  0.0000], 
	[-1.5000, -0.8400,  0.1500], 
	[-0.8400, -1.5000,  0.1500], 
	[ 0.0000, -1.5000,  0.1500], 
	[-1.5000, -0.8400,  0.0750], 
	[-0.8400, -1.5000,  0.0750], 
	[ 0.0000, -1.5000,  0.0750], 
	[-1.4250, -0.7980,  0.0000], 
	[-0.7980, -1.4250,  0.0000], 
	[ 0.0000, -1.4250,  0.0000], 
	[ 0.8400, -1.5000,  0.1500], 
	[ 1.5000, -0.8400,  0.1500], 
	[ 0.8400, -1.5000,  0.0750], 
	[ 1.5000, -0.8400,  0.0750], 
	[ 0.7980, -1.4250,  0.0000], 
	[ 1.4250, -0.7980,  0.0000] 
]; 
 