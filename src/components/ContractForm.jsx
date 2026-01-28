import React from 'react';

const Input = ({ label, name, register, className = '', type = 'text', number, ...props }) => (
  <div className={`flex flex-col ${className}`}>
    <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-2">
      {number && (
        <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full shrink-0">
          {number}
        </span>
      )}
      {label}
    </label>
    <input 
      type={type} 
      {...register(name)} 
      className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" 
      {...props}
    />
  </div>
);

export const ContractForm = ({ register, errors }) => {
  return (
    <div className="space-y-6 p-6 bg-gray-50 rounded-lg shadow-inner">
      <h2 className="text-2xl font-bold mb-4">กรอกข้อมูลสัญญา</h2>
      
      {/* Header */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ส่วนหัวสัญญา</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="1" label="เลขที่" name="docNo" register={register} />
          <Input number="2" label="แบบสัญญาเลขที่" name="agreementNo" register={register} />
          <Input number="3" label="ทำที่" name="location" register={register} />
          <Input number="4" label="วันที่" name="date" type="date" register={register} />
        </div>
      </section>

      {/* Recipient */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ข้อมูลผู้รับบริการ (ผู้ขาย)</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="5" label="ชื่อ-นามสกุล" name="recipientName" register={register} className="md:col-span-2" />
          <Input number="6" label="อายุ" name="recipientAge" type="number" register={register} />
          <Input number="7" label="เลขบัตรประชาชน/ทะเบียนนิติบุคคล" name="recipientId" register={register} />
          <Input number="8" label="บ้านเลขที่" name="recipientAddress" register={register} />
          <Input number="9" label="หมู่ที่" name="recipientMoo" register={register} />
          <Input number="10" label="ซอย" name="recipientSoi" register={register} />
          <Input number="11" label="ถนน" name="recipientRoad" register={register} />
          <Input number="12" label="ตำบล/แขวง" name="recipientDistrict" register={register} />
          <Input number="13" label="อำเภอ/เขต" name="recipientAmphoe" register={register} />
          <Input number="14" label="จังหวัด" name="recipientProvince" register={register} />
          <Input number="15" label="รหัสไปรษณีย์" name="recipientZipcode" register={register} />
          <Input number="16" label="เบอร์โทรศัพท์" name="recipientPhone" register={register} />
          <Input number="17" label="อีเมล" name="recipientEmail" register={register} />
        </div>
      </section>

      {/* Provider */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ข้อมูลผู้ให้บริการ</h3>
        <Input number="18" label="ผู้รับมอบอำนาจ" name="providerAuthPerson" register={register} />
      </section>

      {/* Vehicle */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ข้อมูลรถยนต์</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="19" label="ประเภท" name="carType" register={register} />
          <Input number="20" label="ยี่ห้อ" name="carBrand" register={register} />
          <Input number="21" label="รุ่น" name="carModel" register={register} />
          <Input number="22" label="ปี" name="carYear" register={register} />
          <Input number="23" label="หมายเลขตัวรถ" name="carChassisNo" register={register} />
          <Input number="24" label="หมายเลขเครื่องยนต์" name="carEngineNo" register={register} />
          <Input number="25" label="หมายเลขทะเบียน" name="carPlateNo" register={register} />
        </div>
      </section>

      {/* Price & Payment */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ราคาและการชำระเงิน</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="26" label="ราคาขาย (บาท)" name="sellingPrice" register={register} />
          <Input number="27" label="ราคาขาย (ตัวอักษร)" name="sellingPriceText" register={register} />
          <Input number="28" label="ธนาคาร" name="bankName" register={register} />
          <Input number="29" label="เลขที่บัญชี" name="bankAccountNo" register={register} />
          <Input number="30" label="ชื่อบัญชี" name="bankAccountName" register={register} />
        </div>
      </section>

       {/* Debt & Deductions */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ภาระหนี้สิน / ค่าใช้จ่าย</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="31" label="ยอดหนี้ค้างชำระ (บาท)" name="debtAmount" register={register} />
          <Input number="32" label="ยอดหนี้ (ตัวอักษร)" name="debtAmountText" register={register} />
          <Input number="33" label="ยอดคงเหลือส่วนต่าง (บาท)" name="remainingBalance" register={register} />
          <Input number="34" label="ยอดคงเหลือ (ตัวอักษร)" name="remainingBalanceText" register={register} />
          <Input number="35" label="ชำระปิดบัญชีภายใน (วัน)" name="debtPayDate" register={register} />
          <Input number="36" label="ค่าบริการปิดบัญชี (บาท)" name="serviceFee" register={register} />
           <Input number="37" label="ค่าบริการ (ตัวอักษร)" name="serviceFeeText" register={register} />
        </div>
      </section>
      
       {/* Deposit */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">มัดจำและการส่งมอบ</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input number="38" label="เงินมัดจำ (บาท)" name="depositAmount" register={register} />
          <Input number="39" label="เงินมัดจำ (ตัวอักษร)" name="depositAmountText" register={register} />
          <Input number="40" label="วันที่ส่งมอบเอกสาร" name="documentDeliveryDate" type="date" register={register} />
          <Input number="41" label="หักเงินประกัน (บาท)" name="warrantyDeduction" register={register} />
        </div>
      </section>

      {/* Commission */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ค่าบำเหน็จ (Commission)</h3>
        <div className="flex gap-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full shrink-0">42</span>
            <input type="radio" value="3%" {...register('commissionType')} />
            3% ของราคาที่ขายได้
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
             <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full shrink-0">43</span>
            <input type="radio" value="excess" {...register('commissionType')} />
            เงินส่วนต่าง
          </label>
        </div>
      </section>

      {/* Others */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">อื่นๆ</h3>
        <div className="space-y-2">
           <div className="flex items-center gap-2">
             <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full shrink-0">44</span>
             <input type="checkbox" {...register('includePlate')} />
             <span>ป้ายทะเบียนรถยนต์</span>
             <input {...register('includePlateNo')} placeholder="เลขทะเบียน" className="border rounded px-2 py-1 text-sm flex-1" />
           </div>
           <div className="flex items-center gap-2">
             <span className="flex items-center justify-center w-5 h-5 bg-blue-600 text-white text-xs rounded-full shrink-0">45</span>
             <input type="checkbox" {...register('includeInsurance')} />
             <span>ประกันภัยรถยนต์</span>
             <input {...register('includeInsuranceNo')} placeholder="เลขกรมธรรม์" className="border rounded px-2 py-1 text-sm flex-1" />
           </div>
        </div>
      </section>

      {/* Signatures */}
      <section className="bg-white p-4 rounded shadow-sm">
        <h3 className="font-semibold mb-2 border-b pb-1">ลงนาม</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <Input number="46" label="พยาน 1" name="witness1" register={register} />
           <Input number="47" label="พยาน 2" name="witness2" register={register} />
           <Input number="48" label="ที่ปรึกษาการขาย" name="salesPerson" register={register} />
           <Input number="49" label="รหัสพนักงาน" name="salesId" register={register} />
        </div>
      </section>

    </div>
  );
};
