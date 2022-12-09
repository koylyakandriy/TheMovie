import { FC } from 'react';

const UnknownText: FC<{ text: string }> = ({ text }) => <span>{text || 'Unknown'}</span>;

export default UnknownText;
