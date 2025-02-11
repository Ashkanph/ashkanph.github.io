import './plus-icon.scss';

const PlusIcon = props => {
    const { className, open } = props;

    return (
        <span className={`plus-icon ${className} ${open ? 'open' : ''}`} />
    )
}

export default PlusIcon;
