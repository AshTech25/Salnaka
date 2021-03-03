import { title } from './DefaultStyles';

const productStyle = {
    section: {
        padding: '70px 30px 0px 0px',
        textAlign: 'center',
    },
    title: {
        ...title,
        marginBottom: '1rem',
        marginTop: '30px',
        minHeight: '32px',
        textDecoration: 'none',
    },
    description: {
        color: '#999',
        fontSize: '1rem'
    },
};

export default productStyle;
