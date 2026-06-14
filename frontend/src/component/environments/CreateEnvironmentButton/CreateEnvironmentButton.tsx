import ResponsiveButton from 'component/common/ResponsiveButton/ResponsiveButton';
import Add from '@mui/icons-material/Add';
import { ADMIN } from 'component/providers/AccessProvider/permissions';
import { useNavigate } from 'react-router';
import useUiConfig from 'hooks/api/getters/useUiConfig/useUiConfig';

export const CreateEnvironmentButton = () => {
    const navigate = useNavigate();
    const { uiConfig } = useUiConfig();
    const disabled = uiConfig.isOss ?? true;

    return (
        <ResponsiveButton
            onClick={() => navigate('/environments/create')}
            maxWidth='700px'
            Icon={Add}
            permission={ADMIN}
            disabled={disabled}
        >
            New environment
        </ResponsiveButton>
    );
};
