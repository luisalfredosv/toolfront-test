import React from "react";

export const Main = ({ children }) => {
	return (
		<>
			<div>
				<div>
					<div className='justify-content-center'>{children}</div>
				</div>
			</div>
		</>
	);
};
