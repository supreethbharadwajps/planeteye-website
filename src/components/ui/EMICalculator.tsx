'use client';
import { useState } from 'react';

export default function EMICalculator() {
  const [loan, setLoan] = useState(1000000);
  const [tenure, setTenure] = useState(15);
  const [rate, setRate] = useState(8.5);

  const monthlyRate = rate / 12 / 100;
  const months = tenure * 12;
  const emi = (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);

  return (
    <div className="bg-white p-6 rounded shadow-md max-w-md mx-auto">
      <h3 className="font-serif text-xl mb-4">EMI Calculator</h3>
      <div className="space-y-3">
        <label className="block">
          Loan Amount (₹) <input type="number" value={loan} onChange={(e) => setLoan(+e.target.value)} className="border p-1 w-full rounded mt-1" />
        </label>
        <label className="block">
          Tenure (years) <input type="number" value={tenure} onChange={(e) => setTenure(+e.target.value)} className="border p-1 w-full rounded mt-1" />
        </label>
        <label className="block">
          Interest Rate (%) <input type="number" step="0.1" value={rate} onChange={(e) => setRate(+e.target.value)} className="border p-1 w-full rounded mt-1" />
        </label>
      </div>
      <p className="mt-4 text-2xl font-bold text-forest">Monthly EMI: ₹ {isNaN(emi) ? '—' : emi.toFixed(0)}</p>
    </div>
  );
}