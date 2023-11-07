import React, { useState } from "react";

export interface TextAreaProps {
	onChange: (e: any) => void;
	label: string;
	isInsideLabel?: boolean;
	error?: boolean;
	placeholder?: string;
	rowsNumber?: number;
}

export const ResizableTextarea = ({
	onChange,
	label,
	isInsideLabel,
	error,
	placeholder,
	rowsNumber,
}: TextAreaProps) => {
	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	return (
		<div style={{ position: "relative" }}>
			<div
				style={{ fontSize: "16px", marginBottom: "8px" }}
				// className={isInsideLabel ? classes.label : ""}
			>
				{label}
			</div>
			<textarea
				style={{
					width: "100%",
					outline: isFocused
						? "1px solid #AD00FF"
						: `1px solid transparent`,
					borderRadius: "8px",
					resize: "vertical",
					backgroundColor: "#E6E6E6",
					padding: isInsideLabel ? "28px 12px 8px" : "8px 0 8px 8px",
					outline: error ? "1px solid red" : "none",
				}}
				aria-label={label}
				onChange={onChange}
				rows={rowsNumber ? rowsNumber : 5}
				onBlur={() => {
					onChange;
					setIsFocused(false);
				}}
				onFocus={handleFocus}
				placeholder={placeholder}
			/>
		</div>
	);
};
