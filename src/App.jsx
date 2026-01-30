import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { ContractForm } from './components/ContractForm';
import { ContractPreview } from './components/ContractPreview';
import { Printer } from 'lucide-react';

function App() {
  const { register, setValue, watch } = useForm({
    defaultValues: {
      docNo: '',
      agreementNo: '',
      location: 'สำนักงานใหญ่',
      date: new Date().toISOString().split('T')[0],
      commissionType: '3%',
      recipientName: '',
      recipientAge: '',
      recipientId: '',
      recipientAddress: '',
      recipientMoo: '',
      recipientSoi: '',
      recipientRoad: '',
      recipientDistrict: '',
      recipientAmphoe: '',
      recipientProvince: '',
      recipientZipcode: '',
      recipientPhone: '',
      recipientEmail: '',
      providerAuthPerson: '',
      carType: '',
      carBrand: '',
      carModel: '',
      carYear: '',
      carChassisNo: '',
      carEngineNo: '',
      carPlateNo: '',
      sellingPrice: '',
      sellingPriceText: '',
      bankName: '',
      bankAccountNo: '',
      bankAccountName: '',
      debtAmount: '',
      debtAmountText: '',
      remainingBalance: '',
      remainingBalanceText: '',
      debtPayDate: '',
      serviceFee: '',
      serviceFeeText: '',
      depositAmount: '',
      depositAmountText: '',
      documentDeliveryDate: '',
      warrantyDeduction: '',
      includePlate: false,
      includePlateNo: '',
      includeInsurance: false,
      includeInsuranceNo: '',
      witness1: '',
      witness2: '',
      salesPerson: '',
      salesId: ''
    }
  });

  // eslint-disable-next-line react-hooks/incompatible-library
  const data = watch();
  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="h-screen overflow-hidden bg-gray-100 flex flex-col font-sans">
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center no-print z-10">
        <div className="flex items-center gap-2">
           <h1 className="text-xl font-bold text-gray-800">JustCar Document Generator</h1>
        </div>
        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition shadow-sm"
        >
          <Printer size={20} />
          <span>Print / Save PDF</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden min-h-0">
        {/* Left Side: Form */}
        <div className="lg:w-1/3 overflow-y-auto overscroll-contain h-full min-h-0 border-r border-gray-200 bg-gray-50 no-print pb-20">
          <ContractForm register={register} setValue={setValue} />
        </div>

        {/* Right Side: Preview */}
        <div className="lg:w-2/3 bg-gray-200 overflow-y-auto overscroll-contain h-full min-h-0 p-4 lg:p-8 print:w-full print:h-auto print:p-0 print:bg-white print:overflow-visible flex justify-center">
          <div className="bg-white shadow-xl print:shadow-none print:w-full">
            <ContractPreview ref={componentRef} data={data} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
