import React from 'react';

const Field = ({ value, width = '100px', center = true, number, className = '' }) => (
   <span className={`relative inline-block align-bottom ${className}`}>
      {number && (
         <span className="absolute -top-3 -left-1 w-4 h-4 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full no-print z-10 font-sans font-bold">
            {number}
         </span>
      )}
      <span
         className={`inline-block border-b border-black px-1 mr-1 ${center ? 'text-center' : 'text-left'} whitespace-nowrap overflow-visible align-bottom`}
         style={{ minWidth: width, display: 'inline-block', lineHeight: '1.2em' }}
      >
         {value || '\u00A0'}
      </span>
   </span>
);

const Checkbox = ({ checked, number }) => (
   <span className="relative inline-flex items-center justify-center w-4 h-4 border border-black mr-2 align-text-bottom top-[2px]">
      {number && (
         <span className="absolute -top-3 -left-3 w-4 h-4 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full no-print z-10 font-sans font-bold">
            {number}
         </span>
      )}
      {checked && <span className="text-xs font-bold">✓</span>}
   </span>
);

const FooterBars = () => (
   <div className="absolute left-0 right-0 bottom-0 h-8 pointer-events-none overflow-hidden">
      {/* Gray Bar (Left) - Diagonal \ */}
      <div
         className="absolute top-0 bottom-0 left-0 bg-[#595959]"
         style={{
            width: 'calc(60% + 20px)',
            clipPath: 'polygon(0 0, calc(100% - 39px) 0, calc(100% - 7px) 100%, 0 100%)'
         }}
      />

      {/* Blue Bar (Right) - Diagonal \ */}
      <div
         className="absolute top-0 bottom-0 right-0 bg-[#0000ff]"
         style={{
            width: 'calc(40% + 20px)',
            clipPath: 'polygon(10px 0, 100% 0, 100% 100%, 42px 100%)'
         }}
      />
   </div>
);

const Header = () => (
   <div className="flex flex-col items-center justify-center mb-4">
      <img src="/justcar_logo.png" alt="JUSTCAR" className="h-[78px] mb-2 object-contain" />
      <div className="border-t border-black w-[80%] mb-2"></div>
      <h2 className="text-[15px] font-bold mt-1">สัญญาให้บริการ/สัญญาตัวแทนขาย</h2>
   </div>
);

// Configuration for consistent spacing
const GAP_CLASS = 'gap-2'; // Approx 8px or 2 character spaces
const WRAPPER_CLASS = `inline-flex items-baseline ${GAP_CLASS} whitespace-nowrap`;

export const ContractPreview = React.forwardRef(({ data }, ref) => {
   return (
      <div ref={ref} className="font-sans text-black">
         {/* Page 1 */}
         <div className="bg-white px-[15mm] py-[4.7mm] w-[210mm] h-[297mm] mx-auto text-[12.5px] leading-[1.35] relative shadow-xl mb-4 print:mb-0 print:shadow-none print:w-[210mm] print:h-[297mm] print:break-after-page page-break-after overflow-hidden box-border">

            {/* Header with Logo */}
            <Header />

            {/* Top Details */}
            <div className="flex justify-between mb-3 items-end">
               <div className="w-1/2">
                  <div className="flex items-baseline">
                     <span className="font-bold">เลขที่</span>
                     <Field value={data.docNo} width="150px" number="1" />
                  </div>
                  <div className="flex items-baseline">
                     <span className="font-bold">แบบสัญญาเลขที่</span>
                     <Field value={data.agreementNo} width="150px" number="2" />
                  </div>
               </div>
               <div className="w-1/2 flex flex-col items-end">
                  <div className="flex items-baseline justify-end w-full">
                     <span className="font-bold text-right">ทำที่</span>
                     <Field value={data.location} width="200px" number="3" />
                  </div>
                  <div className="flex items-baseline justify-end w-full">
                     <span className="font-bold text-right">วันที่</span>
                     <Field value={data.date} width="200px" number="4" />
                  </div>
               </div>
            </div>

            {/* Body Paragraph 1 */}
            <div className="leading-[1.5] text-justify">
               <div className="flex flex-wrap items-baseline gap-2">
                  <span className="pl-8">สัญญาฉบับนี้ทำขึ้นระหว่าง</span>
                  <Field value={data.recipientName} width="250px" number="5" />
                  <span>อายุ</span>
                  <Field value={data.recipientAge} width="50px" number="6" />
                  <span>ปี</span>
                  <span>เลขบัตรประจำตัวประชาชน/ทะเบียนนิติบุคคลเลขที่</span>
                  <Field value={data.recipientId} width="200px" number="7" />
                  <span>อยู่บ้านเลขที่</span>
                  <Field value={data.recipientAddress} width="119px" number="8" />
               </div>
               <div className="flex flex-wrap items-baseline gap-1 mt-1">
                  <span>ตำบล/แขวง</span>
                  <Field value={data.recipientDistrict} width="100px" number="12" />
                  <span>อำเภอ/เขต</span>
                  <Field value={data.recipientAmphoe} width="100px" number="13" />
                  <span>จังหวัด</span>
                  <Field value={data.recipientProvince} width="130px" number="14" />
                  <span>รหัสไปรษณีย์</span>
                  <Field value={data.recipientZipcode} width="80px" number="14" />
               </div>
               <div className="flex flex-wrap items-baseline gap-1 mt-1">
                  <span>เบอร์โทร</span>
                  <Field value={data.recipientPhone} width="150px" number="16" />
                  <span>ซึ่งต่อไปในสัญญาฉบับนี้จะเรียกว่า “ผู้รับบริการ” ฝ่ายหนึ่งกับ</span>
               </div>
            </div>

            {/* Body Paragraph 2 */}
            <div className="leading-[1.5] text-justify mt-3 indent-8">
               <span className="inline-flex items-baseline gap-0 whitespace-nowrap">
                  บริษัท จัสท์ คาร์ จำกัด เลขทะเบียนนิติบุคคล 0105561150013 โดย<Field className="-ml-7" value={data.providerAuthPerson} width="180px" number="18" />
               </span>ผู้รับมอบอำนาจ ซึ่งต่อไปในสัญญาฉบับนี้จะเรียกว่า “ผู้ให้บริการ” ฝ่ายหนึ่ง
            </div>

            <div className="font-bold mt-3 mb-2 underline decoration-1 underline-offset-2">คู่สัญญาทั้งสองฝ่ายตกลงทำสัญญาฉบับนี้ โดยมีข้อตกลงและเงื่อนไขดังนี้</div>

            {/* Clause 1 */}
            <div className="mb-3">
               <span className="font-bold pl-8 mr-2">ข้อ1.</span><span>คำนิยาม</span>
               <div className="pl-4 mt-1">
                  <table className="w-full text-justify">
                     <tbody>
                        <tr className="align-top">
                           <td className="w-28 font-bold whitespace-nowrap pr-2 py-0.5">“ผู้รับบริการ”</td>
                           <td className="py-0.5">หมายถึง ผู้รับบริการที่ประสงค์จะขายรถยนต์ โดยที่ผู้ได้รับสิทธิ์มาจากบุคคลอื่น มาขายแทน หรือผู้ขายเป็นเจ้าของกรรมสิทธิ์เอง</td>
                        </tr>
                        <tr className="align-top">
                           <td className="font-bold whitespace-nowrap pr-2 py-0.5">“ผู้จะซื้อ”</td>
                           <td className="py-0.5">หมายถึง ผู้รับบริการจัดหารถยนต์ตามความต้องการ ซึ่งได้ใช้บริการผู้ให้บริการเป็นผู้จัดหาให้</td>
                        </tr>
                        <tr className="align-top">
                           <td className="font-bold whitespace-nowrap pr-2 py-0.5">“ผู้ให้บริการ”</td>
                           <td className="py-0.5">หมายถึง บริษัท จัสท์ คาร์ จำกัด เป็นผู้ให้บริการ รับเป็นตัวแทนของผู้ซื้อและผู้ขาย เป็นการให้บริการเพื่ออำนวยความสะดวกให้แก่ผู้ประสงค์ที่จะขายรถยนต์ และ ผู้ที่ประสงค์จะซื้อรถยนต์</td>
                        </tr>
                        <tr className="align-top">
                           <td className="font-bold whitespace-nowrap pr-2 py-0.5">“ราคาซื้อขาย”</td>
                           <td className="py-0.5">หมายถึง ราคาซื้อขาย บริษัท จัสท์ คาร์ จำกัด “จัสท์ คาร์” มิได้เป็นผู้กำหนด โดยราคาซื้อขายเป็นการ ยึดถือตามราคาท้องตลาด และราคาที่ผู้จะซื้อทรัพย์สินให้ราคา ซึ่งราคาดังกล่าวเป็นการประมาณการโดยยังไม่ได้ตรวจสอบสภาพทรัพย์สิน ซึ่งสภาพรถยนต์อาจมีผลต่อราคา ไม่ถือเป็นการรับรองราคา จนกว่าผู้ขายและผู้ซื้อตกลงยอมรับราคา</td>
                        </tr>
                        <tr className="align-top">
                           <td className="font-bold whitespace-nowrap pr-2 py-0.5">“ค่าบริการ”</td>
                           <td className="py-0.5">หมายถึง ค่าบำเหน็จ ค่าตอบแทนจากการชี้ช่อง หรือ ค่าส่วนต่างของราคาจากการขายให้บริการ โดยอิงจากความพึงพอใจในราคาของผู้ขาย ซึ่งผู้ให้บริการอาจกำหนดราคาแตกต่างจากผู้รับบริการได้ โดยให้ถือว่าเงินส่วนต่างจากการขายเป็นผลงานโดยตรงของผู้ให้บริการ</td>
                        </tr>
                        <tr className="align-top">
                           <td className="font-bold text-[#0047BA] whitespace-nowrap pr-2 py-0.5">“เอกสารที่ใช้<br />เพื่อการ<br />จดทะเบียน”</td>
                           <td className="text-[#0047BA] py-0.5">หมายถึง เอกสารสำหรับการจดทะเบียนต่อกรมขนส่งทางบกสำนักงานใหญ่ หรือ สาขา อันประกอบด้วย หนังสือมอบอำนาจ สำเนาบัตรประชาชนเจ้าของรถยนต์ เล่มคู่มือจดทะเบียนรถยนต์ พรบ. และเอกสารเกี่ยวกับการป้ายทะเบียน เอกสารเกี่ยวประกันภัยรถยนต์</td>
                        </tr>
                     </tbody>
                  </table>
               </div>
            </div>

            {/* Clause 2 */}
            <div className="leading-[1.5] mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ2.</span>ผู้รับบริการตกลงมีความประสงค์ที่จะขายรถยนต์ซึ่งตนเป็นเจ้าของกรรมสิทธิ์ และตกลงใช้บริการผู้ให้บริการในการชี้ช่องหรือจัดหาผู้จะซื้อรถยนต์ซึ่งมีรายละเอียดดังต่อไปนี้ <span className="inline-flex items-baseline gap-1 whitespace-nowrap -ml-0">รถยนต์ประเภท<Field value={data.carType} width="80px" number="19" /></span> <span className="inline-flex items-baseline gap-1 whitespace-nowrap -ml-2"> ยี่ห้อ<Field value={data.carBrand} width="110px" number="20" /></span><span className="inline-flex items-baseline gap-2 whitespace-nowrap -mr-">รุ่น<Field value={data.carModel} width="100px" number="21" /></span> <span className="inline-flex items-baseline gap-2 whitespace-nowrap">ปี<Field value={data.carYear} width="100px" number="22" /></span><span className="inline-flex items-baseline gap-2 whitespace-nowrap">หมายเลขตัวรถ<Field value={data.carChassisNo} width="180px" number="23" /></span><span className="inline-flex items-baseline gap-1 whitespace-nowrap">หมายเลขเครื่องยนต์<Field value={data.carEngineNo} width="180px" number="24" /></span><span className="inline-flex items-baseline gap-1 whitespace-nowrap">หมายเลขทะเบียนรถ<Field value={data.carPlateNo} width="100px" number="25" /></span>รายละเอียดของรถปรากฏตามสมุดคู่มือทะเบียนรถแนบท้ายสัญญา<span className="inline-block w-[3px]" />และถือเป็นส่วนหนึ่งของสัญญานี้ ซึ่งต่อไปจะเรียกว่า "ทรัพย์สิน"
            </div>

            {/* Clause 3 */}
            <div className="leading-[1.5] mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ3.</span>ผู้รับบริการตกลงจะขายทรัพย์สินดังกล่าว<span className="inline-flex items-baseline gap-1 whitespace-nowrap">เป็นเงินจำนวน<Field value={data.sellingPrice} width="95px" number="26" /></span>บาท<span className="inline-block w-[3px]" /><span className="inline-flex items-baseline gap-[2px] whitespace-nowrap">(<Field value={data.sellingPriceText} width="180px" number="27" />)</span>
               <span> โดยผู้รับบริการตกลงให้ผู้ให้บริการรับเงินจาก ผู้ซื้อแทนผู้รับบริการ</span> และผู้ให้บริการต้องส่งมอบเงินซึ่งได้จากการขายทรัพย์สินดังกล่าวให้กับผู้รับบริการด้วยวิธีการส่งมอบด้วยเงินสดหรือโอนเงินเข้าบัญชี<span className="inline-flex items-baseline gap-1 whitespace-nowrap">ธนาคาร<Field value={data.bankName} width="135px" number="28" /></span> <span className="inline-flex items-baseline gap-1 whitespace-nowrap">เลขที่บัญชี<Field value={data.bankAccountNo} width="130px" number="29" /></span> <span className="inline-flex items-baseline gap-1 whitespace-nowrap">ชื่อบัญชี<Field value={data.bankAccountName} width="150px" number="30" /></span> ซึ่งต่อไปในสัญญาฉบับนี้เรียกว่า “ราคาซื้อขาย”
            </div>

            {/* Clause 4 */}
            <div className="leading-[1.5] mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ4.</span>ในกรณีที่ทรัพย์สินดังกล่าว<span className="inline-block w-[3px]" />มีการผ่อนชำระกับสถาบันการเงินหรือบุคคลอื่น<span className="inline-block w-[3px]" />มีการนำทรัพย์สินดังกล่าวไปเป็นหลักค้ำประกัน จำนำ หรือมีภาระผูกพันอื่นใดทางกฎหมาย ให้นำราคาซื้อขายตามข้อ 3 ชำระยอดหนี้ค้างชำระ เพื่อมีผลให้ทรัพย์สินปลอดภาระผูกพันทางกฎหมาย โดยมีรายละเอียดดังนี้
               <div className="pl-8 mt-0.5 space-y-1">
                  <div className={`flex items-baseline ${GAP_CLASS}`}><span>ราคาซื้อขายทรัพย์สิน</span><Field value={data.sellingPrice} width="150px" /> <span>บาท</span> <span>(<Field value={data.sellingPriceText} width="200px" />)</span></div>
                  <div className={`flex items-baseline ${GAP_CLASS}`}><span>ยอดหนี้ค้างชำระ</span><Field value={data.debtAmount} width="150px" number="31" /> <span>บาท</span> <span>(<Field value={data.debtAmountText} width="200px" number="32" />)</span></div>
                  <div className={`flex items-baseline ${GAP_CLASS}`}><span>ยอดคงเหลือส่วนต่าง</span><Field value={data.remainingBalance} width="150px" number="33" /> <span>บาท</span> <span>(<Field value={data.remainingBalanceText} width="200px" number="34" />)</span></div>
               </div>
               <div className="mt-0.5 text-justify indent-">
                  โดยผู้ให้บริการอันเป็นการดำเนินการแทนในนามของผู้จะซื้อ<span className="inline-block w-[3px]" />ตกลงจะดำเนินการไปชำระปิดบัญชีให้แก่ผู้รับบริการ<span className="inline-block w-[3px]" />ภายใน<span className="inline-block w-[3px]" /><Field value={data.debtPayDate} width="50px" number="35" />วัน โดยมีค่าบริการจำนวน<span className="inline-block w-[4px]" /><Field value={data.serviceFee} width="100px" number="36" /> บาท (<span className="inline-block w-[4px]" /><Field value={data.serviceFeeText} width="150px" number="37" />) เพื่อให้ทรัพย์สินปลอดภาระผูกพันทางกฎหมาย
               </div>
            </div>

            {/* Page 1 Number & Footer */}
            <FooterBars />
            <div className="absolute bottom-[34px] right-8 text-xs text-black">หน้า 1/3</div>
            <div className="absolute bottom-[34px] left-0 right-0 text-[10px] text-black w-full">
               <div className="border-t border-black pt-1 w-[80%] mx-auto text-center">
                  111 อาคาร A ชั้น 5 ห้องเลขที่ 504 ถนนประดิษฐ์มนูธรรม แขวงลาดพร้าว เขตลาดพร้าว จังหวัดกรุงเทพมหานคร 10230<br />
                  111 Building A, 5th Floor Room 504 Pradit Manutham Rd, Lat Phrao Subdistrict Lat Phrao District, Bangkok 10230
               </div>
            </div>
         </div>

         {/* Page 2 */}
         <div className="bg-white px-[15mm] py-[4.7mm] w-[210mm] h-[297mm] mx-auto text-[12.5px] leading-[1.35] relative shadow-xl mb-4 print:mb-0 print:shadow-none print:w-[210mm] print:h-[297mm] print:break-after-page overflow-hidden box-border">
            <Header />
            {/* Clause 5 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;5.</span>ในกรณีที่ผู้รับบริการไม่สามารถส่งมอบทรัพย์สินให้กับผู้ให้บริการ หรือผู้จะซื้อได้ทันทีนับแต่วันทำสัญญาฉบับนี้ แต่ผู้รับบริการได้รับเงินมัดจำจากผู้จะซื้อเพื่อเป็นพยานหลักฐานว่าสัญญาซื้อขายได้เกิดขึ้นและมีผลบังคับใช้ตามกฎหมายแล้ว และเป็นหลักประกันที่จะปฏิบัติตามสัญญาซื้อขายนั้น โดยผู้ให้บริการได้ส่งมอบเงินมัดจำให้ผู้รับบริการด้วยวิธีการโอนเงินเข้าบัญชีธนาคารในข้อที่ 3 <span className={WRAPPER_CLASS}>เป็นเงินจำนวน<Field value={data.depositAmount} width="100px" number="38" /></span> <span className={WRAPPER_CLASS}>บาท (<Field value={data.depositAmountText} width="150px" number="39" />)</span> ผู้รับบริการให้คำมั่นว่าจะส่งมอบทรัพย์สินและเอกสารอื่นๆที่เกี่ยวกับทรัพย์สิน <span className="text-[#0047BA] underline">เพื่อการจดทะเบียนโอนกรรมสิทธิ์</span> ให้แก่ผู้ให้บริการเพื่อส่งมอบให้ผู้จะซื้อ ภายในวันที่<Field value={data.documentDeliveryDate} width="100px" number="40" />
               <div className="text-justify mt-1 indent-8">
                  หากผู้รับบริการไม่สามารถส่งมอบทรัพย์สินได้ทันภายในเวลาระยะเวลาที่กำหนด ไม่ว่าจะเป็นเพราะผู้รับบริการเปลี่ยนแปลง แก้ไข หรือยกเลิกวันที่ส่งมอบ โดยปราศจากหนังสือยินยอมเป็นลายลักษณ์อักษรของผู้ให้บริการ ให้ถือว่าผู้รับบริการเป็นฝ่ายผิดสัญญา และผู้รับบริการตกลงยินยอมให้ผู้ให้บริการ คิดเบี้ยปรับเป็นเงินจำนวน 5 เท่าของเงินมัดจำดังกล่าว
               </div>
               <div className="text-justify mt-1 text-[#0047BA] indent-8">
                  ผู้ให้บริการ ขอสงวนสิทธิ์ในการ หักเงินประกันการทำสัญญาไว้ <span className={WRAPPER_CLASS}>จำนวน<Field value={data.warrantyDeduction} width="100px" number="41" /></span> บาท ในกรณีที่ผู้รับบริการไม่สามารถส่งมอบเอกสารที่ใช้เพื่อการจดทะเบียนให้ครบถ้วนได้ในวันทำสัญญา โดยผู้ให้บริการจะเก็บเงินรักษาเงินประกันการทำสัญญาดังกล่าวไว้จนกว่าผู้รับบริการจะส่งมอบเอกสารที่ใช้เพื่อการจดทะเบียนให้ครบถ้วน
               </div>
            </div>

            {/* Clause 6 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;6.</span>ในกรณีที่ผู้รับบริการได้ส่งมอบทรัพย์สินให้กับผู้จะซื้อ และผู้จะซื้อได้รับมอบทรัพย์สินจากผู้รับบริการในสภาพเรียบร้อยตรงตามวัตถุประสงค์ของผู้จะซื้อ และผู้จะซื้อได้ชำระราคาทรัพย์สินให้กับผู้รับบริการแล้ว ให้ถือว่ากรรมสิทธิ์ในทรัพย์สินได้โอนไปยังผู้จะซื้อเรียบร้อยแล้วนับแต่วันที่ได้ตกลงทำสัญญานี้ และให้ถือว่าผู้ให้บริการเป็นผู้ชี้ช่องหรือจัดหาเป็นธุระให้ผู้รับบริการได้เข้าทำสัญญาซื้อขายทรัพย์สินกับผู้จะซื้อแล้ว โดยให้ถือว่าสัญญาซื้อขายทรัพย์สินดังกล่าวเป็นผลงานของผู้ให้บริการ และมีผลบังคับใช้ได้ตามกฎหมาย
            </div>

            {/* Clause 7 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;7.</span>ผู้รับบริการตกลงว่า จะชำระค่าบำเหน็จเพื่อเป็นการตอบแทนให้แก่ผู้ให้บริการ ในกรณีที่ผู้ให้บริการได้ทำการชี้ช่องหรือจัดหาผู้จะซื้อทรัพย์สินดังกล่าวให้กับผู้รับบริการ และต้องชำระค่าบำเหน็จแก่ผู้ให้บริการในกรณีที่ขายได้ดังนี้
               <div className="pl-8 flex flex-col mt-1 space-y-1">
                  <div className="flex items-center">
                     <Checkbox checked={data.commissionType === '3%'} number="42" /> 3% ของราคาที่ขายได้
                  </div>
                  <div className="flex items-center">
                     <Checkbox checked={data.commissionType === 'excess'} number="43" /> เงินส่วนต่างของราคาซื้อขายทรัพย์สิน
                  </div>
               </div>
            </div>

            {/* Clause 8 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;8.</span>ผู้รับบริการตกลงว่า จะเป็นผู้รับผิดชอบทั้งหมดต่อค่าใช้จ่ายที่เกิดขึ้น ก่อนวันที่ได้ตกลงทำสัญญาฉบับนี้ เช่น ค่าภาษี ค่าอากร ค่าปรับ ค่าธรรมเนียม ค่าใช้จ่ายอื่นใดซึ่งกฎหมายบังคับให้ต้องชำระ เป็นต้น
            </div>

            {/* Clause 9 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;9.</span>หากทรัพย์สินดังกล่าวโอนกรรมสิทธิ์ไม่ได้ ผู้รับบริการต้องคืนเงินแก่ผู้จะซื้อเต็มจำนวนทันที หากพ้นกำหนดระยะเวลาในการคืนเงินแล้วผู้รับบริการไม่สามารถคืนเงิน ให้แก่ผู้ให้บริการได้ผู้รับบริการตกลงชำระดอกเบี้ยผิดนัดในอัตราร้อยละ 15 ต่อปี
            </div>

            {/* Clause 10 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;10.</span>หากทรัพย์สินดังกล่าวไม่สามารถดำเนินการจดทะเบียนเพื่อเปลี่ยนแปลงกรรมสิทธิ์ต่อกรมขนส่งทางบกได้ หรือ ในกรณีที่ผู้ให้บริการได้ดำเนินการตรวจสอบเพิ่มเติมภายหลัง แล้วปรากฏว่ามีกรณีใดกรณีหนึ่งดังต่อไปนี้
               <ul className="list-disc pl-12 mt-1 space-y-1">
                  <li>ทรัพย์สินนั้นเคยได้รับความเสียหายจากการประสบอุบัติเหตุอย่างหนัก หรือเป็นทรัพย์สินที่หมดสภาพการใช้งานแล้วนำมาจดทะเบียนใหม่</li>
                  <li>ทรัพย์สินนั้นเคยได้รับความเสียหายจากอุทกภัย หรือได้รับความเสียหายจากอัคคีภัย ทุกกรณี</li>
                  <li>ทรัพย์สินนั้นมีการปรับเลขไมล์ หรือลบเลขไมล์ ให้คลาดเคลื่อนไปจากเลขไมล์ที่ใช้งานจริง หรือเมื่อตรวจสอบแล้วพบว่าเลขไมล์ไม่สอดคล้องกับสภาพรถ</li>
                  <li>ทรัพย์สินนั้นมีการดัดแปลงสภาพในส่วนที่เป็นโครงสร้างในส่วนที่เป็นสาระสำคัญ โดยการดัดแปลงสภาพนั้นทำให้มีการเปลี่ยนแปลงไปจากเดิมอย่างเห็นได้ชัด</li>
                  <li>ทรัพย์สินนั้นเป็นทรัพย์สินที่นำเข้าโดยมีการจดทะเบียนตามใบรับรองการนำเข้า (แบบ 32.) หรือมีการนำเข้าแบบจดประกอบโดยการนำอะไหล่มาประกอบเป็นตัวทรัพย์สินและนำไปจดทะเบียน</li>
                  <li>ทรัพย์สินที่มีสภาพไม่สมบูรณ์ ไม่พร้อมใช้งานหรือไม่สามารถใช้งานได้ตามปกติ</li>
                  <li>ทรัพย์สินที่มีการสวมสิทธิ์เล่มทะเบียน ทรัพย์สินหลุดจำนำ ทรัพย์สินที่ผิดกฎหมายทุกกรณี</li>
               </ul>
               <div className="mt-1 indent-8">
                  ผู้รับบริการตกลงคืนเงินทั้งหมดให้แก่ผู้ให้บริการเต็มจำนวนทันที เพื่อส่งมอบคืนให้แก่ผู้จะซื้อต่อไป
               </div>
            </div>

            {/* Clause 11 */}
            <div className="mb-2 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;11.</span>การซื้อขายทรัพย์สินในสัญญานี้ให้ถือว่าผู้จะซื้อและผู้รับบริการทำสัญญาต่อกันโดยตรง โดยมีตัวแทนผู้รับบริการ เป็นตัวแทนหรือคนกลาง ในการดำเนินการแทนและอำนวยความสะดวกให้แก่ผู้จะซื้อและผู้รับบริการเท่านั้น โดยตัวแทนผู้รับบริการจะไม่รับผิดชอบความเสียหายใดๆที่เกิดขึ้นภายหลังจากกระบวนการซื้อขาย
            </div>

            {/* Page 2 Number & Footer */}
            <FooterBars />
            <div className="absolute bottom-[34px] right-8 text-xs text-black">หน้า 2/3</div>
            <div className="absolute bottom-[34px] left-0 right-0 text-[10px] text-black w-full">
               <div className="border-t border-black pt-1 w-[80%] mx-auto text-center">
                  111 อาคาร A ชั้น 5 ห้องเลขที่ 504 ถนนประดิษฐ์มนูธรรม แขวงลาดพร้าว เขตลาดพร้าว จังหวัดกรุงเทพมหานคร 10230<br />
                  111 Building A, 5th Floor Room 504 Pradit Manutham Rd, Lat Phrao Subdistrict Lat Phrao District, Bangkok 10230
               </div>
            </div>
         </div>

         {/* Page 3 */}
         <div className="bg-white px-[15mm] py-[6.7mm] w-[210mm] h-[297mm] mx-auto text-[12.5px] leading-[1.35] relative shadow-xl print:shadow-none print:w-[210mm] print:h-[297mm] overflow-hidden box-border">
            <Header />

            {/* Clause 12 */}
            <div className="mb-3 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;12.</span>ผู้รับบริการยินยอมให้ตัวแทนผู้รับบริการ ดำเนินการจัดเก็บ รวบรวม เก็บรักษา ใช้ หรือเปิดเผยข้อมูลส่วนบุคคล เพื่อใช้ประโยชน์ในการดำเนินกิจการของตัวแทนผู้รับบริการ และให้ปฏิบัติตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล โดยตัวแทนผู้รับบริการจะเก็บรักษาข้อมูลดังกล่าว ไว้เป็นความลับ
            </div>

            {/* Clause 13 */}
            <div className="mb-3 text-justify">
               <span className="font-bold pl-8 mr-2">ข้อ&nbsp;13.</span>ผู้รับบริการตกลงใช้ข้อมูลที่อยู่ดังต่อไปนี้ ในการประสานงานติดต่อ หรือจัดส่งเอกสารใด ๆ และการบอกกล่าว ทวงถาม หรือส่งเอกสารใด ๆ อันพึงมีไปยังคู่สัญญาอีกฝ่ายหนึ่ง ตามภูมิลำเนาที่ปรากฏในสัญญานี้ ให้ถือว่า เป็นการส่งโดยชอบ และคู่สัญญาอีกฝ่ายได้ทราบแล้วใน วันที่คำบอกกล่าว หรือเอกสารนั้น ๆ พึงไปถึงตามปกติ
               <div className="pl-8 mt-2 space-y-2">
                  <div className="flex flex-wrap items-baseline gap-2">
                     <div className="inline-flex items-baseline gap-2"><span>ที่อยู่</span><Field value={data.recipientAddress} width="150px" center={false} /></div>
                     <div className="inline-flex items-baseline gap-2"><span>หมู่</span><Field value={data.recipientMoo} width="50px" number="9" /></div>
                     <div className="inline-flex items-baseline gap-2"><span>ซอย</span><Field value={data.recipientSoi} width="120px" number="10" /></div>
                     <div className="inline-flex items-baseline gap-2"><span>ถนน</span><Field value={data.recipientRoad} width="150px" number="11" /></div>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                     <div className="inline-flex items-baseline gap-2"><span>ตำบล</span><Field value={data.recipientDistrict} width="150px" center={false} /></div>
                     <div className="inline-flex items-baseline gap-2"><span>อำเภอ</span><Field value={data.recipientAmphoe} width="150px" center={false} /></div>
                     <div className="inline-flex items-baseline gap-2"><span>จังหวัด</span><Field value={data.recipientProvince} width="150px" center={false} /></div>
                  </div>
                  <div className="flex flex-wrap items-baseline gap-2">
                     <div className="inline-flex items-baseline gap-2"><span>รหัสไปรษณีย์</span><Field value={data.recipientZipcode} width="100px" number="15" /></div>
                     <div className="inline-flex items-baseline gap-2"><span>เบอร์โทร</span><Field value={data.recipientPhone} width="150px" /></div>
                     <div className="inline-flex items-baseline gap-2"><span>อีเมล์</span><Field value={data.recipientEmail} width="200px" center={false} number="17" /></div>
                  </div>
               </div>
            </div>

            {/* Clause 14 */}
            <div className="mb-3 text-justify">
               <div className="font-bold mb-1 pl-8"><span className="mr-2">ข้อ&nbsp;14.</span><span>ข้อตกลงอื่น ดังนี้</span></div>
               <div className="indent-8">
                  การซื้อขายดังกล่าว เป็นการซื้อขายรถยนต์ที่ผ่านการใช้งานแล้ว เป็นการซื้อขายตามสภาพ และในวันทำสัญญาฉบับนี้ผู้จะซื้อได้ตรวจสอบสภาพรถยนต์และพึงพอใจในสภาพรถยนต์ดังกล่าวแล้ว
               </div>
            </div>

            {/* Clause 15 */}
            <div className="mb-4 text-justify">
               <div className="font-bold mb-1 pl-8"><span className="mr-2">ข้อ&nbsp;15.</span><span>การขายพร้อมทรัพย์สินอื่น และ ประกันภัย</span></div>
               <div className="indent-8">
                  หากรถยนต์ดังกล่าวมีการทำประกันภัยรถยนต์ภาคสมัครใจ <span className="inline-flex items-baseline gap-2 whitespace-nowrap">ผู้รับบริการประสงค์<span className="inline-block w-8 border-b border-black"></span></span> <span className="inline-flex items-baseline gap-2 whitespace-nowrap">ยกเลิกกรมธรรม์<span className="inline-block w-8 border-b border-black"></span></span> โอนสิทธิ์ความเป็นเจ้าของให้แก่ผู้จะซื้อ
               </div>
            </div>

            <div className="mb-8 text-justify">
               สัญญานี้ทำขึ้นเป็นสองฉบับ มีข้อความถูกต้องตรงกัน คู่สัญญาทั้งสองฝ่ายได้อ่านและเข้าใจข้อความในสัญญานี้โดยตลอดแล้ว เห็นว่าถูกต้องตามเจตนา จึงได้ลงลายมือชื่อไว้เป็นสำคัญต่อหน้าพยาน
            </div>

            {/* Signatures */}
            <div className="flex justify-between px-8 mb-4">
               <div className="flex flex-col items-center">
                  <div className="border-b border-black w-48 mb-2"></div>
                  <div className="inline-flex items-baseline gap-2"><span>(</span><Field value={data.recipientName} width="180px" center={true} /><span>)</span></div>
                  <div>ผู้รับบริการ</div>
               </div>
               <div className="flex flex-col items-center">
                  <div className="border-b border-black w-48 mb-2"></div>
                  <div className="inline-flex items-baseline gap-2"><span>(</span><Field value={data.providerAuthPerson} width="180px" center={true} /><span>)</span></div>
                  <div>ผู้ให้บริการ</div>
               </div>
            </div>
            <div className="flex justify-between px-8">
               <div className="text-center">
                  <div className="mb-8">
                     ลงชื่อ........................................................พยาน
                  </div>
                  <div>
                     (........................................................)
                  </div>
               </div>
               <div className="text-center">
                  <div className="mb-8">
                     ลงชื่อ........................................................พยาน
                  </div>
                  <div>
                     (........................................................)
                  </div>
               </div>
            </div>

            {/* Footer Info */}
            <div className="flex justify-between mt-8 text-sm">
               <div className="flex gap-2">
                  <span>ที่ปรึกษาการขาย:</span>
                  <Field value={data.salesPerson} width="150px" number="48" />
               </div>
               <div className="flex gap-2">
                  <span>รหัสพนักงาน:</span>
                  <Field value={data.salesId} width="100px" number="49" />
               </div>
            </div>

            {/* Page 3 Number & Footer */}
            <FooterBars />
            <div className="absolute bottom-[34px] right-8 text-xs text-black">หน้า 3/3</div>
            <div className="absolute bottom-[34px] left-0 right-0 text-[10px] text-black w-full">
               <div className="border-t border-black pt-1 w-[80%] mx-auto text-center">
                  111 อาคาร A ชั้น 5 ห้องเลขที่ 504 ถนนประดิษฐ์มนูธรรม แขวงลาดพร้าว เขตลาดพร้าว จังหวัดกรุงเทพมหานคร 10230<br />
                  111 Building A, 5th Floor Room 504 Pradit Manutham Rd, Lat Phrao Subdistrict Lat Phrao District, Bangkok 10230
               </div>
            </div>
         </div>
      </div>
   );
});
ContractPreview.displayName = 'ContractPreview';
