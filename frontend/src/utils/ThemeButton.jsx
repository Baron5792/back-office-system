// src/components/ThemeToggle.jsx
// import 'bootstrap-icons/font/bootstrap-icons.css';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="btn btn-normal text-info">
            {theme === 'light' ? (
                <i className="bi bi-moon"></i>
            ) : (
                <i className="bi bi-sun"></i>
            )}
        </button>
    );
};

export default ThemeToggle;
