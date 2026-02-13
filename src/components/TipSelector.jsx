export default function TipSelector({ selectedTip, onTipChange }) {
    const tipOptions = [
        { value: 10, label: "10%" },
        { value: 20, label: "20%" },
        { value: 50, label: "50%" },
    ];

    return (
        <div className="mt-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Propina:</h3>
            <div className="space-y-2">
                {tipOptions.map((option) => (
                    <label
                        key={option.value}
                        className="flex items-center cursor-pointer"
                    >
                        <input
                            type="radio"
                            name="tip"
                            value={option.value}
                            checked={selectedTip === option.value}
                            onChange={(e) => onTipChange(Number(e.target.value))}
                            className="w-4 h-4 text-primary focus:ring-primary"
                        />
                        <span className="ml-2 text-gray-700">{option.label}</span>
                    </label>
                ))}
            </div>
        </div>
    );
}
