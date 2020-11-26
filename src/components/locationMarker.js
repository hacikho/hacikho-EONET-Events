import locationIcon from '@iconify/icons-mdi/fire-alert';
import { Icon } from '@iconify/react';

export const locationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default locationMarker