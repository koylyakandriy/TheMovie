import React from 'react';

import MUIComponents from '../materialUIComponents';

const PageTitle = ({ title }: { title: string }) => (
	<MUIComponents.Typography marginBottom={2} variant='h3'>
		{title}
	</MUIComponents.Typography>
);

export default PageTitle;
