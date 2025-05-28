import TicketForm from "@/components/TicketForm";

export default function Vstupenky() {
  return (
    <div className="pt-20 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Vstupenky na Průmyslový Summit 2025</h1>
          <p className="text-gray-600 mb-8 text-center">
            Zajistěte si svou vstupenku na největší průmyslovou událost roku. Vyberte si z několika typů vstupenek podle vašich preferencí.
          </p>
          
          <TicketForm />
          
          <div className="mt-12 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Informace o vstupenkách</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Vstupenky jsou platné po celou dobu konání summitu (1. - 3. října 2025)</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Po dokončení platby obdržíte vstupenku na váš e-mail</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>V případě dotazů nás kontaktujte na info@prumyslovy-summit.cz</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
