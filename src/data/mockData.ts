export const mockKPIData = {
  totalPatients: 1250000,
  totalHospitals: 4580,
  totalDoctors: 125000,
  averageOccupancy: 78,
};

export const mockDiseaseData = [
  { name: "Hipertensão", value: 25000, code: "I10" },
  { name: "Diabetes", value: 18500, code: "E11" },
  { name: "Pneumonia", value: 15200, code: "J18" },
  { name: "Infarto", value: 12800, code: "I21" },
  { name: "COVID-19", value: 8900, code: "U07" },
];

export const mockSpecialtyData = [
  { specialty: "Cardiologia", doctors: 1200, patients: 25000 },
  { specialty: "Pneumologia", doctors: 800, patients: 18000 },
  { specialty: "Endocrinologia", doctors: 650, patients: 15500 },
  { specialty: "Neurologia", doctors: 900, patients: 12000 },
  { specialty: "Ortopedia", doctors: 1100, patients: 22000 },
];

export const mockHospitalData = [
  { 
    id: 1, 
    name: "Hospital das Clínicas", 
    city: "São Paulo", 
    state: "SP", 
    doctors: 450, 
    capacity: 800, 
    occupancy: 85 
  },
  { 
    id: 2, 
    name: "Hospital Albert Einstein", 
    city: "São Paulo", 
    state: "SP", 
    doctors: 320, 
    capacity: 600, 
    occupancy: 72 
  },
  { 
    id: 3, 
    name: "Hospital Sírio-Libanês", 
    city: "São Paulo", 
    state: "SP", 
    doctors: 280, 
    capacity: 500, 
    occupancy: 68 
  },
  { 
    id: 4, 
    name: "Hospital Copa D'Or", 
    city: "Rio de Janeiro", 
    state: "RJ", 
    doctors: 200, 
    capacity: 400, 
    occupancy: 78 
  },
];

export const mockAgeGenderData = [
  { ageGroup: "0-18", male: 12000, female: 11500 },
  { ageGroup: "19-35", male: 18500, female: 19200 },
  { ageGroup: "36-50", male: 22000, female: 21800 },
  { ageGroup: "51-65", male: 28500, female: 26000 },
  { ageGroup: "65+", male: 35000, female: 38000 },
];

export const mockMonthlyData = [
  { month: "Jan", patients: 95000, revenue: 12500000 },
  { month: "Fev", patients: 98000, revenue: 13200000 },
  { month: "Mar", patients: 102000, revenue: 14100000 },
  { month: "Abr", patients: 106000, revenue: 14800000 },
  { month: "Mai", patients: 108000, revenue: 15200000 },
  { month: "Jun", patients: 112000, revenue: 15800000 },
];