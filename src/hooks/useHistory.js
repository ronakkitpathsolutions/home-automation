import { useNavigate } from 'react-router';

const useHistory = () => {
    const history = useNavigate();
    return history;
};

export default useHistory;
