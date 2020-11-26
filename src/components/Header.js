import locationIcon from '@iconify/icons-mdi/fire-alert';
import { Icon } from '@iconify/react';
import React from 'react';

export const Header = () => {
    return (
        <header className="header">
            <h1><Icon icon={locationIcon} />Wildfire Tracker(Powered by NASA)</h1>
        </header>
    )
}

export default Header;