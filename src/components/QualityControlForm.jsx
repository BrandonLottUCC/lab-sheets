import { useState } from "react";

function QualityControlForm() {
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [otherType, setOtherType] = useState("");
  const [isMultiLot, setIsMultiLot] = useState(false);
  const [shippingLotWeight, setShippingLotWeight] = useState("");
  const [hasCriticalElements, setHasCriticalElements] = useState(null);

  const handleClear = () => {
    setIsOtherSelected(false);
    setOtherType("");
  };

  const handleMultiLotClear = () => {
    setIsMultiLot(false);
    setShippingLotWeight("");
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6">
      {/* Header */}
      <div className="border-2 border-black p-3 sm:p-4 mb-6">
        <div className="flex justify-between items-center relative">
          <img src="/ue.ico" alt="UE Logo" className="h-8 sm:h-12" />
          <h1 className="absolute left-1/2 transform -translate-x-1/2 text-lg sm:text-xl font-bold text-black whitespace-nowrap">
            Supplier Lot Quality Control Lab Sample
          </h1>
          <img src="/ue.ico" alt="UCC Logo" className="h-8 sm:h-12" />
        </div>
      </div>

      {/* Form Fields */}
      <div className="space-y-6">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
            {/* Supplier Name/Lot section */}
            <div className="grid grid-cols-4 gap-4">
              <div className="col-span-3">
                <label className="block text-sm font-bold mb-2 text-black">
                  Supplier Name:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
              <div className="col-span-1">
                <label className="block text-sm font-bold mb-2 text-black">
                  Supplier Lot:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
            </div>

            {/* Type section with consistent height */}
            <div className="relative h-[52px]">
              <label className="block text-sm font-bold mb-2 text-black">
                Type: {isOtherSelected ? "Other" : ""}
              </label>
              {isOtherSelected && (
                <span
                  onClick={handleClear}
                  className="absolute top-[10px] right-0 text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                >
                  Clear Selection
                </span>
              )}
              {isOtherSelected ? (
                <input
                  type="text"
                  value={otherType}
                  onChange={(e) => setOtherType(e.target.value)}
                  placeholder="Specify type"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              ) : (
                <div className="flex flex-wrap gap-4">
                  <label className="inline-flex items-center text-black">
                    <input
                      type="checkbox"
                      className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                      before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                    />
                    <span className="ml-2">Ceramic</span>
                  </label>
                  <label className="inline-flex items-center text-black">
                    <input
                      type="checkbox"
                      className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                      before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                    />
                    <span className="ml-2">DPF</span>
                  </label>
                  <label className="inline-flex items-center text-black">
                    <input
                      type="checkbox"
                      className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                      before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                    />
                    <span className="ml-2">Foil</span>
                  </label>
                  <label className="inline-flex items-center text-black">
                    <input
                      type="checkbox"
                      className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                      before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                    />
                    <span className="ml-2">AFT</span>
                  </label>
                  <label className="inline-flex items-center text-black">
                    <input
                      type="checkbox"
                      onChange={(e) => setIsOtherSelected(e.target.checked)}
                      className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                      before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              )}
            </div>

            {/* Spacer div to push down Gross Weight section */}
            <div className="h-[1px]"></div>

            {/* Gross Weight section */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Gross Wet Weight:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter weight"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Gross Dry Weight:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter weight"
                />
              </div>
            </div>

            {/* Moisture Content section */}
            <div>
              <label className="block text-sm font-bold mb-2 text-black">
                Moisture Content:
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                placeholder="Enter moisture content"
              />
            </div>

            {/* New Tare and Dry Net Weight row */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Tare:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter tare"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Dry Net Weight:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  placeholder="Enter weight"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Date In:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Date Out:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Time In:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 text-black">
                  Time Out:
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Sample ID:
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-black">
                    Supplier Net Weight:
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="col-span-3">
                  <label className="block text-sm font-bold mb-2 text-black">
                    Refiner:
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  />
                </div>
                <div className="col-span-1">
                  <label className="block text-sm font-bold mb-2 text-black">
                    Refiner Lot:
                  </label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  />
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-bold mb-2 text-black">
                  Multi Lot: {isMultiLot ? "Yes" : ""}
                </label>
                {isMultiLot && (
                  <span
                    onClick={handleMultiLotClear}
                    className="absolute top-[10px] right-0 text-sm text-blue-600 hover:text-blue-800 cursor-pointer"
                  >
                    Clear Selection
                  </span>
                )}
                {isMultiLot ? (
                  <input
                    type="text"
                    value={shippingLotWeight}
                    onChange={(e) => setShippingLotWeight(e.target.value)}
                    placeholder="Enter Shipping Lot Net Weight"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-black bg-white"
                  />
                ) : (
                  <div className="flex justify-center gap-8">
                    <label className="inline-flex items-center text-black">
                      <input
                        type="checkbox"
                        checked={isMultiLot}
                        onChange={(e) => setIsMultiLot(e.target.checked)}
                        className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                        before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                      />
                      <span className="ml-2">Yes</span>
                    </label>
                    <label className="inline-flex items-center text-black">
                      <input
                        type="checkbox"
                        checked={!isMultiLot}
                        onChange={(e) => setIsMultiLot(!e.target.checked)}
                        className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                        before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                      />
                      <span className="ml-2">No</span>
                    </label>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tables */}
        <div className="space-y-6">
          {/* XRF Results Table */}
          <div className="mb-4">
            <table className="w-full border-2 border-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-black p-2 text-black">
                    XRF Results
                  </th>
                  <th className="border border-black p-2 text-black">1</th>
                  <th className="border border-black p-2 text-black">2</th>
                  <th className="border border-black p-2 text-black">3</th>
                  <th className="border border-black p-2 text-black">4</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 text-black">
                    Platinum
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-black">
                    Palladium
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-black">
                    Rhodium
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Modified Critical Elements section */}
          <div className="relative">
            <label className="block text-sm font-bold mb-2 text-black">
              Critical elements found? (ppm readings will be affected):
            </label>
            <div className="flex justify-center gap-8">
              <label className="inline-flex items-center text-black">
                <input
                  type="checkbox"
                  checked={hasCriticalElements === true}
                  onChange={() => setHasCriticalElements(true)}
                  className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                />
                <span className="ml-2">Yes</span>
              </label>
              <label className="inline-flex items-center text-black">
                <input
                  type="checkbox"
                  checked={hasCriticalElements === false}
                  onChange={() => setHasCriticalElements(false)}
                  className="mr-1 appearance-none w-4 h-4 bg-white border border-black checked:bg-black checked:border-black relative
                before:content-['✓'] before:absolute before:text-white before:text-xs before:top-0 before:left-0.5 before:opacity-0 checked:before:opacity-100"
                />
                <span className="ml-2">No</span>
              </label>
            </div>
          </div>

          {/* Bottom Weight Table */}
          <div>
            <table className="w-full border-2 border-black">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-black p-2 text-black">
                    Supplier
                  </th>
                  <th className="border border-black p-2 text-black">
                    Sample ID
                  </th>
                  <th className="border border-black p-2 text-black">Gross</th>
                  <th className="border border-black p-2 text-black">Tare</th>
                  <th className="border border-black p-2 text-black">Net</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-black p-2 text-black">TEST</td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                </tr>
                <tr>
                  <td className="border border-black p-2 text-black">WET</td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                  <td className="border border-black p-2">
                    <input type="text" className="w-full text-black bg-white" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QualityControlForm;
