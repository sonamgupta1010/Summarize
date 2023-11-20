import React from 'react';
import Button from '../component/Button';
import Summarize from './Summarize';
import '../assets/tailwind.css';

interface HeaderProps {
    action: string;
    onActionChange: (action: string) => void;
    header: string;
}

const Header: React.FC<HeaderProps> = ({ action, onActionChange, header }) => {
    return (
        <>
            <div className="sticky top-0 z-50" style={{ backgroundColor: 'black', color: 'white', padding: '13px 5px', cursor: 'grabbing', fontWeight: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Summarize />
                    <p className="m-0 ml-1 text-base">{header}</p>
                </div>
            </div>
            <div className="sticky top-0 flex items-center justify-between border-gray-200 bg-[#f4f4f4] pr-4 shadow-md dark:border-b dark:bg-[#333440] dark:shadow-none" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <Button className={action === 'Summary' ? 'highlightButtonStyle' : 'buttonStyle'} text="Summary" onClick={() => onActionChange('Summary')} />
                    <Button className={action === 'Facts' ? 'highlightButtonStyle' : 'buttonStyle'} text="Facts" onClick={() => onActionChange('Facts')} />
                </div>
            </div>
        </>
    );
};

export default Header;
