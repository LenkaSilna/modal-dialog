export const theme = {
  colors: {
    primary: '#0070f3',
    secondary: '#666666',
    background: '#ffffff',
    border: '#eeeeee',
    text: '#333333',
    textSecondary: '#666666',
    overlay: 'rgba(0, 0, 0, 0.5)',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  typography: {
    fontFamily: {
      base: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
  },
  shadow: {
    modal: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  section: {
    gap: '24px',
  },
  input: {
    height: '40px',
    padding: '8px 12px',
    transition: 'all 0.2s ease-in-out',
    borderRadius: '4px',
    fontSize: '14px',
    textArea: {
      minHeight: '100px',
      resize: 'vertical',
    },
  },
  controls: {
    gap: '24px',
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    select: {
      minWidth: '120px',
      height: '40px',
      padding: '8px 12px',
    },
    buttonContainer: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
    },
    group: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },
  },
};
